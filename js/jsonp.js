
(function () {
    
  var section = document.querySelector("#jsonp");
  var pre = document.createElement("pre");
   
  section.appendChild(pre);
    
  function JSONP(url, callbackName){
      
      var script = document.createElement("script");
      
      script.type = "text/javascript";
      script.async = true;
      script.src = url + "?callback=" + callbackName;
      
      console.log(script);
      document.head.appendChild(script);
  }
    function showData(data){
        pre.textContent = JSON.stringify(data);
    }
    
    document.querySelector("#loadData").onclick = function(e){
        JSONP("http://localhost:3000", "showData");
    };
    
    window.showData = showData;
    
})();