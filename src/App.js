import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import Footer from "./Footer";
import { Content } from "./Content";
import { Users } from "./users/Users";
import { UserReg } from "./users/UserReg";
import { UsersAdd } from "./users/UsersAdd";
import { StudentAdd } from "./users/StudentAdd";
import { EmployeeAdd } from "./users/EmployeeAdd";
import { Route, Routes } from "react-router-dom";
import { EmployeeList } from "./employee/EmployeeList";
import { AboutEmployee } from "./employee/AboutEmployee";
import { ContactEmployee } from "./employee/ContactEmployee";
import { Navbar } from "./Navbar";
import { ContactManager } from "./employee/ContactManager";
import { ContactCEO } from "./employee/ContactCEO";
import { ContactDevelopers } from "./employee/ContactDevelopers";
import { AboutCompany } from "./employee/AboutCompany";
import { ApiDemo1 } from "./api/ApiDemo1";
import { ApiDemo2 } from "./api/ApiDemo2";
import { ApiDemo3 } from "./api/ApiDemo3";
import { ApiDemoPost } from "./api/ApiDemoPost";
import { AddUSers } from "./api/AddUSers";
import { ApiDemo6 } from "./api/ApiDemo6";
import { Count } from "./Count";
import { Weatherapp } from "./api/Weatherapp";
import { UserDetail } from "./api/UserDetail";
import { EditUserDetail } from "./api/EditUserDetail";
import { Students } from "./student/Students";
import { Products } from "./product/Products";
import { ProductContext } from "./product/ProductContext";
import { useState } from "react";
import { ProductCart } from "./product/ProductCart";
import { LoginUser } from "./users/LoginUser";
import ProtectedRoutes from "./hooks/ProtectedRoutes";
import { MuiDemo1 } from "./Material/MuiDemo1";
import { MuiDemo2 } from "./Material/MuiDemo2";
import { MuiTable } from "./Material/MuiTable";
import { MuiTable2 } from "./Material/MuiTable2";
import { MaterialDashBoard } from "./Material/MaterialDashBoard";

function App() {
  var title = "ROYAL TECHNOSOFT";
  var estd = 2006;

  var detail = {
    city: "Ahmedabad",
    area: "CG ROAD",
  };

  var [sharedData, setsharedData] = useState();

  return (
    <div className="App">
      {/* <Header t = {title}  estd = {estd} detail ={detail}/> */}
      {/* <Header title = {title} /> */}
      {/* <Content detail ={detail} /> */}
      {/* <Users/> */}
      {/* <UsersAdd/> */}
      {/* <StudentAdd/> */}
      {/* <Footer /> */}
      {/* <EmployeeAdd/> */}
      <ProductContext.Provider value={{ sharedData, setsharedData }}>
        <Navbar />
        
        <Routes>
          {/* //protected routes start */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/emplist" element={<EmployeeList />}></Route>
            <Route path="/aboutemp" element={<AboutEmployee />}></Route>
            <Route path="/contactemp" element={<ContactEmployee />}></Route>
            <Route
              path="/contactemp/manager"
              element={<ContactManager />}
            ></Route>
          </Route>
          {/* //protected routes end */}
          <Route path="/contactemp/ceo" element={<ContactCEO />}></Route>
          <Route path="/contactemp/dev" element={<ContactDevelopers />}></Route>
          <Route path="/aboutcompany/:id" element={<AboutCompany />}></Route>
          <Route path="/count" element={<Count />}></Route>
          <Route path="/weatherapp" element={<Weatherapp />}></Route>
          <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
          <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
          <Route path="/apidemo3" element={<ApiDemo3 />}></Route>
          <Route path="/apidemo4" element={<ApiDemoPost />}></Route>
          <Route path="/apidemo5" element={<AddUSers />}></Route>
          <Route path="/apidemo6" element={<ApiDemo6 />}></Route>
          <Route path="/user/detail/:id" element={<UserDetail />}></Route>
          <Route path="/user/edit/:id" element={<EditUserDetail />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<ProductCart />}></Route>
          <Route path="/login" element={<LoginUser />}></Route>
          <Route path = "/muidemo1" element ={<MuiTable2/>}></Route>
          <Route path ="/muidashboard" element={<MaterialDashBoard/>}></Route>
        </Routes>
      </ProductContext.Provider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
