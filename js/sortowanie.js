
(function () {
    
    
    var table = document.querySelector("#myTable"),
        ths = table.querySelectorAll("thead th"),
        trs = table.querySelectorAll("tbody tr"),
        szukaj = document.querySelector("input.szukaj");
    
    
    function createRows(actualValue){
        var regex = actualValue.length > 0 ? RegExp("^" + actualValue + "+", "") : "";
        //var trsArr = makeArray(trs);
        
        Array.prototype.forEach.call(trs, function(tr){
            
            var td = tr.children[1].textContent;
                  
            if(actualValue.length > 0 && regex.test(td)===false){
                tr.classList.add("hidden");
            }else{
                tr.classList.remove("hidden");  
            }
        });   
    }
    
    szukaj.addEventListener("keydown", function(e){
        
        var actualValue =  ( e.keyCode == 8 || e.keyCode == 46) ? 
                szukaj.value.length > 0 ? szukaj.value.substr(0, szukaj.value.length-1) : ""
                : szukaj.value + e.key;
    
        createRows(actualValue);        
    });
                            
    szukaj.addEventListener("keypress", function(e){
        
       var actualValue = szukaj.value + (e.keyCode == 13 ? "" : e.key);
       
        createRows(actualValue);   
    });

    function makeArray(nodeList){
        
        var arr = [];
        
        for (var i = 0; i < nodeList.length; i++){
            arr.push(nodeList[i]);
        }
        
        return arr;
    }
    
    function clearClassName(nodeList){
    
        [].forEach.call(nodeList, function(th){
                th.className = "";
        });
    }
    
    function assignEvents(nodeList){
        
        [].forEach.call(nodeList, function(th){
            th.onclick = sortBy;  
        });
    }
    
    function sortBy(e){
     
        var target = e.target,
            thsArr = makeArray(ths),
            trsArr = makeArray(trs),
            index = thsArr.indexOf(target),
            df = document.createDocumentFragment(),
            order = (target.className === "" || target.className === "desc") ? "asc" : "desc";
        
        clearClassName(ths);
        
        this.getIndex = function(){
            return index;
        }
        
        this.getDf = function(){
            return df;
        }
        
        this.setDf = function(tr){
            df.appendChild(tr);
        }
        
        trsArr.sort(function(a, b){
            var tdA = a.children[index].textContent,
                tdB = b.children[index].textContent;
            
            if(tdA < tdB){
                return order === "asc" ? -1 : 1;
            } else if(tdA > tdB){
                return order === "asc" ? 1 : -1;
            } else{
                return 0;
            }          
        });
        
        trsArr.forEach(function(tr){
            df.appendChild(tr);
        });
        
        target.className = order;       
        table.querySelector("tbody").appendChild(df);
       
    }
    
    assignEvents(ths);    
   
})();