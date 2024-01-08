function solution(n, money) {
    var answer = 0;
    let dp = new Array(n + 1).fill(0);
    
    dp[0] = 1;
    
    for (let i = 0; i < money.length; i++) {
        for (let j = money[i]; j <= n; j++) {
            dp[j] += dp[j - money[i]];
        }
    }
    answer = dp[n];
    return answer;
}