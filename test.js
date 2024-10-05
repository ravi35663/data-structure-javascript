/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>{
      return a-b;
    });
    let result = [];
    let len = nums.length;
    // for(let i=0;i<len;i++){
    let i=0;
    while(i<nums.length){
      let j= i+1;
      let k = len-1;
      while( j< k ){
        console.log("I and j",j,k);
          let sum = nums[i] + nums[j] + nums[k]
          if(sum === 0){
              result.push([nums[i],nums[j],nums[k]])
              j++;
              k--;
              break
          }else if(sum > 0){
              k--;
          }else{
              j++
          }
      }
      i++;
    }
    return result;
  };

  const nums = [-1,0,1,2,-1,-4]
  console.log(threeSum(nums));