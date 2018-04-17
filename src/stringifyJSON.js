// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (Array.isArray(obj)) {
    var output = [];

    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'function' && obj[i] === undefined) {
        output.push(stringifyJSON(null)); // recursive
      } else {
        output.push(stringifyJSON(obj[i]));
      }
    }
    return '[' + output.join(',') + ']';
  }

  if (obj && typeof obj === 'object') {
    var result = [];

    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    return '{' + result.join(',') + '}';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  return '' + obj;

};
