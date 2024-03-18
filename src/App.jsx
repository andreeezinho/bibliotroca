import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Books from "./components/pages/Books";
import MyBooks from "./components/pages/MyBooks";
import AboutUs from "./components/pages/AboutUs";

import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

function App() {

  
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/mybooks" element={<MyBooks />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Container>

      <Footer><h1>Footer</h1></Footer>

    </Router>
  );
}

export default App;
