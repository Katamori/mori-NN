var deletor;

var neuralModel;
var neuralTrainer;


document.getElementById("halt").disabled = true;

function execute(params){

    //local utilities
    document.getElementById("start").disabled = true;
    document.getElementById("halt").disabled = false;

    var errtxt = document.getElementById("err");
    var status = document.getElementById("val");

    //settings
    var threshold = params.threshold

    //initialization
    switch(params.model){

        case "perceptronCustom":
            neuralModel = 
                new Perceptron(
                    params.modelInput[0],
                    params.modelInput[1],
                    params.modelInput[2]
                );
            break;
            
        case "hopfieldOfficial":
            neuralModel = new Architect.Hopfield(params.modelInput)
    }
    
    neuralTrainer = new Trainer(neuralModel);
    console.log(neuralModel)

    //draw model
    RaphaelInit(r, neuralModel)


    //train: endless repeat until threshold reached
    var teachFc = function(){ 
        
        return window.setInterval(function(){

            if(neuralTrainer.train(trainingSet).error > threshold){
                errtxt.innerHTML = "error: "+neuralTrainer.train(trainingSet).error+"<br>";
            }else{
                errtxt.innerHTML = "ended at "+neuralTrainer.train(trainingSet).error+"<br>";
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