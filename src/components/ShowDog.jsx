import { Link } from "react-router-dom";

const ShowDog = ({ data, showDog }) => {
  return (
    <div>
      <div className="showdogbreed-parent">
        <div className="showdog-breed">{showDog.breed}</div>
      </div>

      <div className="dog-item">
        <img className="dog" src={showDog.img} alt="dog" />
      </div>
      <div className="dogpage-button-parent">
        <Link to="/info">
          <button className="backtodoginfopage-button">Back to Dogs</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowDog;

// const Info = ({activeDog}) => {

//     return(

//     <div>

//     <h1>{activeDog.name}</h1>

//     <img src={activeDog.img}/>

//     </div>

//     )

//     }
