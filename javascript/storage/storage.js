function local() {
  console.log('run');
    //Check to see if the localstorage variable exists. If it does not, this is the first time coming to the page, and we need to initalize it to 0
    if (localStorage.getItem("Counter") === null) {
      // Store
      localStorage.setItem("Counter", "0");
    }
    // Get the value from local storage
    var value = parseInt(localStorage.getItem("Counter"));
    // Incrememtnt the count by 1
    var newValue = value + 1;
    //Write the value back to local storage
    localStorage.setItem("Counter", newValue);
    // Write the value to the div
    document.getElementById("Counter").innerHTML=newValue;
  }
  function session(){
    console.log('run');
    if (sessionStorage.getItem("Counter1") === null) {
        // Store
        sessionStorage.setItem("Counter1", "0");
      }
      var values = parseInt(sessionStorage.getItem("Counter1"));
      var newValue1 = values + 1;
      sessionStorage.setItem("Counter1", newValue1);
      document.getElementById("Counter1").innerHTML=newValue1;
      
  }
  // Reset local storage to 0
  function clickReset() {
    localStorage.setItem("Counter","0");
    document.getElementById("Counter").innerHTML='0'
    sessionStorage.setItem("Counter1","0");
    document.getElementById("Counter1").innerHTML='0'
  }