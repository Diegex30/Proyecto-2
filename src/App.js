
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { useState, useEffect} from "react";

function App() {
    const [contri, setContri] = useState(null);
  const [data, setData] = useState(null);
  const [currentForm, setCurrentForm] = useState('login');

useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=> setData(data));
}, []);
useEffect(()=>{
fetch("http://localhost:3000/Laboratorio7/usuarios")
        .then((response)=>response.json())
        .then(response =>{
            console.log(response)
        })
        .then((contri)=> setContri(contri));
}, []);
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      <ul>
      {data?.map((user)=>(<li key={user.id}>{user.name}</li>))}
            
            </ul>
                     <ul>
                     lol
      {contri?.map((Country)=>(<li key={Country.name}>lol{Country.name}</li>))}
            
            </ul>
    </div>
  );
}

export default App;