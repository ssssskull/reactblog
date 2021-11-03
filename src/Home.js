const Home = () => {
  const handleClick = () => {
    console.log("hallo");
  };

  const handleClickAgain = (name, e) => {
    console.log("Hello" + name, e.target);
  };

  return (
    <div className="text-3xl mb-6">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("Levi", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
