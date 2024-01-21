function fakeReduce(arr, callback, initialValue) {
    var accumulator = initialValue !== undefined ? initialValue : arr[0];
    var startIndex = initialValue !== undefined ? 0 : 1;
  
    for (var i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  
    return accumulator;
  }
  
  var numbers = [1, 2, 3, 4, 5];
  var sum = fakeReduce(numbers, function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  
  console.log(sum); 
  