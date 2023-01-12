const determineRoute  = (distancematrix:number[][]) => {
    let  intitial: number[] = []
    for(var i = 0; i< distancematrix.length; i++){
        intitial.push(i)
    }
    let paths = permutations(intitial)
    let min = 1000000000000
    let minpath =[]
    for(var i = 0; i<paths.length ; i++){
        let length = 0
        
        let path = paths[i]
        for(var j = 0; j<path.length - 1; j++){
            length = length + distancematrix[path[j]][path[j+1]]
        }
        if (length < min) {
            min = length
            minpath = path
        }
    }
    return {length: min, minpath: minpath}
}

const permutations = (arr: number[]): any => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
            item,
            ...val,
          ])
        ),
      []
    );
  };

export default determineRoute