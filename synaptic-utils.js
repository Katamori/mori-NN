function utils_printStatus(modelname){
    var resu = "Training set, expectations and output: <br>"
    trainingSet.forEach(function(data){
        resu = resu.concat(data.input+" -> "+data.output+" | "+modelname.activate(data.input)[0]+"<br>")
    });
    return resu;
}