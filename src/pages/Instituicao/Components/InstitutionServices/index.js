import { IconSelected, Option } from "./styles";

function InstitutionServices({ title }) {
  
  return (
    <div>
      <Option>
        <p>{title}</p>
        <IconSelected />
      </Option>
    </div>
  );
}

export default InstitutionServices;
