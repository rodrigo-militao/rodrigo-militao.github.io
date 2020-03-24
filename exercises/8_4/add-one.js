const addOne = (array) => {
    let newarray = [];
    for (let i = 0; i < array.length; i++){
        newarray[i] = array[i] + 1;
    }
    return newarray;
}
module.exports = addOne;
