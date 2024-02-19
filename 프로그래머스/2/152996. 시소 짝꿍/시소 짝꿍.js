function solution(weights) {
    var answer = 0;
    weights.sort((a,b)=>a-b);
    
    const table = Array(4001).fill(0)
    const isInt = (n) => n % 1 === 0 ? n : 0 // 실수 판별
    weights.forEach(w => {
        answer += table[w] + table[w * 2] // case 1, case 2
        if (isInt(w / 2)) answer += table[w / 2] // case 3
        if (isInt(w * 2 / 3)) answer += table[w * 2 / 3] // case4
        // if (isInt(w * 3 / 2)) answer += table[w * 3 / 2] // case5
        if (isInt(w * 3 / 4)) answer += table[w * 3 / 4] // case6
        // if (isInt(w * 4 / 3)) answer += table[w * 4 / 3] // case7
        table[w] += 1
    })
    return answer
    
    // for(let i=0; i<weights.length-1;i++){
    //     for(let j=i+1; j<weights.length;j++){
    //         if(weights[i] * 3 === weights[j] * 2)
    //             answer++;
    //         else if(weights[i] * 2 === weights[j])
    //             answer++;
    //         else if(weights[i] * 4 === weights[j] * 3)
    //             answer++;
    //         else if(weights[i] === weights[j])
    //             answer++;
    //         else if(weights[j] > weights[i] * 2)
    //             break;
    //     }
    // }
    // return answer;
}