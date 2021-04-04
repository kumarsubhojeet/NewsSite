import react from "react";

const Cards = (props) => {
//   const [card] = props;
  return (
    <>
      <div className="row">
          {
              props.card.map(cards=>(
                   <div className="col-md-3 py-4">
                       <div className="card">
                           <img src={cards.urlToImage} alt="Img-Error"  className=" img-fluid mx-auto" />
                           <div className="card-body">
                               <h4>{cards.title}</h4>
                               <hr/>
                               <p>{cards.description}</p>
                               <a href={cards.url}>More...</a>
                           </div>
                       </div>
                   </div>
              ))
          }
      </div>
    </>
  );
};
export default Cards;
