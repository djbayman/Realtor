import { useContext, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { StateContext } from "../context/StatesContext";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const catMenu = useRef(null);
  const { pathname } = location;
  const { setStateProps } = useContext(StateContext);

  const handleOnClick = (prop) => {
    setStateProps((prevState) => ({
      ...prevState,
      purpose: prop,
    }));
  };
  const closeOpenMenus = (e) => {
    if (showMenu && !catMenu.current?.contains(e.target)) {
      setShowMenu(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  return (
    <>
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4 border-b-2 border-blue-200">
        <Link to="/">
          <h1 className="text-4xl text-blue-500 font-extrabold">Realtor</h1>
        </Link>

        <div className="relative" id="navbar-hamburger" ref={catMenu}>
          <button
            id="nav-humb"
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center  w-8 h-8 p-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 border-2 border-gray-200"
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
              top: "20px",
              right: "30px",
              width: "120px",
              textAlign: "center",
            }}
          >
            <li>
              <Link
                to={"/"}
                className={`${
                  pathname === "/"
                    ? "dark:bg-blue-600 bg-blue-500 text-white "
                    : ""
                }block py-2 px-3  rounded hover:bg-blue-500  hover:text-white transition-colors`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/search"}
                className={`${
                  pathname === "/search"
                    ? "dark:bg-blue-600 bg-blue-500 text-white "
                    : ""
                }block py-2 px-3 rounded hover:bg-blue-500  hover:text-white transition-colors`}
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                to={"/search/purpose=for-sale"}
                className={`${
                  pathname === "/search/purpose=for-sale"
                    ? "dark:bg-blue-600 bg-blue-500 text-white "
                    : ""
                }block py-2 px-3  rounded hover:bg-blue-500  hover:text-white transition-colors`}
                onClick={() => handleOnClick("for-sale")}
              >
                Buy
              </Link>
            </li>
            <li>
              <Link
                to={"/search/purpose=for-rent"}
                className={`${
                  pathname === "/search/purpose=for-rent"
                    ? "dark:bg-blue-600 bg-blue-500 text-white "
                    : ""
                }block py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors`}
                onClick={() => {
                  handleOnClick("for-rent");
                }}
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

export default Nav;
