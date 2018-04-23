var text = document.getElementById("h1");
var w = 0;
function wakeUp(){
  if(w < 100)
    w += 10;
  text.innerHTML = "PT_ is " + w + "% awake.";
}

function start(){
  setInterval(function(){if(w > 0)w-=10;if(w>0)text.innerHTML = "PT_ is " + w + "% awake.";if(w==0)text.innerHTML = "PT_ is asleep.";},2000);
}
