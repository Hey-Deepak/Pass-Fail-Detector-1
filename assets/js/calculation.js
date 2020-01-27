function xxx() {
  var aPlus, aOnly, bOnly, cOnly, dOnly, eOnly ;
  aPlus = Number(document.getElementById("aplus").value);
  aOnly = Number(document.getElementById("aonly").value);
  bOnly = Number(document.getElementById("bonly").value);
  cOnly = Number(document.getElementById("conly").value);
  dOnly = Number(document.getElementById("donly").value);
  eOnly = Number(document.getElementById("eonly").value);
  function KnowYourGrade(aPlus, aOnly, bOnly, cOnly, dOnly, eOnly);

}


  function KnowYourGrade(aPlus, aOnly, bOnly, cOnly, dOnly, eOnly ) {
    var myGrade;
    console.log("Value Changed");
      myGrade = (aPlus * 10 + aOnly * 9 + bOnly * 8 + cOnly * 7 + dOnly * 6 + eOnly * 5) / (aPlus + aOnly + bOnly + cOnly + dOnly + eOnly);
      document.getElementById("resultObject").innerHTML =  myGrade;
      console.log("Value Changed");
  }

