function solution(n, computers) {
    var answer = 0;
    let visited = Array(n).fill(false);
    
    const bfs = (start) => { //함수 내 선언하는 방식으로 변경해봄.
        const queue =[start];
        while(queue.length){
            const current = queue.shift();
            visited[current] = true;
            computers[current].forEach((isConnected, next)=>{ //for문 대신 forEach사용
                if(isConnected && ! visited[next])
                    queue.push(next);
            });
        }
    } 
    
    for (let i = 0; i < n; i++){
        if (!visited[i]){
            bfs(i);
            answer++;
        }
    }

    return answer;
}

// function bfs(computers, index, visited){
//     let toVisit = [index];

//     while (toVisit.length > 0){
//         let cur = toVisit.shift();
//         visited[cur] = true;

//         for (let i = 0; i < computers[cur].length; i++){
//             if (computers[cur][i] === 1 && !visited[i])
//                 toVisit.push(i);
//         }
//     }
// }
