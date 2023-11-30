function foo(arr, sum) {
    let nums = {};

    for (let i = 0; i < arr.length; i++) {
        let complement = sum - arr[i];
        if (nums[complement] !== undefined) {
            return [complement, arr[i]];
        }
        nums[arr[i]] = i;
    }
    return null;
}

console.log(foo([2, 7, 11, 15], 9));