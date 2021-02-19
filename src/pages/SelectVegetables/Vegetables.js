import ReturnButton from '../../shared/ReturnButton'
import VegetableSelector from "./VegetableSelector";

export default function Vegetables() {
  return (
    <>
      <ReturnButton to="/flower-beds/create/form" />
      <VegetableSelector />
    </>
  );
}
