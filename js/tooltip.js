(function () {
   
var globalTooltip = null;
    
function assignEvents(elems, type, event){
    
    for(var i=0; i < elems.length; i++){
        elems[i].addEventListener(type, event, false);
    }
}
    
function assignEvent(elem, type, event){
    
    elem.addEventListener(type, event, false);
}    
    
function createTooltip(text, options){
    
    var tooltip = document.createElement("div");
    
    tooltip.className = "tooltip hidden";
    tooltip.appendChild(document.createTextNode(text));
    document.body.appendChild(tooltip);
    
    tooltip.style.left = options.x + (options.width /2)  -(tooltip.offsetWidth / 2) + "px";
    tooltip.style.top = (options.y - tooltip.offsetHeight - 10) + "px";
    
    tooltip.classList.remove("hidden");
        
    globalTooltip = tooltip;
}   
    
function showTooltip(e){
    
    var options = {
        width: e.target.offsetWidth,
        x: e.target.offsetLeft,
        y: e.target.offsetTop
    };
    
    var text = e.target.getAttribute("title");
    
    createTooltip(text, options);
    
    e.target.removeAttribute("title");
    
}   
    
function removeTooltip(e){
    
    e.target.setAttribute("title", globalTooltip.textContent);
    
    globalTooltip.parentNode.removeChild(globalTooltip);
}       
    
function init(elems){

    /*assignEvents(elems, "mouseenter", showTooltip);
    assignEvents(elems, "mouseleave", removeTooltip);*/
    
    Array.prototype.forEach.call(elems, function(elem){
        assignEvent(elem, "mouseenter", showTooltip)
    });
    Array.prototype.forEach.call(elems, function(elem){
        assignEvent(elem, "mouseleave", removeTooltip)
    });
}
    
window.tOOltip = init;
    
})();