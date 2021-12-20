import { IconNotSelected, IconSelected, Option, OptionOff } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../../../services/api";
import { useParams } from "react-router";

function InstitutionServices({ serviceId, title }) {
  const [InstituicaoServicos, setInstituicaoServicos] = useState([]);
  const { instituicaoId } = useParams();

  useEffect(() => {
    
    const loadInstituicao = async () => {
      try {
        const response = await api.get(`/instituicoes/${instituicaoId}`);
        setInstituicaoServicos(response.data.Services);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    };

    loadInstituicao();

  }, [instituicaoId]);

  const handleDeleteService = async (idServico) => {
    try {
      await api.delete(`/servicos/${idServico}`);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleSubmitService = async (idServico) => {
    try {
      const response = await api.post("/servicos", { servicos: idServico });

      setInstituicaoServicos([...InstituicaoServicos, response.data]);
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };
  const [servicesToggle, setServicesToggle] = useState(false);

  const handleToggle = (idServico) => {
    let list = [];
    InstituicaoServicos
      ? (list = InstituicaoServicos.map((s) => s.id))
      : (list = "");

    if (!servicesToggle) {
      if (list.includes(idServico)) {
        handleDeleteService(serviceId);
        handleSubmitService(serviceId);
        setServicesToggle(true);
        list = [];
      } else {
        handleSubmitService(serviceId);
        setServicesToggle(true);
        list = [];
      }
    } else if (servicesToggle) {
      handleDeleteService(serviceId);
      setServicesToggle(false);
    }
  };


  return (
    <div onClick={() => handleToggle(serviceId)}>
      {servicesToggle ? (
        <Option>
          <p>{title}</p>
          <IconSelected />
        </Option>
      ) : (
        <OptionOff>
          <p>{title}</p>
          <IconNotSelected />
        </OptionOff>
      )}
    </div>
  );
}

export default InstitutionServices;
