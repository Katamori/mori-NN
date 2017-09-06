/*
    Edited code of the graph example
    on the official site of RaphaelJS.
    Do not edit unless REALLY necessary.
    --- Katamori
*/

function RaphaelAddNeuron(context, x, y, radius, sourceneuron, color){

    var shape = context.ellipse(x, y, radius, radius)

    shape.attr({fill: color, stroke: color, "fill-opacity": 0, "stroke-width": 2, cursor: "move"});
    shape.drag(RaphaelTools.move, RaphaelTools.dragger, RaphaelTools.up);

    RaphaelTools.shapes.push(shape)

    RaphaelTools.model_lookup[sourceneuron.ID] = shape.id
}

function RaphaelInit(context, model){

    context.clear()

    var connections = RaphaelTools.connections;
    var shapes = RaphaelTools.shapes;

    //create neuron shapes
    var y = 1;
    for(var l in model.layers){

        var layer = model.layers[l]
        
        if(typeof layer.length !== "undefined" && model.layers[l].length > 0){

            for(m=1;m<layer.length+1;m++){
                for(n=1;n<layer[m-1].list.length+1;n++){
                    RaphaelAddNeuron(context, n*100, y*100, 20, layer[m-1].list[n-1], "#000")
                }
            }

        }else if(typeof layer.list !== "undefined"){
            for(n=1;n<layer.list.length+1;n++){

                RaphaelAddNeuron(context, n*100, y*100, 20, layer.list[n-1], l=="input" ? "#21ff42" : "#e20")
            }
        }
        y++;

    }

    //create neuron connections
    for(var l in model.layers){

        var layer = model.layers[l]

        if(typeof layer.length !== "undefined" && model.layers[l].length > 0){

            for(m=0;m<layer.length;m++){
                for(c=0;c<layer[m].connectedTo.length;c++){
                    for(var cc in layer[m].connectedTo[c].connections){
                        
                        var ccc = layer[m].connectedTo[c].connections[cc]
                        connections.push(
                            context.connection(
                                RaphaelTools.shapes.find((e)=>e.id===RaphaelTools.model_lookup[ccc.from.ID]),
                                RaphaelTools.shapes.find((e)=>e.id===RaphaelTools.model_lookup[ccc.to.ID]),
                                "#fff", "#fff|5"
                            )
                        )
                    }
                }
            }

        }else if(typeof layer.connectedTo !== "undefined"){
            for(c=0;c<layer.connectedTo.length;c++){
                for(var cc in layer.connectedTo[c].connections){
                    
                    var ccc = layer.connectedTo[c].connections[cc]
                    connections.push(
                        context.connection(
                            RaphaelTools.shapes.find((e)=>e.id===RaphaelTools.model_lookup[ccc.from.ID]),
                            RaphaelTools.shapes.find((e)=>e.id===RaphaelTools.model_lookup[ccc.to.ID]),
                            "#fff", "#fff|5"
                        )
                    )
                }
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


