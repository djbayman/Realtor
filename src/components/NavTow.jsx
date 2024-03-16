import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../context/StatesContext";

const NavTow = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { setStateProps } = useContext(StateContext);

  return (
    <>
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4 border-b-2 border-blue-200">
        <Link to="/">
          <h1 className="text-4xl text-blue-500 font-extrabold">Realtor</h1>
        </Link>

        <div className="relative" id="navbar-hamburger">
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <ul
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute  flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}
            style={{
              top: "28px",
              right: "57px",
              width: "120px",
              textAlign: "center",
            }}
          >
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3 text-white bg-blue-500 rounded dark:bg-blue-600"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/search"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                to={"/search/purpose=for-sale"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() =>
                  setStateProps((prevState) => ({
                    ...prevState,
                    purpose: "for-sale",
                  }))
                }
              >
                Buy
              </Link>
            </li>
            <li>
              <Link
                to={"/search/purpose=for-rent"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() =>
                  setStateProps((prevState) => ({
                    ...prevState,
                    purpose: "for-rent",
                  }))
                }
              >
                Rent
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavTow;
