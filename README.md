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
<br>
<br>

## Invert Binary Tree

##### _Given the root of a binary tree, invert the tree, and return its root._
---
This was my first ever time working with binary trees! I found this to be a much smaller learning curve especially after all of the time I spent on linked lists. Before tackling this one I spent a lot of time getting familiar with binary trees as a concept and played around with lots of different methods I could use. Including one that would print all of the nodes in pre order by storing them on a queue. You could say I went wild.

It turned out that after all my messing around with trees, my actual solutions turned out to be a lot simpler that I thought it would be. I started with a null check to make sure the tree root was not empty, and then another one to return the root once the current node lefts and rights all returned null. To do the actually inverting, I saved the left node in a temporary variable, assigned the right to the left, and then gave the right value the stored previous left data. I then did a recursive call of the function for each left and right node throughout the tree, while checking that neither of them were null. Finally at the end I returned the root.
<br>
<br>

## Valid Anagram

##### _Given two strings s and t, return true if t is an anagram of s, and false otherwise._

##### _An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once_
---

This one was pretty easy actually. I started by checking for some edge cases. In order to be tested, strings but be the same length and they are automatically true if they are equal. I then created two objects, one for each string. Next I looped through the two strings and added their letters and the number of times they appear to their relevant object. After that I made a new loop that that will compare the values of the two objects and will return false if there is an inconsistency. If everything goes smoothly, the function returns true.
<br>
<br>

## Binary Search

##### _Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1._

##### _You must write an algorithm with O(log n) runtime complexity._
---
I had previously learned about binary search, so this question was a nice refresher. In doing further research to solve this, I learned that there are two main solutions, an iterative one and a recursive one. I chose to implement the iterative one, because that made my brain hurt less, but I am interested to test both in order to find which one is faster.

For the iterative version, I took an array and a target number as arguments. Then I declared a left variable, which starts at 0 and a right variable that starts at the last index of the array. In a while loop, as long as the left variable is not greater than the right variable, I declare a midpoint variable, which is the left plus the right divided by two. (Since I'm using JS I ended up having to wrap this in a Math.floor to get rid of any decimals).

If the number at the index of mid equals the target number, I return the index number. If the target is lower than the mid number, the right variable becomes mid minus one. If the target is bigger than the mid, left becomes mid + 1. If all these conditions fail and the number is not located, the function returns -1
<br>
<br>

## Flood Fill
##### _An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image._

##### _You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc]._

##### _To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color._

##### _Return the modified image after performing the flood fill._
---
Okay this one was super cool. It took me a bit to figure out, but once I did, my heart was _racing_. Which sounds dorky, but is accurate. I found myself remembering back to my bootcamp days as well because I had to make a tic tac toe game which used similar nested array edge case logic.

To be fair I did waste a _little_ bit of time with this one because I made an extra function, "visualizeImage", which did not go into my leetcode solution. It was purely for my own pleasure of seeing the results print out in a neat little box instead of a super boring nested array. Okay on to the actual solution.

For this one I take image, sr, sc, and color, as params. (I would explain what they are but I already left a comment in the actual file so...). I start out with a check to see if the target is already the number we are trying to change it into. If it is, we return the image in its current state. Next are just some peace of mind checks, to make sure that the given coordinates in the image are actually valid. These were actually super useful because they helped me find a bug during one of the test cases I didn't originally test with.

Next comes the definitions for the areas around our target square. Basically they return the value in the specified square, or they return null if that square goes off of the grid. After that I set the current target square value to be the new number that is passed in. AND THEN COMES THE COOL PART. I check the surrounding squares to see if they match the original target value. If they do I make a _recursive_ call and pass in altered coordinates to make the target value for the recursive calls the surrounding square values. And thus the new number or color or whatever spreads like a virus. This was very exciting.
<br>
<br>

## Maximum Sub Array

##### _Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum._

##### _A subarray is a contiguous part of an array._
---
I tried two different approaches to this one with the first approach ultimately not working. The first attempt involved chopping the head and tail off the array and then finding the sum of it in a while loop every time it changed, and storing this in a results array. It kind of worked but not really. I kept running into weird edge cases once the array started to get smaller and it was very slow being O(n<sup>2</sup>).

For my final solution I still kept my solutions array but implemented it slightly differently. Instead of doing an expensive iterative math operation for each iteration, I started by saving the first index of the array in my results array. I then was able to loop through the rest of the array only once. Each time I compared the new number to the previous result. If the current number is higher than the most recent result plus itself, it gets added to the result array. If it is not bigger than the previous result, it adds itself with the previous result and that gets added to the result array. Then I run a separate loop through the result array to find the highest number solution.

This one could probably be fine tuned a bit down the road, but I am happy with the relatively succinct I was able to come up with. I'm just happy I was able to get it less than O(n). 
<br>
<br>

## Lowest Common Ancestor of a Binary Search Tree
##### _Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST._
##### _According to the [definition of LCA on Wikipedia:](https://en.wikipedia.org/wiki/Lowest_common_ancestor) “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”_
---
In my lowest common ancestor function, I accept the root node, and p and q, which represent the two nodes I am finding the ancestor for.

I started by writing a helper function called "savePath". Save path takes a value and loops through the tree path, saving visited nodes to a set along the way, returning the set at the end. I call this function twice, once for p and once for q so that I have a set for each path.

Then I compare the two sets and return a new set that contains any shared nodes. This new set then gets converted to an array and I return the last item in the array, which should be the last added common node.
<br>
<br>

## Linked List Cycle
##### _Given head, the head of a linked list, determine if the linked list has a cycle in it._

##### _There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter._

##### _Return true if there is a cycle in the linked list. Otherwise, return false._
---
This one was fairly easy to implement. I start by catching the edge case of returning false if the linked list is empty. I then create a set to store visited nodes in the linked list. In a while loop, I check if a node is _not_ in the set. If it is not, it gets added, and the loop iterates to the next node. If the next node is null it breaks the loop and returns false. Outside the loop I check if the set already has one of the previously iterated nodes. If it does, this proves the cycle and I return true.