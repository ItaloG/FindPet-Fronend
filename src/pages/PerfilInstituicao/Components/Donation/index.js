import { IconNotSelected, IconSelected, Option, OptionOff, ServiceOff, ServiceOn } from "./styles";
import { useState } from "react";

const servicesMockup = [
  {id: 1, nome: 'Castração', status: false},
  {id: 2, nome: 'Abrigo', status: false},
  {id: 3, nome: 'Adestração', status: false},
  {id: 4, nome: 'Vacinação', status: false}
];

function Donation({ serviceId, title }) {

    const [myColor, setMyColor] = useState("#A55EEA");
    const [serviceToggle, setServiceToggle] = useState(false);
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
        setServicesToggle({castracao: true})
    
      }
      else if (servicesToggle.castracao) {
        setServicesToggle({castracao: false})
     
      }
    }

    // const handleClick = () => {
    //   if (myColor === "#A55EEA") {
    //     setMyColor("#EB3B5A")
    //   }
    //   else if (myColor === "#EB3B5A") {
    //     setMyColor("#A55EEA")
    //   }
    // }

    let color;

    servicesToggle.castracao === true ? color = "#A55EEA" : color = "#c9c9c9";

  return (
    <div onClick={handleToggleCastracao}>
   
      <Option color={color}>
        {/* <button onClick={handleClick}>Clique</button> */}
        <p>{title}</p>
        <IconSelected />
      </Option>
      {/* <OptionOff>
        <p>Vacinação</p>
        <IconNotSelected/>
      </OptionOff> */}
    </div>
  );
}

export default Donation;