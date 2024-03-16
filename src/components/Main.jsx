import Proprties from "./Proprties";

const Main = () => {
  return (
    <div className="my-20 grid grid-cols-6 gap-10">
      <div className="col-span-6 md:col-span-4 md:col-start-2 box  md:flex gap-6">
        <img
          src="../../public/assets/pexels-binyamin-mellish-106399.jpg"
          alt=""
          className="sm:w-full md:w-1/2 h-72"
        />
        <div className="info ">
          <span className="text-lg text-gray-500 capitalize">Rent a Home</span>
          <h2 className="text-3xl font-bold capitalize my-4 max-w-56">
            Rental homes for Everyone
          </h2>
          <p className="text-xl text-gray-500 mb-6">
            Lorem ipsum dolor sit amet.
          </p>

          <button className="py-1 px-2 bg-gray-300 font-semibold text-xl">
            Explore Renting
          </button>
        </div>
      </div>

      <Proprties />
    </div>
  );
};

export default Main;
