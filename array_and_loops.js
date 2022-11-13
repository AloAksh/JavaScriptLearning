const fruits = ['apple', 'orange', 'peach', 'blue berry', 'mango'];

// ******  FOR LOOP : METHOD 1  **********

/*for(let i=0; i < 3*fruits.length; i++){
    console.log(fruits[i%fruits.length]);
}

console.log();

// ************   FOR LOOP : METHOD 2    ********

for(const luke of fruits){
    console.log(luke);
}
*/

const numbers = [1, 2, 3, 4, 5, 6];

// *******   DOUBLING FUNCTION THAT IS GETTING AN ARRAY AS ARGUMENT AND RETURNS AN ARRAY    *********

/*const double = (numbers) =>{
    let result = []

    for(const i of numbers){
        result.push(i * 2);
    }
    return result;
}

console.log(double(numbers));
*/


// ************        SQUARE FUNCTION THAT GETS AN ARRAY AND RETURNS AN ARRAY     ********
/*
const square = (number) =>{
    let result = []
    for(const i of number){
        result.push(i ** 2);
    }
    return result;
} 

console.log(square(numbers));
*/

sentence = 'Hello bro. How you doin, bro. Happy Birthday Bro.';

// ********** COUNTING FUNCTION COUNTS THE NUMBER OF LETTER IN THE SENTENCE THAT IS PASSED AS AN ARGUMENT AN RETURN THE COUNT (NUMBER) including spaces  **********
/*
const letterCounter = (sentences)  =>{
    let count = 0;
    for(const i of sentences){
        count++;
    }
    return count;
}

console.log(letterCounter(sentence));
*/

//******** counting function same as abpve but without counting the spaces ********

/*
const letterCountNoSpace = (sentence) => {
    let count = 0;
    for(const i of sentence){
        if(i == ' ')
            continue;
        else count++;
    }
    return count;
}

console.log(letterCountNoSpace(sentence));
*/


//******* COUNTING FUNCTION LETTERS AND WORDS  *******
/*
const letterFreq = (phrase) => {
     const letters = {};
     
     for(const letter of phrase){
        if (letter in letters)
            letters[letter]++;
        else letters[letter] = 1; 
     }

     return letters;
}

console.log(letterFreq(sentence));


const wordFreq = (phrase) => {
    let frequency = {}
    phrase = phrase.toLowerCase().split(' ');
    for(const word of phrase){
        if (word in frequency)
            frequency[word]++;
        else frequency[word] = 1;
    } 
    
    return frequency;
}

console.log(wordFreq(sentence));
*/

