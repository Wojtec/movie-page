import { Fragment } from "react";


const Carousel = (props) => {

  const { images } = props;

//   const stars = (rating) =>{
//     const numRating = rating.toFixed();
//     let stars = [];
//     for (let i = 1; i <= numRating; i++){

//       if(String(rating).split('.')[1] > 5){
//         stars.push(<span className="star">
//         &#9733;
//         <style jsx>{`
//         .star:nth-last-child(n){
//           color:red;
//         }
//         `}</style>
//         </span>)
//       }
//       if(String(rating).split('.')[1] < 5){
//         stars.push(<span className="star">
//         &#9733;
//         <style jsx>{`
//         .star{
//           color:red;
//         }
//         `}</style>
//         </span>)
//       }
      
//     }
//     return stars;

// console.log(numRating);

//   }
    return(
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
              { images.map((image, index) => (
                <li 
                key = {image.id}
                data-target = "#carouselExampleIndicators" 
                data-slide-to = {index} 
                className = {index === 0 ? 'active' : ''}>
                </li>
               )
              )
              }
            </ol>
        <div className="carousel-inner" role="listbox">
        { images.map((image, index ) => (
          <div key = {image.id} className = {`carousel-item ${index === 0 ? 'active' : '' }`}>
           <div className="d-flex">
           <h1 className="d-flex justify-content-start col-md-8">{image.name}</h1>
            <p className="text-right m-2 align-middle mt-3 col-md-4">
            {/* {stars(image.rating)} */}
            <span className="m-1">{image.rating}</span>
            </p>
           </div>
             <img className = "d-block img-fluid" 
             src = {image.url} 
             alt = {image.name}/>
          </div>
        ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a  className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        <style jsx>{`
        .carousel-item{
          max-height: 450px;
        }
        `}</style>
      </div>
    )
}

export default Carousel;