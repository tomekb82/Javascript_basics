
(function () {
    
    
    var form = document.querySelector("#myForm"),
        fields = form.querySelectorAll("[data-error]");
    
function isNotEmpty(field){
    return field.value !== "";
}   
    
function isEmail(field){
    return field.value.indexOf("@") !== -1;
}    
  
function isAtLeast(field, min){
    return field.value.length >= min;
}   
    
form.addEventListener("submit", function(e){
    
    e.preventDefault();
    
    var errors = [];
    
    for(var i =0; i < fields.length; i++){
    
        var field = fields[i],
            isValid = false;
        
        if(field.type === "text" || field.type=== "select-one"){
            isValid = isNotEmpty(field);
        }else if(field.type === "email"){
            isValid = isEmail(field);
        
        } else if(field.type === "textarea"){
            isValid = isAtLeast(field, 2);
        }
        
        if(!isValid){
            field.classList.add("error");
            errors.push(field.dataset.error);
        }else{
            field.classList.remove("error");
        }
    }
    
    console.log(errors);
}, false);
  
    
   
})();