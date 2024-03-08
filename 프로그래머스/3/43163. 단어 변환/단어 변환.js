function solution(begin, target, words) {
    if(!words.includes(target))
        return 0;
    
    const queue = [[begin, 0]];
    // const visited = new Set();
    const visited = [];
    
    
    while(queue.length){
        const [currentWord, transCnt] = queue.shift();
        if(currentWord === target)
            return transCnt;
        words.forEach((word)=>{
            if(!visited.includes(word) && isOneLetterDiff(currentWord, word)){
                queue.push([word, transCnt+1]);
                visited.push(word);
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