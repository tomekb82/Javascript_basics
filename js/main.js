(function () {
    
    var as = document.querySelectorAll("nav a");
    
    function hideSection(e){
        
        var selectedSection = document.querySelector(e.target.hash);
        
        var sections = document.querySelectorAll("section");
        for(var i=0; i < sections.length; i++){
            
            sections[i].style.display = 'none';
        }
        
        selectedSection.style.display = 'block';
        console.log(selectedSection);
    }
    
    for(var i =0; i<as.length; i++){
        as[i].onclick = hideSection;
    }
    
    
})();