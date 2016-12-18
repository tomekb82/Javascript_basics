

function AJAX(config){
    
  
    if( !(this instanceof AJAX)){
        return new AJAX(config);
    }
    
    this._xhr = new XMLHttpRequest();
    this._config = this._extendsOptions(config);
    
    this._assignEvents();
   
    this._open();
    this._assignUserHeaders();
    
    this._send();
    
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


AJAX.prototype._assignEvents = function(){
    
    this._xhr.addEventListener("readystatechange", this._handleReponse.bind(this), false);
    this._xhr.addEventListener("abort", this._handleError.bind(this), false);
    this._xhr.addEventListener("error", this._handleError.bind(this), false);
    this._xhr.addEventListener("timeout", this._handleError.bind(this), false);
}

AJAX.prototype._assignUserHeaders = function(e){

    if(Object.keys(this._config.headers).length){
     
        for(var key in this._config.headers){
            this._xhr.setRequestHeader(key, this._config.headers[key]);
        }
    }
}

AJAX.prototype._open = function(e){
    
    this._xhr.open(
        this._config.type,
        this._config.url,
        this._config.options.async,
        this._config.options.username,
        this._config.options.password
    );
    
    this._xhr.timeout = this._config.options.timeout;
    
};

AJAX.prototype._send = function(e){

    this._xhr.send();
}

AJAX.prototype._handleReponse = function(e){

    if(this._xhr.readyState === 4 && this._xhr.status === 200){
        console.log("Otrzymano odpowiedź");
        console.log(this._xhr.response);
    }
};

AJAX.prototype._handleError= function(e){
    
};

var a = AJAX({
  //  type: "POST",
    url: "http://localhost:3000",
    data: {
        firstName : "ala"
    }
});