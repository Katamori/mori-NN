var errtxt;
var status;

var deletor;

var neuralModel;
var neuralTrainer;
var trainingSet;

var threshold;



document.getElementById("halt").disabled = true;





function execute(params){

    //local utilities
    document.getElementById("start").disabled = true;
    document.getElementById("halt").disabled = false;

    errtxt = document.getElementById("err");
    status = document.getElementById("val");

    //settings
    threshold = params.threshold

    //initialization
    switch(params.model){

        case "perceptronCustom":
            neuralModel = 
                new Perceptron(
                    params.modelInput[0],
                    params.modelInput[1],
                    params.modelInput[2]
                );

            neuralTrainer = new Trainer(neuralModel);

            trainingSet = XORcases;

            //train: endless repeat until threshold reached
            deletor = utils_teachPerceptron()


            break;

        case "perceptronOfficial":
            neuralModel = 
                new Architect.Perceptron(
                    params.modelInput[0],
                    params.modelInput[1],
                    params.modelInput[2]
                );

            neuralTrainer = new Trainer(neuralModel);

            trainingSet = XORcases;

            //train: endless repeat until threshold reached
            deletor = utils_teachPerceptron()


            break;

        case "hopfieldOfficial":
            neuralModel = new Architect.Hopfield(params.modelInput)
            break;

        case "liquidOfficial":
            neuralModel = 
                new Architect.Liquid(
                    params.modelInput.input, 
                    params.modelInput.pool, 
                    params.modelInput.output, 
                    params.modelInput.connections, 
                    params.modelInput.gates
                )
            break;       
    }

    //draw model
    RaphaelInit(r, neuralModel)

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

