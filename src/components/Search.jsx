import { useContext, useEffect, useState } from "react";
import Selects from "./Selects";
import Proprties from "./Proprties";
import { StateContext } from "../context/StatesContext";

const Search = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { stateProps, data, setFilteredData } = useContext(StateContext);

  useEffect(() => {
    if (data && searchTerm !== "") {
      setFilteredData(
        data.filter((item) =>
          item.location
            .map((name) => name.name.toLowerCase())
            .includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  return (
    <div>
      <div className="filter bg-slate-200  py-4">
        <h1 className="text-3xl font-bold text-center flex items-center justify-center mb-8">
          Search Property By Filters{" "}
          <span onClick={() => setShowFilter(!showFilter)}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="ms-4 w-12 h-12"
            >
              <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z" />
            </svg>
          </span>
        </h1>
        <div className={`${showFilter ? "block" : "hidden"} transition`}>
          <div className="flex  items-center justify-around mb-8 gap-4 flex-wrap px-3">
            <Selects />
          </div>
          <input
            type="text"
            placeholder="Search By Location Ex:Plazzo Heights"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-96  text-xl text-gray-400 py-2 px-3 mx-auto rounded-lg outline-none"
          />
        </div>
      </div>
      <div className="col-span-6">
        <h2 className="text-3xl font-bold my-4">
          Properties For {stateProps.purpose}
        </h2>
      </div>
      <div className="grid grid-cols-6 gap-10 ">
        <Proprties />
      </div>
    </div>
  );
};

export default Search;
