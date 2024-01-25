function solution(routes) {
    var answer = 1;
    
    routes.sort(function(a,b){
        return a[0] - b[0];
    })
    
    let cur = routes[0][1];
    for(let i=1; i< routes.length;i++){
        if(cur < routes[i][0]){
            cur = routes[i][1];
            answer++;
        }
        else
            cur = Math.min(cur, routes[i][1]);
    }
    return answer;
}
