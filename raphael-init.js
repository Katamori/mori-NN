/*
    Edited code of the graph example
    on the official site of RaphaelJS.
    Do not edit unless REALLY necessary.
    --- Katamori
*/

function RaphaelAddNeuron(context, x, y, radius, sourceneuron){

    var shape = context.ellipse(x, y, radius, radius)

    var color = "#cf9";
    shape.attr({fill: color, stroke: color, "fill-opacity": 0, "stroke-width": 2, cursor: "move"});
    shape.drag(RaphaelTools.move, RaphaelTools.dragger, RaphaelTools.up);

    RaphaelTools.shapes.push(shape)

    RaphaelTools.model_lookup[sourceneuron.ID] = shape.id
}

function RaphaelInit(context, model){

    var connections = RaphaelTools.connections;
    var shapes = RaphaelTools.shapes;

    //create neuron shapes
    var y = 1;
    for(var l in model.layers){

        var layer = model.layers[l]

        if(typeof layer.length !== "undefined" && model.layers[l].length > 0){

            for(m=1;m<layer.length+1;m++){
                for(n=1;n<layer[m-1].list.length+1;n++){
                    RaphaelAddNeuron(context, n*100, y*100, 20, layer[m-1].list[n-1])
                }
            }

        }else{
            for(n=1;n<layer.list.length+1;n++){
                RaphaelAddNeuron(context, n*100, y*100, 20, layer.list[n-1])
            }
        }
        y++;

    }

    //create neuron connections
    for(var l in model.layers){

        var layer = model.layers[l]

        if(typeof layer.length !== "undefined" && model.layers[l].length > 0){

            for(m=0;m<layer.length;m++){
                for(n=0;n<layer[m].list.length;n++){
                    //layer[m].list[n]
                }
            }

        }else{
            for(n=0;n<layer.list.length1;n++){
                //layer.list[n]
            }
        }
        y++;

    }


    //connections.push(context.connection(shapes[1], shapes[2], "#fff", "#fff|5"));

}




var r = Raphael("drawboard", 640, 480)

var RaphaelTools = {

    shapes: [],         //shapes to draw
    connections: [],    //connections between shapes to draw
    model_lookup: [],   //neuron ID -> Raphael shape ID association

    dragger: function () {
        this.ox = this.type == "rect" ? this.attr("x") : this.attr("cx");
        this.oy = this.type == "rect" ? this.attr("y") : this.attr("cy");
        this.animate({"fill-opacity": .2}, 500);
    },

    move: function (dx, dy) {
        this.attr(this.type == "rect" ? {x: this.ox + dx, y: this.oy + dy} : {cx: this.ox + dx, cy: this.oy + dy});
        for (var i = RaphaelTools.connections.length; i--;) {
            r.connection(RaphaelTools.connections[i]);
        }
    },

    up: function () {
        this.animate({"fill-opacity": 0}, 500);
    }
}


