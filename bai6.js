let nums = [1, 2, 3, 4];

let findElement = nums.find(function (e) { // e đại diện cho các số ở trong nums
    return e === 2;
});

function fakeFind(arr, fn) {
    for (var i = 0; i < arr.length; ++i) {
        let test = fn(arr[i]);
        if (test === true) {
            return arr[i];
        }
    }
}

let res1 = fakeFind(nums, function (e) {
    return e === 2; // true | false
});

let res2 = fakeFind(nums, function (e) {
    return e === 3; // true | false
});

let res3 = fakeFind(nums, function (e) {
    return e === 6; // true | false
});

console.log(res1);
console.log(res2);
console.log(res3);
