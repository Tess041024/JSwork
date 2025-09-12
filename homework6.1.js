

function checkProbabilityTheory(count) {

  const MIN = 100;
  const MAX = 1000;

  let evenCount = 0;
  let oddCount  = 0;

  for (let i = 0; i < count; i++) {
   
    const n = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

    
    if (n % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const evenPct = (evenCount / count) * 100;
  const oddPct  = (oddCount  / count) * 100;

  
  const expectedEvenPct = (451 / 901) * 100;
  const expectedOddPct  = 100 - expectedEvenPct;

  const tolerance = 1; 
  const isCloseToTheory = Math.abs(evenPct - expectedEvenPct) <= tolerance;

  return {
    count,
    evenCount,
    oddCount,
    evenPct,
    oddPct,
    expectedEvenPct,
    expectedOddPct,
    tolerance,
    isCloseToTheory
  };
}
console.log(checkProbabilityTheory(100))