function solution(begin, target, words) {
    var answer = 0;
    
    if (!words.includes(target))
        return 0;
    answer = dfs(begin , words, target, 0)
    return answer;
    
    function diff_cnt(word1, word2){
        let diff = 0;
        for(let i =0 ; i< word1.length; i++){
            if(word1[i] !== word2[i])
                diff++;
            if(diff > 1)
                return 0;
        }
        if(diff === 1)
            return 1;
        return 0;
    }
    
    function dfs(cur, words, target, answer){
        let minCnt = 0;
        if(cur === target)
            return answer
        for(let i=0; i< words.length;i++){
            if(diff_cnt(cur, words[i])){
                const newWords = words.slice(0);
                newWords.splice(i, 1);
                let result = dfs(words[i], newWords, target, answer+1);
                if (result > 0 && (minCnt === 0 || result < minCnt)) {
                    minCnt = result;
                }
            }
        }
        return minCnt
    }
    
 
}