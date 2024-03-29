// import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Property from "./components/Property";
import Search from "./components/Search";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:externalID" element={<Property />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/purpose=for-rent" element={<Search />} />
        <Route path="/search/purpose=for-sale" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
