function utils_printStatus(modelname){
    var resu = "Training set, expectations and output: <br>"
    trainingSet.forEach(function(data){
        resu = resu.concat(data.input+" -> "+data.output+" | "+modelname.activate(data.input)[0]+"<br>")
    });
    return resu;
}

function utils_teachPerceptron(){ 
    
    return window.setInterval(function(){

        if(neuralTrainer.train(trainingSet).error > threshold){
            errtxt.innerHTML = "error: "+neuralTrainer.train(trainingSet).error+"<br>";
        }else{
            errtxt.innerHTML = "ended at "+neuralTrainer.train(trainingSet).error+"<br>";
        }

        document.getElementById("val").innerHTML = utils_printStatus(neuralModel);

    }, 5)
}