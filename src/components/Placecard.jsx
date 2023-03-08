import React, { useState } from "react";
import places from "../places";

function Placecard(){
  return(
    <div className="placecards">
      {places.map((place) => {
          return( 
            <a href="javascript:void(0);"> 
            <div className="placecard" data-rgv={place.id}>
              <img src={place.imgArray[0]} alt=""/>
              <i class="fi fi-rs-heart heart"></i>
              <i class="bi bi-arrow-right-circle-fill right" data-rgv={place.id}></i>
              <i class="bi bi-arrow-left-circle-fill left" data-rgv={place.id}></i>
              <div class="placeDetails">
                  <div>
                    <div>{place.placeName}</div>
                    <div><i class="bi bi-star-fill"></i>&nbsp;{place.rating}</div>
                  </div>
                  <div><p>{place.distance}</p></div>
                  <div><p>{place.date}</p></div>
              </div>
              <div><p><span>{place.cost}</span> {place.time}</p></div>
            </div>
            </a>
          )
      })}
    </div>
  )
}

export default Placecard;
