const loader = () => {
  const boxesLoader = Array.from(Array.keys(10));

  return (
    <div>
      {boxesLoader.map((box, index) => (
        <div
          key={index}
          className="col-span-6 md:col-span-3 xl:col-span-2 h-72 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default loader;
