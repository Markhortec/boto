
var counter = 0;
        function increment(){
            counter++;
            if (counter%2==0) {
                document.querySelector(".colrdiv").style.height ="15rem";
                document.querySelector(".menu").style.display ="block"; 
            } 
            else if(counter%2!=0){
                document.querySelector(".colrdiv").style.height ="0.3rem";
                document.querySelector(".menu").style.display ="none"; 
            }
        }


    
// for hover 
 

function mouseover() {
    document.querySelector(".bsingle").style.display="block";
    setInterval(mouseover,1000);
}
function mouseout(){
    document.querySelector(".bsingle").style.display="none";
    setInterval(mouseover,clearInterval)
}