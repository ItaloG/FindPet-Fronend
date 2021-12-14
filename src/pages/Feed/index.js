import { useEffect, useState, useRef } from "react";
import { Body, ContainerCenter, FlexColumn } from "../../GlobalStyles";
import Card from "../../components/Card";
import Slider from "../../components/Slider";
import FotoPadrao from "../../assets/default_profile_photo.jpg";
import IconeOng from "../../assets/ong_icon.png";
import IconePetShop from "../../assets/petshop_icon.png";
import IconeVeterinario from "../../assets/veterinario_icon.png";
import BannerDefault from "../../assets/default_banner.png";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { getTypeUser, getUserId } from "../../services/security";

function Feed() {
  let history = useHistory();
  const [instituicoes, setInstituicoes] = useState([]);

  useEffect(() => {
    const loadInstituicoes = async () => {
      try {
        const response = await api.get("/instituicoes");

        setInstituicoes(response.data.institutions);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    loadInstituicoes();
  }, []);

  const handleIcon = (tipoInstituicao) => {
    if (tipoInstituicao === "ONG") {
      return IconeOng;
    } else if (tipoInstituicao === "Petshop" || tipoInstituicao === "Canil") {
      return IconePetShop;
    } else if (tipoInstituicao === "Veterinário") {
      return IconeVeterinario;
    }
  };

  {console.log(instituicoes)}

  const user = useRef(JSON.parse(localStorage.getItem("@user")));
  const tipoUsuario = getTypeUser();
  const id = getUserId();

  const calcularDistancia = (lat1, lng1, lat2, lng2) => {
    parseFloat(lat1);
    parseFloat(lng1);
    parseFloat(lat2);
    parseFloat(lng2);

    const pi = Math.PI;
    const lat1radianos = lat1 * pi / 180;
    const lng1radianos = lng1 * pi / 180;
    const lat2radianos = lat2 * pi / 180;
    const lng2radianos = lng2 * pi / 180;

    const distancia = (Math.acos(Math.cos(lat1radianos) * Math.cos(lng1radianos) * Math.cos(lat2radianos) * Math.cos(lng2radianos) + Math.cos(lat1radianos) * Math.sin(lng1radianos) * Math.cos(lat2radianos) * Math.sin(lng2radianos) + Math.sin(lat1radianos) * Math.sin(lat2radianos)) * 6371) * 1.15

    return (distancia.toFixed(2))
  }

  const ordenarInstituicoes = (a, b) => {
    return (a.distancia - b.distancia)
  }

  // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0
  // };
  
  // function getLatitude(pos) {
  //   var crd = pos.coords;
  //   const latitude = [];
  //   latitude.push(crd.latitude);
  // };

  // function getLongitude(pos) {
  //   var crd = pos.coords;
  //   return crd.longitude
  // };
  
  // function error(err) {
  //   console.warn('ERROR(' + err.code + '): ' + err.message);
  // };

  // console.log(navigator.geolocation.getCurrentPosition(getLatitude, error, options));

  const instituicoesMaisProximas = () => {
    const inst = instituicoes.map(i => i);

    for (let i = 0; i < inst.length; i++) {
      inst[i].distancia = calcularDistancia(instituicoes.map(i => i).filter((i) => i.id == id)[0].lat, instituicoes.map(i => i).filter((i) => i.id == id)[0].lng, inst[i].lat, inst[i].lng)

      // inst[i].distancia = 
      // navigator.geolocation.getCurrentPosition(position => {
      //   const { latitude, longitude } = position.coords;
      //   console.log(position.coords)
      //   calcularDistancia(position.coords.latitude, position.coords.longitude, inst[i].lat, inst[i].lng)
      // });

      // calcularDistancia(navigator.geolocation.getCurrentPosition(position => position.coords.latitude), -46.906069, inst[i].lat, inst[i].lng)
    }

    inst.sort(ordenarInstituicoes)
    
    return inst
  }

  return (
    <Body>
      <ContainerCenter>
        <FlexColumn>
          <Slider />
          {instituicoesMaisProximas().map((i, index) => i.distancia == 0 ? (<></>) : (
            
            <Card
              key={index}
              foto={i.url_foto_perfil ? i.url_foto_perfil : FotoPadrao}
              nome_instituicao={i.nome}
              icone={handleIcon(i.TypeInstitution.type_institution)}
              distancia={i.distancia}
              banner={i.url_foto_banner ? i.url_foto_banner : BannerDefault}
              handlerVer={() => history.push(`instituicao/${i.id}`)}
            //   handlerVer={() => console.log(i)}
            />
          ))}
        </FlexColumn>
      </ContainerCenter>
    </Body>
  );
}

export default Feed;
