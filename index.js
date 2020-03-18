const brain = require('brain.js');
 
// provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5, // ¯\_(ツ)_/¯
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
  };
  
  var net = new brain.NeuralNetwork(config);

  net.train([
      {
      input: [ 35 , 1 , 1 , 0, 0, 2, 0 ],
      output: {
        Diagnose: 1
      }
     },
      {
      input: [44 , 1 , 0 , 2, 1, 0, 0  ],
      output: {
        Diagnose: 0
      }
     },
     {
        input: [ 65 , 1 , 1 , 1, 0, 2, 0 ],
        output: {
            Diagnose: 1
        }
     },
     {
        input: [ 45 , 0 , 0 , 0, 0, 1, 0 ],
        output: {
            Diagnose: 0
        }
     },
     {
        input: [ 77 , 1 , 0 , 1, 0, 0, 0 ],
        output: {
            Diagnose: 0
        }
     },
     {
        input: [ 65 , 1 , 1 , 1, 1, 1, 1 ],
        output: {
            Diagnose: 1
        }
     },
     {
        input: [ 85 , 0 , 0 , 1, 0, 0, 0],
        output: {
            Diagnose: 1
        }
     },
     {
        input: [ 35 , 1 , 1 , 1, 0, 0, 0],
        output: {
            Diagnose: 1
        }
     },
     {
        input: [ 45 , 1 , 0 , 1, 1, 0, 0],
        output: {
            Diagnose: 1
        }
     },
     
     {
        input: [ 85 , 1 , 1 , 1, 1, 0, 0],
        output: {
            Diagnose: 1
        }
     },
     {
        input: [ 37 , 0 , 1 , 1, 1, 0, 0],
        output: {
            Diagnose: 1
        }
     },
     
  ], {interation: 1000, log: true});
  
  var output = net.run([ 35 , 1 ,1 , 1, 1, 1, 1]);  
  
  console.log(output)