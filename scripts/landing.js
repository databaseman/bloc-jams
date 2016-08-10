var animatePoints = function () {

    var points = document.getElementsByClassName('point');

    var revealPoint = function (pointIdx) {
        points[pointIdx].style.opacity = 1;
        points[pointIdx].style.transform = "scaleX(1) translateY(0)";
        points[pointIdx].style.msTransform = "scaleX(1) translateY(0)";
        points[pointIdx].style.WebkitTransform = "scaleX(1) translateY(0)";
    };
     
    for (var i=0; i < points.length; i++ )
    {
    	revealPoint(i);
    }
};