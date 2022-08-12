# Grind 75 questions

This is a running collection of all of the grind 75 questions I have answered so far:
[https://www.techinterviewhandbook.org/grind75](https://www.techinterviewhandbook.org/grind75)
 <br>
 <br>

# Week 1

## Two Sum

##### _Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target._

##### _You may assume that each input would have exactly one solution, and you may not use the same element twice._

##### _You can return the answer in any order._
---

 For this solution iterated through the given array and added each iterable to an object that also stored its index. On each turn of the loop I would find a "partner" number by subtracting the current iterable from the target number. I would then check if the current partner was already _inside_ the object as a previous iterable. If it was I could push both that past iterable and the current iterable with their saved indexes, therefore returning the "coordinates" of the two numbers that would add up to the target.
 <br>
 <br>

 ## Valid Parentheses

 ##### _Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid._

##### _An input string is valid if:_

##### _1. Open brackets must be closed by the same type of brackets._
##### _2. Open brackets must be closed in the correct order._
---
In this solution, I initialized an object setting the relationship between open and closed parenthesis. I also initialized two sets. One for "openers" and one for "closers". I would then loop through the given string. On each step of the loop I would check if the iterable was an "opener", if so I would add it to the beginning of an array to track a record of which type of parens was open.
I would also check if the iterable was a "closer". If this is true, I would check the beginning of my paren tracking array. If the first item in the array was the complementary opener, it would get shifted off of the array. Once a paren has been closed, there is no more reason to track it. If they were not a match, I return false.
 <br>
 <br>

## Merge Two Sorted Lists

##### _You are given the heads of two sorted linked lists list1 and list2_.

##### _Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists._

##### _Return the head of the merged linked list._
---
This was my very first time using linked lists, so I had to do a lot of studying of the concept to get through this one.

I started with weeding out some of the easy edge cases. I then created a method that would insert a number in order to the first provided list. It includes logic on how to insert a given number _between_ two numbers in the list, and how to insert numbers at the end, if the numbers are outside the range of the first list. I also included logic that would add data values to the beginning of the list.

I then wrote a merge method that would iterate through the second list and implement this, "add in order" method for each value in the second list. 

**I plan to revisit this in the future. I believe that this one, while functional, could be a bit more performant*
 <br>
 <br>

## The Best Time to Buy and Sell Stock


##### _You are given an array prices where prices[i] is the price of a given stock on the ith day.s_

##### _You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock._

##### _Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0._
---
In this solution I was challenged by having to continually improve my answer to account for new edge cases for each new test leet code provided. As a result, I feel like I have a very solid performant solution.

I start by initializing a bunch of variables:
* lowest -> starts as a high safe number
* highest -> starts as a low safe number
* diff -> used to calculate the difference between the current highest and lowest prices
* profit -> initialized at 0, but will eventually return the maximum possible profit
* lowestIndex -> it turned out to be very important to keep track of the current index of whatever the lowest number was

I would then loop through the array of prices. If the price was less than the current lowest number, lowest would become the current price. I then record the current index. The current highest would also be reset.

To find the highest number, I would skip over the first index, since the highest could never come first, and then I would check if the current highest was less than or equal to the current price AND if its index was higher than the current lowest number. If these conditions are met, highest gets set to the current price, and a new diff is calculated. If that diff is more than the current profit, profit is reassigned to this new diff.

The returned profit will either equal the best possible max or 0, if the necessary conditions were not met.

<br>
<br>

## Valid Palindrome

##### _A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers._
---
This one was easy for me because I'd actually solved it a few times before :)

I started by doing some basic string sanitization by getting rid of spaces and punctuation, and converting everything to lowercase. However, due to some of the test cases, I had to include a check at this stage to check for strings that were just one piece of punctuation or just a single space.

After I was sure I had an array of only lowercase letters and numbers, I was then able to loop through the array from both ends, and making sure these two indexes matched. If there is a mismatch, the loop ends and returns false. If the beginning index becomes higher than the ending index, I know that I am crossing into characters that have already been checked, and I can safely return true.