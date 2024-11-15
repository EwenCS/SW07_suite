var isStartingPosition = false;
var listY
var listX
function InitialisationCanvas() {
    canvas = document.getElementById('canvas_trajectoire');
    canvas.width = 1100;
    canvas.height =  800;
    ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = './plan.png';
    img.onload = function () {
    ctx.drawImage(img, 0, 0);
 
        }
        document.getElementById("form_creation").style.display = "none";    
        document.getElementById("form_charger").style.display = "none";
   }

    InitialisationCanvas();

    function InitialisationNavTrajectoire(){

    document.getElementById("creer").addEventListener('click',function(){
        document.getElementById("form_creation").style.display = "block";
        document.getElementById("form_charger").style.display = "none";

    });
    document.getElementById("charger").addEventListener('click',function(){
        document.getElementById("form_creation").style.display = "none";
        document.getElementById("form_charger").style.display = "block";

    });

    document.getElementById("Tracer").addEventListener('click', function(){
        y=Number(document.getElementById("y").value);
        x=Number(document.getElementById("x").value);
        dessinerTrajectoire(x,y)
    });

    document.getElementById('effacer').addEventListener('click',function(){
        var canvas = document.getElementById("canvas_trajectoire");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        InitialisationCanvas()
    });

}
InitialisationNavTrajectoire();


isStartingPosition=false;
lastX=0;lastY=0;

    function dessinerTrajectoire(x,y) {
        canvas = document.getElementById('canvas_trajectoire');
        ctx = canvas.getContext('2d')
        





        if(!isStartingPosition){   
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.moveTo(x-5,y-5);    
        ctx.lineTo(x+5,y+5);  
        ctx.moveTo(x+5,y-5);   
        ctx.lineTo(x-5,y+5);             
        ctx.stroke();
        ctx.closePath(); 
        isStartingPosition = true;
      
    }
        
    else{
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.moveTo(x-5,y-5);    
        ctx.lineTo(x+5,y+5);  
        ctx.moveTo(x+5,y-5);   
        ctx.lineTo(x-5,y+5);             

        ctx.moveTo(lastX,lastY);  
        ctx.lineTo(x,y);            
        ctx.stroke();
        ctx.closePath(); 
    }
    lastX = x;
    lastY = y;
}

function enregistrerTrajectoire() {
    
}


        
    