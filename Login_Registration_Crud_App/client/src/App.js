import './App.css';
import {Route, Switch} from "react-router-dom"
import ParentForm from './Components/ParentForm';
import Dashboard from './Components/Dashboard';
import Update from './Components/Update';
function App() {
  return (
    <div >
      <Switch>
        <Route exact path ="/" component={ParentForm} />
        <Route exact path ="/homepage" component={ParentForm} />
        <Route exact path ="/dashboard" component={Dashboard}/>
        <Route exact path = "/update/:id" component={Update}/>
      </Switch>
      
    </div>
  );
  
}




// const createToken= async ()=>{
//   const token = await jwt.sign({_id: "613f2624609e1c6cee87758e"},"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VySWQ");
//   console.log(token);

//   const userVer = await jwt.verify(token, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VySWQ");
//   console.log(userVer);
// }

export default App;
