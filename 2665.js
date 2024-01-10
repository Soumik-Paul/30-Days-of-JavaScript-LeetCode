var createCounter = function(init) {
    let value = init;
  
      return {
          // we will use : as these are objects
          increment: () => ++value, 
          decrement: () => --value,
          reset: () => value = init,
      }
  };
  
  /**
   * const counter = createCounter(5)
   * counter.increment(); // 6
   * counter.reset(); // 5
   * counter.decrement(); // 4
   */