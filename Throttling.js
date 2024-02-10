import React from "react";

function Throttling() {
  const handleChange = (e) => {nch
    console.log(e.target.value);
    myThrottle();
  };

  const fetchData = () => {
    console.log("fetching data.....");
  };

  function throttle(callback, delay) {
    let falag = true;
    return function () {
      if (falag) {
        callback();
        falag = false;
        setTimeout(() => {
          falag = true;
        }, delay);
      }
    };
  }

  const myThrottle = throttle(fetchData, 2000);

  return (
    <div>
      <input placeholder="search" onChange={handleChange} />
    </div>
  );
}

export default Throttling;
