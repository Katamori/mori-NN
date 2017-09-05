function utils_printStatus(modelname){
    var r = "Training set, expectations and output: <br>"
    trainingSet.forEach(function(data){
        r = r.concat(data.input+" -> "+data.output+" | "+modelname.activate(data.input)[0]+"<br>")
    });
    return r;
}