function solution(lottos, winNums) {
    const winNumsDescending = winNums.sort((a, b) => (b - a));
    const visibleNums = lottos.filter((num) => num !== 0);
    const unvisibleNumsLength = lottos.length - visibleNums.length;
    const visibleNumsDescending = visibleNums.sort((a, b) => (b - a));
    let correct = 0;
    const winNumsLength = winNums.length;
    const visibleNumsLength = visibleNums.length;

    for (let i = visibleNumsLength - 1; i >= 0; i--) {
        for (let j = winNumsLength - 1; j >= 0; j--) {
            const visibleNum = visibleNumsDescending[i];
            const winNum = winNumsDescending[j];
            if (visibleNum === winNum) {
                correct += 1;
                visibleNumsDescending.pop();
                break;
            } else if (visibleNum < winNum) {
                visibleNumsDescending.pop();
                break;
            }
        }
    }

    const ectCaseRank = 6;
    const maxCase = correct + unvisibleNumsLength;
    
    const maxRank = maxCase <= 1 ? ectCaseRank : winNumsLength - maxCase + 1;
    const minRank = correct <= 1 ? ectCaseRank : winNumsLength - correct + 1;

    return [maxRank, minRank];
}