import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const likes = 50;
  const portfolio = "https://github.com/ssssskull/";
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="h-80 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 items-center justify-center flex uppercase">
        <h1 className="text-white text-3xl ">Your run of the mill blog</h1>
      </div>
      <div className="p-5">
        <Home />
        <p>Liked {likes} times by</p>
        <a href={portfolio}>Link to my portfolio</a>
      </div>
    </div>
  );
}

export default App;
