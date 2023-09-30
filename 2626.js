/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(!nums.length) return init;
    var answer = fn(init, nums[0]);
    for(let i = 1 ; i < nums.length; i++){
        answer = fn(answer, nums[i]);
    }
    return answer;
};
