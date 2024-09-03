// import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Property from "./components/Property";
import Search from "./components/Search";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="container mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:externalID" element={<Property />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/purpose=for-rent" element={<Search />} />
        <Route path="/search/purpose=for-sale" element={<Search />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
