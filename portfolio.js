var tablinks=document.getElementsByClassName("tabcontent");
var tabconts=document.getElementsByClassName("tabinfo");
function opentab(tabname){
    
    for (tabcont of tabconts){
        tabcont.classList.remove("activeinfo");
    }
    document.getElementById(tabname).classList.add("activeinfo");
}
