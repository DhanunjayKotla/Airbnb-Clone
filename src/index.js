import React, { useState } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import Iconcard from "./components/Iconcard";
import Placecard from "./components/Placecard";
import places from "./places";


ReactDOM.render(<Iconcard />, document.getElementById("iconcards"));

ReactDOM.render(<Placecard />, document.getElementById("Cards"));


const placecards = document.querySelectorAll(".placecard");
const imgs = document.querySelectorAll(".placecard img");
const rights = document.querySelectorAll(".placecards .right");
const lefts = document.querySelectorAll(".placecards .left");

rights.forEach((right) => {
    right.onclick = function(event){ 
        event.preventDefault();
        const id = event.target.dataset.rgv;
        places[id].imageNo++;
        if(places[id].imageNo === 4){
            rights[id].style.display = "none";
        }
        if(places[id].imageNo !== 0){
            lefts[id].style.display = "block";
        }
        imgs[id].setAttribute("src", places[id].imgArray[places[id].imageNo]);
    }
})

lefts.forEach((left) => {
    left.onclick = function(event){
        event.preventDefault();
        const id = event.target.dataset.rgv; 
        places[id].imageNo--;
        if(places[id].imageNo !== 4){
            rights[id].style.display = "block";
        }
        if(places[id].imageNo === 0){
            lefts[id].style.display = "none";
        }
        imgs[id].setAttribute("src", places[id].imgArray[places[id].imageNo]);
    }
})

placecards.forEach((placecard) => {
    placecard.addEventListener("mouseover", event => {
        const id = event.target.dataset.rgv ;
        if(places[id].imageNo !== 4){
            rights[id].style.display = "block";
        }
        if(places[id].imageNo !== 0){
            lefts[id].style.display = "block";
        }
    });
})

placecards.forEach((placecard) => {
    placecard.addEventListener("mouseout", event => {
        const id = event.target.dataset.rgv ;
        rights[id].style.display = "none";
        lefts[id].style.display = "none";
    });
})



Array.from( document.getElementsByClassName("profile")).forEach((div) => {
    div.onclick = () => {
        const div = document.getElementById("toggleregistering");
        div.style.display = div.style.display=="block"?"none":"block";
    }
})

Array.from( document.getElementsByClassName("sPopup")).forEach((div, index) => {
    div.onclick = () => {
        document.getElementsByClassName("pop")[index===1?index+2:index].style.display = "block";
        $(".searchPopup").fadeIn();
        $(".jay").fadeIn();
    }
})

document.getElementById("experiences").onclick = () => {
    document.querySelector(".searchPopup .s1").style.display = "block";
    Array.from(document.querySelectorAll(".searchPopup .s2")).forEach((pop) => {
        pop.style.display = "none"
    })
}
document.getElementById("stays").onclick = () => {
    document.querySelector(".searchPopup .s1").style.display = "none";
    Array.from(document.querySelectorAll(".searchPopup .s2")).forEach((pop) => {
        pop.style.display = "block"
    })
}
document.querySelectorAll(".searchPopup .baca").forEach((rgv) => {
    rgv.onclick = (event) => {
        const id = event.target.dataset.pspk;
        Array.from(document.getElementsByClassName("pop")).forEach((pop, index) => {
            if(index != id){
                pop.style.display = "none"
            }else{
                pop.style.display = pop.style.display=="block"?"none":"block";
                pop.classList.add("open");
            }
        })
    }
})

$(function() {
    $(".popup").click(function() {
        $(".fullscreen-container").fadeTo(200, 1);
        $("html").css({height: "100%", overflow: "hidden"});
    });
    $(".popdown").click(function() {
        $(".fullscreen-container").fadeOut(200);
        $("html").css({all: "unset"})
    });
});

$(document).click(function(e) {
    if(!$(".b").find("*").is(e.target)){
        $('.popclose').each(function(i, obj) {
            if(!$(this).is(e.target) && !$(this).find("*").is(e.target)) {
                if( $(this).hasClass('open') ) {
                    $(this).css("display", "none");
                    $(this).removeClass("open");
                    if(i === 1){
                        $(".jay").css("display", "none");
                    }
                } else{
                    $(this).addClass("open");
                }
            }
        });
    }
});

