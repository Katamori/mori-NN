var deletor = {};
document.getElementById("halt").disabled = true;

function execute(params){

    //local utilities
    document.getElementById("start").disabled = true;
    document.getElementById("halt").disabled = false;

    var errtxt = document.getElementById("err");
    var status = document.getElementById("val");

    //settings
    var threshold = params.threshold
    var neuralModel = [];

    //initialization
    switch(params.model){
        case "perceptronCustom":
            neuralModel = new Perceptron(2,3,1);
            break;
    }
    
    var myTrainer = new Trainer(neuralModel);

    //draw model
    RaphaelInit(r, neuralModel)


    //train: endless repeat until threshold reached
    var teachFc = function(){ 
        
        return window.setInterval(function(){

            if(myTrainer.train(trainingSet).error > threshold){
                errtxt.innerHTML = "error: "+myTrainer.train(trainingSet).error+"<br>";
            }else{
                errtxt.innerHTML = "ended at "+myTrainer.train(trainingSet).error+"<br>";
            }

            document.getElementById("val").innerHTML = utils_printStatus(neuralModel);

        }, 5)
    }

    deletor = teachFc()

}

function halt(){

    window.clearInterval(deletor);

    document.getElementById("start").disabled = false;
    document.getElementById("halt").disabled = true;

}

function deleteModel(){
    document.getElementById("err").innerHTML = "";
    document.getElementById("val").innerHTML = "";
}