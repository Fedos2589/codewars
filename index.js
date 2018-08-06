// Your task is to sort a given string. Each word in the String will contain a single number.
//This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String.
//The words in the input String will only contain valid consecutive numbers.

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

// Given an array of integers, remove the smallest value.
//Do not mutate the original array/list.
//If there are multiple elements with the same value, remove the one with a lower index.
//If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

let removeSmallest = (numbers) =>
  numbers
    .slice(0, numbers.indexOf(Math.min.apply(Math, numbers)))
    .concat(numbers.slice(numbers.indexOf(Math.min.apply(Math, numbers)) + 1, numbers.length))

removeSmallest([5,3,2,1,4])

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// a being 1, b being 2, etc.

let alphabetPosition = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .map(symbol => symbol.charCodeAt(0) - 96)
    .join(' ')

// The new "Avengers" movie has just been released!
// There are a lot of people at the cinema box office standing in a huge line.
// Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk.
// He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

let tickets = (peopleInLine) => {
  const answers = {
    true: 'YES',
    false: 'NO'
  }

  let bills25 = 0
  let bills50 = 0

  let res = peopleInLine.reduce((acc, cur) => {
    switch(cur) {
      case 25:
        bills25++
        return true
      case 50:
        if (bills25) {
          bills25--
          bills50++
          return true
        } else {
          return false
        }
      case 100:
        if (bills25 && bills50) {
          bills25--
          bills50--
          return true
        } else if (bills25 > 2) {
          bills25 = bills25 - 3
          return true
        } else {
          return false
        }
    }
  }, true)

  return answers[res]
}

tickets([25,25,50,100,25,50,25,100])

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical
// order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

// Beware: r must be without duplicates.
// Don't mutate the inputs.

let inArray = (arr1, arr2) =>
  arr1
    .filter(item => arr2.find(targetItem => targetItem.includes(item)))
    .sort()

inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

let anagrams = (word, words) =>
  words
    .filter(curWord => curWord.split('').every(letter => word.includes(letter)))
    .filter(curWord => word.split('').every(letter => curWord.includes(letter)))

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])

// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

// For example, take 153 (3 digits):

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):

//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number.

// Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

let narcissistic = (value) =>
  value === value
            .toString()
            .split('')
            .reduce((acc, cur) => {return acc + Math.pow(cur, value.toString().split('').length)}, 0)

narcissistic( 371 )

// A string is considered to be in title case if each word in the string is either
// (a) capitalised (that is, only the first letter of the word is in upper case) or
// (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words).
// The list of minor words will be given as a string with each word separated by a space.
// Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

let titleCase = (target, exceptions) => {
  let isException = (word) =>
    exceptions
      ? exceptions.toLowerCase().split(' ').includes(word.toLowerCase())
      : false

  return target
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.substring(1))
          .map((word, index) => isException(word) && index > 0 ? word.toLowerCase() : word)     
}

titleCase('THE WIND IN THE WILLOWS', 'The In')

// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second
// character of the final pair with an underscore ('_').

let splitTwo = (str) => {
  str = str.length % 2 !== 0 ? str + '_' : str
  return str.replace(/(\w\w)/g, '$1 ').trim()
}

// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

let findOdd = (arr) => {
  let counter = 0
  for (let i in arr) {
    if (arr[i] === arr[0]) {
      counter++
    }
  }
  return counter % 2 !== 0 ? arr[0] : findOdd(arr.filter(item => item !== arr[0]))
}
 
// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// #Examples:

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]


let listSquared = (m, n) => {
  let getAllDevisors = (number) => {
    let devisorsArray = []

    for (let i = 1; i <= number; i++) {
      if (number % i === 0) devisorsArray.push(i)
    }

    return devisorsArray
  }

  let squaredDevisorsSum = (arr) => arr.map(item => item * item).reduce((acc, cur) => acc + cur)

  let result = []

  for (let i = m; i <= n; i++) {
    if (Number.isInteger(Math.sqrt(squaredDevisorsSum(getAllDevisors(i))))){
      result.push([i, squaredDevisorsSum(getAllDevisors(i))])
    }
  }

  return result
}

// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber.
// We followed him to a secret warehouse, where we assume to find all the stolen stuff.
// The door to this warehouse is secured by an electronic combination lock.
// Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). 
// E.g. instead of the 1 it could also be the 2 or 4.
// And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks.
// You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm.
// That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations?
// It would be nice to have a function, that returns an array (or a list in Java and C#) of all variations for an observed PIN with a length of 1 to 8 digits.
// We could name the function getPINs (get_pins in python, GetPINs in C#).
// But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's.
// We already prepared some test cases for you.

// Detective, we count on you!

let getPINs = (observed) => {
  const adjacents = {
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['2', '3', '6'],
    4: ['1', '4', '5'],
    5: ['2', '4', '5', '6', '8'],
    6: ['3', '5'. '6', '9'],
    7: ['4', '7', '8'],
    8: ['5', '7', '8', '9', '0'],
    9: ['6', '8', '9'],
    0: ['8', '0']
  }
  
}




