const addBegin = (arr: any[], value: any) => {
    return [value, ...arr]
}

const addEnd = (arr: any[], value: any) => {
    return [...arr, value]
}

const removeFirst = (arr: any[]) => {
    return arr.filter((_, index) => index != 0)
}

const removeLast = (arr: any[]) => {
    return arr.filter((_, index) => index != arr.length - 1)
}

const removeByValue = (arr: any[], value: any) => {
    return arr.filter((a) => a != value)
}

const removeByKey = (arr: any[], key: string = "id", value: any) => {
    return arr.filter((a) => a[key] !== value)
}

const getLast = (arr: any[]) => {
    return arr[arr.length - 1]
}

const getFirst = (arr: any[]) => {
    return arr[0]
}

const getByIndex = (arr: any[], index: number) => {
    return arr.find((_, i) => i == index)
}

const getByKeyValue = (arr: any[], key: any, value: any) => {
    return arr.filter((a) => a[key] === value)[0]
}

const updateValue = (arr: any[], oldValue: any, newValue: any, key?: any) => {
    if (!key) {
        let hasFound = false
        return arr.map((a) => {
            if (a == oldValue && hasFound == false) {
                hasFound = true
                return newValue
            }else{
                return a
            }
        })
    } else {
        let hasFound = false
        return arr.map((a) => {
            if (a[key] == oldValue && hasFound == false) {
                hasFound = true
                return {...a,[key]: newValue}
            }
            return a
        })
    }
}

const updateAllValue = (arr: any[], oldValue: any, newValue: any, key?: any) => {
    if(!key) {
        return arr.map((a) => {
            if (a == oldValue) return newValue
            return a
        })
    }else{
        return arr.map((a) => {
            if (a[key] == oldValue) return {...a,[key]: newValue}
            return a
        })
    }
    
}

// const updateValueByKey = (arr: any[], key: any, oldValue: any, newValue: any) => {
//     let hasFound = false
//     return arr.map((a) => {
//         if (a == oldValue && hasFound == false) {
//             hasFound = true
//             return newValue
//         }
//         return a
//     })
// }

export {
    addBegin,
    addEnd,
    removeFirst,
    removeLast,
    removeByValue,
    removeByKey,
    getLast,
    getFirst,
    getByIndex,
    getByKeyValue,
    updateValue,
    updateAllValue
}