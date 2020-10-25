import receiptScanAnimation from "./receiptScanAnimation.js";

// variables
let cardElements
let headeriPhone
let headingTopic

let slideInOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };

window.addEventListener("load", (event) => {
    cardElements = document.querySelectorAll(".card");
    headeriPhone = document.querySelector(".mockupContainer")
    //headeriPhone = document.getElementById("headeriPhone");
    headingTopic = document.querySelector(".header-h1Topic")
    
  
    createCardObservers();
    createiPhoneObserver();

    headingTopicAnimation();
    receiptScanAnimation();
  }, false);




function createCardObservers() {
    let cardObserver;

    cardObserver = new IntersectionObserver(handleSlideInIntersect, slideInOptions);
    cardElements.forEach((value) => {cardObserver.observe(value)})
    //observer.observe(cardElement);
}

function createiPhoneObserver() {
    let headeriPhoneObserver;

    headeriPhoneObserver = new IntersectionObserver(handleSlideInIntersect, slideInOptions)
    headeriPhoneObserver.observe(headeriPhone)
}

function handleSlideInIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.5) {
            //console.log('target is visible')

            entry.target.classList.add('fadedIn')
        } else {
            //console.log('target is not completely visible')
            entry.target.classList.add('fadedOut')
            entry.target.classList.remove('fadedIn')
        }

    });
  }


function headingTopicAnimation() {
    let counter = 0
    let topicWords = ["climate change", "factory farming", "slavery"]
    let topicAnimateInterval = window.setInterval(() => {
        headingTopic.textContent = topicWords[counter]
        counter>=topicWords.length-1 ? counter = 0 : counter++
    }, 3000);
}