// l’opération booléenne OR

var perceptron = new synaptic.Architect.Perceptron(2,3,1);
var trainer = new synaptic.Trainer(perceptron);


trainer.XOR({
	iterations: 10000,
	error: .001,
	rate: 1
});


var result = perceptron.activate([0,0])[0];
console.log(result);



