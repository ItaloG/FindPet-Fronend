import { IconSelected, Option } from "./styles";
import { useState } from "react";

function Donation({ title }) {
  const [servicesToggle, setServicesToggle] = useState({
    doacao: false,
    banhoeTosa: false,
    veterinaria: false,
    hotel: false,
    adestracao: false,
    cosmeticos: false,
    remedios: false,
    racao: false,
    castracao: false,
    vacinacao: false,
  });

  const handleToggleCastracao = () => {
    if (!servicesToggle.castracao) {
      setServicesToggle({ castracao: true });
    } else if (servicesToggle.castracao) {
      setServicesToggle({ castracao: false });
    }
  };

  let color;

  servicesToggle.castracao === true ? (color = "#A55EEA") : (color = "#c9c9c9");

  return (
    <div onClick={handleToggleCastracao}>
      <Option color={color}>
        <p>{title}</p>
        <IconSelected />
      </Option>
    </div>
  );
}

export default Donation;
