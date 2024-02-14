function solution(number, k) {
    var answer = [];
    
    for(const num of number){
        while(k && answer.length && answer[answer.length-1]<num){
            answer.pop();
            k--;
        }
        answer.push(num);
    }
    answer.splice(answer.length-k,k);
    
    return answer.join("");
}


