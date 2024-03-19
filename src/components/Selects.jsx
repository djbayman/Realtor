import { useContext } from "react";
import { StateContext } from "../context/StatesContext";

const Selects = () => {
  const { setStateProps } = useContext(StateContext);

  const handleOnChange = (e, name) => {
    setStateProps((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  return (
    <>
      <select
        className="w-48 grow h-12 text-center hover:outline-none rounded-md font-bold text-xl cursor-pointer shadow-md"
        onChange={(e) => handleOnChange(e, "purpose")}
      >
        <option className="text-xl font-bold py-4 " value="">
          Purpos
        </option>
        <option value="for-rent">Rent</option>
        <option value="for-sale">Buy</option>
      </select>
      <select
        className="w-48 grow h-12 text-center hover:outline-none rounded-md font-bold text-xl cursor-pointer shadow-md	"
        onChange={(e) => handleOnChange(e, "priceMax")}
      >
        <option>Max Price (AED)</option>
        <option value="80000">80000</option>
        <option value="100000">100000</option>
      </select>
      <select
        className="w-48 grow h-12 text-center hover:outline-none rounded-md font-bold text-xl cursor-pointer shadow-md"
        onChange={(e) => handleOnChange(e, "priceMin")}
      >
        <option>Min Price (AED)</option>
        <option value="10000">10000</option>
        <option value="50000">50000</option>
      </select>
      <select
        className="w-48 grow h-12 text-center hover:outline-none rounded-md font-bold text-xl  cursor-pointer shadow-md"
        onChange={(e) => handleOnChange(e, "roomsMax")}
      >
        <option>Rooms</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <select
        className="w-48 grow h-12 text-center hover:outline-none rounded-md font-bold text-xl  cursor-pointer shadow-md"
        onChange={(e) => handleOnChange(e, "bathsMax")}
      >
        <option>Baths</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </>
  );
};

export default Selects;
