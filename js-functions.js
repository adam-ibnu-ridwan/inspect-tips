// Shake Array elements

Array.prototype.shake = function() {
  
  let lenThis = this.length;
  let shakedArr = [];
  
  let i = 0;
  while(i < lenThis) {
    let randomIndex = Math.floor(Math.random() * this.length);
    shakedArr.push(this[randomIndex]);
    this.splice(randomIndex, 1);
    i++;
  };
  
  return shakedArr;
};

[1,2,3,4,5].shake();
