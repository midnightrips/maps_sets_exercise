//question 1: what does the following code return
new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

//question 2: what does the following code return
[...new Set("referee")].join("") // "ref"

//question 3: What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//   0: {Array(3) => true} 
//   1: {Array(3) => false} 

//hasDuplicate
// const hasDuplicate = (arr) => {
//     const newArr = [...new Set(arr)];
//     if (arr == newArr) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//vowelCount --> accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string

// const vowels = 'aeiou';
// const vowelCount = (str) => {
//     const myMap = new Map().set(str);
//     for(let [key, val] of myMap) {
//         if (myMap.has(...vowels)) {
//             val++;
//         }
//         else {
//             myMap.delete(key, val);
//         }
//     }
//     return myMap;
// }

const isVowel = (char) => {
    "aeiou".includes(char);
}

const vowelCount = (str) => {
    const myMap = new Map();
    const lowerCaseStr = str.toLowerCase();
    for(let char of lowerCaseStr) {
        if(isVowel(char)){
            if(myMap.has(char)){
                myMap.set(char, myMap.get(char) + 1);
            }
            else {
                myMap.set(char, 1);
            }
        }
    }
    return myMap;
}
    
