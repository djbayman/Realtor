import Proprties from "./Proprties";
import mainImg from "../img/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../context/StatesContext";

const Main = () => {
  const { setStateProps } = useContext(StateContext);
  return (
    <div className="my-20 grid grid-cols-6 gap-10">
      <div className="col-span-6 md:col-span-4 md:col-start-2 box  md:flex gap-6">
        <img src={mainImg} alt="" className="sm:w-full md:w-1/2 h-72 rounded" />
        <div className="info ">
          <span className="text-lg text-gray-500 capitalize">Rent a Home</span>
          <h2 className="text-3xl font-bold capitalize my-4 max-w-56">
            Rental homes for Everyone
          </h2>
          <p className="text-xl text-gray-500 mb-6">
            Explore from Apartments, builder floors, villas and more
          </p>
          <Link to={"/search/purpose=for-rent"}>
            <button
              className="py-2 px-3 bg-blue-100 font-semibold text-xl rounded-md hover:bg-blue-200"
              onClick={() =>
                setStateProps((prevState) => ({
                  ...prevState,
                  purpose: "for-rent",
                }))
              }
            >
              Explore Renting
            </button>
          </Link>
        </div>
      </div>

      <Proprties />
    </div>
  );
};

export default Main;
