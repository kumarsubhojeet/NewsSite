import react from "react";

const About = () => {
  return (
    <><div className="container">
            <div className="jumbotron">
      
        <div class="jumbotron jumbotron-fluid py-3">
          <div class="container">
            <h1 class="display-4">About Us</h1>
          </div>
        </div>
      </div>
      </div>

      <div className="container headcontainer">
      <div class="row mb-2">
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Hello My Name Is Subhojit</strong>
          <h3 class="mb-0">Welcome to my React News Site</h3>
          <h6 class="card-text mb-auto">This Site shows news of India with different categories with their Urls.
          This Site is Created by Subhojit in Reactjs in year 2021.
          </h6>
          <p>Hope So you like it 👍</p>
        </div>
        <div class="col-auto d-none d-lg-block">
        <img src="https://source.unsplash.com/200x250/?Coding" alt="" class="bd-placeholder-img" width="205" height="270"/>
        </div>
      </div>
    </div>
    
  </div>
      </div>

    </>
  );
};

export default About;
