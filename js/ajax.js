

function AJAX(config){
    
  
    if( !(this instanceof AJAX)){
        return new AJAX(config);
    }
    
    this._xhr = new XMLHttpRequest();
    this._config = this._extendsOptions(config);
    
    console.log(this._config);
    
}

AJAX.prototype._extendsOptions = function(config){
  
    var defaultConfig = JSON.parse(JSON.stringify(this._defaultConfig));
     
    for(var key in defaultConfig){
        if(key in config){
            defaultConfig[key] = config[key];
        }
    }
    
    return defaultConfig;
};

AJAX.prototype._defaultConfig = {
    type: "GET",
    url: window.location.href,
    data: {},
    options: {
        async: true,
        timeout: 0,
        username: null,
        password: null
    },
    headers: {}
};





var a = AJAX({
    type: "POST",
    url: "odbierz.php",
    data: {
        firstName : "ala"
    }
});