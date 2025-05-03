import { Link } from "react-router-dom";
// We should use Bootstrap or Chakra UI for ready-made components.
function Navbar() {
  //To connect Route by navbar we go to navigation bar and convert  a , href ---> Link , to 
  //ely beyt7at goa to ---->path ely 7ena katbnha goa route 
  return(
  <>
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
    <div className="container">
      <Link className="navbar-brand fw-bold fs-4" to="/">React Starter</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link className="nav-link mx-2 " to="/"> Home</Link>
          <Link className="nav-link mx-2" to="/Sportnews">Sportnews</Link>
          <Link className="nav-link mx-2" to="/Sciencesnews">Sciencenews</Link>
          <Link className="nav-link mx-2" to="/Weather"> Weather</Link>
        </div>
      </div>
    </div>
  </nav>
  </>
  );
  }
  
  export default Navbar; 