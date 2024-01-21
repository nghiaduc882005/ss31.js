
function findLongestWordLength(str) {
  // Tách chuỗi thành mảng các từ
  var words = str.split(' ');
  
  // Khởi tạo biến lưu từ dài nhất và độ dài của từ đó
  var longestWord = '';
  var longestLength = 0;
  
  // Duyệt qua mảng từ để tìm từ dài nhất
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longestWord = words[i];
      longestLength = words[i].length;
    }
  }
  
  // Trả về từ dài nhất và độ dài của từ đó
  return [longestWord, longestLength];
}

// Sử dụng hàm
var inputString = "The quick brown fox jumped over the lazy dog";
var result = findLongestWordLength(inputString);
console.log(result);
