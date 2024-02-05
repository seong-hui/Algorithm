function solution(n, roads, sources, destination) {

    let visited = new Array(n+1).fill(Infinity)
    
    let connect = new Array(n+1).fill(0).map(_ => [])
    roads.forEach(([from, to]) => {
        connect[from].push(to)
        connect[to].push(from)
    })

    let toVisit = [destination]
    visited[destination] = 0
    while(toVisit.length > 0){
        const cur = toVisit.shift()
        for (let i = 0; i < connect[cur].length; i++){
            const next = connect[cur][i];
            if (visited[cur] + 1 < visited[next]){
                visited[next] = visited[cur] + 1;
                toVisit.push(next);
            }
        }
    }
    
    return sources.map(a => visited[a] !== Infinity ? visited[a] : -1)
}
