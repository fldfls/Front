let count = 0;

function triangle(maximum) {
  if (1 <= maximum && maximum <= 150) {
    for (let a = 1; a <= maximum / 3; a++) {
      for (let b = Math.floor((maximum - a) / 2); b >= a; b--) {
        let c = maximum - a - b;
        if (c < a + b) {
          count++;
          angleArr.push(a, b, c);
          console.log(a, b, c);
        } else {
          break;
        }
      }
    }
  }

  console.log("경우의 수 :", count);
}

triangle(20);
