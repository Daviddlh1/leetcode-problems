function findNumbers(nums) {
    let amount = 0
    for(let n of nums) {
        console.log((''+ n).length)
        if((''+ n).length % 2 === 0) amount++
    }

    return amount
}

console.log(findNumbers([12,345,2,6,7896]))