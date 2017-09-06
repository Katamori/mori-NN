var settings = {

    default: {
        threshold: 0.0000000001,
        model: "perceptronCustom",
        modelInput: [2,3,1]
    },

    perceptron_XOR: {
        threshold: 0.0000000001,
        model: "perceptronOfficial",
        modelInput: [2,3,1]
    },   

    hopfield_XOR: {
        threshold: 0.0000000001,
        model: "hopfieldOfficial",
        modelInput: 2    
    },

    liquid_XOR: {
        threshold: 0.0000000001,
        model: "liquidOfficial",
        modelInput: {
            input: 2,
            pool: 5,
            output: 1,
            connections: 10,
            gates: 10
        }    
    },





    





}