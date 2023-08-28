var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector.charAt(0) === '#') return "id"
  if (selector.charAt(0) === '.') return "class"
  else if (selector.indexOf('.') > 0) return "tag.class"
  return "tag"
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction
  if (selectorType === "id") {
    matchFunction = function (el){
      return el.id && el.id.toLowerCase() === selector.slice(1).toLowerCase();
    }
  } else if (selectorType === "class") {
    matchFunction = function (el){
      return el.classList.contains(selector.slice(1));
    }
  } else if (selectorType === "tag.class") {
    const [tag, className] = selector.split('.')
    matchFunction = function (el){
      //const newStr = selector.slice(selector.indexOf('.')+1).toLowerCase()
      return (el.tagName.toLowerCase() === tag && el.classList.contains(className))
    }
  } else if (selectorType === "tag") {
    matchFunction = function (el){
      return el.tagName && el.tagName.toLowerCase() === selector.toLowerCase();
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
