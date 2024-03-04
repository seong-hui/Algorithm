function solution(maps){
    const n = maps.length;
    const m = maps[0].length;
    const visited = new Array(n).fill(0).map(()=> new Array(m).fill(false));
    const dx = [1,0,-1,0];
    const dy = [0,1,0,-1];
    const queue = [[0,0,1]];
    
    while(queue.length){
        const [x,y, dist] = queue.shift();
        if(x === n-1 && y === m-1)
            return dist;
        for(let i=0; i<4;i++){
            const mx = dx[i]+x;
            const my = dy[i]+y;
            if(mx <0|| my <0||mx>=n|| my>=m) //범위를 벗어나거나
                continue;
            if(maps[mx][my]===0||visited[mx][my])//길이 아닌 곳, 이미 방문한 곳일때 예외처리
                continue;
            visited[mx][my] = true;
            queue.push([mx,my,dist+1]);
            
        }
    }
    
    return -1;
}

