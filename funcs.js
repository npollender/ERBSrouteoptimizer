function parseArr(arr) {
    if (!Array.isArray(arr)) return arr
    let str = ''
    for (let key in arr) {
        str += arr[key] + ', '
    }
    str = str.slice(0, -2)
    return str
}