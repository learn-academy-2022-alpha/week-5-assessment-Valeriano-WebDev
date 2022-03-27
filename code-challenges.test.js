// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    test(" takes in a string and returns a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
//      Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
//      Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
//      Expected output: "3cc3ntr1c"
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

/**   ReferenceError: codedMessage is not defined **/


 // b) Create the function that makes the test pass.

    /* Pseudo Code
   * To start we will define our function giving it a name of codedMessage.
   * The function will take in a string so, we will use str as a placeholder for the argument to be passed in.
   * Our output will be the string returned, replacing characters with the criteria given: 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
   * To accomplish this we will first split the string into an array in order to iterate through each individual letter
     using the higher order function .map.
   * In tandem with a conditional if/elseif statement we make our comparisons and return statement.
   * The replaced and returned values in the array are then rejoined to form the output string using .join
   * Running the jests test the given values and return green if successful.
*/

const codedMessage = (str) => {
        let splStr = str.split("").map(val => {
            if (val.toLowerCase() === 'a') {
                return 4
            } else if (val.toLowerCase() === 'e') {
                return 3
            } else if (val.toLowerCase() === 'i') {
                return 1
            } else if (val.toLowerCase() === 'o') {
                return 0
            } else {
                return val
            }
        })
        return splStr.join("")
    }

/**   Tests Passed **/

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("containsThisLetter", () => {
    it("takes in an array and returns all the words that have that letter in them", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(containsThisLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(containsThisLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])

    })
})

/** ReferenceError: containsThisLetter is not defined **/

// b) Create the function that makes the test pass.

/* Pseudo Code
* To start ,we will define our function giving it a name of containsThisLetter.
* The function will take in 2 arguments. An array of words and a letter. We will use both arr and letter as  placeholders for our arguments.
* Our output will all words containing the letter that we pass in .
* .filter will be utilized to iterate through each element of the array comparing each value to see if it contains the letter passed in
* Passing the argument of letter in the .includes accomplishes this for us.
* To account for words containing uppercase letters we will also use .toLowerCase()
* Running the jests test the given values and return green if successful.
*/

const containsThisLetter =(arr, letter) => {
    return arr.filter(val => val.toLowerCase().includes(letter))
}

/**   Tests Passed **/

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

//a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”", () => {
        const hand1 = [5, 5, 5, 3, 3]
//      Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
//      Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
//      Expected output: false
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)

    })
})

/** ReferenceError: fullHouse is not defined **/

// b) Create the function that makes the test pass.

/* Pseudo Code
* To start, we will define our function giving it a name of fullHouse
* The function will take in an array of numbers. We use arr as a placeholder .
* Our output will be true or false depending on  if the array contains a full house ( 1 three of a kind and 1 pair ) or not.
* There are a number of methods and approaches to this problem I can explore.
* One way I can see myself solving this is by trying to set 2 counter variable to track each of the needed conditions.
* I can also use .map to iterate over the array of numbers in conjunction with .filter to filter the hands/count.
* . sort is also another viable option.

*Update*

* After a long painful journey I have come to the solution by piecing together functionality I knew worked individually but needed
  fine-tuning to work with this particular problem.
* We begin by defining a variable called hand that we will later call to check and see if there is an occurrence of a three of a kind
  and a pair.
* .map will be used to iterate over the array , grabbing the value, index and the array itself
* Using .reduce essentially adds +1 to our hand "counter" if the value being tested appears more than once. The value passed into to reduce portion of the function
  will be each value that we iterate over when we call .map. For our return , we check to see if we had a value which occurred 3 times in the array and if we had a value that occurred twice in our array.

*/

const fullHouse = (arr) => {
    let hand = arr.map((val, i, arr) =>
        arr.reduce((a, v) => (v === val ? a + 1 : a), 0))
    return (hand.includes(3) && hand.includes(2))
}


/**   Tests Passed **/