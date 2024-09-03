import { Link } from "react-router-dom";
import { StateContext } from "../context/StatesContext";
// import { useAxios } from "../hooks/useAxios";

import { useContext, useEffect } from "react";
import millify from "millify";
import Loading from "./Loading";
import useAxios from "../hooks/useAxios";
import NoMatch from "./NoMatch";

const Proprties = () => {
  const { data, stateProps } = useContext(StateContext);

  const { fetchData, isLoading } = useAxios();

  useEffect(() => {
    fetchData(
      `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002,6020&purpose=${stateProps.purpose}&priceMin=${stateProps.priceMin}&priceMax=${stateProps.priceMax}&roomsMax=${stateProps.roomsMax}&bathsMax=${stateProps.bathsMax}`
    );
  }, [stateProps]);

  if (isLoading) return <Loading />;
  if (!data) return <NoMatch />;

  return (
    <>
      {data?.map((item) => (
        <div
          key={item?.id}
          className="box col-span-6 md:col-span-3 xl:col-span-2 rounded-lg hover:shadow-2xl transition-all p-2 hover:scale-95"
        >
          <Link to={`/property/${item?.externalID}`}>
            <img
              src={item?.coverPhoto?.url}
              className="w-full h-56 rounded-md"
              alt=""
            />
          </Link>

          <div className="info">
            <div className="price flex items-center justify-between mt-2 font-medium gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              <p className="font-bold">
                {item?.price} AED{" "}
                {stateProps?.purpose === "for-sale" ? "" : "/Monthly"}
              </p>
              <img
                src={item?.agency?.logo?.url}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="room-details flex items-center gap-3 font-medium mt-2">
              <p className="flex items-center text-blue-400 gap-4 border-e-2 border-blue-400 pe-3">
                {item?.rooms}{" "}
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-blue-400 "
                >
                  <path d="M96 77.3C96 70 101.9 64 109.3 64c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9c-3.6 9-5.6 18.9-5.6 29.2 0 19.9 7.2 38 19.2 52-5.3 9.2-4 21.1 3.8 29 9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5l-14.9-14.9C149.4 8.1 129.7 0 109.3 0 66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h256v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-40.4c19.6-17.6 32-43.1 32-71.6v-16H32z" />
                </svg>{" "}
              </p>
              <p className="flex items-center text-blue-400 gap-4 border-e-2 border-blue-400 pe-3">
                {item?.baths}{" "}
                <svg
                  viewBox="0 0 640 512"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-blue-400 "
                >
                  <path d="M32 32c17.7 0 32 14.3 32 32v256h224V160c0-17.7 14.3-32 32-32h224c53 0 96 43 96 96v224c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H64v32c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-17.7 14.3-32 32-32zm144 256c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" />
                </svg>
              </p>
              <p className="flex items-center text-blue-400 gap-4">
                {millify(item?.area)} sqft
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className=" text-blue-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
            <div className="more-info mt-2">
              <p className=" text-gray-600 font-semibold">
                {item?.title?.length > 40
                  ? item?.title.substring(0, 40) + "..."
                  : item?.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Proprties;
