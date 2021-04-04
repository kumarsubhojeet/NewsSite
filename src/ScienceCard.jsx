import react from "react";

const ScienceCard = (props) => {
  //   const [card] = props;
  return (
    <>
    <div className="scijumbo"></div>
      <div class="container">
        <div class="jumbotron jumbotron-fluid">
          <h1 class="display-4">Science</h1>
          <p class="lead">Welcome to Science page 🚀</p>
        </div>
      </div>

      <div className="row">
        {props.card.map((cards) => (
          <div className="col-md-3 py-4">
            <div className="card">
              <img
                src={cards.urlToImage}
                alt="Img-Error"
                className=" img-fluid mx-auto"
              />
              <div className="card-body">
                <h4 className="scititle">{cards.title}</h4>
                <hr />
                <p className="scidec">{cards.description}</p>
                <a href={cards.url} target="_blank">
                  More...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ScienceCard;
