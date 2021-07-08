import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
// import { NavbarBrand } from
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="danger">
        <div className="container">
          <NavbarBrand href="/">Shyamdeo Interiors</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
