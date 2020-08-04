import React from "react";


const Card = (props) =>  {
    return (     
        <a
          href={props.url}
          target="_blank"
          key={props.id}
          className={`card b${props.id}`}
          style={{ backgroundColor: props.color }}
        >
          <p>{props.label}</p>
        </a>      
    );
  }


export default Card;
