function equalElementsInArr(arr){
    let l = arr.length;
    if(!l){return []};
    for(let i=0; i<l-1; i++){
      for(let j=i+1; j<l; j++){
        if(arr[i] == arr[j]) {
          return [arr[i], arr[j]];
        }
     }
    };
    return "Элементы различны";
  }