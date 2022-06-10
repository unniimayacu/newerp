import "./App.css";
// import Header from './components/header/Header';
import {lazy,Suspense} from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import {ROUTES} from "./routes"
import AddNewCustomer from "pages/AddNewCustomer/AddNewCustomer";


const Customers = lazy(()=> import ("./pages/customerslist/Customers") )
const Products = lazy(()=> import ("./pages/productlist/Product") )

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
            <Route path={ROUTES.CUSTOMERS } element={<Customers/> }  />
            <Route path={ROUTES.PRODUCTS} element={<Products/>}  />
            <Route path={ROUTES.ADDNEWCUSTOMER} element={<AddNewCustomer />} />
          </Routes>
        </Suspense>
      </BrowserRouter>


      


    </div>
  );
}

export default App;
