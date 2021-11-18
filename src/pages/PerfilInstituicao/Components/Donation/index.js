import { IconNotSelected, IconSelected, Option, OptionOff, ServiceOff, ServiceOn } from "./styles";

function Donation({ type, title }) {
    let color;

    type === 1 ? color = "#A55EEA" : color = "#c9c9c9";
    type === 2 ? color = "#EB3B5A" : color = "#c9c9c9";

  return (
    <>
      <Option color={color}>
        <p>Castração</p>
        <IconSelected />
      </Option>
      {/* <OptionOff>
        <p>Vacinação</p>
        <IconNotSelected/>
      </OptionOff> */}
    </>
  );
}

export default Donation;