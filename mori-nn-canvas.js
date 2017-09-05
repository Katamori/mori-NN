var ctx = document.getElementById("drawboard").getContext("2d");
var radius = 10;

function drawLine(from, to){
    ctx.moveTo(from);
    ctx.lineTo(to);
    ctx.stroke();
}

function drawNeuron(x, y){
    ctx.beginPath();

    console.log(x+"|"+y)

    ctx.lineWidth = 1;
    ctx.fillStyle = '#8ED6FF';
    ctx.fill();
    ctx.strokeStyle = 'blue';


    ctx.arc(x, y, radius,0,2*Math.PI);  
    ctx.stroke();

}

