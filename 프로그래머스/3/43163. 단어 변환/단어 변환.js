function solution(begin, target, words) {
    if(!words.includes(target))
        return 0;
    
    const queue = [[begin, 0]];
    const visited = new Set();
  
    while(queue.length){
        const [currentWord, transCnt] = queue.shift();
        if(currentWord === target)
            return transCnt;
        words.forEach((word)=>{
            if(!visited.has(word) && isOneLetterDiff(currentWord, word)){
                queue.push([word, transCnt+1]);
                visited.add(word);
            }
        });
    }
    
    return 0;
}

function isOneLetterDiff(word1, word2){
    let diff = 0;
    for(let i =0 ; i< word1.length; i++){
        if(word1[i] !== word2[i])
            diff++;
        if(diff > 1)
            return 0;
    }
    return diff === 1;
}

/*
set : 해시 테이블을 사용해서 값의 존재 확인, 삭제 작업이 O(1)이다.
array의 경우는 O(n)
해당 문제는 단어의 개수가 최대 50개여서 유의미한 차이는 없지만
중복된 값이 없으면서 특정 값의 존재확인, 삭제 작업이 잦은 경우 set을 사용하고자 한다.
*/