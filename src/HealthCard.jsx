import react from "react";

const HCard = (props) => {
//   const [card] = props;
  return (
    <>
    <div class="container">
        <div class="jumbotron jumbotron-fluid">
          <h1 class="display-4">Health</h1>
          <p class="lead">Welcome to Health page 👨‍⚕️</p>
        </div>
      </div>
      <div className="row">
          {
              props.card.map(cards=>(
                   <div className="col-md-3 py-4">
                       <div className="card">
                           <img src={cards.urlToImage} alt="Img-Error"  className=" img-fluid mx-auto" />
                           <div className="card-body">
                               <h4 className="scititle">{cards.title}</h4>
                               <hr/>
                               <p className="scidec">{cards.description}</p>
                               <a href={cards.url} target="_blank">More...</a>
                           </div>
                       </div>
                   </div>
              ))
          }
      </div>
    </>
  );
};
export default HCard;
