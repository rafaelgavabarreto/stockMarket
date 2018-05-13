function maxProfit(values) {

  var max = 0;

  for (i = 0; i < values.length; i++) {
    for (j = i + 1; j < values.length; j++) {
      if ((values[i] < values[j]) && ((values[j] - values[i]) > max)) {
        max = values[j] - values[i];
      }
    }
  }
  if (max > 0) {
    return max
  } else {
    return -1
  }
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));