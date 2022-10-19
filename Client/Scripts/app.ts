//IIFE
(function(){

    function Start(){

        console.log("App Started!");

        // use AJAX to read JSON file
        // step 1: create a new XHR object
        let XHR = new XMLHttpRequest();
        //step 2: create the request
        XHR.open("GET","../data/data.json");
        //step 3: send the request
        XHR.send();
        //step 4: create an event listener/handler
        XHR.addEventListener("readystatechange",function(){
            if(XHR.readyState == 4 && XHR.status == 200){
                console.log("JSON DATA:");
                console.log("****************");
                console.log(XHR.responseText);
            }
        }) 
    }

    window.addEventListener("load",Start);

})();