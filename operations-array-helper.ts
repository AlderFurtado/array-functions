export {}
const addStart = (arr:any[], value:any) => {
    return [ value,...arr]
}

const addEnd = (arr:any[], value:any) => {
    return [...arr,value]
}

module.exports = { addStart, addEnd };