// PREP

// arr -> never empty, no tricky buz
// avg value sin arr -> rounding down int

function averageNum(nbrz) {
   // loop arr -> adding to sum
   // Calculate the sum of all the nums in the array
   const sum = nbrz.reduce((acc, c) => acc + c, 0) 

   // avg div sum / total num of nums in arr
   // Calculate the average by dividing the sum by the number of marks
   let average = sum / nbrz.length

   // round down
   // Round down to the nearest integer using Math.floor
   let roundAvg = Math.floor(average)

   return roundAvg
}

console.log(averageNum([2, 2, 2, 2]), 2)
console.log(averageNum([1, 2, 3, 4, 5, ]),3 )
console.log(averageNum([1, 1, 1, 1, 1, 1, 1, 2]),1 )


// Short version exampl:
const getAverage = arr => Math.floor(arr.reduce((a, c) => a + c) / arr.length)

console.log(averageNum([2, 2, 2, 2]), 2)
console.log(averageNum([1, 2, 3, 4, 5, ]),3 )
console.log(averageNum([1, 1, 1, 1, 1, 1, 1, 2]),1 )