// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(){
cats.push('Ralph');
}
function destructivelyPrependCat(){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    const a = [...cats, 'Broom'];
    return a
}
function prependCat(){
    const a = ['Arnold', ...cats]
    return a
}
function removeLastCat(){
    const a = cats.slice(0, cats.length -1)
    return a
}
function removeFirstCat(){
    const a = cats.slice(1)
    return a
}