var binaryGap = function(n) {
    let arr = n.toString(2).split('')
    let firstOne = null, secondOne = null, dist = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1 && firstOne == null) {
            firstOne = i
        }
        if (arr[i] == 1 && firstOne != null) {
            secondOne = i
            if (secondOne - firstOne > dist) dist = secondOne - firstOne
            firstOne = secondOne
            secondOne = null
        }
    }
    return dist
}