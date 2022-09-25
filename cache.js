const cacheFunction = (fn) => {
    const cache = {}
    return function (n) {
        if (cache[n]) {
            console.log("Taken from cache", cache[n])
            return cache[n]
        }
        let result = fn(n)
        console.log("Taken from function", result)
        cache[n] = result
        return result
    }
}

const factorial = (n) => {
    let result = 1
    while(n != 1) {
        result += n
        n -= 1
    }
    return result
}

const cacheFactorial = cacheFunction(factorial)

console.log("", cacheFactorial(5))
console.log("", cacheFactorial(4))
console.log("", cacheFactorial(3))
console.log("", cacheFactorial(4))
console.log("", cacheFactorial(5))
console.log("", cacheFactorial(1))
