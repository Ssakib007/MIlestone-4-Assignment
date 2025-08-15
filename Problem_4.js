/// Create a function named isSame().  It will take two arrays as an input and will check whether the arrays are same or not. If the arrays are same, it will return true. if not , it will return false.
/// for the array to be same , the length of the array must have to be same. and the value of every index of the both array has to be exactly same.
/// the arrays may have any primitive data type.
//// function will return a boolean value.
/// if the inputs are not array, function will return "Invalid"
//// sample inputs and outputs are below
// SAMPLE INPUT
// SAMPLE OUTPUT (boolean/string)
// [1, 2, 3] , [1 , 2 , 3]
// true
// [34 , 5 ,7 ,9 ], [ 34 , 5 , 7 ]
// false
// [1, undefined , 3] , [1,null ,3]
// false
// [1 , 4 , 5], [1 , 4 , 5]
// true
// [1 , "4" , 4] ,[1 , 4  , 4]
// false
// [2 , 5 , 6] ,256
// Invalid
// {data: [2 , 5 , 6] } , [2 , 5 , 6]
// Invalid

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]));
