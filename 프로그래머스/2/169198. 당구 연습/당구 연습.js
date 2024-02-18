function solution(m, n, startX, startY, balls) {
    var answer = [];
    
    let moveM1 = 2 * m - startX;
    let moveM2 = -startX;
    let moveN1 = 2 * n - startY;
    let moveN2 = -startY;
    
    for(let i=0;i<balls.length;i++){
        const x = balls[i][0];
        const y = balls[i][1];
        let cal = [];
        
        if(startY !==y){
            cal.push((moveM1 - x)**2 + (startY -y)**2);
            cal.push((moveM2 - x)**2 + (startY-y)**2);
        }
        else{
            if(startX<x)
                cal.push((startX+x)**2);
            else
                cal.push((2*m-startX-x)**2);
        }
        
        if(startX !==x){
            cal.push((startX-x)**2 + (moveN1-y)**2);
            cal.push((startX-x)**2 + (moveN2-y)**2);
        }
        else{
            if(startY<y)
                cal.push((startY+y)**2);
            else
                cal.push((2*n-startY-y)**2);
        }
       
      
        let minCal = Math.min(...cal);
        answer.push(minCal);
    }
    
    return answer;
    
}