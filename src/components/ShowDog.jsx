

const ShowDog = ({data, showDog}) => {

   

    return(
        <div>
            <img src={showDog.img} alt="dog" />
        </div>
       
        

            
    );


}

export default ShowDog;

// const Info = ({activeDog}) => {

//     return(
    
//     <div>
    
//     <h1>{activeDog.name}</h1>
    
//     <img src={activeDog.img}/>
    
//     </div>
    
//     )
    
//     }