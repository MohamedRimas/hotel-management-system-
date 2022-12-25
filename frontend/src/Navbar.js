import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar(){

return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow" >
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-1">
        
        <li className="nav-item">
        <CustomLink to="/" className="nav-link" >Home</CustomLink>
        </li>

        <li className="nav-item">
        <CustomLink to="/Rooms" className="nav-link" >Rooms</CustomLink>
        </li>

  

        
        <li className="nav-item">
        <CustomLink to="/Services" className="nav-link" >Services</CustomLink>
        </li>
        <li className="nav-item">
        <CustomLink to="/Inventory" className="nav-link" > Inventory</CustomLink>
        </li>
        <li className="nav-item">
        <CustomLink to="/About" className="nav-link" ></CustomLink>
        </li>
        <li className="nav-item">
        <CustomLink to="/Contect" className="nav-link" >Contect</CustomLink>
        </li>
       
        

        
        
  

      </ul>
      <a className="navbar-brand fw-bolder fs-4 mx-auto" >Half-Moon</a>

      <CustomLink to="/Login"  className="btn btn-outline-primary ms-auto px-4 rounded-pill">
        <i className="fa fa-sign-in me-2"></i>Login</CustomLink>

        <CustomLink to="/Register" className="btn btn-outline-primary ms-2 rounded-pill">
          <i className="fa fa-sign-in me-2"></i>Register</CustomLink>

          <CustomLink to="/Dshboard"  className="btn btn-outline-primary ms-2 rounded-pill">
          <i className="fa fa-sign-in me-2"></i>Dshboard</CustomLink>
      
    </div>
  </div>
</nav>
</div>
)
}

function CustomLink({ to, children, ...props }) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resolvedPath.pathname, end: true })

return (
  <li className={isActive ? "active" : ""}>
    <Link to={to} {...props}>
      {children}
    </Link>
  </li>

)
}




