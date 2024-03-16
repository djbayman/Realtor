import { useParams } from "react-router-dom";
import CustomSlider from "./Carousel";
import { useContext } from "react";
import { StateContext } from "../context/StatesContext";
import millify from "millify";

const Property = () => {
  const { externalID } = useParams();
  const { data } = useContext(StateContext);

  const specificProperty = data.filter(
    (item) => item?.externalID === externalID
  );

  console.log(specificProperty[0].price);
  return (
    <div>
      {/* <CustomSlider coverPhoto={specificProperty[0]?.coverPhoto.url}/>
       */}

      <img
        src={specificProperty[0]?.coverPhoto.url}
        alt=""
        className="w-full"
        style={{ height: "600px" }}
      />

      <div className="price flex items-center  my-5 text-2xl font-medium gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>

        <p className="ps-12 text-2xl font-bold">
          AED {specificProperty[0]?.price}/monthly
        </p>
        <img
          src={specificProperty[0]?.agency.logo.url}
          alt=""
          className="w-12 h-12 rounded-full ms-auto"
        />
      </div>
      <div className="room-details flex items-center gap-8 text-2xl font-medium mb-4">
        <p className="flex gap-8">
          {specificProperty[0]?.baths}
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            className="text-blue-400 text-4xl"
          >
            <path d="M96 77.3C96 70 101.9 64 109.3 64c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9c-3.6 9-5.6 18.9-5.6 29.2 0 19.9 7.2 38 19.2 52-5.3 9.2-4 21.1 3.8 29 9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5l-14.9-14.9C149.4 8.1 129.7 0 109.3 0 66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h256v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-40.4c19.6-17.6 32-43.1 32-71.6v-16H32z" />
          </svg>{" "}
          |
        </p>
        <p className="flex gap-8">
          {specificProperty[0]?.rooms}
          <svg
            viewBox="0 0 640 512"
            fill="currentColor"
            height="1em"
            width="1em"
            className="text-blue-400 text-4xl"
          >
            <path d="M32 32c17.7 0 32 14.3 32 32v256h224V160c0-17.7 14.3-32 32-32h224c53 0 96 43 96 96v224c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H64v32c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-17.7 14.3-32 32-32zm144 256c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" />
          </svg>
          |
        </p>
        <p className="flex gap-8">
          {millify(specificProperty[0]?.area)} sqft
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 text-blue-400 "
          >
            <path
              fillRule="evenodd"
              d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
              clipRule="evenodd"
            />
          </svg>
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold my-10">
          {specificProperty[0]?.title}
        </h1>
        {/* <p className="text-gray-400 text-xl leading-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iste
          modi, error earum incidunt sapiente voluptas sit nulla unde excepturi
          exercitationem, facere neque? Libero soluta unde maxime facilis
          quibusdam totam!
        </p> */}
        <div className="flex items-center justify-between gap-5 my-5">
          <p className="flex items-center text-xl w-1/2 justify-between">
            <span className="text-gray-400 text-xl">TYPE:</span>{" "}
            <span className="font-bold  text-xl">
              {specificProperty[0]?.type}
            </span>
          </p>
          <p className="flex items-center text-xl w-1/2 justify-between">
            <span className="text-gray-400 text-xl">PURPOSE:</span>{" "}
            <span className="font-bold  text-xl">
              {specificProperty[0]?.purpose}
            </span>
          </p>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold ">Facilties:</h2>
          <ul className="flex flex-wrap gap-4 my-4">
            {specificProperty[0]?.keywords.map((key, index) => (
              <li
                key={index}
                className="text-xl text-blue-400 bg-gray-200 font-bold py-2 px-4 w-fit rounded m-1"
              >
                {key}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Property;
