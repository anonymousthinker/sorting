// const array = [true, false, true, false, 45, 645, 7648];

// array.sort(function (a, b) {
//   return a - b;
// });


const array = [23, 54, 76, 83, 32, 99];
//odd = 23, 83, 99
//even = 32, 54, 76
//sorted array = [23, 76, 83, 54, 99, 32]

const strings = ['a', 'ab', 'abc', 'abcd', 'abcde', 'adil'];

strings.sort(function (a, b) {
  return b.length - a.length;
});

// console.log(strings);

const arOfAr = [[1, 3, 2], [5, 3, 1]];

arOfAr.map(function (list) {
  return list.sort(function (a, b) {
    return a - b;
  });
});

// console.log(arOfAr);

const isOdd = function (a) {
  return a % 2 !== 0;
};

//[1, 8, 3, 4, 5] given
//[1, 3, 4, 5, 8] done
//[1, 3, 5, 4, 8] 

const ar = [1, 8, 3, 12, 4, 5];

ar.sort(function (a, b) {
  return b - a;
}).sort(function (a, b) {
  if (!isOdd(a) && isOdd(b)) {
    return 1;
  }

  return -1;
});

// console.log(ar);

//pivot = 5, arr = [1, 3, 6, 2, 8, 5], result = [1, 2, 3, 5, 8, 6]

const arr = [1, 3, 6, 2, 8, 5];

arr.sort(function (a, b) {
  return a - b; //[1, 2, 3, 5, 6, 8]
}).sort(function (a, b) {
  // console.log(a, b);
  if (b > 5 && b < a) { //5 is the pivot
    return -1;
  }

  return 0;
});

const something = function (pivot) {
  const arr = [1, 3, 6, 2, 8, 5];
  arr.sort(function (a, b) { return a - b; }); //[1, 2, 3, 5, 6, 8]

  return function () {
    const pivotIndex = arr.findIndex((element) => element === pivot);
    const arr2 = arr.slice(pivotIndex + 1);
    arr2.sort(function (a, b) { return b - a; });
    return arr.slice(0, pivotIndex + 1).concat(arr2);
  };
};

//[1, 2, 3, 5, 8, 6]
// console.log(something(5)());

//[1, 3, 6, 2, 8, 5];

const comparator = function (pivot) {
  return function (a, b) {
    if (a > pivot && b > pivot) {
      return b - a;
    }

    return a - b;
  };
};

const pivotSort = function (list) {
  return list.sort(comparator(pivot));
};

const list = [14, 1, 3, 6, 4, 8, 5, 9];
const pivot = 6;

console.log(pivotSort(list, pivot));

//all primes on left side and all non primes on another side
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//result = [2, 3, 5, 7, 1, 4, 6, 9, 10]