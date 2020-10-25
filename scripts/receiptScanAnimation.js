//options

/*
var thresholdList = [];
for (var i = 0; i <= 8; i++) {
    thresholdList.push(i*);
}
*/

let scanOptions = {
    root: null,
    rootMargin: "-70px",
    threshold: [0.25, 0.5, 0.75, 1.0]
  };

let phoneTextWrapper = document.querySelector('.phoneTextWrapper')
let scanTextLines = document.querySelectorAll('.scanTextLine')

let scanContainer = document.querySelector('.scanContainer')
let receipt = document.querySelector('.receipt')

function receiptScanAnimation() {
    console.log('Test')
    createScanObserver()
}

function createScanObserver() {
    let scanObserver = new IntersectionObserver(handleScanIntersect, scanOptions)
    //scanObserver.observe(phoneTextWrapper)
    scanObserver.observe(receipt)
}

function handleScanIntersect(entries, observer) {
    entries.forEach((entry) => {
        let intersect = entry.intersectionRatio;
        console.log(entry.target)
        console.log(intersect)
        phoneTextWrapper.style.transform = `translateY(${(1-intersect)*15}rem)`
    
        /*
        if ( intersect >= 0.33 && intersect < 0.66 ) {
            phoneTextWrapper.style.transform = 'translateY(10rem)'
        } else if (intersect >= 0.66 && intersect < 1.0){
            phoneTextWrapper.style.transform = 'translateY(5rem)'
        } else if(intersect == 1.0) {
            phoneTextWrappe
            */
    });
}

export default receiptScanAnimation;