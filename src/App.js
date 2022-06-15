import "./App.css";
// import Header from './components/header/Header';
import {lazy,Suspense} from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import {ROUTES} from "./routes"
import AddNewCustomer from "pages/AddNewCustomer/AddNewCustomer";
import AddNewQuotation from "pages/AddNewQuotation/AddNewQuotation";
import Category from "pages/Category/Category";
import Layout from "Layout/Layout";
import Slidebar from "components/Slidebar/Slidebar";


const Customers = lazy(()=> import ("./pages/customerslist/Customers") )
const Products = lazy(()=> import ("./pages/productlist/Product") )
const Addsupplier= lazy(()=> import ("./pages/addnewsupplier/Supplier") )
const Viewcustomer = lazy(()=>import ("./pages/viewcustomer/Viewcustomer") )
const Viewsupplier =lazy(()=>import ("./pages/viewsupplier/Viewsupplier") )

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
            <Route path={ROUTES.CUSTOMERS} element={<Customers />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={ROUTES.ADDNEWCUSTOMER} element={<AddNewCustomer />} />
            <Route path={ROUTES.ADDSUPPLIER} element={<Addsupplier />} />
            <Route path={ROUTES.VIEWCUSTOMER} element={<Viewcustomer />} />
            <Route path={ROUTES.VIEWSUPPLIER} element={<Viewsupplier />} />
            <Route
              path={ROUTES.ADDNEWQUOTATION}
              element={<AddNewQuotation />}
            />
            <Route path={ROUTES.CATEGORY} element={<Category />} />
            <Route path={ROUTES.LAYOUT} element={<Layout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Slidebar />
        <Routes>
          <Route path="/cat"  element={<Category />} />
          <Route path="/addnewcustomer1" element={<AddNewCustomer/>} />
          <Route path="/addnewquotation1" element={<AddNewQuotation />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
