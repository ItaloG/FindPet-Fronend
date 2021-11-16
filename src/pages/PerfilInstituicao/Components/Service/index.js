import { IconNotSelected, IconSelected, ServiceOff, ServiceOn } from "./styles";

function Service({ servico, handleDeleteServico, id }) {
  return (
    <>
      <ServiceOn>
        <p>Castração</p>
        <IconSelected />
      </ServiceOn>
      {/* <ServiceOff>
        <p>Vacinação</p>
        <IconNotSelected/>
      </ServiceOff> */}
    </>
  );
}

export default Service;

{
  /* <div id={id}>
      {servico.servico}
      <span onClick={handleDeleteServico}>&times;</span>
    </div> */
}
