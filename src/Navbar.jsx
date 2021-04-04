import react from "react"
import {NavLink} from "react-router-dom"

const NavBar = ()=>{
    return(
        <>
        <div className="container-fluid nav-bg">
        <div className="row">
        <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink  className="navbar-brand heading" to="/">SkNews</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink  className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
      </li>
      
      
      <div class="dropdown show">
  <a class="btn btn-outline dropdown-toggle menu" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Category
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <NavLink activeClassName="menu_active" className="nav-link" to="/Sports">Sports</NavLink>
  <NavLink activeClassName="menu_active" className="nav-link" to="/Technology">Technology</NavLink>
  <NavLink activeClassName="menu_active" className="nav-link" to="/Entertainment">Entertainment</NavLink> 
  <NavLink activeClassName="menu_active" className="nav-link" to="/Science">Science</NavLink> 
  <NavLink activeClassName="menu_active" className="nav-link" to="/Business">Business</NavLink> 
  <NavLink activeClassName="menu_active" className="nav-link" to="/Health">Health</NavLink> 
   </div>
</div>
    
     
    </ul>
    
  </div>
</nav>
</div>
</div>
</div>
        </>

    )
}

export default NavBar;