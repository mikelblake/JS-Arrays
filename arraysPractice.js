//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item the given array.

  //Code Here
var first = function(arr) {
  return arr[0];
}

//Next problem



var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item the given array.


  //Code Here
var last = function(arr) {
  return arr[arr.length - 1];
}

//Next Problem


var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

  //Code Here
var looper = function(family) {
  for (var i = 0; i < family.length; i++) {
    alert(i)
  }
}

//Next problem



var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

  //Code Here
var reversedLooper = function(letters) {
  var newArr = letters.reverse();
  for (var i = 0; i < newArr.length; i++) {
    alert(letters[i]);
  }
}

reversedLooper(letters);
//Next Problem


var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

  //Code Here
var evenFinder = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
}
evenFinder(nums);
//Next problem

var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) 
//and the second item in the Array being the odds array(all the odd values from nums).


  //Code Here
var divider = function(nums, evens, odds) {
  for(var i = 0; i < nums.length; i++) {
    (function x (y) {
      if (nums[y] % 2 === 0) {
      evens.push(y);
    } else {
      odds.push(y);
    }
  })(i);
  }
  return newArr = [evens, odds];
}
divider(nums, evens, odds);

//Next Problem


var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above you're given a function that will return a random number between 0 and 30, and an array full or numbers. 
//Your job is to write a function named finder that will get a random number, 
//then loop through the array to see if that random number is in the array. 
//If it is, return true, if it's not, return false

  //Code Here
var finder = function(arr) {
  var num = getRandomArbitrary();
  for (var i = 0; i < numbers.length; i++) {
    if (arr[i] === num) {
      return true;
    } 
  }
  return false;
}
finder(numbers);

//Next problem

var str = 'this is my sentence';
//Write a function called reverse that takes is given str as it's only argument and returns that string after it's been reversed

  //Code Here
var reverse = function(str) {
  var newArr = str.split('');
  var reversedArr = newArry.reverse();
  var newStr = reversedArr.join('')
  return newStr;
}
reverse(str);

//Next Problem


var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list. 
  
  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list. 
  
  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.
*/

  //Code Here

var removeItem = function(item, arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

var addItem = function(item, arr) {
  if(arr.indexOf(item) === -1) {
    arr.push(item);
  } else {
    console.log("Nope");
  }
}

// **********  If using splice -- use reverse for loop (or add i--) **********
// for (var i = arr.length; i >= 0; i--)

//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];



//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

  //Code Here
var maker = function() {
  var numArr = [];
  for (var i = 1; i < 215; i++) {
    numArr.push(i);
  }
  return numArr;
}
maker();


//Next Problem


var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

  //Code Here
var addTen = function(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    (function x (y) { 
      var newNum = numbers[y] + 10;
    })(i);
  }
  var x = addTen();
  return x;
}
addTen(numbers);

//Next Problem



var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number to both arr1 and arr2.
//Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.

  //Code Here

var newfunc = function(array1, array2) {
  if(array1.length > array2.length) {
    return array1;
  } else {
    return array2;
  }
}

newfunc(array1, array2);


/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example)
  'both' should return a new array full of numbers that are found in both arr1 and arr2.
*/

  //Code Here

var both = function(array1, array2) {
  return array1.concat(array2);
}

