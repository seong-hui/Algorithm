function solution(maps) {
    var answer = [];
    let visited = Array.from(Array(maps.length), () => 
                             Array(maps[0].length).fill(0));
    
    for(let i = 0; i < maps.length; i++){
        for(let j=0; j<maps[0].length; j++){
            if (!visited[i][j] && maps[i][j] !== 'X'){
                answer.push(bfs(maps, i, j, visited));
            }
        }
    }
    
    if(answer.length === 0)
        return [-1];
    answer.sort(function (a,b){
        return a - b
    })
    return answer;
}

function bfs(maps, x, y, visited){
    let sum = 0;
    let toVisit = [[x, y]];
    visited[x][y] = 1;
    const move = [[0, 1], [1, 0],[0, -1], [-1, 0]];
    
     while (toVisit.length > 0){
        let [curX, curY] = toVisit.shift();
        sum += Number(maps[curX][curY]); 
        for (let i = 0; i < 4; i++){
            let moveX = curX + move[i][0];
            let moveY = curY + move[i][1];
            if (moveX < 0 || moveX >= maps.length || 
                moveY < 0 || moveY >= maps[0].length ||
                maps[moveX][moveY] === 'X'|| visited[moveX][moveY] ) 
                continue;
            
            toVisit.push([moveX, moveY]);
            visited[moveX][moveY] = 1;
      }
    }
    return sum;
}