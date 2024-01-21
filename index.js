
function menuBar(){
var midElements = document.querySelectorAll('.navbar a:not(:first-child):not(:last-child)');
midElements.forEach(function(element) {
    var displayValue = window.getComputedStyle(element).getPropertyValue('display'); 
    if (displayValue === 'none') {
        element.style.display = 'block';
    } else if(displayValue == 'block'){
        element.style.display = 'none';
    }
});
}
