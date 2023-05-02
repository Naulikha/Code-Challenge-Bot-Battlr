import React from "react";

function BotCard({image, title, catchphrase, health, damage, armor}){

    const divCardStyle = {
        width: '14rem'
      }

    return(
        <div className="card p-1 m-2 bg-primary" style={divCardStyle}>
            <img className="img card-img-top" src={image} alt="Not found"/>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <small className="card-text">{catchphrase}</small>
            </div>
            <div>
                <div>
                    <p>H: {health}</p>
                    <p>D: {damage}</p>
                    <p>A: {armor}</p>
                </div>
            </div>
        </div>
    )
}

export default BotCard;