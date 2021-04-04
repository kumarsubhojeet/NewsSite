import react from 'react';
import NavBar from "./Navbar"
import { Switch ,Route,Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'; 
import Sports from"./Sports";
import Health from "./Health"
import Business from "./Business"
import Entertainment from "./Entertainment"
import Science from "./Science "
import Technology from './Technology' 






const App = ()=>{
    return(
        <>
        <NavBar />
        <Switch>
            <Route exact path="NewsSite" component={Home} />
            <Route exact  path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/Health" component={Health} />
            <Route exact path="/Business" component={Business} />
            <Route exact path="/Entertainment" component={Entertainment} />
            <Route exact path="/sports" component={Sports} />
            <Route exact path="/Science" component={Science} />
            <Route exact path="/Technology" component={Technology} />
            <Redirect to="/"/>
      </Switch>
      
        </>

    )
}

export default App;
