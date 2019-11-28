let utils = {
  shuffle: function(arr) {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  },

  shorten: function(arr, length) {
    return arr.slice(0, length);
  }
};

export default utils;
