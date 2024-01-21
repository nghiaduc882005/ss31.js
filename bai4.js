function truncate(str, n) {
    if (str.length > 0) { //độ dài chuỗi 
        return str.slice(0, n) + '...'; // cắt và thay thế phần I'm Peter, 11 bằng...
    } else {
        return str;
    }
}

var result = truncate('Hello world, I’m Peter', 11); //ra kết quả
console.log(result);

