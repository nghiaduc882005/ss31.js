// Rest parameter trong JavaScript cho phép bạn định nghĩa một hàm có thể chấp nhận một số lượng đối số không xác định dưới dạng một mảng. Điều này giúp bạn xử lý các trường hợp khi số lượng đối số có thể thay đổi hoặc không biết trước.

// Khi sử dụng rest parameter, bạn sử dụng dấu ba chấm `...` trước tên của tham số cuối cùng trong danh sách tham số của hàm. Khi hàm được gọi, tất cả các đối số còn lại sẽ được thu thập và biến thành một mảng.

// Dưới đây là một ví dụ về cách sử dụng rest parameter:


// function sum(...numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3)); // Kết quả: 6
// console.log(sum(1, 2, 3, 4, 5)); // Kết quả: 15


// Trong ví dụ trên, rest parameter `...numbers` cho phép hàm `sum` nhận một số lượng bất kỳ các đối số và biến chúng thành một mảng `numbers`. Sau đó, hàm duyệt qua mảng `numbers` để tính tổng của tất cả các số được truyền vào.

function largestOfArrs(...arrays) { // tạo hàm: lớn nhất của mảng, khi hàm được gọi tất cả các đối số còn lại sẽ được thu thập và biến thành một mảng.
    var results = []; //kết quả 
    for (var i = 0; i < arrays.length; i++) { // vòng lặp độ dài mảng để tìm số lớn nhất 
      var maxNum = Math.max(...arrays[i]);
      results.push(maxNum); //Đẩy số lớn nhất ra mảng
    }
    return results;
  }
  
  // Sử dụng hàm theo yêu cầu ---> kết quả 
  var result1 = largestOfArrs([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]);
  var result2 = largestOfArrs([1, 2, 3, 4], [5, 1, 2, 9]);
  var result3 = largestOfArrs();
  
  console.log(result1);
  console.log(result2);
  console.log(result3);
  