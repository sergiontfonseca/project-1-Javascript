function validate(numberSet){
    if (numberSet.length !== 9){
        return false;
    }
    
    for (let num of numberSet){
        if (typeof num !== 'number' || num > 9 || num < 1){
            return false;
        }
    }
    
    return checkIfAllAreDifferent(numberSet);
}

function checkIfAllAreDifferent(arr) {
    return new Set(arr).size === arr.length;
}