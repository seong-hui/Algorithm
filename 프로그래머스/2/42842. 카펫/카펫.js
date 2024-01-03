function solution(brown, yellow) {
    var answer = [];
    let i = 0;
    let divisor = [];
    
    while (i <= yellow / 2){
      if (yellow % i === 0) divisor.push([yellow / i,i])
        i++;
    }
    divisor.push([1, yellow]);
    
    let row;
    let col;
    for(let i=0; i< divisor.length;i++){
        row = divisor[i][0];
        col = divisor[i][1];
        if ((row+2) * 2 + (col+2) * 2 - 4 === brown)
            return [row+2, col+2];
    }
    
    return answer;
}