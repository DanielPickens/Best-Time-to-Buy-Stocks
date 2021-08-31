//Using the Sliding window approach
//tc:O(n)


var maxProfit = function(prices) {
     /* first try, not as efficient approach
    let m=0;
        let re=0;
        for( i in prices){
            m=Math.min(m,i);
            re=Math.max(re,i-m);
        }
        return re;
    }
*/
    

    if (prices == null || prices.length < 2) return 0;
        
        min = prices[0], max = prices[0], profit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < prices[i - 1]) 
                min = Math.min(prices[i], min);
            if (prices[i] > prices[i - 1]) {
                max = prices[i];
                profit = Math.max(prices[i] - min, profit);
            }
        }
        
        return profit;
    }
