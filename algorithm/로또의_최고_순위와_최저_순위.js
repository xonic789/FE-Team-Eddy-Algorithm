function solution(lottos, win_nums) {
  const lowestRank = lottos.length;
    
  win_nums = win_nums.reduce((acc,num) => (acc[num] = true , acc), {});
    
  let [maxWinCount,minWinCount] = lottos.reduce(([maxWinCount,minWinCount], lottoNum) => {
      if (lottoNum === 0) {
        return [maxWinCount + 1, minWinCount];
      }
      else if (win_nums[lottoNum]) {
        return [maxWinCount + 1,minWinCount + 1];  
      } 
      return [maxWinCount, minWinCount];
  }, [0,0]);
    
  return [getRank(lowestRank,maxWinCount),getRank(lowestRank,minWinCount)];
}

function getRank(lowestRank,winCount) {
  if (winCount <= 1) return lowestRank;
    
  return lowestRank - winCount + 1;
}