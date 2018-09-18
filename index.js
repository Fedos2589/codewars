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

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells
//the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment.
//Otherwise return NO.

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

// Write a function that will find all the anagrams of a word from a list.
//You will be given two inputs a word and an array with words.
// You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

let anagrams = (word, words) =>
  words
    .filter(curWord => curWord.split('').every(letter => word.includes(letter)))
    .filter(curWord => word.split('').every(letter => curWord.includes(letter)))

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])

// A Narcissistic Number is a number which is the sum of its own digits,
//each raised to the power of the number of digits.

// For example, take 153 (3 digits):

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):

//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number.

// Error checking for text strings or other invalid inputs is not required,
//only valid integers will be passed into the function.

let narcissistic = (value) =>
  value === value
            .toString()
            .split('')
            .reduce((acc, cur) => {return acc + Math.pow(cur, value.toString().split('').length)}, 0)

narcissistic( 371 )

// A string is considered to be in title case if each word in the string is either
// (a) capitalised (that is, only the first letter of the word is in upper case) or
// (b) considered to be an exception and put entirely into lower case unless it is the first word,
//which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words).
// The list of minor words will be given as a string with each word separated by a space.
// Your function should ignore the case of the minor words string --
//it should behave in the same way even if the case of the minor word string is changed.

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
 
// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764.
// The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors
//is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string,
//each subarray having two elements,
// first the number whose squared divisors is a square and then the sum of the squared divisors.

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

// Format any integer provided into a string with "," (commas) in the correct places.

// Example:

// numberFormat(100000); // return '100,000'
// numberFormat(5678545); // return '5,678,545'
// numberFormat(-420902); // return '-420,902'

let numberFormat = (number) => {
  let lastIndex = number.toString().charAt(0) === '-' ? number.toString().length - 2 : number.toString().length - 1

  return number
    .toString()
    .split('')
    .reverse()
    .map((digit, index) => ((index + 1) % 3 === 0 && index < lastIndex) ? ',' + digit : digit)
    .reverse()
    .join('')
}

// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as
//an integer power of another positive integer.
// More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power.
// If it is a perfect power, return a pair m and k with mk = n as a proof.
// Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs.
// For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions.
// However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

// Examples
// Test.describe("perfect powers", function(){
//   Test.it("should work for some examples",function(){
//     Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
//     Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
//     Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
//   });
// });

let isPP = (n) => {
  for (let i = 2; i < n; i++) {
    for (let k = 2; Math.pow(i, k) <= n; k++) {
      if (Math.pow(i, k) === n) return [i, k]
    }
  }

  return null
}

// The marketing team are spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// If the final result is longer than 140 chars it must return false.
// If the input is a empty string it must return false.
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// Example Input to Output:

// " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"

// " Hello World " => "#HelloWorld"

let generateHashtag = (str) =>
  '#' + str
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substr(1))
    .join('')

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

let twoSum = (nums, target) => {
  let result = []

  nums.forEach((item1, index1) =>
    nums
      .slice(index1 + 1)
      .forEach((item2, index2) =>
        item1 + item2 === target ? result = [index1, index1 + 1 + index2] : ''))

  return result
}

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

let addTwoNumbers = (l1, l2) => {
  let arrayToNumber = (arr) => parseInt(arr.reverse().join(''))

  return (arrayToNumber(l1) + arrayToNumber(l2))
    .toString()
    .split('')
    .reverse()
    .map(item => parseInt(item))
}

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

let accum = (s) =>
  s
    .split('')
    .map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index))
    .join('-')

// You are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000
//(In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases).
// You do not need to test for this.
// This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

let getMiddle = (s) => {
  let lengthIsOdd = (str) => (str.length / 2) % 2 > 0

  if (s.length < 3) {
    return s
  }

  return lengthIsOdd(s)
    ? s.substr(parseInt(s.length / 2), 1)
    : s.substr(parseInt(s.length / 2) - 1, 2)
}

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

let getCount = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u']

  return str.split('').filter(letter => vowels.find(vowel => vowel === letter)).length
} 

// In this little assignment you are given a string of space separated numbers,
//and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

let highAndLow = (numbers) => {
  let numArr = numbers.split(' ')

  let maxArr = Math.max.apply(Math, numArr)
  let minArr = Math.min.apply(Math, numArr)

  return `${maxArr} ${minArr}`
}

// Check to see if a string has the same amount of 'x's and 'o's.
//The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

let XO = (str) => {
  let countX = str.split('').filter(letter => letter.toLowerCase() === 'x').length
  let countO = str.split('').filter(letter => letter.toLowerCase() === 'o').length

  return countO === countX
}

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
// Jaden is also known for some of his philosophy that he delivers via Twitter.
// When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Note that the Java version expects a return value of null for an empty string or null.

String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
}

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments,
//neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

let disemvowel = (str) => str.replace(/[aeiuo]/gi, '')

// A square of squares
// You like building blocks.
// You especially like building blocks that are squares.
// And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square.
// Instead, you end up with an ordinary rectangle!
// Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait!
// That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer;
// in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// is_square (-1) # => false
// is_square   0 # => true
// is_square   3 # => false
// is_square   4 # => true
// is_square  25 # => true
// is_square  26 # => false

let isSquare = (n) => Number.isInteger(Math.sqrt(n))

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

let solution = (number) => {
  let allNumbers = []

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) allNumbers.push(i) 
  }

  return allNumbers.reduce((acc, cur) => acc + cur) 
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
//which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

let persistence = (num) => {
  let counter = 0
  let numToArr = (num) => num.toString().split('')

  let digitsMultyplier = (num) => {
    if (numToArr(num).length > 1) {
      counter++
      digitsMultyplier(numToArr(num).reduce((acc, cur) => acc * cur, 1))
    } else {
      return
    }
  }

  digitsMultyplier(num)

  return counter
}

// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

let findOutlier = (integers) => {
  let oddArray = (arr) => arr.filter(item => item % 2 !== 0).length > 1

  return oddArray(integers)
    ? integers.find(item => item % 2 === 0)
    : integers.find(item => item % 2 !== 0)
}

// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.


// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

let spinWords = (str) =>
  str
    .split(' ')
    .map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ')

// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance.
// Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

// Let's assume that a song consists of some number of words.
// To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the 
// first word of the song (the number may be zero), after the last word (the number may be zero),
// and between words (at least one between any pair of neighbouring words),
// and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX"
//and cannot transform into "WUBWUBIAMWUBX".

// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music,
//he decided to find out what was the initial song that Polycarpus remixed.
// Help Jonny restore the original song.

// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters,
//the string's length doesn't exceed 200 characters

// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix.
// Separate the words with a space.

// Examples
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
//   // =>  WE ARE THE CHAMPIONS MY FRIEND

let songDecoder = (song) => song.replace(/(WUB){1,}/g, ' ').trim()

// Bob is preparing to pass IQ test.
// The most frequent task in this test is to find out which one of the given numbers differs from the others.
// Bob observed that one number usually differs from the others in evenness.
// Help Bob — to check his answers, he needs a program that among the given numbers finds one
//that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test,
//which means indexes of the elements start from 1 (not 0)

// ##Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

let iqTest = (numbers) => numbers.split(' ').indexOf(findOutlier(numbers.split(' '))) + 1

// You are given an array strarr of strings and an integer k. 
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) -->
//"abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

let longestConsec = (strarr, k) => {
  if (strarr.length < 1 || k < 1 || k > strarr.length) {
    return ''
  }

  return strarr
          .sort()
          .filter((item, index) => item === strarr.sort()[index + 1])
          .sort((prev, next) => prev.length < next.length)
          .slice(0, k)
          .join('')
}

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements
//with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

let uniqueInOrder = (iterable) => [...iterable].filter((item, index) => item !== [...iterable][index + 1])

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

let array_diff = (a, b) => a.filter(num => b.every(elem => elem !== num))

// We want to create a function that will add numbers together when called in succession.

// add(1)(2);
// // returns 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15
// and so on.

// A single call should return the number passed in.

// add(1); // 1
// We should be able to store the returned values and reuse them.

// var addTwo = add(2);
// addTwo; // 2
// addTwo + 5; // 7
// addTwo(3); // 5
// addTwo(3)(5); // 10
// We can assume any number being passed in will be valid whole number.

let add = (num) => {
  let curSum = num
  let f = (num1) => {
    curSum += num1
    return f
  }

  f.toString = () => curSum

  return f
}

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
//If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

let maxSequence = (arr) => {
  if (arr.length === 0) return 0
  let maxSum = arr.reduce((prev, cur) => prev + cur)

  arr.forEach((item, index) =>
    arr.slice(index).forEach((item1, index1, arr1) => {
      let sum = arr1
        .slice(0, arr1.length - index1)
        .reduce((prev, cur) => prev + cur)

      if (sum > maxSum) {
        maxSum = sum
      }
    }))

    if (maxSum < 0) return 0

  return maxSum
}

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

let moveZeros = (arr) =>
  arr
    .filter(x => x !== 0)
    .concat(arr.filter(x => x === 0))

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 * ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

let zeros = (n) => {
  let ZNum = 0

  for (let i = 1; Math.pow(5, i) <= n; i++) {
    ZNum += Math.floor(n / Math.pow(5, i))
  }

  return ZNum
}









