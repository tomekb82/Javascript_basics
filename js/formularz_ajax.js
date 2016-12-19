
(function () {
    
    
    var form = document.querySelector("#formAjax"),
        message = document.querySelector("#message");
    
    function showMessage(type, msg){   
        message.className = type;
        message.innerHTML = msg;           
    }
    
   function sendMail(e){
       
       e.preventDefault();
       
       var fields = form.querySelectorAll("input", "textarea"),
           data = {};
       
       [].forEach.call(fields, function(field){
           data[field.name] = field.value;
       });
     
       AJAX({
           type: form.getAttribute("method"),
           url: form.getAttribute("action"),
           data: data,
           success: function(response, xhr){
               console.log(response);
               
               //var res = JSON.parse(response);
           }
       });
       
   }
    
   form.addEventListener("submit", sendMail, false);
    
    
})();