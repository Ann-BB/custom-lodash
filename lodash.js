
const _ = {
    addArray: function addArray(arr, value) {
    arr[arr.length] = value;
    return arr;
    },
    chunk: function chunk(array, size) {
      let result = [], firstIndex = 0, innerArray = [];
      if (!array.length || size === 0) {
        return result;
      }
      for (let i = 0; i < array.length; i++) {
        let index = i % size;
        innerArray[index] = array[i];
        if (index === size - 1 || i === array.length - 1) {
          result[firstIndex] = [...innerArray];
          innerArray.length = 0; 
          firstIndex++;
        }
      }
      return result;
    },
    compact: function compact(arr){
      const compact_array = [];
      let index = 0;
      for(let i=0; i<arr.length; i++){
          if(Boolean(arr[i])){
              compact_array[index++] = arr[i];
          }
      }
      return compact_array;
    },
      drop: function drop(Myarr, num) {
        const newArray = [];
        while (num < Myarr.length) {
          num += 1;
          this.addArray(newArray, Myarr[num - 1]);
        }
        return newArray;
      },
      dropWhile: function  dropWhile(Myarr, func) {
        const newArray = [];
        for (let i = 0; Myarr.length > i; i += 1) {
          if (func(Myarr[i])) {
            continue;
          }
          this.addArray(newArray, Myarr[i]);
        }
        return newArray;
      },
      take: function take(arr, num) {
        const newArray = [];
        for (let i = 0; i < num; i += 1) {
          this.addArray(newArray, arr[i]);
        }
        return newArray;
      },
      filter: function filter(arr, func) {
        const newArray = [];
        for (let i = 0; i < arr.length; i++) {
          if (func(arr[i])) {
            this.addArray(newArray, arr[i]);
          }
        }
        return newArray;
      },
      
      find: function find(array1, myfunc, index = 0) {
        let counter = index;
        while (array1.length > counter) {
          if (myfunc(array1[counter])) {
            return array1[counter];
          }
          counter += 1;
        }
      },
      includes: function includes(Myarr, value, index) {
          let searchToFrom = index;
          for (let i = searchToFrom; Myarr.length > i; i += 1) {
            if (Myarr[i] === value) {
              return true;
            }
          }
        },
      map: function  map(arr, myfunc) {
        const newArray = [];
        for (let i = 0; arr.length > i; i += 1) {
          this.addArray(newArray, myfunc(arr[i]));
        }
        return newArray;
      },
      zip: function zip(...arr) {
        const newArray = [], allArrays = arr;
        for (let i = 0; allArrays.length > i; i += 1) {
          this.addArray(newArray, []);
        }
        for (let i = 0; allArrays.length > i; i += 1) {
          for (let k = 0; allArrays.length > k; k += 1) {
            this.addArray(newArray[k], allArrays[i][k]);
          }
        }
        return newArray;
      },
      // Objects:
      setProperty(obj, propertyName, propertyValue) {
        return obj[propertyName] = propertyValue;
      },
      merge: function merge (objone, objtwo) {
        const objthree = { ...objone, ...objtwo };
        return objthree;
      },
      omit: function omit(obj, strOrArr) {
        const newObj = {};
        const text = strOrArr;
        let i;
        for (i in obj) {
          let keyNotIntext = true;
          for (let j = 0; j < text.length; j += 1) {
            if (text[j] === i) {
              keyNotIntext = false;
            }
          }
          if (keyNotIntext) {
            this.setProperty(newObj, i, obj[i]);
          }
        }
        return newObj;
      },
      omitBy: function omitBy(Myobj, Myfunc) {
        const newObj = {};
        let i;
        for (i in Myobj) {
          let isProperValue = true;
          if (!Myfunc(Myobj)) {
            isProperValue = false;
          }
          if (isProperValue = true) {
            this.setProperty(newObj, i, Myobj[i]);
          }
        };
        return newObj;
      },
      pick: function pick(obj, myfunc) {
        const newObj = {};
        const text = myfunc;
        let i;
        for (i in obj) {
          let keyIntext = false;
          for (let j = 0; j < text.length; j += 1) {
            if (text[j] === i) {
              keyIntext = true;
            }
          }
          if (keyIntext) {
            this.setProperty(newObj, i, obj[i]);
          }
        }
        return newObj;
      },
      pickBy: function pickBy(obj) {
        const newObj = {};
        let i;
        for (i in obj) {
          let isProperValue = true;
          if (isProperValue === true) {
            this.setProperty(newObj, i, obj[i]);
          }
        }
        return newObj;
      },
      toPairs: function toPairs(obj) {
        const MyArray = [];
        let indexOfArr = 0;
        let i;
        for (i in obj) {
          this.addArray(MyArray, []);
          if (typeof obj[i] !== 'undefined') {
            this.addArray(MyArray[indexOfArr], i);
            this.addArray(MyArray[indexOfArr], Number(obj[i]));
            indexOfArr += 1;
          }
        }
        return MyArray;
      },
      
}
module.exports = _;
