function solution(s) {
    let answer = [];
    let flag = 1;
    
    for(let i=0; i < s.length; i++){
        if(s[i] === " "){
            flag = 1;
            answer.push(" "); 
            continue;
        }
        if(flag)
            answer.push(s[i].toUpperCase());
        else if(!flag)
            answer.push(s[i].toLowerCase());
        else
            answer.push(s[i]);
        flag = 0;
    }
    return answer.join("");
}

function isUpper(c){
    return c >='A' && c <= 'Z';
}

function isLower(c){
    return c >='a' && c <= 'z';
}