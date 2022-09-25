const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

const binarySearch = (array, item) => {
    let start = 0
    let end = array.length
    let mid;
    let found = false 
    let position = -1

    while (found === false && start <= end) {
        count++
        mid = Math.floor((start + end) / 2);
        if (array[mid] === item) {
            found = true 
            position = mid 
            return position
        }
        if (item < array[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return position
}

console.log("binarySearch(array, 8)", binarySearch(array, 4))

console.log("count", count)
