import "./App.css";
// import Header from './components/header/Header';
import {lazy,Suspense} from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import {ROUTES} from "./routes"
// import AddNewCustomer from "pages/AddNewCustomer/AddNewCustomer";
// import AddNewQuotation from "pages/AddNewQuotation/AddNewQuotation";
// import Category from "pages/Category/Category";
import Layout from "Layout/Layout";
// import SectorMasterView from "pages/HRMS/Sector Master/SectorMasterView";
import SectorMasterCreate from "pages/HRMS/Sector Master/SectorMasterCreate";
import ViewCategory from "pages/ViewCategory/ViewCategory";
import UnitCategory from "pages/Unit Category/UnitCategory";
import UnitCategoryView from "pages/Unit Category/UnitCategoryView";


const Customers = lazy(()=> import ("./pages/customerslist/Customers") )
const Products = lazy(()=> import ("./pages/productlist/Product") )
const Addsupplier= lazy(()=> import ("./pages/addnewsupplier/Supplier") )
const Viewcustomer = lazy(()=>import ("./pages/viewcustomer/Viewcustomer") )
const Viewsupplier =lazy(()=>import ("./pages/viewsupplier/Viewsupplier") )
const Supplier = lazy(()=>import ("./pages/supplierlist/Supplier"))
const Addproduct = lazy(()=>import ("./pages/addnewproduct/Addproduct") )
const Viewproduct = lazy(()=>import ("./pages/viewproduct/Viewproduct"))
const AddNewCustomer = lazy(()=>import('./pages/AddNewCustomer/AddNewCustomer'))
const AddNewQuotation = lazy(()=>import('./pages/AddNewQuotation/AddNewQuotation'))
const Category = lazy(()=>import ('./pages/Category/Category'))
const Dashboard = lazy(() =>import ('./pages/HRMS/Dashboard/Dashboard'))
const DesignationView = lazy(()=>import('./pages/HRMS/Designation/DesignationView'))
const Designation = lazy(()=>import('./pages/HRMS/Designation/Designation'))
const DesignationCreate = lazy(()=>import('./pages/HRMS/Designation/DesignationCreate'))
const EmployeeCategoryView =lazy(()=>import('./pages/HRMS/EmployeeCategory/EmployeeCategoryView'))
const EmployeeCategoryCreate= lazy(()=>import('./pages/HRMS/EmployeeCategory/EmployeeCategoryCreate'))
const EmployeeCategory = lazy(()=>import('./pages/HRMS/EmployeeCategory/EmployeeCategory'))
const DepartmentMasterView = lazy (()=>import('./pages/HRMS/DepartmentMaster/DepartmentMasterView'))
const DepartmentMasterCreate =lazy(()=>import('./pages/HRMS/DepartmentMaster/DepartmentMasterCreate'))
const DepartmentMaster = lazy(()=>import('./pages/HRMS/DepartmentMaster/DepartmentMaster'))

const Employeelist = lazy(()=> import ("./pages/HRMS/Employeemaster/Employeelist") )
const Createemployee = lazy(()=> import ("./pages/HRMS/Employeemaster/Createemployee") )
const Employeedetails = lazy(()=> import ("./pages/HRMS/Employeemaster/Employeedetails") )
const OverTimeMasterView =lazy(()=>import('./pages/HRMS/OverTime Master/OverTimeMasterView'))
const OverTimeMasterCreate =lazy(()=>import('./pages/HRMS/OverTime Master/OverTimeMasterCreate'))
const OverTimeMaster =lazy(()=>import('./pages/HRMS/OverTime Master/OverTimeMaster'))
const SectorMasterView =lazy(()=>import("./pages/HRMS/Sector Master/SectorMasterView"))
const SectorMaster =lazy(()=>import('./pages/HRMS/Sector Master/SectorMaster'))
// const SectorMasterCreate =lazy(()=>import('./pages/HRMS/Sector Master/SectorMasterCreate'))
const LeaveTypeMasterView =lazy(()=>import('./pages/HRMS/LeaveTypeMaster/LeaveTypeMasterView'))
const LeaveTypeMasterCreate =lazy(()=>import('./pages/HRMS/LeaveTypeMaster/LeaveTypeMasterCreate'))
const LeaveTypeMaster =lazy(()=>import('./pages/HRMS/LeaveTypeMaster/LeaveTypeMaster'))
const Empcategoryleaveslist = lazy(()=>import('./pages/HRMS/EmployeeCategoryLeaves/Empcategoryleaveslist'))
const Createleavetype = lazy(() =>import('./pages/HRMS/EmployeeCategoryLeaves/Createleavetype') )

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<p>loading...</p>}>
          <Routes>
             <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.CUSTOMERS} element={<Customers />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={ROUTES.ADDNEWCUSTOMER} element={<AddNewCustomer />} />
            <Route path={ROUTES.ADDSUPPLIER} element={<Addsupplier />} />
            <Route path={ROUTES.VIEWCUSTOMER} element={<Viewcustomer />} />
            <Route path={ROUTES.VIEWSUPPLIER} element={<Viewsupplier />} />
            <Route path={ROUTES.SUPPLIERS } element={<Supplier/>} />
            <Route path={ROUTES.ADDNEWQUOTATION} element={<AddNewQuotation />}/>
            <Route path={ROUTES.CATEGORY} element={<Category />} />
            <Route path={ROUTES.LAYOUT} element={<Layout />} />
            <Route path={ROUTES.ADDPRODUCT } element={<Addproduct/>}/>
           
            <Route path={ROUTES.DESIGNATIONVIEW} element={<DesignationView />} />
            <Route path={ROUTES.DESIGNATION} element={<Designation />} />
            <Route path={ROUTES.VIEWPRODUCT} element={<Viewproduct/> } />
            <Route path={ROUTES.CREATEDESIGNATION} element={<DesignationCreate />} />
            <Route path={ROUTES.EMPLOYEELIST} element={<Employeelist/>}/>
            <Route path={ROUTES.CREATEEMPLOYEE} element={<Createemployee/>} />
            <Route path={ROUTES.EMPLOYEEDETAILS} element={<Employeedetails/>}/>
            <Route path={ROUTES.EMPLOYEECATEGORYVIEW} element={<EmployeeCategoryView />} />
            <Route path={ROUTES.EMPLOYEECATEGORYCREATE} element={<EmployeeCategoryCreate />} />
            <Route path={ROUTES.EMPLOYEECATEGORY} element={<EmployeeCategory />} />
            <Route path={ROUTES.DEPARTMENTMASTERVIEW} element={<DepartmentMasterView />} />
            <Route path={ROUTES.DEPARTMENTMASTERCREATE} element={<DepartmentMasterCreate />} />
            <Route path={ROUTES.DEPARTMENTMASTER} element={<DepartmentMaster />} />
            <Route path={ROUTES.OVERTIMEMASTERVIEW} element={<OverTimeMasterView />} />
            <Route path={ROUTES.OVERTIMEMASTERCREATE} element={<OverTimeMasterCreate />} />
            <Route path={ROUTES.OVERTIMEMASTER} element={<OverTimeMaster />} />
            <Route path={ROUTES.SECTORMASTERVIEW} element={<SectorMasterView />} />
            <Route path={ROUTES.SECTORMASTERCREATE} element={<SectorMasterCreate />} />
            <Route path={ROUTES.SECTORMASTER} element={<SectorMaster />} />
            <Route path={ROUTES.LEAVETYPEMASTERVIEW} element={<LeaveTypeMasterView />} />
            <Route path={ROUTES.LEAVETYPEMASTERCREATE} element={<LeaveTypeMasterCreate />} />
            <Route path={ROUTES.LEAVETYPEMASTER} element={<LeaveTypeMaster />} />
            <Route path={ROUTES.VIEWCATEGORY} element={<ViewCategory />} />
            <Route path={ROUTES.UNITCATEGORY} element={<UnitCategory />} />
            <Route path={ROUTES.UNITCATEGORYVIEW} element={<UnitCategoryView />} />
            <Route path={ROUTES.EMPCATEGORYLEAVELIST} element={<Empcategoryleaveslist/>} />
            <Route path={ROUTES.CREATELEAVETYPE}  element={<Createleavetype/>} />
           
          </Routes>
        </Suspense>
      </BrowserRouter>

    
    </div>
  );
}

export default App;


// import LeaveTypeMasterView from "pages/HRMS/LeaveTypeMaster/LeaveTypeMasterView";
// import LeaveTypeMasterCreate from "pages/HRMS/LeaveTypeMaster/LeaveTypeMasterCreate";
// import LeaveTypeMaster from "pages/HRMS/LeaveTypeMaster/LeaveTypeMaster";
// import SectorMaster from "pages/HRMS/Sector Master/SectorMaster";
// import OverTimeMaster from "pages/HRMS/OverTime Master/OverTimeMaster";
// import OverTimeMasterCreate from "pages/HRMS/OverTime Master/OverTimeMasterCreate";
// import OverTimeMasterView from "./pages/HRMS/OverTime Master/OverTimeMasterView";
// import Slidebar from "components/Slidebar/Slidebar";
// import Dashboard from "pages/HRMS/Dashboard/Dashboard";
// import DesignationView from "pages/HRMS/Designation/DesignationView";
// import Designation from "pages/HRMS/Designation/Designation";
// import DesignationCreate from "pages/HRMS/Designation/DesignationCreate";
// import EmployeeCategoryView from "pages/HRMS/EmployeeCategory/EmployeeCategoryView";
// import EmployeeCategoryCreate from "pages/HRMS/EmployeeCategory/EmployeeCategoryCreate";
// import EmployeeCategory from "pages/HRMS/EmployeeCategory/EmployeeCategory";
// import DepartmentMasterView from "pages/HRMS/DepartmentMaster/DepartmentMasterView";
// import DepartmentMasterCreate from "pages/HRMS/DepartmentMaster/DepartmentMasterCreate";
// import DepartmentMaster from "pages/HRMS/DepartmentMaster/DepartmentMaster";