'use strict';

module.exports = function countSameElements(collection) {
  let result = [];
  let map = new Map();
  collection.forEach(item => {
    if(map.has(item)){
      map.set(item, map.get(item) + 1);
    }else{
      map.set(item, 1);
    }
  });
  map.forEach((value, key, map) => {
    result.push({key: key, count: value});
  });
  return result;
}
