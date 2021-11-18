import { IconNotSelected, IconSelected, ServiceOff, ServiceOn } from "./styles";

function Service({ id, servico, selected, handler }) {
  return (
    <div id={id}  onClick={() => handler()}>
      {selected ? (
        <ServiceOn>
          <p>{servico}</p>
          <IconSelected />
        </ServiceOn>
      ) : (
        <ServiceOff>
          <p>{servico}</p>
          <IconNotSelected />
        </ServiceOff>
      )}
    </div>
  );
}

export default Service;

{
  /* <div id={id}>
      {servico.servico}
      <span onClick={handleDeleteServico}>&times;</span>
    </div> */
}
