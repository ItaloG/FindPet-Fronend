import SearchResult from "../SearchResult";
import { Box } from "./styles";
import DefaultProfilePhoto from "../../../assets/default_profile_photo.jpg";
import { useState, useEffect } from "react";
import { api } from "../../../services/api";

function SearchBox(letters) {
  const [instituicao, setInstituicao] = useState([]);
  const typedLetters = letters.letters;

  useEffect(() => {
    const loadInstituicao = async () => {
      try {
        const response = await api.get(`/instituicoes`);

        setInstituicao(response.data);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    };

    loadInstituicao();
  }, []);

  const LoadNames = (letters, apiLength, apiRef) => {
    let suggestions = [];

    for (let i = 0; i < apiLength; i++) {
      let apiRefLetters = apiRef[i].substr(0, letters.length);
      //   console.log(apiRef[6].substr(0, letters.length ))

      if (letters.includes(apiRefLetters)) {
        suggestions.push(apiRef[i]);
        if (suggestions.length === 4) {
          break;
        }
      }
    }

    return suggestions;
  };

  const Capitalize = (string) => {
    let strSplit = string.split(" ");
    let strUpper = "";
    let arrCapitalized = [];
    let strCapitalized = "";

    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].split("").length > 2) {
            strUpper = strSplit[i].charAt(0).toUpperCase() + strSplit[i].substr(1, strSplit.length - 1);
            arrCapitalized.push(strUpper); 
        }
        else {
            arrCapitalized.push(strSplit[i]); 
        }
    }

    //  && strSplit[i] !== strSplit[0]

    strCapitalized = arrCapitalized.join(" ");

    return strCapitalized;
  };

  return (
    <Box>
      {/* {instituicao ? LoadNames(
        typedLetters,
        instituicao.institutions.length,
        instituicao.institutions.map((is) => is.nome.toLowerCase())
      ).map((name) => (
        <SearchResult
          fotoPerfil={DefaultProfilePhoto}
          nome={name}
          tipoInst="ONG"
        />
      )) : ""} */}

      {console.log(Capitalize('ana maria braga nunes da silva'))}

      {console.log(
        LoadNames(
          "O",
          instituicao.institutions.length,
          instituicao.institutions.map((is) => is.nome.toUpperCase())
        ).map((name) => name.toUpperCase())
      )}
      {console.log(instituicao)}

      {/* <SearchResult
        fotoPerfil={DefaultProfilePhoto}
        nome="Inst tal"
        tipoInst="SHOP"
      />
      <SearchResult
        fotoPerfil={DefaultProfilePhoto}
        nome="Inst tal"
        tipoInst="VET"
      />
      <SearchResult
        fotoPerfil={DefaultProfilePhoto}
        nome="Inst tal"
        tipoInst="CANIL"
      /> */}
    </Box>
  );
}

export default SearchBox;
