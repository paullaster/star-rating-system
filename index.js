document.addEventListener ('DOMContentLoaded', ratingStars);
function ratingStars () {
    for (let i = 0; i < ratingStarElement ( 'star').length; i++) {
        ratingStarElement ( 'star')[i].addEventListener ( 'click', ratingStarClickHandler.bind(null, i));
    };
}
function ratingStarClickHandler (index, event) {
    //console.log (event.target.previousElementSibling);
    if (event){
        let star = event.target.parentElement.children;
         for (let j = 0; j <star.length; j++) {
             star[j].classList.remove ( 'orange' );
         }
    }
    if (event.target.previousElementSibling !== null) {
        for (let j = 0; j <= index; j++) {
            ratingStarElement ( 'star')[j].classList.add ( 'orange');
        }
    }else {
        event.target.classList.add ( 'orange');
    }
    let userRating = index + 1;
    getELementByClass ( 'output').style.paddingRight = 0.5 + 'em';
    getELementByClass ( 'output').style.paddingLeft = 0.5 + 'em';
    getELementByClass ( 'output').style.borderRadius = 0.2 + 'em';
    addTextContent ( 'output', userRating);
}
function ratingStarElement (classname) {
    return document.querySelectorAll ( '.' + classname );
};
function getELementByClass (classname) {
    return document.querySelector ( '.' + classname );
}
function addTextContent (classname, text)  {
    return getELementByClass (classname).textContent = `You rated this ${text === 1 ? text + ' star' :  text + ' stars' }`;
}