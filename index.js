// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

let order = (words) => {
  let wordsArr = words.split(' ')
  let newWordsArr = []

  for (let i in wordsArr) {
    newWordsArr.push(wordsArr.find(item => item.indexOf(parseInt(i) + 1) != -1))
  }

  return newWordsArr.join(' ')
}

order('4of Fo1r pe6ople g3ood th5e the2')

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

let sortArray = (array) => {
  const isOdd = (number) => number % 2 !== 0
  const sortOdds = (array) => array.filter(item => isOdd(item)).sort((a, b) => a > b)

  let sortedOdds = sortOdds(array)
  let counter = 0

  return array.map((item, index) => {
    if (isOdd(item)) {
      counter++
      return sortedOdds[counter - 1]
    } else {
      return item
    }
  })
}

sortArray([5, 3, 1, 8, 0])

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

let squareDigits = (num) =>
  parseInt(
    num
      .toString()
      .split('')
      .map(item => Math.pow(parseInt(item), 2))
      .join('')
  )

squareDigits(9119)

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

let removeSmallest = (numbers) =>
  numbers
    .slice(0, numbers.indexOf(Math.min.apply(Math, numbers)))
    .concat(numbers.slice(numbers.indexOf(Math.min.apply(Math, numbers)) + 1, numbers.length))

removeSmallest([5,3,2,1,4])

