import React from "react";


const restart = () => {
    document.location.href = "";
  };

export const Summary = ({ name , setName , ageGroup, setAgeGroup, fur, setFur }) => {
    return ( 
     <section className ="summary-wrapper"> 
    <p> You want to name your cat: {name} </p>   
    <p> You preffer a cat that is a {ageGroup}  </p>
    <p> You want a cat with {fur} fur! </p>

    <button onClick={restart}>Restart Page</button>
    </section> 
    )
}