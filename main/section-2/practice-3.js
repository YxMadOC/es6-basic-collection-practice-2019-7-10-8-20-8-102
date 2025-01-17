'use strict';

module.exports = function countSameElements(collection) {
  let set = new Set();
  collection.forEach(item => {
    if(item.length > 1){
      set.add(item.split(/-|:|\[/)[0]);
    }else{
      set.add(item);
    }
  })
  collection.forEach((value,index,arr) => {
    if(value.indexOf('-') >= 0 || value.indexOf(':') >= 0 || value.indexOf('[') >= 0){
      let char = value.split(/-|:|\[/)[0];
      let number = parseInt(value.split(/-|:|\[/)[1]);
      for(let i = 0; i < number; i++){
        collection.push(char);
      }
      collection.splice(index, 1);
    }
  });
  let result = {};
  let ans = [];
  collection.forEach(item => {
    if(!result[item]){
      result[item] = 1;
    }else{
        result[item]++;
    }
  })
  set.forEach(s => {
    for(let item in result){
      if(s == item){
        ans.push({name: item, summary: result[item]})
      }
    }
  })
  return ans;
}
