
// variables
let cardElement

window.addEventListener("load", (event) => {
    cardElement = document.querySelector(".card");
  
    createObserver();
  }, false);


function createObserver() {
    let observer;
  
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(cardElement);
}

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.5) {
            console.log('card is visible')

            entry.target.classList.add('fadedIn')
        } else {
            console.log('card is not completely visible')
            entry.target.classList.add('fadedOut')
            entry.target.classList.remove('fadedIn')
        }

    });
  }