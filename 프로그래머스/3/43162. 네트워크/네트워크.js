function solution(n, computers) {
    var answer = 0;
    let visited = Array(n).fill(false);
    
    for (let i = 0; i < n; i++){
        if (!visited[i]){
            bfs(computers, i, visited);
            answer++;
        }
    }

    return answer;
}

function bfs(computers, index, visited){
    let toVisit = [index];

    while (toVisit.length > 0){
        let cur = toVisit.shift();
        visited[cur] = true;

        for (let i = 0; i < computers[cur].length; i++){
            if (computers[cur][i] === 1 && !visited[i])
                toVisit.push(i);
        }
    }
}
