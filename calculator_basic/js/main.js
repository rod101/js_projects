(function() {
  "use strict";

  const result = document.getElementById("result");
  const zero_btn = document.getElementById("0");
  const one_btn = document.getElementById("1");
  const two_btn = document.getElementById("2");
  const three_btn = document.getElementById("3");
  const four_btn = document.getElementById("4");
  const five_btn = document.getElementById("5");
  const six_btn = document.getElementById("6");
  const seven_btn = document.getElementById("7");
  const eight_btn = document.getElementById("8");
  const nine_btn = document.getElementById("9");
  const dot_btn = document.getElementById(".");

  const add_btn = document.getElementById("+");
   const calc_btn = document.getElementById("=");


    let initValue = "";
    let param1 = "";
    let latestOperator = "";
  
  
  document.getElementById("del").addEventListener("click", function() {
   // result.innerHTML = "";
     initValue = "";
     result.innerHTML = initValue;
  });

  document.getElementById("0").addEventListener("click", function() {
    initValue += zero_btn.value;
    result.innerHTML = initValue;
  });

  document.getElementById("1").addEventListener("click", function() {
    initValue += one_btn.value;
     result.innerHTML = initValue;
  });

  document.getElementById("2").addEventListener("click", function() {
    initValue += two_btn.value;
     result.innerHTML = initValue;
  });

  document.getElementById("3").addEventListener("click", function() {
  // three_btn
    initValue += three_btn.value;
     result.innerHTML = initValue;
  });


  document.getElementById("4").addEventListener("click", function() {
    initValue += four_btn.value;
     result.innerHTML = initValue;
  });

  document.getElementById("5").addEventListener("click", function() {
    initValue += five_btn.value;
     result.innerHTML = initValue;
  });

  document.getElementById("6").addEventListener("click", function() {
   initValue += six_btn.value;
    result.innerHTML = initValue;
  });

  document.getElementById("7").addEventListener("click", function() {
    initValue += seven_btn.value;
     result.innerHTML = initValue;
  });

  document.getElementById("8").addEventListener("click", function() {
    initValue += eight_btn.value;
     result.innerHTML = initValue;
  });

  document.getElementById("9").addEventListener("click", function() {
    initValue += nine_btn.value;
     result.innerHTML = initValue;
  });

  document.getElementById(".").addEventListener("click", function() {
    result.innerHTML += dot_btn.value;
  });

  document.getElementById("+").addEventListener("click", function() {
     initValue = calc();
    // result.innerHTML += add_btn.value;
     param1 = initValue;
     latestOperator = "+";
    initValue = "";
  });

  document.getElementById("-").addEventListener("click", function() {
    // result.innerHTML += sub_btn.value;
     latestOperator = "-";

  });

  document.getElementById("*").addEventListener("click", function() {
    result.innerHTML += mult_btn.value;
  });

  document.getElementById("/").addEventListener("click", function() {
    result.innerHTML += divi_btn.value;
  });

  document.getElementById("=").addEventListener("click", function() {
    initValue = calc();
    //result.innerHTML += divi_btn.value;
    //result.innerHTML = parseInt();
      //console.log(parseInt((result.innerHTML)));
      //console.log(initValue);

      add(param1, initValue);
      initValue = "";
      //  result.innerHTML = "0";
  });


function add(val1, val2) {
  let test = parseInt(val1) + parseInt(val2);
  console.log(test);
}



  // function click_01() {
  //   console.log("hi1");
  //   document.getElementById("result").innerHTML += one_btn.value;
  // }

  function calc() {
    switch(latestOperator) {
       case "+":
       return param1 + initValue;

       case "-":
       return param1 - initValue;
       
       default:
       return 0;
    }
  }

})();




"use strict"
function Prefixer(prefix){
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr) {
  return arr.map(function (x) {
  console.log(that.prefix + x);
  })
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['John', 'Jeff']);