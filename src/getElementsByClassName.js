// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var elements = [];
  
  var getElements = function(element) {
    if (element.classList && element.classList.contains(className)) {
      elements.push(element);
    }

    if (element.childNodes) {
      element.childNodes.forEach(function(el) {
        getElements(el);
      });
    }
  };

  getElements(document.body); // Start recursive function

  return elements;
};


// var getElementsByClassName = function(className, node) {
//   var nodes = [];
//   node = node || document.body;

//   if (node.classList && node.classList.contains(className)) {
//     nodes.push(node);
//   }

//   for (var i = 0; i < node.children.length; i++) {
//     var childNode = getElementsByClassName(className, node.children[i]);
//     nodes = nodes.concat(childNode);
//   }
//   return nodes;
// };
