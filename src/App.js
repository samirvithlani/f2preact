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

function App() {
  var title = "ROYAL TECHNOSOFT"
  var estd = 2006
  
  var detail ={
    city:"Ahmedabad",
    area:"CG ROAD"
  }
  return (
    <div className="App">
      <Header t = {title}  estd = {estd} detail ={detail}/>
      {/* <Header title = {title} /> */}
      {/* <Content detail ={detail} /> */}
      {/* <Users/> */}
      {/* <UsersAdd/> */}
      {/* <StudentAdd/> */}
      {/* <Footer /> */}
      <EmployeeAdd/>
    </div>
  );
}

export default App;
