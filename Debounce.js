import React from "react";

function Debounce() {



    const handleChange = (e) => {
        console.log(e.target.value);
        myDebounce();
      };

  const fetchData = () => {
    console.log("fetching data.....");
  };

  function debounce(callback, delay) {
      let timmer;
    return function () {
      if (timmer) 
        clearTimeout(timmer);
     
        timmer = setTimeout(() => {
          callback();
        }, delay);
    };
  }




  const myDebounce = debounce(fetchData, 2000);

  return (
    <div>
      <input placeholder="search" onChange={handleChange} />
    </div>
  );
}

export default Debounce;
