import logo from './logo.svg';
import './App.css';

function App() {
//js.....
//every tag must be closed
//only one root element
var a =100;
var name ="royal"
var isActive =false
var user ={
  name:"raj",
  age:20,
}
var students = [
  {
    id:1,
    name:"amit",
  },
  {
    id:2,
    name:"ram",
  }

]


  return (
    <div className="App">
      <h1>HELLO</h1>
      {a}
      <h1>{a}</h1>
      <h2>Institute Name = {name}</h2>
      <h3>STATUS = {isActive == true ? "Active" :"Not Active"}</h3>
      <h2>
        User Name ={user.name}
      </h2>
      <h3>Age = {user.age}</h3>
      {
        students.map((stu)=>{
          return(<div>
            <h1>Student Name = {stu.name}</h1>
            <h2>Student Id = {stu.id}</h2>
          </div>)
        })
      }

    </div>
  );
}

export default App;
