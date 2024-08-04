/*
===> Insertion Sort :-
    -> Insertion sort builds up the sort by gradually creating a part which is already sorted and putting 
       greater and lesser elements by each side of the sorted part of the array.
    -> [5,3,4,1,2]
    -> [5,3,4,1,2] --> leave 5 as it is
    -> [3,5,4,1,2] --> insert 3 before 5
    -> [3,4,5,1,2] --> insert 4 between 3 and 5
    -> [1,3,4,5,2] --> insert 1 before 3 as it is less than 3
    -> [1,2,3,4,5] --> insert 2 after 1 & before 3 because it is greater than 1 and less than 3
    -> Start picking the second element of the array then start sorting because 1 element is always sorted.
    -> The inner loop only runs when the last element of the sorted array is greater than the first element 
       of the unsorted array.
*/