function xo(str) {
    // you can only write your code here!
    let strX = 0;
    let strO = 0;
    for (let strXo of str) {
      if (strXo === "x") strX++;
  
      if (strXo === "o") strO++;
    }
    return strX === strO;

  }
  
  // TEST CASES
  console.log(xo("xoxoxo")); // true
  console.log(xo("oxooxo")); // false
  console.log(xo("oxo")); // false
  console.log(xo("xxxooo")); // true
  console.log(xo("xoxooxxo")); // true