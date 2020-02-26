function sleep(milliseconds){
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
  };
  
  function sum(...args){
      // Замедление на половину секунды.
      sleep(0); // Можно использовать другое значение замедления.
      return args.reduce((sum, arg) => {
        return sum += +arg;
      }, 0);
    };
  
  function compareArrays(arr1, arr2){
      return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])
  };
  
  const mSum = memorize(sum, 5);
  
  mSum(1,2,1);
  
  
  function memorize(fn, limit){
    const results = [];
    const income = fn;
    let answer = (...fn) => {
      let finding = () => results.find(x => compareArrays(x.args, fn));
      if (finding()){
        return finding().result
        } else {
          let sumResult = income(...fn);
          alert(sumResult);
          results.push({args: fn, result: sumResult});
            if (results.length > limit){
            results.shift();
            };
          return sumResult
          };
    };
    return answer
  };
  
  
  console.time("timer");
  
  const forTestCase = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  
  function testCase(testFunction, someTimer) {
    for (let i = 0; i < 100; i++){
    forTestCase.forEach(element => testFunction(...element));
    };
    console.timeEnd(someTimer);
  };
  
  testCase(sum, "timer");