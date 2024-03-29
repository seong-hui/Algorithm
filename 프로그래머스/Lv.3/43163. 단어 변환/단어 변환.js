function solution(begin, target, words) {
    var answer = 0;
    
    if (!words.includes(target))
        return 0;
    let visited = new Array(words.length).fill(0);
    dfs(begin , words, target, visited, 0);
    
    function dfs(cur, words, target, visited, cnt){
        if(cur === target){
            answer = cnt;
            return;
        }
        
        for(let i=0; i< words.length;i++){
            if (diff_cnt(cur, words[i]) && !visited[i]){
                visited[i] = true;
                dfs(words[i], words, target, visited, cnt+1);
                visited[i] = false;
            }
        }
        return;
    }
    return answer;
}

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

