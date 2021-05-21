function callback () {
    

}

function events (obj,typ,opts) {
    if (obj) {
        obj.addEventListener(typ,callback,opts);
    }
}

window.onload = function () {
events(document.getElementById('tmp'),"click",callback,null);
}