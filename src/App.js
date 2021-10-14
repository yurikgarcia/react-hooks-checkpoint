import React, {useState, useEffect} from "react";
import './App.css';
import {Card,CardContent} from '@material-ui/core';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Products from "./Products.js";


function App() {

  const [productList, setProductList] = useState([]);
  const [currentProduct, setCurrentProduct] = useState("0");
  const [currentName, setCurrentName] =useState('');
  const [currentDescription, setDescription] = useState('');
  const [currentCategory, setCurrentCategory] =useState('');
  const [currentPrice, setCurrentPrice]=useState('');


  
  useEffect(() =>{
    async function callProductList(){
      let res =await fetch("http://52.26.193.201:3000/products/list");
      let json = await res.json();
      setProductList(json)
    };
    callProductList();
  }, []);
 
  useEffect(() =>{
    async function callProductID(){
      let res =await fetch(`http://52.26.193.201:3000/products/${currentProduct}`);
      let json = await res.json();
      setCurrentName(json.name);
      setDescription(json.description);
      setCurrentCategory(json.category);
      setCurrentPrice(json.default_price);
    };
    callProductID();
  }, [currentProduct]);


  return (
    <div className="App">
      <div className="app-title">
        <h1>Ambercrombie & Hooks</h1>
        <Navbar bg="light" expand="lg">
  <div>
    <Navbar.Brand href="#home">Ambercrombie & Hooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Specials</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Brands</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Styles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Upcoming</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Become A Brand Embassador</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </div>
</Navbar>
      </div>





      <div className="Body">
        <Card className="card" id="0">
          <CardContent className="cardcontent">
            {productList[0]?.name}<br />
            <Products currentProduct={currentProduct} selector = {1}
              name={currentName} description={currentDescription} category={currentCategory} price={currentPrice}
            />
            <button onClick={()=> setCurrentProduct(1)}>The Deets</button><br />
          </CardContent>
        </Card>

        


        <Card className="card" id="1">
            <CardContent className="cardcontent">
              {productList[1]?.name}<br />
              <Products currentProduct={currentProduct} selector = {2}
                name={currentName} description={currentDescription} category={currentCategory} price={currentPrice}
              />
              <button onClick={(e)=> setCurrentProduct(2)}>The Deets</button>
            </CardContent>
        </Card>


        <Card className="card" id="2">
            <CardContent className="cardcontent">
              {productList[2]?.name}<br />
              <Products currentProduct={currentProduct} selector = {3}
                name={currentName} description={currentDescription} category={currentCategory} price={currentPrice}
              />
              <button onClick={(e)=> setCurrentProduct(3)}>The Deets</button>
            </CardContent>
        </Card>

        <React.Fragment>
        <div className="col-md-2 sidebar">
              <div className="sidebar_link centered link mt-4 mb-4">+ Jackets</div>
              <div className="sidebar_link centered link mt-4 mb-4">+ Accessories</div>
              <div className="sidebar_link centered link mt-4 mb-4">+ Pants</div>
		</div>
        </React.Fragment>




      </div>
    </div>
  );
}
export default App;