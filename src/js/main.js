'use strict';
// l’opération booléenne OR
function or(){
	var perceptron = new synaptic.Architect.Perceptron(2,3,1);
	var trainer = new synaptic.Trainer(perceptron);


	trainer.XOR({
		iterations: 10000,
		error: .001,
		rate: 1
	});


	var result = Math.round(perceptron.activate([0,0])[0]);
	console.log("OR " + result);
}

or();

// l’opération booléenne AND
function and(){
	var myNetwork = new synaptic.Architect.Perceptron(2, 3, 1)
	var trainer = new synaptic.Trainer(myNetwork)

	var trainingSet = [
		  {
		    input: [0,0],
		    output: [1]
		  },
		  {
		    input: [0,1],
		    output: [0]
		  },
		  {
		    input: [1,0],
		    output: [0]
		  },
		  {
		    input: [1,1],
		    output: [1]
		  },
	]


	trainer.train(trainingSet,{
	    rate: .1,
	    iterations: 10000,
	    error: .001
	});

	var result = Math.round(myNetwork.activate([0,0])[0]);
	console.log("AND " + result);
}
and();
