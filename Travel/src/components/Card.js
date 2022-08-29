import React from "react"

export default function Card (props) {
    return(
        <div>
        <div className = "each">
            <img className = "pic" src = {props.item.image}/>
            <div className="info">
                <div className="line"> 
                                
                    <h4><i className="bi bi-geo-alt"></i> {props.item.place} </h4>
                    <a href = {props.item.googlemap}> View on Google Maps</a>       
                </div>
                <h3>{props.item.name}</h3>       
                <span>{props.item.time}</span>
                <p>{props.item.description}</p>
                
            </div>
            
        </div>
         <hr class="solid"></hr>
         </div>
    )
}