const Loading = () => {
  const boxesLoader = Array.from(Array(10).keys());
  return (
    <>
      <div></div>

      {boxesLoader.map((box, index) => (
        <div
          key={index}
          className="col-span-2 bg-gray-200 h-60 animate-pulse rounded-lg"
        ></div>
      ))}
    </>
  );
};

export default Loading;
