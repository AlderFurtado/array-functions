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
            } else {
                return a
            }
        })
    } else {
        let hasFound = false
        return arr.map((a) => {
            if (a[key] == oldValue && hasFound == false) {
                hasFound = true
                return { ...a, [key]: newValue }
            }
            return a
        })
    }
}

const updateAllValue = (arr: any[], oldValue: any, newValue: any, key?: any) => {
    if (!key) {
        return arr.map((a) => {
            if (a == oldValue) return newValue
            return a
        })
    } else {
        return arr.map((a) => {
            if (a[key] == oldValue) return { ...a, [key]: newValue }
            return a
        })
    }

}

const getMax = (arr: any[], key?: any) => {
    if (!key) {
        return Math.max(...arr)
    } else {
        const max = Math.max(...arr.map((a: any) => a[key]));
        return arr.find((a) => a[key] == max)
    }
}

const getMin = (arr: any[], key?: any) => {
    if (!key) {
        return Math.min(...arr)
    } else {
        const max = Math.min(...arr.map((a: any) => a[key]));
        return arr.find((a) => a[key] == max)
    }
}

const paginate = (arr: any[], limitPerPage: number) => {
    return arr.reduce((acc, val, i) => {
        let idx = Math.floor(i / limitPerPage);
        let page = acc[idx] || (acc[idx] = []);
        page.push(val);

        return acc;
    }, []);
}

const sort = (arr: any[], order: "DESC"|"ASC", key?:any) => {
    if(!key){
        return arr.sort((a:any,b:any) => {
            if(order == "DESC")return  b - a
            else return  a - b
        })
    }else{
        return arr.sort((a:any,b:any) => {
            if(order == "DESC")return  b[key] - a[key]
            else return a[key] - b[key] 
        })
    }
}


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
    updateAllValue,
    getMax,
    getMin,
    paginate,
    sort,
}