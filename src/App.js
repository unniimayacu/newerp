import "./App.css";
// import Header from './components/header/Header';
import {lazy,Suspense} from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import {ROUTES} from "./routes"

const Customers = lazy(()=> import ("./pages/customerslist/Customers") )

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
            <Route path={ROUTES.CUSTOMERS } element={<Customers/> }  />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
