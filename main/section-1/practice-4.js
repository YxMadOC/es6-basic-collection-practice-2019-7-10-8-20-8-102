'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let arrA = collectionA.map(item => item.key);
  return [...arrA].filter(item => objectB.value.includes(item));
}
