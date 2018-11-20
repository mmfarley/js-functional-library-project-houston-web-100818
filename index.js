fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
    
      for (const item in collection) {
        if (collection.hasOwnProperty(item)) {
          const element = collection[item];
          alert(element, item, collection)
        }
      }

      return collection;
    },

    map: function(collection, callback) {
      let newCollection= [];
      fi.each(collection, function(element, item){
        newCollection.push(callback(element, item, collection))
      })
      return newCollection;
    },

    reduce: function(collection,callback,acc) {
      let newCollection = 0;
      if (acc){
        newCollection=acc;
      }
      

      for (const item in collection) {
        if (collection.hasOwnProperty(item)) {
          const element = collection[item];
          newCollection += callback(0, element, collection)
          
        }
      }
      return newCollection;
    },

    find: function(collection, predicate){
      let found = undefined;

      for (const item in collection) {
        if (collection.hasOwnProperty(item)) {
          const element = collection[item];
          if (predicate(element)) {
            found = element;
            break;
          }
        }
      }
      return found;
    },

    filter: function(collection, predicate){
      let found = [];

      for (const item in collection) {
        if (collection.hasOwnProperty(item)) {
          const element = collection[item];
          if (predicate(element)) {
            found.push(element);
            
          }
        }
      }
      return found;
    },

    size: function(collection){
      if (collection.constructor == Array) {
        return collection.length
      }
      else if (collection.constructor == Object) {
        return Object.keys(collection).length;
      }
    },
    
    first: function(array, n){
      let arr;
      if (n){
        arr = []
        let i = 0;
        for (i = 0; i < n; i++){
          arr.push(array[i]);
        }}
        else {
          arr = array[0];
        }
      
      return arr;
    },

    last: function (array, n) {
      let arr;
      if (n) {
        arr = []
        let i = array.length - 1;
        for (i = array.length - 1; i >= array.length - n; i--) {
          arr.unshift(array[i]);
        }
      }
      else {
        arr = array[array.length - 1];
      }

      return arr;
    },

    compact: function (array){
      let newArr = [];
      let i = 0;
      for (i = 0; i < array.length; i++){
        if (array[i]){
          newArr.push(array[i]);
        }
      }
      return newArr
    },

    sortBy: function(array, callback){
      let newArr = [];
      for(let i = 0; i < array.length; i++){
        newArr.push(array[i])
      }
    
      newArr.sort(function(a, b){
        return callback(a) - callback(b)
      })
      return newArr;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
