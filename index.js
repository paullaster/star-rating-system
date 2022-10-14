document.addEventListener ('DOMContentLoaded', ratingStarsClickHandler);
function ratingStarsClickHandler () {
    for (let i = 0; i < ratingStarElement ( 'star').length; i++) {
        console.log (ratingStarElement ( 'star')[i]);
    };
}
function ratingStarElement (classname) {
    return document.querySelectorAll ( '.' + classname );
};