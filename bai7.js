function fakeFilter(arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Sử dụng hàm
  var result1 = fakeFilter([1, 2, 3, 4], function(e) {
    if (e % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result1); // Kết quả: [2, 4]
  
  var result2 = fakeFilter([1, 2, 3, 4], function(e) {
    if (e % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result2); // Kết quả: [1, 3]
  