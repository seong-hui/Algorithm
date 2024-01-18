function solution(money) {
    var answer = 0;
    let dp = {};
    dp[0] = money[0];
    dp[1] = money[0];
    
    for(let i =2; i<money.length-1; i++){
        dp[i] = Math.max(dp[i-2] + money[i], dp[i-1]);
    }
    let dp1 = {};
    dp1[0] = 0
    dp1[1] = money[1];
    
    for(let i =2; i<money.length; i++){
        dp1[i] = Math.max(dp1[i-2] + money[i], dp1[i-1]);
    }
    console.log(dp[money.length - 2], dp1[money.length - 1])
    
    return Math.max(dp[money.length - 2], dp1[money.length - 1]);
//     answer = dp[money.length-1];
    
//     return answer;
}

// 1 2 3 1 7