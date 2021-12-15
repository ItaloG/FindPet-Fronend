import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "../../GlobalStyles";
import { ContainerSearch, Section } from "./styles";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { api } from "../../services/api";
import { useHistory } from "react-router";

const libraries = ["places"];
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const mapContainerStyle = {
  with: "100vw",
  height: "100vh",
};
const center = {
  lat: -23.5592114,
  lng: -46.9075753,
};

function Encontrar() {
  let history = useHistory();
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCZ5xn5Mbs2OrZOsbsBlZ-KAhOQSw_xKRY", // AQUI VOCÊ COLOCA SUA CHAVE DE API
    libraries,
  });

  const [makers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const loadMarkers = async () => {
      try {
        const response = await api.get("/cordenadas");

        setMarkers(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    loadMarkers();
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Erro ao fazer loading";
  if (!isLoaded) return "Carregando mapa";

  return (
    <Container>
      <Section>
        <Search panTo={panTo} />

        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          options={options}
          center={center}
          onLoad={onMapLoad}
        >
          {makers.map((m, index) => (
            <Marker
              key={index}
              position={{ lat: parseFloat(m.lat), lng: parseFloat(m.lng) }}
              onClick={() => {
                setSelected(m);
              }}
            />
          ))}

          {selected ? (
            <InfoWindow
              onCloseClick={() => {
                setSelected(null);
              }}
              position={{ lat: parseFloat(selected.lat), lng: parseFloat(selected.lng) }}
            >
              <div>
                <h2 onClick={() => history.push(`instituicao/${selected.id}`)}>{selected.nome}</h2>
                <p>{selected.AddressInstitutions[0].logradouro + ", " + selected.AddressInstitutions[0].numero}</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </Section>
    </Container>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => -23.5592114,
        lng: () => -46.9075753,
      },
      radius: 100 * 1000,
    },
  });

  return (
    <ContainerSearch>
      <label>Pesquisar</label>
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();

          try {
            const resultado = await getGeocode({ address });
            const { lat, lng } = await getLatLng(resultado[0]);
            panTo({ lat, lng });
          } catch (error) {
            console.log("erro");
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Endereço"
        />
        <ComboboxPopover>
          <ComboboxList
            style={{
              border: "solid 1px #000",
              backgroundColor: "#FFF",
              padding: "8px",
              listStyle: "none",
            }}
          >
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption
                  value={description}
                  style={{
                    marginTop: "5px",
                    borderTop: "solid 1px #00000080",
                    paddingTop: "3px",
                    cursor: "pointer",
                  }}
                />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </ContainerSearch>
  );
}

export default Encontrar;
