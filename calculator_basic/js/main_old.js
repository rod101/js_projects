(function () {
    'use strict';

    const result =  document.getElementById("result");
    const zero_btn = document.getElementById("0");
    const one_btn = document.getElementById("1");



 document.getElementById("0").addEventListener("click", function() {
   result.innerHTML += zero_btn.value;
 });



    document.getElementById("1").addEventListener("click", function() {
    result.innerHTML += one_btn.value;
  });

 


 document.getElementById("del").addEventListener('click', function() {
     result.innerHTML = "";
 })

    document.getElementById("1").value;
    document.getElementById("2").value;
    document.getElementById("3").value;
    document.getElementById("4").value;
    document.getElementById("5").value;
    document.getElementById("6").value;
    document.getElementById("7").value;
    document.getElementById("8").value;
    document.getElementById("9").value;
    document.getElementById("+").value;
    document.getElementById("-").value;
    document.getElementById("*").value;
    document.getElementById("/").value;


    // document.getElementById("").value;
    // document.getElementById("").value;



/*     function click_00() {
        console.log("hi0");
       //  document.getElementById("result").innerHTML = zero_btn.value;

    //  document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + zero_btn.value;
    document.getElementById("result").innerHTML += zero_btn.value;

    } */

       function click_01() {
         console.log("hi1");
      //   document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + one_btn.value;
      document.getElementById("result").innerHTML += one_btn.value;
       }

})();