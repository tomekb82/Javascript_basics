
(function () {
    
  function WordKiller(field, restrictedWords){
    
      this._field = field;
      this._words = restrictedWords.split(/, */);
      this._regex = new RegExp("(" + this._words.join("|") +")", "igm");
      
      this._assignEvents();
  };
    
  WordKiller.prototype._assignEvents = function(){
     
      this._field.addEventListener("keyup", this._filterMessage.bind(this), false);
  };
    
  WordKiller.prototype._filterMessage = function(e){
   
      console.log(e);
  };
      
    
      
  var wk = new WordKiller(document.querySelector("[name='regexMessage']"), 
                          "kurka, orzesz ty, wuj, psia kosc");      
})();