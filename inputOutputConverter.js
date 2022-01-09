const expandedString = (input) => {
    // for invalid input an empty string is returned

    let countX = 0; // to count the number of x in the input string
    for(let i = 0; i<input.length; i++){
        if(Number.isNaN(Number(input.at(i)))){
            if(input.at(i)!=="x") return ""; // if there are any character other than x or number then it is invalid input
        }
        if(input.at(i) === "x"){
            countX+=1;
        }
    }
    if(countX&1) return ""; // if number of x in the input are not in pair then it is invalid input

    let start = false, inputExpanded = "", mul = "";
    // main algo to expand the input string
    for(let i = 0; i<input.length; i++){
        if(input.at(i) === "x" && !start) start = true;
        else if(input.at(i) === "x" && start){
            start = false;
            if(Number(mul)>=0 && Number(mul)<=81) inputExpanded = inputExpanded.padEnd(inputExpanded.length + Number(mul), ".");
            mul = "";
        }
        else if(input.at(i) !== "x" && start) mul += input.at(i);
        else if(input.at(i) !== "x" && !start) inputExpanded += input.at(i);
    }
    if(inputExpanded.length !== 81) return "";
    for(let i = 0; i<81; i++){
        let val = Number(inputExpanded.at(i));
        // if there is number in the expanded string then that should range from 1 to 9
        if(!Number.isNaN(val)){
            if(val<1 || val > 9) return "";
        }
        // and if its not a number then it should be a dot
        else{
            if(inputExpanded.at(i) !== ".") return "";
        }
    }
    return inputExpanded;    
};

// converts the expanded input string to a double dimensional array
const boardInput = (inputExpanded) => {
    if(inputExpanded === "") return []; // if the inputExpanded is the empty string then return empty string
    let board = [], count = 0, helper = [];
    for(let i = 0; i<81; i++){
        if(inputExpanded.at(i) === ".") helper.push(0);
        else helper.push(Number(inputExpanded.at(i)));
        count++;
        if(count%9 === 0){
            board.push(helper);
            count = 0;
            helper = [];
        }
    }
    return board;
};

const inputConverter = (input) => {
    const inputExpanded = expandedString(input);
    return boardInput(inputExpanded);
};

const outputConverter = (output) => {
    let outputString = "";
    for(let i = 0; i<output.length; i++){
        for(let j = 0; j<output[i].length; j++){
            outputString+=output[i][j];
        }
    }
    return outputString;
};


module.exports = {inputConverter, outputConverter};
