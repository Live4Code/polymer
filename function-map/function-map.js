// implement the doubleAll function using function map
module.exports.doubleAll = function (numbers) {
  return numbers.map(function double(num) {
    return num * 2;
  })
}
