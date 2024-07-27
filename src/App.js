
import './App.css';
//import NavBar from './components/NavBar';

import React,{useState} from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
const App=()=>{
  const pageSize=15;
  const [progress, setProgress] = useState(0);
  
// const [progress, setProgress] = useState(0)
 
//   const sProgress=(progress)=>{
//    setProgress({progress:progress})
//   }

    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        

      />
        <Routes>
        {/* <News setProgress={setProgress}   pageSize={pageSize} country="in" category="sports"/> */}
        <Route exact path="/" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>} /> 
        <Route exact path="/business" element={<News setProgress={setProgress}   key="business" pageSize={pageSize} country="in" category="business"/>} /> 
        <Route exact path="/general" element={<News setProgress={setProgress}   key="general" pageSize={pageSize} country="in" category="general"/>} /> 
        <Route exact path="/entertain" element={<News setProgress={setProgress}   key="entertain" pageSize={pageSize} country="in" category="entertain"/>} /> 
        <Route exact path="/health" element={<News setProgress={setProgress}   key="health" pageSize={pageSize} country="in" category="health"/>} /> 
        <Route exact path="/science" element={<News setProgress={setProgress}   key="science" pageSize={pageSize} country="in" category="science"/>} /> 
        <Route exact path="/sports" element={<News setProgress={setProgress}   key="sports" pageSize={pageSize} country="in" category="sports"/>} /> 
        <Route exact path="/technology" element={<News setProgress={setProgress}   key="technology" pageSize={pageSize} country="in" category="technology"/>} /> 
        </Routes>
        </Router>
       


      </div>
    )
  
}

export default App;
