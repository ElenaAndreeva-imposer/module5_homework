function createArr() {
    let arr=[];
    arr.push (1, 2, 3, 4);
    let result = arr.map(function(item, index, array) {
      return item  
    });
    let countElementsArr = arr. length;
    console.log (countElementsArr);
    console.log(result);}
  createArr();
  