var contractABI = [
  {
    constant: true,
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];

var contractAddress = "0xAF183E27799593F5caAf02b26526A0a7a8200787";

var web3 = new Web3("http://localhost:9545");

var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener("DOMContentLoaded", () => {
  helloWorld.methods
    .hello()
    .call()
    .then((result) => {
      document.getElementById("hello").innerHTML = result;
    });
});
