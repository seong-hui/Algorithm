function solution(n)
{
    var ans = 1;
    let cur = n;
    
    while(cur !== 1){
       if(cur % 2 === 1){
           ans++
           cur--;
       }
        else
            cur = cur / 2;
    }
    
    return ans
}