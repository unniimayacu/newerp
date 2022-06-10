import "./App.css";
// import Header from './components/header/Header';
import {lazy,Suspense} from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import {ROUTES} from "./routes"
import AddNewCustomer from "pages/AddNewCustomer/AddNewCustomer";
import AddNewQuotation from "pages/AddNewQuotation/AddNewQuotation";


const Customers = lazy(()=> import ("./pages/customerslist/Customers") )

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
            <Route path={ROUTES.CUSTOMERS } element={<Customers/> }  />
            <Route path={ROUTES.ADDNEWCUSTOMER} element={<AddNewCustomer />} />
            <Route path={ROUTES.ADDNEWQUOTATION} element={<AddNewQuotation />} />
          </Routes>
        </Suspense>
      </BrowserRouter>


      


    </div>
  );
}

export default App;
