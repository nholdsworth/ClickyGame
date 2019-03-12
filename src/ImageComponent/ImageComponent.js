import React from 'react'
import "./ImageComponent.css";

const imageComponent = (props) => {
    return (
        <img 
            onClick={props.imageClickHandler} className='image' 
            src={props.image} 
            alt={props.name} 
            name={props.name}
            key={props.id}
        />
    )

}

export default imageComponent;
