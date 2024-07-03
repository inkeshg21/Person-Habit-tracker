import "./App.css";
import React, {createContext} from 'react';
//import "@fontsource/roboto";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import StatsPage from "./pages/StatsPage";
import HabitsPage from "./pages/HabitsPage";
import CalendarPage from "./pages/CalendarPage";
import { BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive'
import background from "./images/background3.svg";

export const DevContext = createContext("https://habeuro.com/api")

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 850px)'
})
  return (
    <DevContext.Provider value="https://habeuro.com/api">
    <div className="App">
      <div className="App-container">
        <Router>
          <Routes>
            <Route path ="/"  exact element={<LoginPage isMobile={isMobile}/>}/>
            <Route path ="/Register"  exact element={<RegisterPage isMobile={isMobile}/>}/>
            <Route path ="/Dashboard"  exact element={<Dashboard />}/>
            <Route path ="/Stats"  exact element={<StatsPage isMobile={isMobile}/>}/>
            <Route path ="/Habits"  exact element={<HabitsPage />}/>
            <Route path ="/Calendar"  exact element={<CalendarPage isMobile={isMobile}/>}/>
          </Routes>
        </Router>
      </div>
    </div>
    </DevContext.Provider>
  );
}

export default App;
