document.addEventListener ('DOMContentLoaded', ratingStars);
function ratingStars () {
    for (let i = 0; i < ratingStarElement ( 'star').length; i++) {
        ratingStarElement ( 'star')[i].addEventListener ( 'click', ratingStarClickHandler.bind(null, i));
    };
}
function ratingStarClickHandler (index, event) {
    let userRating = index + 1;
    
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