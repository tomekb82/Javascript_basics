
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
   
      this._field.value = this._field.value.replace(this._regex, function(match){
          return this._cenzoreWords(match);
      }.bind(this));
     
  };
    
  WordKiller.prototype._cenzorSigns = "!@#$^*".split("");
    
  WordKiller.prototype._cenzoreWords = function(word){

      var cenzored = "",
          random = 0;;
      
      for(var i=0; i < word.length; i++){
          random = Math.round(Math.random()*(this._cenzorSigns.length - 1 - 0) + 0)
          cenzored += this._cenzorSigns[random]; 
      }
      
      return cenzored;
  };
    
      
  var wk = new WordKiller(document.querySelector("[name='regexMessage']"), 
                          "kurka, orzesz ty, wuj, psia kosc");      
})();