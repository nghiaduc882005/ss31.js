function confirmEnding(str, target) {
    return str.endsWith(target); // kiểm tra xem chuỗi str có kết thúc bằng chuỗi con target hay không.
}

console.log(confirmEnding("Hello world", "world")); // true
console.log(confirmEnding("Hello world", "orld")); // true
console.log(confirmEnding("Hello world", "world2")); // false

