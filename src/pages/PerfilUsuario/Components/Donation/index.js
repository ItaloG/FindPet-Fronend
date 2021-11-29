import { IconNotSelected, IconSelected, Option, OptionOff, ServiceOff, ServiceOn } from "./styles";
import { useState } from "react";

const servicesMockup = [
  {id: 1, nome: 'Castração', status: false},
  {id: 2, nome: 'Abrigo', status: false},
  {id: 3, nome: 'Adestração', status: false},
  {id: 4, nome: 'Vacinação', status: false}
];

function Donation({ serviceId, title }) {
  console.log('sid: ' + serviceId)
  // let castracao = false;
  // let abrigo=false;
  // let adestracao=false;
  // let vacinacao=false;
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


    // const handleServiceToggle = (serviceName, serviceId) => {
    //   if (!servicesToggle[serviceId]) {
    //     setServicesToggle({serviceName: true})
    //     console.log('toggle off: ' + servicesToggle[serviceId])
    //   }
    //   else if (servicesToggle[serviceId] === false) {
    //     setServicesToggle[serviceId](true)
    //     console.log('toggle on: ' + servicesToggle[serviceId])
    //   }
    // }

    const handleToggleCastracao = () => {
      if (!servicesToggle.castracao) {
        setServicesToggle({castracao: true})
        console.log('toggle on: ' + servicesToggle.castracao)
      }
      else if (servicesToggle.castracao) {
        setServicesToggle({castracao: false})
        console.log('toggle off: ' + servicesToggle.castracao)
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
      {console.log('stoggle: ')}
      {console.log(servicesToggle)}
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