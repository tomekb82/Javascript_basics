
(function () {
    
    
    var form = document.querySelector("#myForm"),
        fields = form.querySelectorAll("[data-error]");
        
    
form.addEventListener("submit", function(e){
    
    e.preventDefault();
    
    var errors = [];
    
    for(var i =0; i < fields.length; i++){
    
        var field = fields[i];
        
        if(field.type === "text"){
            if(field.value === ""){
                errors.push(field.dataset.error);
            }
        }else if(field.type === "email"){
            if(field.value.indexOf("@") === -1){
                errors.push(field.dataset.error);
            }
        }else if(field.type=== "select-one"){
            if(field.value === ""){
                errors.push(field.dataset.error);
            }
        } else if(field.type === "textarea"){
            if(field.value.length <3){
                errors.push(field.dataset.error);
            }
        }
    }
    
    console.log(errors);
}, false);
  
    
   
})();