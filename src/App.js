//import logo from './logo.svg';
import './App.css';
// import CounterClass from './components/CouterClass';
// import CounterFunction from './components/Counterfunction';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import Allstudents from './components/Allstudents';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
        <Route path='/' exact element={<Allstudents/>}/>
        </Routes>
        <Routes>
        <Route path='/add' exact element={<AddStudent/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
