function convert() {
    var temp = document.getElementById("input");
    var result = document.getElementById("output");
  
    var e = document.getElementById('degree');
    var a = document.getElementById('MyAlert');
    var a2 = document.getElementById('MyAlert2');
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;
  
    if (temp.value !== "") {
      if (optionSelIndex == 0) {
        alert("Please select a unit");
      } else {
        if (optionSelectedText === "Fahrenheit *F") {
          result.value = ((temp.value - 32) * 5) / 9 + "°C";
          a.style.display = 'none'
          a2.style.display = 'flex'
        }
        if (optionSelectedText === "Celcius *C") {
          result.value = (temp.value * 9) / 5 + 32 + "°F";
          a.style.display = 'none'
          a2.style.display = 'flex'
        }
      }
    } else {
      a.style.display = 'flex'
      a2.style.display = 'none'
    }
  }
  