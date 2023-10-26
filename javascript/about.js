function editCounter(diff) {
  let counterElement = document.getElementById("counter");
  console.log("here: " + diff);
  if (counterElement != null) {
    let n = parseInt(counterElement.textContent) + diff;
    counterElement.textContent = n;
    if (n == -1) {
      counterElement.style.color = "cyan";
    } else {
      if (n == 1) {
        counterElement.style.color = "red";
      } else {
        if (n == 0) {
          counterElement.style.color = "white";
        }
      }
    }
  }
}
