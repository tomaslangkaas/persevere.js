////////////////////////////////////
//
// Internet Explorer localStorage polyfill
// MIT-style license. Copyright 2012 Matt V. Murphy
//
//http://www.matts411.com/post/localstorage-internet-explorer-7/
//https://gist.github.com/mmurph211/4271685
//
////////////////////////////////////


(function(window, document) {
  var userData, attr, attributes;

  if (!window['localStorage'] && (userData = document.body) && userData['addBehavior']) {
    if (userData['addBehavior']("#default#userdata")) {
      userData['load']((attr = "localStorage"));
      attributes = userData['XMLDocument']['documentElement']['attributes'];

      window['localStorage'] = {
        "length": attributes.length,
        "key": function(idx) {
          return (idx >= this.length) ? null : attributes[idx].name;
        },
        "getItem": function(key) {
          return userData['getAttribute'](key);
        },
        "setItem": function(key, value) {
          userData['setAttribute'](key, value);
          userData['save'](attr);
          this.length += ((userData['getAttribute'](key) === null) ? 1 : 0);
        },
        "removeItem": function(key) {
          if (userData['getAttribute'](key) !== null) {
            userData['removeAttribute'](key);
            userData['save'](attr);
            this.length = Math.max(0, this.length - 1);
          }
        },
        "clear": function() {
          while (this.length) {
            userData['removeAttribute'](attributes[--this.length]['name']);
          }
          userData['save'](attr);
        }
      };
    }
  }
})(this, this.document);

// persevere, MIT licensed, (c) Tomas Langkaas, https://github.com/tomaslangkaas/persevere.js

var persevere = (function() {
  var localStorage;
  try {
    localStorage = window['localStorage'];
  } catch (e) {}
  return {
    'supported': (localStorage ? true : false),
    'load': function(key, onFail) {
      var value;
      try {
        value = localStorage['getItem'](key);
      } catch (e) {
        value = null;
      }
      if (value === null && onFail) onFail();
      return value;
    },
    'save': function(key, value, onFail) {
      try {
        localStorage['setItem'](key, value);
      } catch (e) {
        onFail && onFail();
      }
    },
    'remove': function(key, onFail) {
      try {
        localStorage['removeItem'](key);
      } catch (e) {
        onFail && onFail();
      }
    },
    'clear': function(onFail) {
      try {
        localStorage['clear']();
      } catch (e) {
        onFail && onFail();
      }
    }
  }
})();
