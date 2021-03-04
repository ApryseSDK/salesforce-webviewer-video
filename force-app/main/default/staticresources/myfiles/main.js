(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof exports === 'object')
    exports["WebViewerVideo"] = factory();
  else
    root["WebViewerVideo"] = factory();
})(this, function () {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
}
      /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
      /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 234);
    /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      if (true) {
        module.exports = __webpack_require__(218);
      } else { }


      /***/
}),
/* 1 */
/***/ (function (module, exports, __webpack_require__) {

      var arrayWithHoles = __webpack_require__(212);

      var iterableToArrayLimit = __webpack_require__(213);

      var unsupportedIterableToArray = __webpack_require__(214);

      var nonIterableRest = __webpack_require__(216);

      function _slicedToArray(arr, i) {
        return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
      }

      module.exports = _slicedToArray;

      /***/
}),
/* 2 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (global) {
        var check = function (it) {
          return it && it.Math == Math && it;
        };

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports =
          /* global globalThis -- safe */
          check(typeof globalThis == 'object' && globalThis) ||
          check(typeof window == 'object' && window) ||
          check(typeof self == 'object' && self) ||
          check(typeof global == 'object' && global) ||
          // eslint-disable-next-line no-new-func -- fallback
          (function () { return this; })() || Function('return this')();

        /* WEBPACK VAR INJECTION */
}.call(this, __webpack_require__(48)))

      /***/
}),
/* 3 */
/***/ (function (module, exports) {

      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };


      /***/
}),
/* 4 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var NATIVE_ARRAY_BUFFER = __webpack_require__(115);
      var DESCRIPTORS = __webpack_require__(11);
      var global = __webpack_require__(2);
      var isObject = __webpack_require__(12);
      var has = __webpack_require__(13);
      var classof = __webpack_require__(40);
      var createNonEnumerableProperty = __webpack_require__(15);
      var redefine = __webpack_require__(16);
      var defineProperty = __webpack_require__(19).f;
      var getPrototypeOf = __webpack_require__(56);
      var setPrototypeOf = __webpack_require__(45);
      var wellKnownSymbol = __webpack_require__(7);
      var uid = __webpack_require__(64);

      var Int8Array = global.Int8Array;
      var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
      var Uint8ClampedArray = global.Uint8ClampedArray;
      var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
      var TypedArray = Int8Array && getPrototypeOf(Int8Array);
      var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
      var ObjectPrototype = Object.prototype;
      var isPrototypeOf = ObjectPrototype.isPrototypeOf;

      var TO_STRING_TAG = wellKnownSymbol('toStringTag');
      var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
      // Fixing native typed arrays in Opera Presto crashes the browser, see #595
      var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
      var TYPED_ARRAY_TAG_REQIRED = false;
      var NAME;

      var TypedArrayConstructorsList = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
      };

      var BigIntArrayConstructorsList = {
        BigInt64Array: 8,
        BigUint64Array: 8
      };

      var isView = function isView(it) {
        if (!isObject(it)) return false;
        var klass = classof(it);
        return klass === 'DataView'
          || has(TypedArrayConstructorsList, klass)
          || has(BigIntArrayConstructorsList, klass);
      };

      var isTypedArray = function (it) {
        if (!isObject(it)) return false;
        var klass = classof(it);
        return has(TypedArrayConstructorsList, klass)
          || has(BigIntArrayConstructorsList, klass);
      };

      var aTypedArray = function (it) {
        if (isTypedArray(it)) return it;
        throw TypeError('Target is not a typed array');
      };

      var aTypedArrayConstructor = function (C) {
        if (setPrototypeOf) {
          if (isPrototypeOf.call(TypedArray, C)) return C;
        } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
          var TypedArrayConstructor = global[ARRAY];
          if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
            return C;
          }
        } throw TypeError('Target is not a typed array constructor');
      };

      var exportTypedArrayMethod = function (KEY, property, forced) {
        if (!DESCRIPTORS) return;
        if (forced) for (var ARRAY in TypedArrayConstructorsList) {
          var TypedArrayConstructor = global[ARRAY];
          if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
            delete TypedArrayConstructor.prototype[KEY];
          }
        }
        if (!TypedArrayPrototype[KEY] || forced) {
          redefine(TypedArrayPrototype, KEY, forced ? property
            : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
        }
      };

      var exportTypedArrayStaticMethod = function (KEY, property, forced) {
        var ARRAY, TypedArrayConstructor;
        if (!DESCRIPTORS) return;
        if (setPrototypeOf) {
          if (forced) for (ARRAY in TypedArrayConstructorsList) {
            TypedArrayConstructor = global[ARRAY];
            if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
              delete TypedArrayConstructor[KEY];
            }
          }
          if (!TypedArray[KEY] || forced) {
            // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
            try {
              return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
            } catch (error) { /* empty */ }
          } else return;
        }
        for (ARRAY in TypedArrayConstructorsList) {
          TypedArrayConstructor = global[ARRAY];
          if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
            redefine(TypedArrayConstructor, KEY, property);
          }
        }
      };

      for (NAME in TypedArrayConstructorsList) {
        if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
      }

      // WebKit bug - typed arrays constructors prototype is Object.prototype
      if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
        // eslint-disable-next-line no-shadow -- safe
        TypedArray = function TypedArray() {
          throw TypeError('Incorrect invocation');
        };
        if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
          if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
        }
      }

      if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
        TypedArrayPrototype = TypedArray.prototype;
        if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
          if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
        }
      }

      // WebKit bug - one more object in Uint8ClampedArray prototype chain
      if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
        setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
      }

      if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
        TYPED_ARRAY_TAG_REQIRED = true;
        defineProperty(TypedArrayPrototype, TO_STRING_TAG, {
          get: function () {
            return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
          }
        });
        for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
          createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
        }
      }

      module.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
        TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
        aTypedArray: aTypedArray,
        aTypedArrayConstructor: aTypedArrayConstructor,
        exportTypedArrayMethod: exportTypedArrayMethod,
        exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
        isView: isView,
        isTypedArray: isTypedArray,
        TypedArray: TypedArray,
        TypedArrayPrototype: TypedArrayPrototype
      };


      /***/
}),
/* 5 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(25);


      /***/
}),
/* 6 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var getOwnPropertyDescriptor = __webpack_require__(49).f;
      var createNonEnumerableProperty = __webpack_require__(15);
      var redefine = __webpack_require__(16);
      var setGlobal = __webpack_require__(60);
      var copyConstructorProperties = __webpack_require__(169);
      var isForced = __webpack_require__(67);

      /*
        options.target      - name of the target object
        options.global      - target is the global object
        options.stat        - export as static methods of target
        options.proto       - export as prototype methods of target
        options.real        - real prototype method for the `pure` version
        options.forced      - export even if the native feature is available
        options.bind        - bind methods to the target, required for the `pure` version
        options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
        options.unsafe      - use the simple assignment of property instead of delete + defineProperty
        options.sham        - add a flag to not completely full polyfills
        options.enumerable  - export as enumerable property
        options.noTargetGet - prevent calling a getter on target
      */
      module.exports = function (options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = global;
        } else if (STATIC) {
          target = global[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global[TARGET] || {}).prototype;
        }
        if (target) for (key in source) {
          sourceProperty = source[key];
          if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else targetProperty = target[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
          // contained in target
          if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          // add a flag to not completely full polyfills
          if (options.sham || (targetProperty && targetProperty.sham)) {
            createNonEnumerableProperty(sourceProperty, 'sham', true);
          }
          // extend global
          redefine(target, key, sourceProperty, options);
        }
      };


      /***/
}),
/* 7 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var shared = __webpack_require__(86);
      var has = __webpack_require__(13);
      var uid = __webpack_require__(64);
      var NATIVE_SYMBOL = __webpack_require__(92);
      var USE_SYMBOL_AS_UID = __webpack_require__(172);

      var WellKnownSymbolsStore = shared('wks');
      var Symbol = global.Symbol;
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

      module.exports = function (name) {
        if (!has(WellKnownSymbolsStore, name)) {
          if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
          else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
        } return WellKnownSymbolsStore[name];
      };


      /***/
}),
/* 8 */
/***/ (function (module, exports, __webpack_require__) {

      var toInteger = __webpack_require__(24);

      var min = Math.min;

      // `ToLength` abstract operation
      // https://tc39.es/ecma262/#sec-tolength
      module.exports = function (argument) {
        return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
      };


      /***/
}),
/* 9 */
/***/ (function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(12);

      module.exports = function (it) {
        if (!isObject(it)) {
          throw TypeError(String(it) + ' is not an object');
        } return it;
      };


      /***/
}),
/* 10 */
/***/ (function (module, exports) {

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
            args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      module.exports = _asyncToGenerator;

      /***/
}),
/* 11 */
/***/ (function (module, exports, __webpack_require__) {

      var fails = __webpack_require__(3);

      // Detect IE8's incomplete defineProperty implementation
      module.exports = !fails(function () {
        return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
      });


      /***/
}),
/* 12 */
/***/ (function (module, exports) {

      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };


      /***/
}),
/* 13 */
/***/ (function (module, exports) {

      var hasOwnProperty = {}.hasOwnProperty;

      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };


      /***/
}),
/* 14 */
/***/ (function (module, exports, __webpack_require__) {

      var requireObjectCoercible = __webpack_require__(22);

      // `ToObject` abstract operation
      // https://tc39.es/ecma262/#sec-toobject
      module.exports = function (argument) {
        return Object(requireObjectCoercible(argument));
      };


      /***/
}),
/* 15 */
/***/ (function (module, exports, __webpack_require__) {

      var DESCRIPTORS = __webpack_require__(11);
      var definePropertyModule = __webpack_require__(19);
      var createPropertyDescriptor = __webpack_require__(27);

      module.exports = DESCRIPTORS ? function (object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };


      /***/
}),
/* 16 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var createNonEnumerableProperty = __webpack_require__(15);
      var has = __webpack_require__(13);
      var setGlobal = __webpack_require__(60);
      var inspectSource = __webpack_require__(61);
      var InternalStateModule = __webpack_require__(23);

      var getInternalState = InternalStateModule.get;
      var enforceInternalState = InternalStateModule.enforce;
      var TEMPLATE = String(String).split('String');

      (module.exports = function (O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var state;
        if (typeof value == 'function') {
          if (typeof key == 'string' && !has(value, 'name')) {
            createNonEnumerableProperty(value, 'name', key);
          }
          state = enforceInternalState(value);
          if (!state.source) {
            state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
          }
        }
        if (O === global) {
          if (simple) O[key] = value;
          else setGlobal(key, value);
          return;
        } else if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }
        if (simple) O[key] = value;
        else createNonEnumerableProperty(O, key, value);
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, 'toString', function toString() {
        return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
      });


      /***/
}),
/* 17 */
/***/ (function (module, exports, __webpack_require__) {

      var bind = __webpack_require__(31);
      var IndexedObject = __webpack_require__(50);
      var toObject = __webpack_require__(14);
      var toLength = __webpack_require__(8);
      var arraySpeciesCreate = __webpack_require__(91);

      var push = [].push;

      // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
      var createMethod = function (TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var IS_FILTER_OUT = TYPE == 7;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function ($this, callbackfn, that, specificCreate) {
          var O = toObject($this);
          var self = IndexedObject(O);
          var boundFunction = bind(callbackfn, that, 3);
          var length = toLength(self.length);
          var index = 0;
          var create = specificCreate || arraySpeciesCreate;
          var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
          var value, result;
          for (; length > index; index++) if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
              if (IS_MAP) target[index] = result; // map
              else if (result) switch (TYPE) {
                case 3: return true;              // some
                case 5: return value;             // find
                case 6: return index;             // findIndex
                case 2: push.call(target, value); // filter
              } else switch (TYPE) {
                case 4: return false;             // every
                case 7: push.call(target, value); // filterOut
              }
            }
          }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };

      module.exports = {
        // `Array.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        forEach: createMethod(0),
        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        map: createMethod(1),
        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        filter: createMethod(2),
        // `Array.prototype.some` method
        // https://tc39.es/ecma262/#sec-array.prototype.some
        some: createMethod(3),
        // `Array.prototype.every` method
        // https://tc39.es/ecma262/#sec-array.prototype.every
        every: createMethod(4),
        // `Array.prototype.find` method
        // https://tc39.es/ecma262/#sec-array.prototype.find
        find: createMethod(5),
        // `Array.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod(6),
        // `Array.prototype.filterOut` method
        // https://github.com/tc39/proposal-array-filtering
        filterOut: createMethod(7)
      };


      /***/
}),
/* 18 */
/***/ (function (module, exports, __webpack_require__) {

      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      /* global define */

      (function () {
        'use strict';

        var hasOwn = {}.hasOwnProperty;

        function classNames() {
          var classes = [];

          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (!arg) continue;

            var argType = typeof arg;

            if (argType === 'string' || argType === 'number') {
              classes.push(arg);
            } else if (Array.isArray(arg) && arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            } else if (argType === 'object') {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            }
          }

          return classes.join(' ');
        }

        if (true && module.exports) {
          classNames.default = classNames;
          module.exports = classNames;
        } else if (true) {
          // register as 'classnames', consistent with npm package name
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return classNames;
          }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else { }
      }());


      /***/
}),
/* 19 */
/***/ (function (module, exports, __webpack_require__) {

      var DESCRIPTORS = __webpack_require__(11);
      var IE8_DOM_DEFINE = __webpack_require__(85);
      var anObject = __webpack_require__(9);
      var toPrimitive = __webpack_require__(51);

      var nativeDefineProperty = Object.defineProperty;

      // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty
      exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return nativeDefineProperty(O, P, Attributes);
        } catch (error) { /* empty */ }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };


      /***/
}),
/* 20 */
/***/ (function (module, exports, __webpack_require__) {

      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      if (false) { var throwOnDirectAccess, ReactIs; } else {
        // By explicitly using `prop-types` you are opting into new production behavior.
        // http://fb.me/prop-types-in-prod
        module.exports = __webpack_require__(219)();
      }


      /***/
}),
/* 21 */
/***/ (function (module, exports) {

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      module.exports = _defineProperty;

      /***/
}),
/* 22 */
/***/ (function (module, exports) {

      // `RequireObjectCoercible` abstract operation
      // https://tc39.es/ecma262/#sec-requireobjectcoercible
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on " + it);
        return it;
      };


      /***/
}),
/* 23 */
/***/ (function (module, exports, __webpack_require__) {

      var NATIVE_WEAK_MAP = __webpack_require__(168);
      var global = __webpack_require__(2);
      var isObject = __webpack_require__(12);
      var createNonEnumerableProperty = __webpack_require__(15);
      var objectHas = __webpack_require__(13);
      var shared = __webpack_require__(62);
      var sharedKey = __webpack_require__(63);
      var hiddenKeys = __webpack_require__(65);

      var WeakMap = global.WeakMap;
      var set, get, has;

      var enforce = function (it) {
        return has(it) ? get(it) : set(it, {});
      };

      var getterFor = function (TYPE) {
        return function (it) {
          var state;
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError('Incompatible receiver, ' + TYPE + ' required');
          } return state;
        };
      };

      if (NATIVE_WEAK_MAP) {
        var store = shared.state || (shared.state = new WeakMap());
        var wmget = store.get;
        var wmhas = store.has;
        var wmset = store.set;
        set = function (it, metadata) {
          metadata.facade = it;
          wmset.call(store, it, metadata);
          return metadata;
        };
        get = function (it) {
          return wmget.call(store, it) || {};
        };
        has = function (it) {
          return wmhas.call(store, it);
        };
      } else {
        var STATE = sharedKey('state');
        hiddenKeys[STATE] = true;
        set = function (it, metadata) {
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function (it) {
          return objectHas(it, STATE) ? it[STATE] : {};
        };
        has = function (it) {
          return objectHas(it, STATE);
        };
      }

      module.exports = {
        set: set,
        get: get,
        has: has,
        enforce: enforce,
        getterFor: getterFor
      };


      /***/
}),
/* 24 */
/***/ (function (module, exports) {

      var ceil = Math.ceil;
      var floor = Math.floor;

      // `ToInteger` abstract operation
      // https://tc39.es/ecma262/#sec-tointeger
      module.exports = function (argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
      };


      /***/
}),
/* 25 */
/***/ (function (module, exports, __webpack_require__) {

      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var runtime = (function (exports) {
        "use strict";

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined; // More compressible than void 0.
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        function define(obj, key, value) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }
        try {
          // IE 8 has a broken Object.defineProperty that only works on DOM objects.
          define({}, "");
        } catch (err) {
          define = function (obj, key, value) {
            return obj[key] = value;
          };
        }

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);

          // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.
          generator._invoke = makeInvokeMethod(innerFn, self, context);

          return generator;
        }
        exports.wrap = wrap;

        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";

        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        var ContinueSentinel = {};

        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() { }
        function GeneratorFunction() { }
        function GeneratorFunctionPrototype() { }

        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = GeneratorFunctionPrototype.prototype =
          Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define(
          GeneratorFunctionPrototype,
          toStringTagSymbol,
          "GeneratorFunction"
        );

        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }

        exports.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor
            ? ctor === GeneratorFunction ||
            // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction"
            : false;
        };

        exports.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };

        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
        exports.awrap = function (arg) {
          return { __await: arg };
        };

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;
              if (value &&
                typeof value === "object" &&
                hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                });
              }

              return PromiseImpl.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration.
                result.value = unwrapped;
                resolve(result);
              }, function (error) {
                // If a rejected Promise was yielded, throw the rejection back
                // into the async generator function so it can be handled there.
                return invoke("throw", error, resolve, reject);
              });
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise =
              // If enqueue has been called before, then we want to wait until
              // all previous Promises have been resolved before calling invoke,
              // so that results are always delivered in the correct order. If
              // enqueue has not been called before, then it is important to
              // call invoke immediately, without waiting on a callback to fire,
              // so that the async generator function has the opportunity to do
              // any necessary setup in a predictable way. This predictability
              // is why the Promise constructor synchronously invokes its
              // executor callback, and why async functions synchronously
              // execute code before the first await. Since we implement simple
              // async functions in terms of async generators, it is especially
              // important to get this right, even though it requires care.
              previousPromise ? previousPromise.then(
                callInvokeWithMethodAndArg,
                // Avoid propagating failures to Promises returned by later
                // invocations of the iterator.
                callInvokeWithMethodAndArg
              ) : callInvokeWithMethodAndArg();
          }

          // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).
          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this;
        };
        exports.AsyncIterator = AsyncIterator;

        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;

          var iter = new AsyncIterator(
            wrap(innerFn, outerFn, self, tryLocsList),
            PromiseImpl
          );

          return exports.isGeneratorFunction(outerFn)
            ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;

          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              }

              // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;

              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);

              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }

              state = GenStateExecuting;

              var record = tryCatch(innerFn, self, context);
              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done
                  ? GenStateCompleted
                  : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };

              } else if (record.type === "throw") {
                state = GenStateCompleted;
                // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.
                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        }

        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];
          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === "throw") {
              // Note: ["return"] must be used for ES3 parsing compatibility.
              if (delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);

                if (context.method === "throw") {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = "throw";
              context.arg = new TypeError(
                "The iterator does not provide a 'throw' method");
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;

            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;

            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined;
            }

          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          }

          // The delegate iterator is finished, so forget it and continue with
          // the outer generator.
          context.delegate = null;
          return ContinueSentinel;
        }

        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);

        define(Gp, toStringTagSymbol, "Generator");

        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return "[object Generator]";
        };

        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{ tryLoc: "root" }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        exports.keys = function (object) {
          var keys = [];
          for (var key in object) {
            keys.push(key);
          }
          keys.reverse();

          // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.
          return function next() {
            while (keys.length) {
              var key = keys.pop();
              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            }

            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1, next = function next() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i];
                    next.done = false;
                    return next;
                  }
                }

                next.value = undefined;
                next.done = true;

                return next;
              };

              return next.next = next;
            }
          }

          // Return an iterator with no values.
          return { next: doneResult };
        }
        exports.values = values;

        function doneResult() {
          return { value: undefined, done: true };
        }

        Context.prototype = {
          constructor: Context,

          reset: function (skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;

            this.method = "next";
            this.arg = undefined;

            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" &&
                  hasOwn.call(this, name) &&
                  !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },

          stop: function () {
            this.done = true;

            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },

          dispatchException: function (exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;
            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = "next";
                context.arg = undefined;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }

                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }

                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }

                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },

          abrupt: function (type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev &&
                hasOwn.call(entry, "finallyLoc") &&
                this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry &&
              (type === "break" ||
                type === "continue") &&
              finallyEntry.tryLoc <= arg &&
              arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },

          complete: function (record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" ||
              record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },

          finish: function (finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },

          "catch": function (tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }

            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
          },

          delegateYield: function (iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          }
        };

        // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.
        return exports;

      }(
        // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
        true ? module.exports : undefined
      ));

      try {
        const regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        Function("r", "regeneratorRuntime = r")(runtime);
      }


      /***/
}),
/* 26 */
/***/ (function (module, exports, __webpack_require__) {

      var anObject = __webpack_require__(9);
      var aFunction = __webpack_require__(32);
      var wellKnownSymbol = __webpack_require__(7);

      var SPECIES = wellKnownSymbol('species');

      // `SpeciesConstructor` abstract operation
      // https://tc39.es/ecma262/#sec-speciesconstructor
      module.exports = function (O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
      };


      /***/
}),
/* 27 */
/***/ (function (module, exports) {

      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };


      /***/
}),
/* 28 */
/***/ (function (module, exports, __webpack_require__) {

      // toObject with fallback for non-array-like ES3 strings
      var IndexedObject = __webpack_require__(50);
      var requireObjectCoercible = __webpack_require__(22);

      module.exports = function (it) {
        return IndexedObject(requireObjectCoercible(it));
      };


      /***/
}),
/* 29 */
/***/ (function (module, exports) {

      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };


      /***/
}),
/* 30 */
/***/ (function (module, exports, __webpack_require__) {

      var path = __webpack_require__(171);
      var global = __webpack_require__(2);

      var aFunction = function (variable) {
        return typeof variable == 'function' ? variable : undefined;
      };

      module.exports = function (namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
          : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
      };


      /***/
}),
/* 31 */
/***/ (function (module, exports, __webpack_require__) {

      var aFunction = __webpack_require__(32);

      // optional / simple context binding
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 0: return function () {
            return fn.call(that);
          };
          case 1: return function (a) {
            return fn.call(that, a);
          };
          case 2: return function (a, b) {
            return fn.call(that, a, b);
          };
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments);
        };
      };


      /***/
}),
/* 32 */
/***/ (function (module, exports) {

      module.exports = function (it) {
        if (typeof it != 'function') {
          throw TypeError(String(it) + ' is not a function');
        } return it;
      };


      /***/
}),
/* 33 */
/***/ (function (module, exports, __webpack_require__) {

      var defineProperty = __webpack_require__(19).f;
      var has = __webpack_require__(13);
      var wellKnownSymbol = __webpack_require__(7);

      var TO_STRING_TAG = wellKnownSymbol('toStringTag');

      module.exports = function (it, TAG, STATIC) {
        if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
          defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
        }
      };


      /***/
}),
/* 34 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      function checkDCE() {
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
        if (
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
        ) {
          return;
        }
        if (false) { }
        try {
          // Verify that the code above has been dead code eliminated (DCE'd).
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          // DevTools shouldn't crash React, no matter what.
          // We should still report in case we break this code.
          console.error(err);
        }
      }

      if (true) {
        // DCE check should happen before ReactDOM bundle executes so that
        // DevTools can report bad minification during injection.
        checkDCE();
        module.exports = __webpack_require__(231);
      } else { }


      /***/
}),
/* 35 */
/***/ (function (module, exports) {

      module.exports = false;


      /***/
}),
/* 36 */
/***/ (function (module, exports, __webpack_require__) {

      var toIndexedObject = __webpack_require__(28);
      var toLength = __webpack_require__(8);
      var toAbsoluteIndex = __webpack_require__(37);

      // `Array.prototype.{ indexOf, includes }` methods implementation
      var createMethod = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare -- NaN check
          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
            // Array#indexOf ignores holes, Array#includes - not
          } else for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
          } return !IS_INCLUDES && -1;
        };
      };

      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };


      /***/
}),
/* 37 */
/***/ (function (module, exports, __webpack_require__) {

      var toInteger = __webpack_require__(24);

      var max = Math.max;
      var min = Math.min;

      // Helper for a popular repeating case of the spec:
      // Let integer be ? ToInteger(index).
      // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
      module.exports = function (index, length) {
        var integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };


      /***/
}),
/* 38 */
/***/ (function (module, exports, __webpack_require__) {

      var anObject = __webpack_require__(9);
      var defineProperties = __webpack_require__(94);
      var enumBugKeys = __webpack_require__(66);
      var hiddenKeys = __webpack_require__(65);
      var html = __webpack_require__(95);
      var documentCreateElement = __webpack_require__(59);
      var sharedKey = __webpack_require__(63);

      var GT = '>';
      var LT = '<';
      var PROTOTYPE = 'prototype';
      var SCRIPT = 'script';
      var IE_PROTO = sharedKey('IE_PROTO');

      var EmptyConstructor = function () { /* empty */ };

      var scriptTag = function (content) {
        return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
      };

      // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
      var NullProtoObjectViaActiveX = function (activeXDocument) {
        activeXDocument.write(scriptTag(''));
        activeXDocument.close();
        var temp = activeXDocument.parentWindow.Object;
        activeXDocument = null; // avoid memory leak
        return temp;
      };

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var NullProtoObjectViaIFrame = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = documentCreateElement('iframe');
        var JS = 'java' + SCRIPT + ':';
        var iframeDocument;
        iframe.style.display = 'none';
        html.appendChild(iframe);
        // https://github.com/zloirock/core-js/issues/475
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag('document.F=Object'));
        iframeDocument.close();
        return iframeDocument.F;
      };

      // Check for document.domain and active x support
      // No need to use active x approach when document.domain is not set
      // see https://github.com/es-shims/es5-shim/issues/150
      // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
      // avoid IE GC bug
      var activeXDocument;
      var NullProtoObject = function () {
        try {
          /* global ActiveXObject -- old IE */
          activeXDocument = document.domain && new ActiveXObject('htmlfile');
        } catch (error) { /* ignore */ }
        NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
        var length = enumBugKeys.length;
        while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };

      hiddenKeys[IE_PROTO] = true;

      // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create
      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O;
        } else result = NullProtoObject();
        return Properties === undefined ? result : defineProperties(result, Properties);
      };


      /***/
}),
/* 39 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var fails = __webpack_require__(3);

      module.exports = function (METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails(function () {
          // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
          method.call(null, argument || function () { throw 1; }, 1);
        });
      };


      /***/
}),
/* 40 */
/***/ (function (module, exports, __webpack_require__) {

      var TO_STRING_TAG_SUPPORT = __webpack_require__(72);
      var classofRaw = __webpack_require__(29);
      var wellKnownSymbol = __webpack_require__(7);

      var TO_STRING_TAG = wellKnownSymbol('toStringTag');
      // ES3 wrong here
      var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

      // fallback for IE11 Script Access Denied error
      var tryGet = function (it, key) {
        try {
          return it[key];
        } catch (error) { /* empty */ }
      };

      // getting tag from ES6+ `Object.prototype.toString`
      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
        var O, tag, result;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
          // @@toStringTag case
          : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
            // builtinTag case
            : CORRECT_ARGUMENTS ? classofRaw(O)
              // ES3 arguments fallback
              : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
      };


      /***/
}),
/* 41 */
/***/ (function (module, exports) {

      module.exports = function (it, Constructor, name) {
        if (!(it instanceof Constructor)) {
          throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
        } return it;
      };


      /***/
}),
/* 42 */
/***/ (function (module, exports) {

      module.exports = {};


      /***/
}),
/* 43 */
/***/ (function (module, exports, __webpack_require__) {

      var classof = __webpack_require__(40);
      var Iterators = __webpack_require__(42);
      var wellKnownSymbol = __webpack_require__(7);

      var ITERATOR = wellKnownSymbol('iterator');

      module.exports = function (it) {
        if (it != undefined) return it[ITERATOR]
          || it['@@iterator']
          || Iterators[classof(it)];
      };


      /***/
}),
/* 44 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var toIndexedObject = __webpack_require__(28);
      var addToUnscopables = __webpack_require__(109);
      var Iterators = __webpack_require__(42);
      var InternalStateModule = __webpack_require__(23);
      var defineIterator = __webpack_require__(110);

      var ARRAY_ITERATOR = 'Array Iterator';
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

      // `Array.prototype.entries` method
      // https://tc39.es/ecma262/#sec-array.prototype.entries
      // `Array.prototype.keys` method
      // https://tc39.es/ecma262/#sec-array.prototype.keys
      // `Array.prototype.values` method
      // https://tc39.es/ecma262/#sec-array.prototype.values
      // `Array.prototype[@@iterator]` method
      // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
      // `CreateArrayIterator` internal method
      // https://tc39.es/ecma262/#sec-createarrayiterator
      module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated), // target
          index: 0,                          // next index
          kind: kind                         // kind
        });
        // `%ArrayIteratorPrototype%.next` method
        // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
      }, function () {
        var state = getInternalState(this);
        var target = state.target;
        var kind = state.kind;
        var index = state.index++;
        if (!target || index >= target.length) {
          state.target = undefined;
          return { value: undefined, done: true };
        }
        if (kind == 'keys') return { value: index, done: false };
        if (kind == 'values') return { value: target[index], done: false };
        return { value: [index, target[index]], done: false };
      }, 'values');

      // argumentsList[@@iterator] is %ArrayProto_values%
      // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
      // https://tc39.es/ecma262/#sec-createmappedargumentsobject
      Iterators.Arguments = Iterators.Array;

      // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');


      /***/
}),
/* 45 */
/***/ (function (module, exports, __webpack_require__) {

      /* eslint-disable no-proto -- safe */
      var anObject = __webpack_require__(9);
      var aPossiblePrototype = __webpack_require__(192);

      // `Object.setPrototypeOf` method
      // https://tc39.es/ecma262/#sec-object.setprototypeof
      // Works with __proto__ only. Old v8 can't work with null proto objects.
      module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
          setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
          setter.call(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) { /* empty */ }
        return function setPrototypeOf(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER) setter.call(O, proto);
          else O.__proto__ = proto;
          return O;
        };
      }() : undefined);


      /***/
}),
/* 46 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var $map = __webpack_require__(17).map;
      var arrayMethodHasSpeciesSupport = __webpack_require__(68);

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

      // `Array.prototype.map` method
      // https://tc39.es/ecma262/#sec-array.prototype.map
      // with adding support of @@species
      $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        map: function map(callbackfn /* , thisArg */) {
          return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });


      /***/
}),
/* 47 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var fails = __webpack_require__(3);
      var isArray = __webpack_require__(89);
      var isObject = __webpack_require__(12);
      var toObject = __webpack_require__(14);
      var toLength = __webpack_require__(8);
      var createProperty = __webpack_require__(90);
      var arraySpeciesCreate = __webpack_require__(91);
      var arrayMethodHasSpeciesSupport = __webpack_require__(68);
      var wellKnownSymbol = __webpack_require__(7);
      var V8_VERSION = __webpack_require__(69);

      var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
      var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
      var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

      // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/679
      var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
      });

      var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

      var isConcatSpreadable = function (O) {
        if (!isObject(O)) return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== undefined ? !!spreadable : isArray(O);
      };

      var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

      // `Array.prototype.concat` method
      // https://tc39.es/ecma262/#sec-array.prototype.concat
      // with adding support of @@isConcatSpreadable and @@species
      $({ target: 'Array', proto: true, forced: FORCED }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        concat: function concat(arg) {
          var O = toObject(this);
          var A = arraySpeciesCreate(O, 0);
          var n = 0;
          var i, k, length, len, E;
          for (i = -1, length = arguments.length; i < length; i++) {
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
              len = toLength(E.length);
              if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
            } else {
              if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              createProperty(A, n++, E);
            }
          }
          A.length = n;
          return A;
        }
      });


      /***/
}),
/* 48 */
/***/ (function (module, exports) {

      var g;

      // This works in non-strict mode
      g = (function () {
        return this;
      })();

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object") g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;


      /***/
}),
/* 49 */
/***/ (function (module, exports, __webpack_require__) {

      var DESCRIPTORS = __webpack_require__(11);
      var propertyIsEnumerableModule = __webpack_require__(58);
      var createPropertyDescriptor = __webpack_require__(27);
      var toIndexedObject = __webpack_require__(28);
      var toPrimitive = __webpack_require__(51);
      var has = __webpack_require__(13);
      var IE8_DOM_DEFINE = __webpack_require__(85);

      var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
      exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) try {
          return nativeGetOwnPropertyDescriptor(O, P);
        } catch (error) { /* empty */ }
        if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
      };


      /***/
}),
/* 50 */
/***/ (function (module, exports, __webpack_require__) {

      var fails = __webpack_require__(3);
      var classof = __webpack_require__(29);

      var split = ''.split;

      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      module.exports = fails(function () {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins -- safe
        return !Object('z').propertyIsEnumerable(0);
      }) ? function (it) {
        return classof(it) == 'String' ? split.call(it, '') : Object(it);
      } : Object;


      /***/
}),
/* 51 */
/***/ (function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(12);

      // `ToPrimitive` abstract operation
      // https://tc39.es/ecma262/#sec-toprimitive
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (input, PREFERRED_STRING) {
        if (!isObject(input)) return input;
        var fn, val;
        if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
        if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
        if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
        throw TypeError("Can't convert object to primitive value");
      };


      /***/
}),
/* 52 */
/***/ (function (module, exports, __webpack_require__) {

      var internalObjectKeys = __webpack_require__(87);
      var enumBugKeys = __webpack_require__(66);

      var hiddenKeys = enumBugKeys.concat('length', 'prototype');

      // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };


      /***/
}),
/* 53 */
/***/ (function (module, exports, __webpack_require__) {

      var getBuiltIn = __webpack_require__(30);

      module.exports = getBuiltIn('navigator', 'userAgent') || '';


      /***/
}),
/* 54 */
/***/ (function (module, exports, __webpack_require__) {

      var internalObjectKeys = __webpack_require__(87);
      var enumBugKeys = __webpack_require__(66);

      // `Object.keys` method
      // https://tc39.es/ecma262/#sec-object.keys
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };


      /***/
}),
/* 55 */
/***/ (function (module, exports, __webpack_require__) {

      var TO_STRING_TAG_SUPPORT = __webpack_require__(72);
      var redefine = __webpack_require__(16);
      var toString = __webpack_require__(176);

      // `Object.prototype.toString` method
      // https://tc39.es/ecma262/#sec-object.prototype.tostring
      if (!TO_STRING_TAG_SUPPORT) {
        redefine(Object.prototype, 'toString', toString, { unsafe: true });
      }


      /***/
}),
/* 56 */
/***/ (function (module, exports, __webpack_require__) {

      var has = __webpack_require__(13);
      var toObject = __webpack_require__(14);
      var sharedKey = __webpack_require__(63);
      var CORRECT_PROTOTYPE_GETTER = __webpack_require__(191);

      var IE_PROTO = sharedKey('IE_PROTO');
      var ObjectPrototype = Object.prototype;

      // `Object.getPrototypeOf` method
      // https://tc39.es/ecma262/#sec-object.getprototypeof
      module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];
        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        } return O instanceof Object ? ObjectPrototype : null;
      };


      /***/
}),
/* 57 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var regexpFlags = __webpack_require__(81);
      var stickyHelpers = __webpack_require__(119);

      var nativeExec = RegExp.prototype.exec;
      // This always refers to the native implementation, because the
      // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
      // which loads this file before patching the method.
      var nativeReplace = String.prototype.replace;

      var patchedExec = nativeExec;

      var UPDATES_LAST_INDEX_WRONG = (function () {
        var re1 = /a/;
        var re2 = /b*/g;
        nativeExec.call(re1, 'a');
        nativeExec.call(re2, 'a');
        return re1.lastIndex !== 0 || re2.lastIndex !== 0;
      })();

      var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

      // nonparticipating capturing group, copied from es5-shim's String#split patch.
      // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
      var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

      var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

      if (PATCH) {
        patchedExec = function exec(str) {
          var re = this;
          var lastIndex, reCopy, match, i;
          var sticky = UNSUPPORTED_Y && re.sticky;
          var flags = regexpFlags.call(re);
          var source = re.source;
          var charsAdded = 0;
          var strCopy = str;

          if (sticky) {
            flags = flags.replace('y', '');
            if (flags.indexOf('g') === -1) {
              flags += 'g';
            }

            strCopy = String(str).slice(re.lastIndex);
            // Support anchored sticky behavior.
            if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
              source = '(?: ' + source + ')';
              strCopy = ' ' + strCopy;
              charsAdded++;
            }
            // ^(? + rx + ) is needed, in combination with some str slicing, to
            // simulate the 'y' flag.
            reCopy = new RegExp('^(?:' + source + ')', flags);
          }

          if (NPCG_INCLUDED) {
            reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
          }
          if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

          match = nativeExec.call(sticky ? reCopy : re, strCopy);

          if (sticky) {
            if (match) {
              match.input = match.input.slice(charsAdded);
              match[0] = match[0].slice(charsAdded);
              match.index = re.lastIndex;
              re.lastIndex += match[0].length;
            } else re.lastIndex = 0;
          } else if (UPDATES_LAST_INDEX_WRONG && match) {
            re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
          }
          if (NPCG_INCLUDED && match && match.length > 1) {
            // Fix browsers whose `exec` methods don't consistently return `undefined`
            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
            nativeReplace.call(match[0], reCopy, function () {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undefined) match[i] = undefined;
              }
            });
          }

          return match;
        };
      }

      module.exports = patchedExec;


      /***/
}),
/* 58 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

      // Nashorn ~ JDK8 bug
      var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

      // `Object.prototype.propertyIsEnumerable` method implementation
      // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : nativePropertyIsEnumerable;


      /***/
}),
/* 59 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var isObject = __webpack_require__(12);

      var document = global.document;
      // typeof document.createElement is 'object' in old IE
      var EXISTS = isObject(document) && isObject(document.createElement);

      module.exports = function (it) {
        return EXISTS ? document.createElement(it) : {};
      };


      /***/
}),
/* 60 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var createNonEnumerableProperty = __webpack_require__(15);

      module.exports = function (key, value) {
        try {
          createNonEnumerableProperty(global, key, value);
        } catch (error) {
          global[key] = value;
        } return value;
      };


      /***/
}),
/* 61 */
/***/ (function (module, exports, __webpack_require__) {

      var store = __webpack_require__(62);

      var functionToString = Function.toString;

      // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
      if (typeof store.inspectSource != 'function') {
        store.inspectSource = function (it) {
          return functionToString.call(it);
        };
      }

      module.exports = store.inspectSource;


      /***/
}),
/* 62 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var setGlobal = __webpack_require__(60);

      var SHARED = '__core-js_shared__';
      var store = global[SHARED] || setGlobal(SHARED, {});

      module.exports = store;


      /***/
}),
/* 63 */
/***/ (function (module, exports, __webpack_require__) {

      var shared = __webpack_require__(86);
      var uid = __webpack_require__(64);

      var keys = shared('keys');

      module.exports = function (key) {
        return keys[key] || (keys[key] = uid(key));
      };


      /***/
}),
/* 64 */
/***/ (function (module, exports) {

      var id = 0;
      var postfix = Math.random();

      module.exports = function (key) {
        return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
      };


      /***/
}),
/* 65 */
/***/ (function (module, exports) {

      module.exports = {};


      /***/
}),
/* 66 */
/***/ (function (module, exports) {

      // IE8- don't enum bug keys
      module.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
      ];


      /***/
}),
/* 67 */
/***/ (function (module, exports, __webpack_require__) {

      var fails = __webpack_require__(3);

      var replacement = /#|\.prototype\./;

      var isForced = function (feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true
          : value == NATIVE ? false
            : typeof detection == 'function' ? fails(detection)
              : !!detection;
      };

      var normalize = isForced.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase();
      };

      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = 'N';
      var POLYFILL = isForced.POLYFILL = 'P';

      module.exports = isForced;


      /***/
}),
/* 68 */
/***/ (function (module, exports, __webpack_require__) {

      var fails = __webpack_require__(3);
      var wellKnownSymbol = __webpack_require__(7);
      var V8_VERSION = __webpack_require__(69);

      var SPECIES = wellKnownSymbol('species');

      module.exports = function (METHOD_NAME) {
        // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/677
        return V8_VERSION >= 51 || !fails(function () {
          var array = [];
          var constructor = array.constructor = {};
          constructor[SPECIES] = function () {
            return { foo: 1 };
          };
          return array[METHOD_NAME](Boolean).foo !== 1;
        });
      };


      /***/
}),
/* 69 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var userAgent = __webpack_require__(53);

      var process = global.process;
      var versions = process && process.versions;
      var v8 = versions && versions.v8;
      var match, version;

      if (v8) {
        match = v8.split('.');
        version = match[0] + match[1];
      } else if (userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match) version = match[1];
        }
      }

      module.exports = version && +version;


      /***/
}),
/* 70 */
/***/ (function (module, exports) {

      // a string of all valid unicode whitespaces
      module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
        '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


      /***/
}),
/* 71 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var forEach = __webpack_require__(98);

      // `Array.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-array.prototype.foreach
      $({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
        forEach: forEach
      });


      /***/
}),
/* 72 */
/***/ (function (module, exports, __webpack_require__) {

      var wellKnownSymbol = __webpack_require__(7);

      var TO_STRING_TAG = wellKnownSymbol('toStringTag');
      var test = {};

      test[TO_STRING_TAG] = 'z';

      module.exports = String(test) === '[object z]';


      /***/
}),
/* 73 */
/***/ (function (module, exports, __webpack_require__) {

      var redefine = __webpack_require__(16);

      module.exports = function (target, src, options) {
        for (var key in src) redefine(target, key, src[key], options);
        return target;
      };


      /***/
}),
/* 74 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var getBuiltIn = __webpack_require__(30);
      var definePropertyModule = __webpack_require__(19);
      var wellKnownSymbol = __webpack_require__(7);
      var DESCRIPTORS = __webpack_require__(11);

      var SPECIES = wellKnownSymbol('species');

      module.exports = function (CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        var defineProperty = definePropertyModule.f;

        if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
          defineProperty(Constructor, SPECIES, {
            configurable: true,
            get: function () { return this; }
          });
        }
      };


      /***/
}),
/* 75 */
/***/ (function (module, exports, __webpack_require__) {

      var wellKnownSymbol = __webpack_require__(7);
      var Iterators = __webpack_require__(42);

      var ITERATOR = wellKnownSymbol('iterator');
      var ArrayPrototype = Array.prototype;

      // check on default Array iterator
      module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };


      /***/
}),
/* 76 */
/***/ (function (module, exports, __webpack_require__) {

      var wellKnownSymbol = __webpack_require__(7);

      var ITERATOR = wellKnownSymbol('iterator');
      var SAFE_CLOSING = false;

      try {
        var called = 0;
        var iteratorWithReturn = {
          next: function () {
            return { done: !!called++ };
          },
          'return': function () {
            SAFE_CLOSING = true;
          }
        };
        iteratorWithReturn[ITERATOR] = function () {
          return this;
        };
        // eslint-disable-next-line no-throw-literal -- required for testing
        Array.from(iteratorWithReturn, function () { throw 2; });
      } catch (error) { /* empty */ }

      module.exports = function (exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
        var ITERATION_SUPPORT = false;
        try {
          var object = {};
          object[ITERATOR] = function () {
            return {
              next: function () {
                return { done: ITERATION_SUPPORT = true };
              }
            };
          };
          exec(object);
        } catch (error) { /* empty */ }
        return ITERATION_SUPPORT;
      };


      /***/
}),
/* 77 */
/***/ (function (module, exports, __webpack_require__) {

      var classof = __webpack_require__(29);
      var global = __webpack_require__(2);

      module.exports = classof(global.process) == 'process';


      /***/
}),
/* 78 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var DOMIterables = __webpack_require__(105);
      var forEach = __webpack_require__(98);
      var createNonEnumerableProperty = __webpack_require__(15);

      for (var COLLECTION_NAME in DOMIterables) {
        var Collection = global[COLLECTION_NAME];
        var CollectionPrototype = Collection && Collection.prototype;
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
          createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
        } catch (error) {
          CollectionPrototype.forEach = forEach;
        }
      }


      /***/
}),
/* 79 */
/***/ (function (module, exports, __webpack_require__) {

      var $ = __webpack_require__(6);
      var global = __webpack_require__(2);
      var userAgent = __webpack_require__(53);

      var slice = [].slice;
      var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

      var wrap = function (scheduler) {
        return function (handler, timeout /* , ...arguments */) {
          var boundArgs = arguments.length > 2;
          var args = boundArgs ? slice.call(arguments, 2) : undefined;
          return scheduler(boundArgs ? function () {
            // eslint-disable-next-line no-new-func -- spec requirement
            (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
          } : handler, timeout);
        };
      };

      // ie9- setTimeout & setInterval additional parameters fix
      // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
      $({ global: true, bind: true, forced: MSIE }, {
        // `setTimeout` method
        // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
        setTimeout: wrap(global.setTimeout),
        // `setInterval` method
        // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
        setInterval: wrap(global.setInterval)
      });


      /***/
}),
/* 80 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var exec = __webpack_require__(57);

      // `RegExp.prototype.exec` method
      // https://tc39.es/ecma262/#sec-regexp.prototype.exec
      $({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
        exec: exec
      });


      /***/
}),
/* 81 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var anObject = __webpack_require__(9);

      // `RegExp.prototype.flags` getter implementation
      // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
      module.exports = function () {
        var that = anObject(this);
        var result = '';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.dotAll) result += 's';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
      };


      /***/
}),
/* 82 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var charAt = __webpack_require__(83).charAt;
      var InternalStateModule = __webpack_require__(23);
      var defineIterator = __webpack_require__(110);

      var STRING_ITERATOR = 'String Iterator';
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

      // `String.prototype[@@iterator]` method
      // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
      defineIterator(String, 'String', function (iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: String(iterated),
          index: 0
        });
        // `%StringIteratorPrototype%.next` method
        // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
      }, function next() {
        var state = getInternalState(this);
        var string = state.string;
        var index = state.index;
        var point;
        if (index >= string.length) return { value: undefined, done: true };
        point = charAt(string, index);
        state.index += point.length;
        return { value: point, done: false };
      });


      /***/
}),
/* 83 */
/***/ (function (module, exports, __webpack_require__) {

      var toInteger = __webpack_require__(24);
      var requireObjectCoercible = __webpack_require__(22);

      // `String.prototype.{ codePointAt, at }` methods implementation
      var createMethod = function (CONVERT_TO_STRING) {
        return function ($this, pos) {
          var S = String(requireObjectCoercible($this));
          var position = toInteger(pos);
          var size = S.length;
          var first, second;
          if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
          first = S.charCodeAt(position);
          return first < 0xD800 || first > 0xDBFF || position + 1 === size
            || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
            ? CONVERT_TO_STRING ? S.charAt(position) : first
            : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
        };
      };

      module.exports = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod(true)
      };


      /***/
}),
/* 84 */
/***/ (function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(12);
      var classof = __webpack_require__(29);
      var wellKnownSymbol = __webpack_require__(7);

      var MATCH = wellKnownSymbol('match');

      // `IsRegExp` abstract operation
      // https://tc39.es/ecma262/#sec-isregexp
      module.exports = function (it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
      };


      /***/
}),
/* 85 */
/***/ (function (module, exports, __webpack_require__) {

      var DESCRIPTORS = __webpack_require__(11);
      var fails = __webpack_require__(3);
      var createElement = __webpack_require__(59);

      // Thank's IE8 for his funny defineProperty
      module.exports = !DESCRIPTORS && !fails(function () {
        return Object.defineProperty(createElement('div'), 'a', {
          get: function () { return 7; }
        }).a != 7;
      });


      /***/
}),
/* 86 */
/***/ (function (module, exports, __webpack_require__) {

      var IS_PURE = __webpack_require__(35);
      var store = __webpack_require__(62);

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: '3.9.0',
        mode: IS_PURE ? 'pure' : 'global',
        copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
      });


      /***/
}),
/* 87 */
/***/ (function (module, exports, __webpack_require__) {

      var has = __webpack_require__(13);
      var toIndexedObject = __webpack_require__(28);
      var indexOf = __webpack_require__(36).indexOf;
      var hiddenKeys = __webpack_require__(65);

      module.exports = function (object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i) if (has(O, key = names[i++])) {
          ~indexOf(result, key) || result.push(key);
        }
        return result;
      };


      /***/
}),
/* 88 */
/***/ (function (module, exports) {

      exports.f = Object.getOwnPropertySymbols;


      /***/
}),
/* 89 */
/***/ (function (module, exports, __webpack_require__) {

      var classof = __webpack_require__(29);

      // `IsArray` abstract operation
      // https://tc39.es/ecma262/#sec-isarray
      module.exports = Array.isArray || function isArray(arg) {
        return classof(arg) == 'Array';
      };


      /***/
}),
/* 90 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var toPrimitive = __webpack_require__(51);
      var definePropertyModule = __webpack_require__(19);
      var createPropertyDescriptor = __webpack_require__(27);

      module.exports = function (object, key, value) {
        var propertyKey = toPrimitive(key);
        if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
        else object[propertyKey] = value;
      };


      /***/
}),
/* 91 */
/***/ (function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(12);
      var isArray = __webpack_require__(89);
      var wellKnownSymbol = __webpack_require__(7);

      var SPECIES = wellKnownSymbol('species');

      // `ArraySpeciesCreate` abstract operation
      // https://tc39.es/ecma262/#sec-arrayspeciescreate
      module.exports = function (originalArray, length) {
        var C;
        if (isArray(originalArray)) {
          C = originalArray.constructor;
          // cross-realm fallback
          if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
          else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
          }
        } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
      };


      /***/
}),
/* 92 */
/***/ (function (module, exports, __webpack_require__) {

      var fails = __webpack_require__(3);

      module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
        // Chrome 38 Symbol has incorrect toString conversion
        /* global Symbol -- required for testing */
        return !String(Symbol());
      });


      /***/
}),
/* 93 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var DESCRIPTORS = __webpack_require__(11);
      var fails = __webpack_require__(3);
      var objectKeys = __webpack_require__(54);
      var getOwnPropertySymbolsModule = __webpack_require__(88);
      var propertyIsEnumerableModule = __webpack_require__(58);
      var toObject = __webpack_require__(14);
      var IndexedObject = __webpack_require__(50);

      var nativeAssign = Object.assign;
      var defineProperty = Object.defineProperty;

      // `Object.assign` method
      // https://tc39.es/ecma262/#sec-object.assign
      module.exports = !nativeAssign || fails(function () {
        // should have correct order of operations (Edge bug)
        if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
          enumerable: true,
          get: function () {
            defineProperty(this, 'b', {
              value: 3,
              enumerable: false
            });
          }
        }), { b: 2 })).b !== 1) return true;
        // should work with symbols and should have deterministic property order (V8 bug)
        var A = {};
        var B = {};
        /* global Symbol -- required for testing */
        var symbol = Symbol();
        var alphabet = 'abcdefghijklmnopqrst';
        A[symbol] = 7;
        alphabet.split('').forEach(function (chr) { B[chr] = chr; });
        return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
      }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
        var T = toObject(target);
        var argumentsLength = arguments.length;
        var index = 1;
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        var propertyIsEnumerable = propertyIsEnumerableModule.f;
        while (argumentsLength > index) {
          var S = IndexedObject(arguments[index++]);
          var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
          var length = keys.length;
          var j = 0;
          var key;
          while (length > j) {
            key = keys[j++];
            if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
          }
        } return T;
      } : nativeAssign;


      /***/
}),
/* 94 */
/***/ (function (module, exports, __webpack_require__) {

      var DESCRIPTORS = __webpack_require__(11);
      var definePropertyModule = __webpack_require__(19);
      var anObject = __webpack_require__(9);
      var objectKeys = __webpack_require__(54);

      // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties
      module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
        return O;
      };


      /***/
}),
/* 95 */
/***/ (function (module, exports, __webpack_require__) {

      var getBuiltIn = __webpack_require__(30);

      module.exports = getBuiltIn('document', 'documentElement');


      /***/
}),
/* 96 */
/***/ (function (module, exports, __webpack_require__) {

      var $ = __webpack_require__(6);
      var parseFloatImplementation = __webpack_require__(175);

      // `parseFloat` method
      // https://tc39.es/ecma262/#sec-parsefloat-string
      $({ global: true, forced: parseFloat != parseFloatImplementation }, {
        parseFloat: parseFloatImplementation
      });


      /***/
}),
/* 97 */
/***/ (function (module, exports, __webpack_require__) {

      var requireObjectCoercible = __webpack_require__(22);
      var whitespaces = __webpack_require__(70);

      var whitespace = '[' + whitespaces + ']';
      var ltrim = RegExp('^' + whitespace + whitespace + '*');
      var rtrim = RegExp(whitespace + whitespace + '*$');

      // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
      var createMethod = function (TYPE) {
        return function ($this) {
          var string = String(requireObjectCoercible($this));
          if (TYPE & 1) string = string.replace(ltrim, '');
          if (TYPE & 2) string = string.replace(rtrim, '');
          return string;
        };
      };

      module.exports = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimstart
        start: createMethod(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimend
        end: createMethod(2),
        // `String.prototype.trim` method
        // https://tc39.es/ecma262/#sec-string.prototype.trim
        trim: createMethod(3)
      };


      /***/
}),
/* 98 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $forEach = __webpack_require__(17).forEach;
      var arrayMethodIsStrict = __webpack_require__(39);

      var STRICT_METHOD = arrayMethodIsStrict('forEach');

      // `Array.prototype.forEach` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.foreach
      module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
        return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      } : [].forEach;


      /***/
}),
/* 99 */
/***/ (function (module, exports, __webpack_require__) {

      var $ = __webpack_require__(6);
      var $values = __webpack_require__(177).values;

      // `Object.values` method
      // https://tc39.es/ecma262/#sec-object.values
      $({ target: 'Object', stat: true }, {
        values: function values(O) {
          return $values(O);
        }
      });


      /***/
}),
/* 100 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var IS_PURE = __webpack_require__(35);
      var global = __webpack_require__(2);
      var getBuiltIn = __webpack_require__(30);
      var NativePromise = __webpack_require__(178);
      var redefine = __webpack_require__(16);
      var redefineAll = __webpack_require__(73);
      var setToStringTag = __webpack_require__(33);
      var setSpecies = __webpack_require__(74);
      var isObject = __webpack_require__(12);
      var aFunction = __webpack_require__(32);
      var anInstance = __webpack_require__(41);
      var inspectSource = __webpack_require__(61);
      var iterate = __webpack_require__(179);
      var checkCorrectnessOfIteration = __webpack_require__(76);
      var speciesConstructor = __webpack_require__(26);
      var task = __webpack_require__(102).set;
      var microtask = __webpack_require__(180);
      var promiseResolve = __webpack_require__(182);
      var hostReportErrors = __webpack_require__(183);
      var newPromiseCapabilityModule = __webpack_require__(104);
      var perform = __webpack_require__(184);
      var InternalStateModule = __webpack_require__(23);
      var isForced = __webpack_require__(67);
      var wellKnownSymbol = __webpack_require__(7);
      var IS_NODE = __webpack_require__(77);
      var V8_VERSION = __webpack_require__(69);

      var SPECIES = wellKnownSymbol('species');
      var PROMISE = 'Promise';
      var getInternalState = InternalStateModule.get;
      var setInternalState = InternalStateModule.set;
      var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
      var PromiseConstructor = NativePromise;
      var TypeError = global.TypeError;
      var document = global.document;
      var process = global.process;
      var $fetch = getBuiltIn('fetch');
      var newPromiseCapability = newPromiseCapabilityModule.f;
      var newGenericPromiseCapability = newPromiseCapability;
      var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
      var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
      var UNHANDLED_REJECTION = 'unhandledrejection';
      var REJECTION_HANDLED = 'rejectionhandled';
      var PENDING = 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      var HANDLED = 1;
      var UNHANDLED = 2;
      var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

      var FORCED = isForced(PROMISE, function () {
        var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
        if (!GLOBAL_CORE_JS_PROMISE) {
          // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
          // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
          // We can't detect it synchronously, so just check versions
          if (V8_VERSION === 66) return true;
          // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
          if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
        }
        // We need Promise#finally in the pure version for preventing prototype pollution
        if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
        // We can't use @@species feature detection in V8 since it causes
        // deoptimization and performance degradation
        // https://github.com/zloirock/core-js/issues/679
        if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
        // Detect correctness of subclassing with @@species support
        var promise = PromiseConstructor.resolve(1);
        var FakePromise = function (exec) {
          exec(function () { /* empty */ }, function () { /* empty */ });
        };
        var constructor = promise.constructor = {};
        constructor[SPECIES] = FakePromise;
        return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
      });

      var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
        PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
      });

      // helpers
      var isThenable = function (it) {
        var then;
        return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
      };

      var notify = function (state, isReject) {
        if (state.notified) return;
        state.notified = true;
        var chain = state.reactions;
        microtask(function () {
          var value = state.value;
          var ok = state.state == FULFILLED;
          var index = 0;
          // variable length - can't use forEach
          while (chain.length > index) {
            var reaction = chain[index++];
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
              if (handler) {
                if (!ok) {
                  if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                  state.rejection = HANDLED;
                }
                if (handler === true) result = value;
                else {
                  if (domain) domain.enter();
                  result = handler(value); // can throw
                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }
                if (result === reaction.promise) {
                  reject(TypeError('Promise-chain cycle'));
                } else if (then = isThenable(result)) {
                  then.call(result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (error) {
              if (domain && !exited) domain.exit();
              reject(error);
            }
          }
          state.reactions = [];
          state.notified = false;
          if (isReject && !state.rejection) onUnhandled(state);
        });
      };

      var dispatchEvent = function (name, promise, reason) {
        var event, handler;
        if (DISPATCH_EVENT) {
          event = document.createEvent('Event');
          event.promise = promise;
          event.reason = reason;
          event.initEvent(name, false, true);
          global.dispatchEvent(event);
        } else event = { promise: promise, reason: reason };
        if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
        else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
      };

      var onUnhandled = function (state) {
        task.call(global, function () {
          var promise = state.facade;
          var value = state.value;
          var IS_UNHANDLED = isUnhandled(state);
          var result;
          if (IS_UNHANDLED) {
            result = perform(function () {
              if (IS_NODE) {
                process.emit('unhandledRejection', value, promise);
              } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
          }
        });
      };

      var isUnhandled = function (state) {
        return state.rejection !== HANDLED && !state.parent;
      };

      var onHandleUnhandled = function (state) {
        task.call(global, function () {
          var promise = state.facade;
          if (IS_NODE) {
            process.emit('rejectionHandled', promise);
          } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
        });
      };

      var bind = function (fn, state, unwrap) {
        return function (value) {
          fn(state, value, unwrap);
        };
      };

      var internalReject = function (state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        state.value = value;
        state.state = REJECTED;
        notify(state, true);
      };

      var internalResolve = function (state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        try {
          if (state.facade === value) throw TypeError("Promise can't be resolved itself");
          var then = isThenable(value);
          if (then) {
            microtask(function () {
              var wrapper = { done: false };
              try {
                then.call(value,
                  bind(internalResolve, wrapper, state),
                  bind(internalReject, wrapper, state)
                );
              } catch (error) {
                internalReject(wrapper, error, state);
              }
            });
          } else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
          }
        } catch (error) {
          internalReject({ done: false }, error, state);
        }
      };

      // constructor polyfill
      if (FORCED) {
        // 25.4.3.1 Promise(executor)
        PromiseConstructor = function Promise(executor) {
          anInstance(this, PromiseConstructor, PROMISE);
          aFunction(executor);
          Internal.call(this);
          var state = getInternalState(this);
          try {
            executor(bind(internalResolve, state), bind(internalReject, state));
          } catch (error) {
            internalReject(state, error);
          }
        };
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        Internal = function Promise(executor) {
          setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: PENDING,
            value: undefined
          });
        };
        Internal.prototype = redefineAll(PromiseConstructor.prototype, {
          // `Promise.prototype.then` method
          // https://tc39.es/ecma262/#sec-promise.prototype.then
          then: function then(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this);
            var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            reaction.domain = IS_NODE ? process.domain : undefined;
            state.parent = true;
            state.reactions.push(reaction);
            if (state.state != PENDING) notify(state, false);
            return reaction.promise;
          },
          // `Promise.prototype.catch` method
          // https://tc39.es/ecma262/#sec-promise.prototype.catch
          'catch': function (onRejected) {
            return this.then(undefined, onRejected);
          }
        });
        OwnPromiseCapability = function () {
          var promise = new Internal();
          var state = getInternalState(promise);
          this.promise = promise;
          this.resolve = bind(internalResolve, state);
          this.reject = bind(internalReject, state);
        };
        newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
          return C === PromiseConstructor || C === PromiseWrapper
            ? new OwnPromiseCapability(C)
            : newGenericPromiseCapability(C);
        };

        if (!IS_PURE && typeof NativePromise == 'function') {
          nativeThen = NativePromise.prototype.then;

          // wrap native Promise#then for native async functions
          redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor(function (resolve, reject) {
              nativeThen.call(that, resolve, reject);
            }).then(onFulfilled, onRejected);
            // https://github.com/zloirock/core-js/issues/640
          }, { unsafe: true });

          // wrap fetch result
          if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
            // eslint-disable-next-line no-unused-vars -- required for `.length`
            fetch: function fetch(input /* , init */) {
              return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
            }
          });
        }
      }

      $({ global: true, wrap: true, forced: FORCED }, {
        Promise: PromiseConstructor
      });

      setToStringTag(PromiseConstructor, PROMISE, false, true);
      setSpecies(PROMISE);

      PromiseWrapper = getBuiltIn(PROMISE);

      // statics
      $({ target: PROMISE, stat: true, forced: FORCED }, {
        // `Promise.reject` method
        // https://tc39.es/ecma262/#sec-promise.reject
        reject: function reject(r) {
          var capability = newPromiseCapability(this);
          capability.reject.call(undefined, r);
          return capability.promise;
        }
      });

      $({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
        // `Promise.resolve` method
        // https://tc39.es/ecma262/#sec-promise.resolve
        resolve: function resolve(x) {
          return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
        }
      });

      $({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
        // `Promise.all` method
        // https://tc39.es/ecma262/#sec-promise.all
        all: function all(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function () {
            var $promiseResolve = aFunction(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function (promise) {
              var index = counter++;
              var alreadyCalled = false;
              values.push(undefined);
              remaining++;
              $promiseResolve.call(C, promise).then(function (value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.error) reject(result.value);
          return capability.promise;
        },
        // `Promise.race` method
        // https://tc39.es/ecma262/#sec-promise.race
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var reject = capability.reject;
          var result = perform(function () {
            var $promiseResolve = aFunction(C.resolve);
            iterate(iterable, function (promise) {
              $promiseResolve.call(C, promise).then(capability.resolve, reject);
            });
          });
          if (result.error) reject(result.value);
          return capability.promise;
        }
      });


      /***/
}),
/* 101 */
/***/ (function (module, exports, __webpack_require__) {

      var anObject = __webpack_require__(9);

      module.exports = function (iterator) {
        var returnMethod = iterator['return'];
        if (returnMethod !== undefined) {
          return anObject(returnMethod.call(iterator)).value;
        }
      };


      /***/
}),
/* 102 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var fails = __webpack_require__(3);
      var bind = __webpack_require__(31);
      var html = __webpack_require__(95);
      var createElement = __webpack_require__(59);
      var IS_IOS = __webpack_require__(103);
      var IS_NODE = __webpack_require__(77);

      var location = global.location;
      var set = global.setImmediate;
      var clear = global.clearImmediate;
      var process = global.process;
      var MessageChannel = global.MessageChannel;
      var Dispatch = global.Dispatch;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = 'onreadystatechange';
      var defer, channel, port;

      var run = function (id) {
        // eslint-disable-next-line no-prototype-builtins -- safe
        if (queue.hasOwnProperty(id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };

      var runner = function (id) {
        return function () {
          run(id);
        };
      };

      var listener = function (event) {
        run(event.data);
      };

      var post = function (id) {
        // old engines have not location.origin
        global.postMessage(id + '', location.protocol + '//' + location.host);
      };

      // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
      if (!set || !clear) {
        set = function setImmediate(fn) {
          var args = [];
          var i = 1;
          while (arguments.length > i) args.push(arguments[i++]);
          queue[++counter] = function () {
            // eslint-disable-next-line no-new-func -- spec requirement
            (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
          };
          defer(counter);
          return counter;
        };
        clear = function clearImmediate(id) {
          delete queue[id];
        };
        // Node.js 0.8-
        if (IS_NODE) {
          defer = function (id) {
            process.nextTick(runner(id));
          };
          // Sphere (JS game engine) Dispatch API
        } else if (Dispatch && Dispatch.now) {
          defer = function (id) {
            Dispatch.now(runner(id));
          };
          // Browsers with MessageChannel, includes WebWorkers
          // except iOS - https://github.com/zloirock/core-js/issues/624
        } else if (MessageChannel && !IS_IOS) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = bind(port.postMessage, port, 1);
          // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (
          global.addEventListener &&
          typeof postMessage == 'function' &&
          !global.importScripts &&
          location && location.protocol !== 'file:' &&
          !fails(post)
        ) {
          defer = post;
          global.addEventListener('message', listener, false);
          // IE8-
        } else if (ONREADYSTATECHANGE in createElement('script')) {
          defer = function (id) {
            html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run(id);
            };
          };
          // Rest old browsers
        } else {
          defer = function (id) {
            setTimeout(runner(id), 0);
          };
        }
      }

      module.exports = {
        set: set,
        clear: clear
      };


      /***/
}),
/* 103 */
/***/ (function (module, exports, __webpack_require__) {

      var userAgent = __webpack_require__(53);

      module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


      /***/
}),
/* 104 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var aFunction = __webpack_require__(32);

      var PromiseCapability = function (C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
          if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aFunction(resolve);
        this.reject = aFunction(reject);
      };

      // 25.4.1.5 NewPromiseCapability(C)
      module.exports.f = function (C) {
        return new PromiseCapability(C);
      };


      /***/
}),
/* 105 */
/***/ (function (module, exports) {

      // iterable DOM collections
      // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
      module.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };


      /***/
}),
/* 106 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var $filter = __webpack_require__(17).filter;
      var arrayMethodHasSpeciesSupport = __webpack_require__(68);

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

      // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      // with adding support of @@species
      $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        filter: function filter(callbackfn /* , thisArg */) {
          return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });


      /***/
}),
/* 107 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var aFunction = __webpack_require__(32);
      var toObject = __webpack_require__(14);
      var fails = __webpack_require__(3);
      var arrayMethodIsStrict = __webpack_require__(39);

      var test = [];
      var nativeSort = test.sort;

      // IE8-
      var FAILS_ON_UNDEFINED = fails(function () {
        test.sort(undefined);
      });
      // V8 bug
      var FAILS_ON_NULL = fails(function () {
        test.sort(null);
      });
      // Old WebKit
      var STRICT_METHOD = arrayMethodIsStrict('sort');

      var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

      // `Array.prototype.sort` method
      // https://tc39.es/ecma262/#sec-array.prototype.sort
      $({ target: 'Array', proto: true, forced: FORCED }, {
        sort: function sort(comparefn) {
          return comparefn === undefined
            ? nativeSort.call(toObject(this))
            : nativeSort.call(toObject(this), aFunction(comparefn));
        }
      });


      /***/
}),
/* 108 */
/***/ (function (module, exports, __webpack_require__) {

      var redefine = __webpack_require__(16);

      var DatePrototype = Date.prototype;
      var INVALID_DATE = 'Invalid Date';
      var TO_STRING = 'toString';
      var nativeDateToString = DatePrototype[TO_STRING];
      var getTime = DatePrototype.getTime;

      // `Date.prototype.toString` method
      // https://tc39.es/ecma262/#sec-date.prototype.tostring
      if (new Date(NaN) + '' != INVALID_DATE) {
        redefine(DatePrototype, TO_STRING, function toString() {
          var value = getTime.call(this);
          // eslint-disable-next-line no-self-compare -- NaN check
          return value === value ? nativeDateToString.call(this) : INVALID_DATE;
        });
      }


      /***/
}),
/* 109 */
/***/ (function (module, exports, __webpack_require__) {

      var wellKnownSymbol = __webpack_require__(7);
      var create = __webpack_require__(38);
      var definePropertyModule = __webpack_require__(19);

      var UNSCOPABLES = wellKnownSymbol('unscopables');
      var ArrayPrototype = Array.prototype;

      // Array.prototype[@@unscopables]
      // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
      if (ArrayPrototype[UNSCOPABLES] == undefined) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        });
      }

      // add a key to Array.prototype[@@unscopables]
      module.exports = function (key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };


      /***/
}),
/* 110 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var createIteratorConstructor = __webpack_require__(111);
      var getPrototypeOf = __webpack_require__(56);
      var setPrototypeOf = __webpack_require__(45);
      var setToStringTag = __webpack_require__(33);
      var createNonEnumerableProperty = __webpack_require__(15);
      var redefine = __webpack_require__(16);
      var wellKnownSymbol = __webpack_require__(7);
      var IS_PURE = __webpack_require__(35);
      var Iterators = __webpack_require__(42);
      var IteratorsCore = __webpack_require__(112);

      var IteratorPrototype = IteratorsCore.IteratorPrototype;
      var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
      var ITERATOR = wellKnownSymbol('iterator');
      var KEYS = 'keys';
      var VALUES = 'values';
      var ENTRIES = 'entries';

      var returnThis = function () { return this; };

      module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);

        var getIterationMethod = function (KIND) {
          if (KIND === DEFAULT && defaultIterator) return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
          switch (KIND) {
            case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
            case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
            case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
          } return function () { return new IteratorConstructor(this); };
        };

        var TO_STRING_TAG = NAME + ' Iterator';
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR]
          || IterablePrototype['@@iterator']
          || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods, KEY;

        // fix native
        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
          if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf) {
                setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
              } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
                createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
              }
            }
            // Set @@toStringTag to native iterators
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
          }
        }

        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = function values() { return nativeIterator.call(this); };
        }

        // define iterator
        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
        }
        Iterators[NAME] = defaultIterator;

        // export additional methods
        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED) for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              redefine(IterablePrototype, KEY, methods[KEY]);
            }
          } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
        }

        return methods;
      };


      /***/
}),
/* 111 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var IteratorPrototype = __webpack_require__(112).IteratorPrototype;
      var create = __webpack_require__(38);
      var createPropertyDescriptor = __webpack_require__(27);
      var setToStringTag = __webpack_require__(33);
      var Iterators = __webpack_require__(42);

      var returnThis = function () { return this; };

      module.exports = function (IteratorConstructor, NAME, next) {
        var TO_STRING_TAG = NAME + ' Iterator';
        IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis;
        return IteratorConstructor;
      };


      /***/
}),
/* 112 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var fails = __webpack_require__(3);
      var getPrototypeOf = __webpack_require__(56);
      var createNonEnumerableProperty = __webpack_require__(15);
      var has = __webpack_require__(13);
      var wellKnownSymbol = __webpack_require__(7);
      var IS_PURE = __webpack_require__(35);

      var ITERATOR = wellKnownSymbol('iterator');
      var BUGGY_SAFARI_ITERATORS = false;

      var returnThis = function () { return this; };

      // `%IteratorPrototype%` object
      // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
      var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

      if ([].keys) {
        arrayIterator = [].keys();
        // Safari 8 has buggy iterators w/o `next`
        if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }

      var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
        var test = {};
        // FF44- legacy iterators case
        return IteratorPrototype[ITERATOR].call(test) !== test;
      });

      if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
        createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
      }

      module.exports = {
        IteratorPrototype: IteratorPrototype,
        BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
      };


      /***/
}),
/* 113 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var fails = __webpack_require__(3);
      var ArrayBufferModule = __webpack_require__(114);
      var anObject = __webpack_require__(9);
      var toAbsoluteIndex = __webpack_require__(37);
      var toLength = __webpack_require__(8);
      var speciesConstructor = __webpack_require__(26);

      var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
      var DataView = ArrayBufferModule.DataView;
      var nativeArrayBufferSlice = ArrayBuffer.prototype.slice;

      var INCORRECT_SLICE = fails(function () {
        return !new ArrayBuffer(2).slice(1, undefined).byteLength;
      });

      // `ArrayBuffer.prototype.slice` method
      // https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
      $({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
        slice: function slice(start, end) {
          if (nativeArrayBufferSlice !== undefined && end === undefined) {
            return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
          }
          var length = anObject(this).byteLength;
          var first = toAbsoluteIndex(start, length);
          var fin = toAbsoluteIndex(end === undefined ? length : end, length);
          var result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first));
          var viewSource = new DataView(this);
          var viewTarget = new DataView(result);
          var index = 0;
          while (first < fin) {
            viewTarget.setUint8(index++, viewSource.getUint8(first++));
          } return result;
        }
      });


      /***/
}),
/* 114 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var global = __webpack_require__(2);
      var DESCRIPTORS = __webpack_require__(11);
      var NATIVE_ARRAY_BUFFER = __webpack_require__(115);
      var createNonEnumerableProperty = __webpack_require__(15);
      var redefineAll = __webpack_require__(73);
      var fails = __webpack_require__(3);
      var anInstance = __webpack_require__(41);
      var toInteger = __webpack_require__(24);
      var toLength = __webpack_require__(8);
      var toIndex = __webpack_require__(116);
      var IEEE754 = __webpack_require__(193);
      var getPrototypeOf = __webpack_require__(56);
      var setPrototypeOf = __webpack_require__(45);
      var getOwnPropertyNames = __webpack_require__(52).f;
      var defineProperty = __webpack_require__(19).f;
      var arrayFill = __webpack_require__(117);
      var setToStringTag = __webpack_require__(33);
      var InternalStateModule = __webpack_require__(23);

      var getInternalState = InternalStateModule.get;
      var setInternalState = InternalStateModule.set;
      var ARRAY_BUFFER = 'ArrayBuffer';
      var DATA_VIEW = 'DataView';
      var PROTOTYPE = 'prototype';
      var WRONG_LENGTH = 'Wrong length';
      var WRONG_INDEX = 'Wrong index';
      var NativeArrayBuffer = global[ARRAY_BUFFER];
      var $ArrayBuffer = NativeArrayBuffer;
      var $DataView = global[DATA_VIEW];
      var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
      var ObjectPrototype = Object.prototype;
      var RangeError = global.RangeError;

      var packIEEE754 = IEEE754.pack;
      var unpackIEEE754 = IEEE754.unpack;

      var packInt8 = function (number) {
        return [number & 0xFF];
      };

      var packInt16 = function (number) {
        return [number & 0xFF, number >> 8 & 0xFF];
      };

      var packInt32 = function (number) {
        return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
      };

      var unpackInt32 = function (buffer) {
        return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
      };

      var packFloat32 = function (number) {
        return packIEEE754(number, 23, 4);
      };

      var packFloat64 = function (number) {
        return packIEEE754(number, 52, 8);
      };

      var addGetter = function (Constructor, key) {
        defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
      };

      var get = function (view, count, index, isLittleEndian) {
        var intIndex = toIndex(index);
        var store = getInternalState(view);
        if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
        var bytes = getInternalState(store.buffer).bytes;
        var start = intIndex + store.byteOffset;
        var pack = bytes.slice(start, start + count);
        return isLittleEndian ? pack : pack.reverse();
      };

      var set = function (view, count, index, conversion, value, isLittleEndian) {
        var intIndex = toIndex(index);
        var store = getInternalState(view);
        if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
        var bytes = getInternalState(store.buffer).bytes;
        var start = intIndex + store.byteOffset;
        var pack = conversion(+value);
        for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
      };

      if (!NATIVE_ARRAY_BUFFER) {
        $ArrayBuffer = function ArrayBuffer(length) {
          anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
          var byteLength = toIndex(length);
          setInternalState(this, {
            bytes: arrayFill.call(new Array(byteLength), 0),
            byteLength: byteLength
          });
          if (!DESCRIPTORS) this.byteLength = byteLength;
        };

        $DataView = function DataView(buffer, byteOffset, byteLength) {
          anInstance(this, $DataView, DATA_VIEW);
          anInstance(buffer, $ArrayBuffer, DATA_VIEW);
          var bufferLength = getInternalState(buffer).byteLength;
          var offset = toInteger(byteOffset);
          if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
          byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
          if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
          setInternalState(this, {
            buffer: buffer,
            byteLength: byteLength,
            byteOffset: offset
          });
          if (!DESCRIPTORS) {
            this.buffer = buffer;
            this.byteLength = byteLength;
            this.byteOffset = offset;
          }
        };

        if (DESCRIPTORS) {
          addGetter($ArrayBuffer, 'byteLength');
          addGetter($DataView, 'buffer');
          addGetter($DataView, 'byteLength');
          addGetter($DataView, 'byteOffset');
        }

        redefineAll($DataView[PROTOTYPE], {
          getInt8: function getInt8(byteOffset) {
            return get(this, 1, byteOffset)[0] << 24 >> 24;
          },
          getUint8: function getUint8(byteOffset) {
            return get(this, 1, byteOffset)[0];
          },
          getInt16: function getInt16(byteOffset /* , littleEndian */) {
            var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
            return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
          },
          getUint16: function getUint16(byteOffset /* , littleEndian */) {
            var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
            return bytes[1] << 8 | bytes[0];
          },
          getInt32: function getInt32(byteOffset /* , littleEndian */) {
            return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
          },
          getUint32: function getUint32(byteOffset /* , littleEndian */) {
            return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
          },
          getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
            return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
          },
          getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
            return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
          },
          setInt8: function setInt8(byteOffset, value) {
            set(this, 1, byteOffset, packInt8, value);
          },
          setUint8: function setUint8(byteOffset, value) {
            set(this, 1, byteOffset, packInt8, value);
          },
          setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
            set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
          },
          setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
            set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
          },
          setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
            set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
          },
          setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
            set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
          },
          setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
            set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
          },
          setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
            set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
          }
        });
      } else {
        /* eslint-disable no-new -- required for testing */
        if (!fails(function () {
          NativeArrayBuffer(1);
        }) || !fails(function () {
          new NativeArrayBuffer(-1);
        }) || fails(function () {
          new NativeArrayBuffer();
          new NativeArrayBuffer(1.5);
          new NativeArrayBuffer(NaN);
          return NativeArrayBuffer.name != ARRAY_BUFFER;
        })) {
          /* eslint-enable no-new -- required for testing */
          $ArrayBuffer = function ArrayBuffer(length) {
            anInstance(this, $ArrayBuffer);
            return new NativeArrayBuffer(toIndex(length));
          };
          var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
          for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
            if (!((key = keys[j++]) in $ArrayBuffer)) {
              createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
            }
          }
          ArrayBufferPrototype.constructor = $ArrayBuffer;
        }

        // WebKit bug - the same parent prototype for typed arrays and data view
        if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
          setPrototypeOf($DataViewPrototype, ObjectPrototype);
        }

        // iOS Safari 7.x bug
        var testView = new $DataView(new $ArrayBuffer(2));
        var nativeSetInt8 = $DataViewPrototype.setInt8;
        testView.setInt8(0, 2147483648);
        testView.setInt8(1, 2147483649);
        if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
          setInt8: function setInt8(byteOffset, value) {
            nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
          },
          setUint8: function setUint8(byteOffset, value) {
            nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
          }
        }, { unsafe: true });
      }

      setToStringTag($ArrayBuffer, ARRAY_BUFFER);
      setToStringTag($DataView, DATA_VIEW);

      module.exports = {
        ArrayBuffer: $ArrayBuffer,
        DataView: $DataView
      };


      /***/
}),
/* 115 */
/***/ (function (module, exports) {

      module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';


      /***/
}),
/* 116 */
/***/ (function (module, exports, __webpack_require__) {

      var toInteger = __webpack_require__(24);
      var toLength = __webpack_require__(8);

      // `ToIndex` abstract operation
      // https://tc39.es/ecma262/#sec-toindex
      module.exports = function (it) {
        if (it === undefined) return 0;
        var number = toInteger(it);
        var length = toLength(number);
        if (number !== length) throw RangeError('Wrong length or index');
        return length;
      };


      /***/
}),
/* 117 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var toObject = __webpack_require__(14);
      var toAbsoluteIndex = __webpack_require__(37);
      var toLength = __webpack_require__(8);

      // `Array.prototype.fill` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.fill
      module.exports = function fill(value /* , start = 0, end = @length */) {
        var O = toObject(this);
        var length = toLength(O.length);
        var argumentsLength = arguments.length;
        var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
        var end = argumentsLength > 2 ? arguments[2] : undefined;
        var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
        while (endPos > index) O[index++] = value;
        return O;
      };


      /***/
}),
/* 118 */
/***/ (function (module, exports, __webpack_require__) {

      var $ = __webpack_require__(6);
      var parseIntImplementation = __webpack_require__(194);

      // `parseInt` method
      // https://tc39.es/ecma262/#sec-parseint-string-radix
      $({ global: true, forced: parseInt != parseIntImplementation }, {
        parseInt: parseIntImplementation
      });


      /***/
}),
/* 119 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      var fails = __webpack_require__(3);

      // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
      // so we use an intermediate function.
      function RE(s, f) {
        return RegExp(s, f);
      }

      exports.UNSUPPORTED_Y = fails(function () {
        // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
        var re = RE('a', 'y');
        re.lastIndex = 2;
        return re.exec('abcd') != null;
      });

      exports.BROKEN_CARET = fails(function () {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
        var re = RE('^r', 'gy');
        re.lastIndex = 2;
        return re.exec('str') != null;
      });


      /***/
}),
/* 120 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // TODO: Remove from `core-js@4` since it's moved to entry points
      __webpack_require__(80);
      var redefine = __webpack_require__(16);
      var fails = __webpack_require__(3);
      var wellKnownSymbol = __webpack_require__(7);
      var regexpExec = __webpack_require__(57);
      var createNonEnumerableProperty = __webpack_require__(15);

      var SPECIES = wellKnownSymbol('species');

      var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
        // #replace needs built-in support for named groups.
        // #match works fine because it just return the exec results, even if it has
        // a "grops" property.
        var re = /./;
        re.exec = function () {
          var result = [];
          result.groups = { a: '7' };
          return result;
        };
        return ''.replace(re, '$<a>') !== '7';
      });

      // IE <= 11 replaces $0 with the whole match, as if it was $&
      // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
      var REPLACE_KEEPS_$0 = (function () {
        return 'a'.replace(/./, '$0') === '$0';
      })();

      var REPLACE = wellKnownSymbol('replace');
      // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
      var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
        if (/./[REPLACE]) {
          return /./[REPLACE]('a', '$0') === '';
        }
        return false;
      })();

      // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
      // Weex JS has frozen built-in prototypes, so use try / catch wrapper
      var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
        // eslint-disable-next-line regexp/no-empty-group -- required for testing
        var re = /(?:)/;
        var originalExec = re.exec;
        re.exec = function () { return originalExec.apply(this, arguments); };
        var result = 'ab'.split(re);
        return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
      });

      module.exports = function (KEY, length, exec, sham) {
        var SYMBOL = wellKnownSymbol(KEY);

        var DELEGATES_TO_SYMBOL = !fails(function () {
          // String methods call symbol-named RegEp methods
          var O = {};
          O[SYMBOL] = function () { return 7; };
          return ''[KEY](O) != 7;
        });

        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
          // Symbol-named RegExp methods call .exec
          var execCalled = false;
          var re = /a/;

          if (KEY === 'split') {
            // We can't use real regex here since it causes deoptimization
            // and serious performance degradation in V8
            // https://github.com/zloirock/core-js/issues/306
            re = {};
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {};
            re.constructor[SPECIES] = function () { return re; };
            re.flags = '';
            re[SYMBOL] = /./[SYMBOL];
          }

          re.exec = function () { execCalled = true; return null; };

          re[SYMBOL]('');
          return !execCalled;
        });

        if (
          !DELEGATES_TO_SYMBOL ||
          !DELEGATES_TO_EXEC ||
          (KEY === 'replace' && !(
            REPLACE_SUPPORTS_NAMED_GROUPS &&
            REPLACE_KEEPS_$0 &&
            !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
          )) ||
          (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
        ) {
          var nativeRegExpMethod = /./[SYMBOL];
          var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
            if (regexp.exec === regexpExec) {
              if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
              }
              return { done: true, value: nativeMethod.call(str, regexp, arg2) };
            }
            return { done: false };
          }, {
            REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
          });
          var stringMethod = methods[0];
          var regexMethod = methods[1];

          redefine(String.prototype, KEY, stringMethod);
          redefine(RegExp.prototype, SYMBOL, length == 2
            // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
            // 21.2.5.11 RegExp.prototype[@@split](string, limit)
            ? function (string, arg) { return regexMethod.call(string, this, arg); }
            // 21.2.5.6 RegExp.prototype[@@match](string)
            // 21.2.5.9 RegExp.prototype[@@search](string)
            : function (string) { return regexMethod.call(string, this); }
          );
        }

        if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
      };


      /***/
}),
/* 121 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var charAt = __webpack_require__(83).charAt;

      // `AdvanceStringIndex` abstract operation
      // https://tc39.es/ecma262/#sec-advancestringindex
      module.exports = function (S, index, unicode) {
        return index + (unicode ? charAt(S, index).length : 1);
      };


      /***/
}),
/* 122 */
/***/ (function (module, exports, __webpack_require__) {

      var classof = __webpack_require__(29);
      var regexpExec = __webpack_require__(57);

      // `RegExpExec` abstract operation
      // https://tc39.es/ecma262/#sec-regexpexec
      module.exports = function (R, S) {
        var exec = R.exec;
        if (typeof exec === 'function') {
          var result = exec.call(R, S);
          if (typeof result !== 'object') {
            throw TypeError('RegExp exec method returned something other than an Object or null');
          }
          return result;
        }

        if (classof(R) !== 'RegExp') {
          throw TypeError('RegExp#exec called on incompatible receiver');
        }

        return regexpExec.call(R, S);
      };



      /***/
}),
/* 123 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var fixRegExpWellKnownSymbolLogic = __webpack_require__(120);
      var isRegExp = __webpack_require__(84);
      var anObject = __webpack_require__(9);
      var requireObjectCoercible = __webpack_require__(22);
      var speciesConstructor = __webpack_require__(26);
      var advanceStringIndex = __webpack_require__(121);
      var toLength = __webpack_require__(8);
      var callRegExpExec = __webpack_require__(122);
      var regexpExec = __webpack_require__(57);
      var fails = __webpack_require__(3);

      var arrayPush = [].push;
      var min = Math.min;
      var MAX_UINT32 = 0xFFFFFFFF;

      // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
      var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

      // @@split logic
      fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
        var internalSplit;
        if (
          'abbc'.split(/(b)*/)[1] == 'c' ||
          // eslint-disable-next-line regexp/no-empty-group -- required for testing
          'test'.split(/(?:)/, -1).length != 4 ||
          'ab'.split(/(?:ab)*/).length != 2 ||
          '.'.split(/(.?)(.?)/).length != 4 ||
          // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
          '.'.split(/()()/).length > 1 ||
          ''.split(/.?/).length
        ) {
          // based on es5-shim implementation, need to rework it
          internalSplit = function (separator, limit) {
            var string = String(requireObjectCoercible(this));
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (separator === undefined) return [string];
            // If `separator` is not a regex, use native split
            if (!isRegExp(separator)) {
              return nativeSplit.call(string, separator, lim);
            }
            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') +
              (separator.multiline ? 'm' : '') +
              (separator.unicode ? 'u' : '') +
              (separator.sticky ? 'y' : '');
            var lastLastIndex = 0;
            // Make `global` and avoid `lastIndex` issues by working with a copy
            var separatorCopy = new RegExp(separator.source, flags + 'g');
            var match, lastIndex, lastLength;
            while (match = regexpExec.call(separatorCopy, string)) {
              lastIndex = separatorCopy.lastIndex;
              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= lim) break;
              }
              if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
            }
            if (lastLastIndex === string.length) {
              if (lastLength || !separatorCopy.test('')) output.push('');
            } else output.push(string.slice(lastLastIndex));
            return output.length > lim ? output.slice(0, lim) : output;
          };
          // Chakra, V8
        } else if ('0'.split(undefined, 0).length) {
          internalSplit = function (separator, limit) {
            return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
          };
        } else internalSplit = nativeSplit;

        return [
          // `String.prototype.split` method
          // https://tc39.es/ecma262/#sec-string.prototype.split
          function split(separator, limit) {
            var O = requireObjectCoercible(this);
            var splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined
              ? splitter.call(separator, O, limit)
              : internalSplit.call(String(O), separator, limit);
          },
          // `RegExp.prototype[@@split]` method
          // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
          //
          // NOTE: This cannot be properly polyfilled in engines that don't support
          // the 'y' flag.
          function (regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
            if (res.done) return res.value;

            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);

            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? 'i' : '') +
              (rx.multiline ? 'm' : '') +
              (rx.unicode ? 'u' : '') +
              (SUPPORTS_Y ? 'y' : 'g');

            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while (q < S.length) {
              splitter.lastIndex = SUPPORTS_Y ? q : 0;
              var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
              var e;
              if (
                z === null ||
                (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
              ) {
                q = advanceStringIndex(S, q, unicodeMatching);
              } else {
                A.push(S.slice(p, q));
                if (A.length === lim) return A;
                for (var i = 1; i <= z.length - 1; i++) {
                  A.push(z[i]);
                  if (A.length === lim) return A;
                }
                q = p = e;
              }
            }
            A.push(S.slice(p));
            return A;
          }
        ];
      }, !SUPPORTS_Y);


      /***/
}),
/* 124 */
/***/ (function (module, exports, __webpack_require__) {

      var createTypedArrayConstructor = __webpack_require__(197);

      // `Uint8Array` constructor
      // https://tc39.es/ecma262/#sec-typedarray-objects
      createTypedArrayConstructor('Uint8', function (init) {
        return function Uint8Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });


      /***/
}),
/* 125 */
/***/ (function (module, exports, __webpack_require__) {

      /* eslint-disable no-new -- required for testing */
      var global = __webpack_require__(2);
      var fails = __webpack_require__(3);
      var checkCorrectnessOfIteration = __webpack_require__(76);
      var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__(4).NATIVE_ARRAY_BUFFER_VIEWS;

      var ArrayBuffer = global.ArrayBuffer;
      var Int8Array = global.Int8Array;

      module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
        Int8Array(1);
      }) || !fails(function () {
        new Int8Array(-1);
      }) || !checkCorrectnessOfIteration(function (iterable) {
        new Int8Array();
        new Int8Array(null);
        new Int8Array(1.5);
        new Int8Array(iterable);
      }, true) || fails(function () {
        // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
        return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
      });


      /***/
}),
/* 126 */
/***/ (function (module, exports, __webpack_require__) {

      var toPositiveInteger = __webpack_require__(198);

      module.exports = function (it, BYTES) {
        var offset = toPositiveInteger(it);
        if (offset % BYTES) throw RangeError('Wrong offset');
        return offset;
      };


      /***/
}),
/* 127 */
/***/ (function (module, exports, __webpack_require__) {

      var toObject = __webpack_require__(14);
      var toLength = __webpack_require__(8);
      var getIteratorMethod = __webpack_require__(43);
      var isArrayIteratorMethod = __webpack_require__(75);
      var bind = __webpack_require__(31);
      var aTypedArrayConstructor = __webpack_require__(4).aTypedArrayConstructor;

      module.exports = function from(source /* , mapfn, thisArg */) {
        var O = toObject(source);
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iteratorMethod = getIteratorMethod(O);
        var i, length, result, step, iterator, next;
        if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
          iterator = iteratorMethod.call(O);
          next = iterator.next;
          O = [];
          while (!(step = next.call(iterator)).done) {
            O.push(step.value);
          }
        }
        if (mapping && argumentsLength > 2) {
          mapfn = bind(mapfn, arguments[2], 2);
        }
        length = toLength(O.length);
        result = new (aTypedArrayConstructor(this))(length);
        for (i = 0; length > i; i++) {
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        }
        return result;
      };


      /***/
}),
/* 128 */
/***/ (function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(12);
      var setPrototypeOf = __webpack_require__(45);

      // makes subclassing work correct for wrapped built-ins
      module.exports = function ($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype;
        if (
          // it can work only with native `setPrototypeOf`
          setPrototypeOf &&
          // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
          typeof (NewTarget = dummy.constructor) == 'function' &&
          NewTarget !== Wrapper &&
          isObject(NewTargetPrototype = NewTarget.prototype) &&
          NewTargetPrototype !== Wrapper.prototype
        ) setPrototypeOf($this, NewTargetPrototype);
        return $this;
      };


      /***/
}),
/* 129 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $copyWithin = __webpack_require__(199);

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.copyWithin` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
      exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
        return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
      });


      /***/
}),
/* 130 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $every = __webpack_require__(17).every;

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.every` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
      exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
        return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      });


      /***/
}),
/* 131 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $fill = __webpack_require__(117);

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.fill` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
        return $fill.apply(aTypedArray(this), arguments);
      });


      /***/
}),
/* 132 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $filter = __webpack_require__(17).filter;
      var fromSpeciesAndList = __webpack_require__(200);

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.filter` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
      exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
        var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        return fromSpeciesAndList(this, list);
      });


      /***/
}),
/* 133 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $find = __webpack_require__(17).find;

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.find` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
      exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
        return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      });


      /***/
}),
/* 134 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $findIndex = __webpack_require__(17).findIndex;

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.findIndex` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
      exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
        return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      });


      /***/
}),
/* 135 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $forEach = __webpack_require__(17).forEach;

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
      exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
        $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      });


      /***/
}),
/* 136 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $includes = __webpack_require__(36).includes;

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.includes` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
      exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
        return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      });


      /***/
}),
/* 137 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $indexOf = __webpack_require__(36).indexOf;

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
      exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
        return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      });


      /***/
}),
/* 138 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var global = __webpack_require__(2);
      var ArrayBufferViewCore = __webpack_require__(4);
      var ArrayIterators = __webpack_require__(44);
      var wellKnownSymbol = __webpack_require__(7);

      var ITERATOR = wellKnownSymbol('iterator');
      var Uint8Array = global.Uint8Array;
      var arrayValues = ArrayIterators.values;
      var arrayKeys = ArrayIterators.keys;
      var arrayEntries = ArrayIterators.entries;
      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
      var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];

      var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
        && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

      var typedArrayValues = function values() {
        return arrayValues.call(aTypedArray(this));
      };

      // `%TypedArray%.prototype.entries` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
      exportTypedArrayMethod('entries', function entries() {
        return arrayEntries.call(aTypedArray(this));
      });
      // `%TypedArray%.prototype.keys` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
      exportTypedArrayMethod('keys', function keys() {
        return arrayKeys.call(aTypedArray(this));
      });
      // `%TypedArray%.prototype.values` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
      exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME);
      // `%TypedArray%.prototype[@@iterator]` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
      exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);


      /***/
}),
/* 139 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
      var $join = [].join;

      // `%TypedArray%.prototype.join` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      exportTypedArrayMethod('join', function join(separator) {
        return $join.apply(aTypedArray(this), arguments);
      });


      /***/
}),
/* 140 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $lastIndexOf = __webpack_require__(202);

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.lastIndexOf` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
        return $lastIndexOf.apply(aTypedArray(this), arguments);
      });


      /***/
}),
/* 141 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $map = __webpack_require__(17).map;
      var speciesConstructor = __webpack_require__(26);

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.map` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
      exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
        return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
          return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
        });
      });


      /***/
}),
/* 142 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $reduce = __webpack_require__(143).left;

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.reduce` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
      exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
        return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
      });


      /***/
}),
/* 143 */
/***/ (function (module, exports, __webpack_require__) {

      var aFunction = __webpack_require__(32);
      var toObject = __webpack_require__(14);
      var IndexedObject = __webpack_require__(50);
      var toLength = __webpack_require__(8);

      // `Array.prototype.{ reduce, reduceRight }` methods implementation
      var createMethod = function (IS_RIGHT) {
        return function (that, callbackfn, argumentsLength, memo) {
          aFunction(callbackfn);
          var O = toObject(that);
          var self = IndexedObject(O);
          var length = toLength(O.length);
          var index = IS_RIGHT ? length - 1 : 0;
          var i = IS_RIGHT ? -1 : 1;
          if (argumentsLength < 2) while (true) {
            if (index in self) {
              memo = self[index];
              index += i;
              break;
            }
            index += i;
            if (IS_RIGHT ? index < 0 : length <= index) {
              throw TypeError('Reduce of empty array with no initial value');
            }
          }
          for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
            memo = callbackfn(memo, self[index], index, O);
          }
          return memo;
        };
      };

      module.exports = {
        // `Array.prototype.reduce` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduce
        left: createMethod(false),
        // `Array.prototype.reduceRight` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduceright
        right: createMethod(true)
      };


      /***/
}),
/* 144 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $reduceRight = __webpack_require__(143).right;

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.reduceRicht` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
      exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
        return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
      });


      /***/
}),
/* 145 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
      var floor = Math.floor;

      // `%TypedArray%.prototype.reverse` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
      exportTypedArrayMethod('reverse', function reverse() {
        var that = this;
        var length = aTypedArray(that).length;
        var middle = floor(length / 2);
        var index = 0;
        var value;
        while (index < middle) {
          value = that[index];
          that[index++] = that[--length];
          that[length] = value;
        } return that;
      });


      /***/
}),
/* 146 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var toLength = __webpack_require__(8);
      var toOffset = __webpack_require__(126);
      var toObject = __webpack_require__(14);
      var fails = __webpack_require__(3);

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      var FORCED = fails(function () {
        /* global Int8Array -- safe */
        new Int8Array(1).set({});
      });

      // `%TypedArray%.prototype.set` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
      exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
        aTypedArray(this);
        var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError('Wrong length');
        while (index < len) this[offset + index] = src[index++];
      }, FORCED);


      /***/
}),
/* 147 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var speciesConstructor = __webpack_require__(26);
      var fails = __webpack_require__(3);

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
      var $slice = [].slice;

      var FORCED = fails(function () {
        /* global Int8Array -- safe */
        new Int8Array(1).slice();
      });

      // `%TypedArray%.prototype.slice` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
      exportTypedArrayMethod('slice', function slice(start, end) {
        var list = $slice.call(aTypedArray(this), start, end);
        var C = speciesConstructor(this, this.constructor);
        var index = 0;
        var length = list.length;
        var result = new (aTypedArrayConstructor(C))(length);
        while (length > index) result[index] = list[index++];
        return result;
      }, FORCED);


      /***/
}),
/* 148 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var $some = __webpack_require__(17).some;

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.some` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
      exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
        return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      });


      /***/
}),
/* 149 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
      var $sort = [].sort;

      // `%TypedArray%.prototype.sort` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
      exportTypedArrayMethod('sort', function sort(comparefn) {
        return $sort.call(aTypedArray(this), comparefn);
      });


      /***/
}),
/* 150 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var ArrayBufferViewCore = __webpack_require__(4);
      var toLength = __webpack_require__(8);
      var toAbsoluteIndex = __webpack_require__(37);
      var speciesConstructor = __webpack_require__(26);

      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

      // `%TypedArray%.prototype.subarray` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
      exportTypedArrayMethod('subarray', function subarray(begin, end) {
        var O = aTypedArray(this);
        var length = O.length;
        var beginIndex = toAbsoluteIndex(begin, length);
        return new (speciesConstructor(O, O.constructor))(
          O.buffer,
          O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
          toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
        );
      });


      /***/
}),
/* 151 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var global = __webpack_require__(2);
      var ArrayBufferViewCore = __webpack_require__(4);
      var fails = __webpack_require__(3);

      var Int8Array = global.Int8Array;
      var aTypedArray = ArrayBufferViewCore.aTypedArray;
      var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
      var $toLocaleString = [].toLocaleString;
      var $slice = [].slice;

      // iOS Safari 6.x fails here
      var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
        $toLocaleString.call(new Int8Array(1));
      });

      var FORCED = fails(function () {
        return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
      }) || !fails(function () {
        Int8Array.prototype.toLocaleString.call([1, 2]);
      });

      // `%TypedArray%.prototype.toLocaleString` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
      exportTypedArrayMethod('toLocaleString', function toLocaleString() {
        return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
      }, FORCED);


      /***/
}),
/* 152 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var exportTypedArrayMethod = __webpack_require__(4).exportTypedArrayMethod;
      var fails = __webpack_require__(3);
      var global = __webpack_require__(2);

      var Uint8Array = global.Uint8Array;
      var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
      var arrayToString = [].toString;
      var arrayJoin = [].join;

      if (fails(function () { arrayToString.call({}); })) {
        arrayToString = function toString() {
          return arrayJoin.call(this);
        };
      }

      var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

      // `%TypedArray%.prototype.toString` method
      // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
      exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


      /***/
}),
/* 153 */
/***/ (function (module, exports, __webpack_require__) {

      var fails = __webpack_require__(3);
      var wellKnownSymbol = __webpack_require__(7);
      var IS_PURE = __webpack_require__(35);

      var ITERATOR = wellKnownSymbol('iterator');

      module.exports = !fails(function () {
        var url = new URL('b?a=1&b=2&c=3', 'http://a');
        var searchParams = url.searchParams;
        var result = '';
        url.pathname = 'c%20d';
        searchParams.forEach(function (value, key) {
          searchParams['delete']('b');
          result += key + value;
        });
        return (IS_PURE && !url.toJSON)
          || !searchParams.sort
          || url.href !== 'http://a/c%20d?a=1&c=3'
          || searchParams.get('c') !== '3'
          || String(new URLSearchParams('?a=1')) !== 'a=1'
          || !searchParams[ITERATOR]
          // throws in Edge
          || new URL('https://a@b').username !== 'a'
          || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
          // not punycoded in Edge
          || new URL('http://тест').host !== 'xn--e1aybc'
          // not escaped in Chrome 62-
          || new URL('http://a#б').hash !== '#%D0%B1'
          // fails in Chrome 66-
          || result !== 'a1c3'
          // throws in Safari
          || new URL('http://x', undefined).host !== 'x';
      });


      /***/
}),
/* 154 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var bind = __webpack_require__(31);
      var toObject = __webpack_require__(14);
      var callWithSafeIterationClosing = __webpack_require__(205);
      var isArrayIteratorMethod = __webpack_require__(75);
      var toLength = __webpack_require__(8);
      var createProperty = __webpack_require__(90);
      var getIteratorMethod = __webpack_require__(43);

      // `Array.from` method implementation
      // https://tc39.es/ecma262/#sec-array.from
      module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
        var O = toObject(arrayLike);
        var C = typeof this == 'function' ? this : Array;
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iteratorMethod = getIteratorMethod(O);
        var index = 0;
        var length, result, step, iterator, next, value;
        if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
        // if the target is not iterable or it's an array with the default iterator - use a simple case
        if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
          iterator = iteratorMethod.call(O);
          next = iterator.next;
          result = new C();
          for (; !(step = next.call(iterator)).done; index++) {
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
            createProperty(result, index, value);
          }
        } else {
          length = toLength(O.length);
          result = new C(length);
          for (; length > index; index++) {
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
          }
        }
        result.length = index;
        return result;
      };


      /***/
}),
/* 155 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var $includes = __webpack_require__(36).includes;
      var addToUnscopables = __webpack_require__(109);

      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      $({ target: 'Array', proto: true }, {
        includes: function includes(el /* , fromIndex = 0 */) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
      addToUnscopables('includes');


      /***/
}),
/* 156 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var notARegExp = __webpack_require__(209);
      var requireObjectCoercible = __webpack_require__(22);
      var correctIsRegExpLogic = __webpack_require__(210);

      // `String.prototype.includes` method
      // https://tc39.es/ecma262/#sec-string.prototype.includes
      $({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
        includes: function includes(searchString /* , position = 0 */) {
          return !!~String(requireObjectCoercible(this))
            .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
        }
      });


      /***/
}),
/* 157 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var redefine = __webpack_require__(16);
      var anObject = __webpack_require__(9);
      var fails = __webpack_require__(3);
      var flags = __webpack_require__(81);

      var TO_STRING = 'toString';
      var RegExpPrototype = RegExp.prototype;
      var nativeToString = RegExpPrototype[TO_STRING];

      var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
      // FF44- RegExp#toString has a wrong name
      var INCORRECT_NAME = nativeToString.name != TO_STRING;

      // `RegExp.prototype.toString` method
      // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
      if (NOT_GENERIC || INCORRECT_NAME) {
        redefine(RegExp.prototype, TO_STRING, function toString() {
          var R = anObject(this);
          var p = String(R.source);
          var rf = R.flags;
          var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
          return '/' + p + '/' + f;
        }, { unsafe: true });
      }


      /***/
}),
/* 158 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */


      /* eslint-disable no-unused-vars */
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;

      function toObject(val) {
        if (val === null || val === undefined) {
          throw new TypeError('Object.assign cannot be called with null or undefined');
        }

        return Object(val);
      }

      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }

          // Detect buggy property enumeration order in older V8 versions.

          // https://bugs.chromium.org/p/v8/issues/detail?id=4118
          var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
          test1[5] = 'de';
          if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
          });
          if (order2.join('') !== '0123456789') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          var test3 = {};
          'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join('') !==
            'abcdefghijklmnopqrst') {
            return false;
          }

          return true;
        } catch (err) {
          // We don't expect any of the above to throw, but better to be safe.
          return false;
        }
      }

      module.exports = shouldUseNative() ? Object.assign : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };


      /***/
}),
/* 159 */
/***/ (function (module, exports) {

      /**
       * Checks if `value` is the
       * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
       * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an object, else `false`.
       * @example
       *
       * _.isObject({});
       * // => true
       *
       * _.isObject([1, 2, 3]);
       * // => true
       *
       * _.isObject(_.noop);
       * // => true
       *
       * _.isObject(null);
       * // => false
       */
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
      }

      module.exports = isObject;


      /***/
}),
/* 160 */
/***/ (function (module, exports, __webpack_require__) {

      var freeGlobal = __webpack_require__(222);

      /** Detect free variable `self`. */
      var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

      /** Used as a reference to the global object. */
      var root = freeGlobal || freeSelf || Function('return this')();

      module.exports = root;


      /***/
}),
/* 161 */
/***/ (function (module, exports, __webpack_require__) {

      var root = __webpack_require__(160);

      /** Built-in value references. */
      var Symbol = root.Symbol;

      module.exports = Symbol;


      /***/
}),
/* 162 */
/***/ (function (module, exports) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      module.exports = _classCallCheck;

      /***/
}),
/* 163 */
/***/ (function (module, exports) {

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      module.exports = _createClass;

      /***/
}),
/* 164 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
        /* eslint-disable require-jsdoc, valid-jsdoc */
        var MapShim = (function () {
          if (typeof Map !== 'undefined') {
            return Map;
          }
          /**
           * Returns index in provided array that matches the specified key.
           *
           * @param {Array<Array>} arr
           * @param {*} key
           * @returns {number}
           */
          function getIndex(arr, key) {
            var result = -1;
            arr.some(function (entry, index) {
              if (entry[0] === key) {
                result = index;
                return true;
              }
              return false;
            });
            return result;
          }
          return /** @class */ (function () {
            function class_1() {
              this.__entries__ = [];
            }
            Object.defineProperty(class_1.prototype, "size", {
              /**
               * @returns {boolean}
               */
              get: function () {
                return this.__entries__.length;
              },
              enumerable: true,
              configurable: true
            });
            /**
             * @param {*} key
             * @returns {*}
             */
            class_1.prototype.get = function (key) {
              var index = getIndex(this.__entries__, key);
              var entry = this.__entries__[index];
              return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */
            class_1.prototype.set = function (key, value) {
              var index = getIndex(this.__entries__, key);
              if (~index) {
                this.__entries__[index][1] = value;
              }
              else {
                this.__entries__.push([key, value]);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.delete = function (key) {
              var entries = this.__entries__;
              var index = getIndex(entries, key);
              if (~index) {
                entries.splice(index, 1);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.has = function (key) {
              return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */
            class_1.prototype.clear = function () {
              this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */
            class_1.prototype.forEach = function (callback, ctx) {
              if (ctx === void 0) { ctx = null; }
              for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
              }
            };
            return class_1;
          }());
        })();

        /**
         * Detects whether window and document objects are available in current environment.
         */
        var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

        // Returns global object of a current environment.
        var global$1 = (function () {
          if (typeof global !== 'undefined' && global.Math === Math) {
            return global;
          }
          if (typeof self !== 'undefined' && self.Math === Math) {
            return self;
          }
          if (typeof window !== 'undefined' && window.Math === Math) {
            return window;
          }
          // eslint-disable-next-line no-new-func
          return Function('return this')();
        })();

        /**
         * A shim for the requestAnimationFrame which falls back to the setTimeout if
         * first one is not supported.
         *
         * @returns {number} Requests' identifier.
         */
        var requestAnimationFrame$1 = (function () {
          if (typeof requestAnimationFrame === 'function') {
            // It's required to use a bounded function because IE sometimes throws
            // an "Invalid calling object" error if rAF is invoked without the global
            // object on the left hand side.
            return requestAnimationFrame.bind(global$1);
          }
          return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
        })();

        // Defines minimum timeout before adding a trailing call.
        var trailingTimeout = 2;
        /**
         * Creates a wrapper function which ensures that provided callback will be
         * invoked only once during the specified delay period.
         *
         * @param {Function} callback - Function to be invoked after the delay period.
         * @param {number} delay - Delay after which to invoke callback.
         * @returns {Function}
         */
        function throttle(callback, delay) {
          var leadingCall = false, trailingCall = false, lastCallTime = 0;
          /**
           * Invokes the original callback function and schedules new invocation if
           * the "proxy" was called during current request.
           *
           * @returns {void}
           */
          function resolvePending() {
            if (leadingCall) {
              leadingCall = false;
              callback();
            }
            if (trailingCall) {
              proxy();
            }
          }
          /**
           * Callback invoked after the specified delay. It will further postpone
           * invocation of the original function delegating it to the
           * requestAnimationFrame.
           *
           * @returns {void}
           */
          function timeoutCallback() {
            requestAnimationFrame$1(resolvePending);
          }
          /**
           * Schedules invocation of the original function.
           *
           * @returns {void}
           */
          function proxy() {
            var timeStamp = Date.now();
            if (leadingCall) {
              // Reject immediately following calls.
              if (timeStamp - lastCallTime < trailingTimeout) {
                return;
              }
              // Schedule new call to be in invoked when the pending one is resolved.
              // This is important for "transitions" which never actually start
              // immediately so there is a chance that we might miss one if change
              // happens amids the pending invocation.
              trailingCall = true;
            }
            else {
              leadingCall = true;
              trailingCall = false;
              setTimeout(timeoutCallback, delay);
            }
            lastCallTime = timeStamp;
          }
          return proxy;
        }

        // Minimum delay before invoking the update of observers.
        var REFRESH_DELAY = 20;
        // A list of substrings of CSS properties used to find transition events that
        // might affect dimensions of observed elements.
        var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
        // Check if MutationObserver is available.
        var mutationObserverSupported = typeof MutationObserver !== 'undefined';
        /**
         * Singleton controller class which handles updates of ResizeObserver instances.
         */
        var ResizeObserverController = /** @class */ (function () {
          /**
           * Creates a new instance of ResizeObserverController.
           *
           * @private
           */
          function ResizeObserverController() {
            /**
             * Indicates whether DOM listeners have been added.
             *
             * @private {boolean}
             */
            this.connected_ = false;
            /**
             * Tells that controller has subscribed for Mutation Events.
             *
             * @private {boolean}
             */
            this.mutationEventsAdded_ = false;
            /**
             * Keeps reference to the instance of MutationObserver.
             *
             * @private {MutationObserver}
             */
            this.mutationsObserver_ = null;
            /**
             * A list of connected observers.
             *
             * @private {Array<ResizeObserverSPI>}
             */
            this.observers_ = [];
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
          }
          /**
           * Adds observer to observers list.
           *
           * @param {ResizeObserverSPI} observer - Observer to be added.
           * @returns {void}
           */
          ResizeObserverController.prototype.addObserver = function (observer) {
            if (!~this.observers_.indexOf(observer)) {
              this.observers_.push(observer);
            }
            // Add listeners if they haven't been added yet.
            if (!this.connected_) {
              this.connect_();
            }
          };
          /**
           * Removes observer from observers list.
           *
           * @param {ResizeObserverSPI} observer - Observer to be removed.
           * @returns {void}
           */
          ResizeObserverController.prototype.removeObserver = function (observer) {
            var observers = this.observers_;
            var index = observers.indexOf(observer);
            // Remove observer if it's present in registry.
            if (~index) {
              observers.splice(index, 1);
            }
            // Remove listeners if controller has no connected observers.
            if (!observers.length && this.connected_) {
              this.disconnect_();
            }
          };
          /**
           * Invokes the update of observers. It will continue running updates insofar
           * it detects changes.
           *
           * @returns {void}
           */
          ResizeObserverController.prototype.refresh = function () {
            var changesDetected = this.updateObservers_();
            // Continue running updates if changes have been detected as there might
            // be future ones caused by CSS transitions.
            if (changesDetected) {
              this.refresh();
            }
          };
          /**
           * Updates every observer from observers list and notifies them of queued
           * entries.
           *
           * @private
           * @returns {boolean} Returns "true" if any observer has detected changes in
           *      dimensions of it's elements.
           */
          ResizeObserverController.prototype.updateObservers_ = function () {
            // Collect observers that have active observations.
            var activeObservers = this.observers_.filter(function (observer) {
              return observer.gatherActive(), observer.hasActive();
            });
            // Deliver notifications in a separate cycle in order to avoid any
            // collisions between observers, e.g. when multiple instances of
            // ResizeObserver are tracking the same element and the callback of one
            // of them changes content dimensions of the observed target. Sometimes
            // this may result in notifications being blocked for the rest of observers.
            activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
            return activeObservers.length > 0;
          };
          /**
           * Initializes DOM listeners.
           *
           * @private
           * @returns {void}
           */
          ResizeObserverController.prototype.connect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already added.
            if (!isBrowser || this.connected_) {
              return;
            }
            // Subscription to the "Transitionend" event is used as a workaround for
            // delayed transitions. This way it's possible to capture at least the
            // final state of an element.
            document.addEventListener('transitionend', this.onTransitionEnd_);
            window.addEventListener('resize', this.refresh);
            if (mutationObserverSupported) {
              this.mutationsObserver_ = new MutationObserver(this.refresh);
              this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
              });
            }
            else {
              document.addEventListener('DOMSubtreeModified', this.refresh);
              this.mutationEventsAdded_ = true;
            }
            this.connected_ = true;
          };
          /**
           * Removes DOM listeners.
           *
           * @private
           * @returns {void}
           */
          ResizeObserverController.prototype.disconnect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already removed.
            if (!isBrowser || !this.connected_) {
              return;
            }
            document.removeEventListener('transitionend', this.onTransitionEnd_);
            window.removeEventListener('resize', this.refresh);
            if (this.mutationsObserver_) {
              this.mutationsObserver_.disconnect();
            }
            if (this.mutationEventsAdded_) {
              document.removeEventListener('DOMSubtreeModified', this.refresh);
            }
            this.mutationsObserver_ = null;
            this.mutationEventsAdded_ = false;
            this.connected_ = false;
          };
          /**
           * "Transitionend" event handler.
           *
           * @private
           * @param {TransitionEvent} event
           * @returns {void}
           */
          ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
            var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
            // Detect whether transition may affect dimensions of an element.
            var isReflowProperty = transitionKeys.some(function (key) {
              return !!~propertyName.indexOf(key);
            });
            if (isReflowProperty) {
              this.refresh();
            }
          };
          /**
           * Returns instance of the ResizeObserverController.
           *
           * @returns {ResizeObserverController}
           */
          ResizeObserverController.getInstance = function () {
            if (!this.instance_) {
              this.instance_ = new ResizeObserverController();
            }
            return this.instance_;
          };
          /**
           * Holds reference to the controller's instance.
           *
           * @private {ResizeObserverController}
           */
          ResizeObserverController.instance_ = null;
          return ResizeObserverController;
        }());

        /**
         * Defines non-writable/enumerable properties of the provided target object.
         *
         * @param {Object} target - Object for which to define properties.
         * @param {Object} props - Properties to be defined.
         * @returns {Object} Target object.
         */
        var defineConfigurable = (function (target, props) {
          for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
            var key = _a[_i];
            Object.defineProperty(target, key, {
              value: props[key],
              enumerable: false,
              writable: false,
              configurable: true
            });
          }
          return target;
        });

        /**
         * Returns the global object associated with provided element.
         *
         * @param {Object} target
         * @returns {Object}
         */
        var getWindowOf = (function (target) {
          // Assume that the element is an instance of Node, which means that it
          // has the "ownerDocument" property from which we can retrieve a
          // corresponding global object.
          var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
          // Return the local global object if it's not possible extract one from
          // provided element.
          return ownerGlobal || global$1;
        });

        // Placeholder of an empty content rectangle.
        var emptyRect = createRectInit(0, 0, 0, 0);
        /**
         * Converts provided string to a number.
         *
         * @param {number|string} value
         * @returns {number}
         */
        function toFloat(value) {
          return parseFloat(value) || 0;
        }
        /**
         * Extracts borders size from provided styles.
         *
         * @param {CSSStyleDeclaration} styles
         * @param {...string} positions - Borders positions (top, right, ...)
         * @returns {number}
         */
        function getBordersSize(styles) {
          var positions = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            positions[_i - 1] = arguments[_i];
          }
          return positions.reduce(function (size, position) {
            var value = styles['border-' + position + '-width'];
            return size + toFloat(value);
          }, 0);
        }
        /**
         * Extracts paddings sizes from provided styles.
         *
         * @param {CSSStyleDeclaration} styles
         * @returns {Object} Paddings box.
         */
        function getPaddings(styles) {
          var positions = ['top', 'right', 'bottom', 'left'];
          var paddings = {};
          for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
            var position = positions_1[_i];
            var value = styles['padding-' + position];
            paddings[position] = toFloat(value);
          }
          return paddings;
        }
        /**
         * Calculates content rectangle of provided SVG element.
         *
         * @param {SVGGraphicsElement} target - Element content rectangle of which needs
         *      to be calculated.
         * @returns {DOMRectInit}
         */
        function getSVGContentRect(target) {
          var bbox = target.getBBox();
          return createRectInit(0, 0, bbox.width, bbox.height);
        }
        /**
         * Calculates content rectangle of provided HTMLElement.
         *
         * @param {HTMLElement} target - Element for which to calculate the content rectangle.
         * @returns {DOMRectInit}
         */
        function getHTMLElementContentRect(target) {
          // Client width & height properties can't be
          // used exclusively as they provide rounded values.
          var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
          // By this condition we can catch all non-replaced inline, hidden and
          // detached elements. Though elements with width & height properties less
          // than 0.5 will be discarded as well.
          //
          // Without it we would need to implement separate methods for each of
          // those cases and it's not possible to perform a precise and performance
          // effective test for hidden elements. E.g. even jQuery's ':visible' filter
          // gives wrong results for elements with width & height less than 0.5.
          if (!clientWidth && !clientHeight) {
            return emptyRect;
          }
          var styles = getWindowOf(target).getComputedStyle(target);
          var paddings = getPaddings(styles);
          var horizPad = paddings.left + paddings.right;
          var vertPad = paddings.top + paddings.bottom;
          // Computed styles of width & height are being used because they are the
          // only dimensions available to JS that contain non-rounded values. It could
          // be possible to utilize the getBoundingClientRect if only it's data wasn't
          // affected by CSS transformations let alone paddings, borders and scroll bars.
          var width = toFloat(styles.width), height = toFloat(styles.height);
          // Width & height include paddings and borders when the 'border-box' box
          // model is applied (except for IE).
          if (styles.boxSizing === 'border-box') {
            // Following conditions are required to handle Internet Explorer which
            // doesn't include paddings and borders to computed CSS dimensions.
            //
            // We can say that if CSS dimensions + paddings are equal to the "client"
            // properties then it's either IE, and thus we don't need to subtract
            // anything, or an element merely doesn't have paddings/borders styles.
            if (Math.round(width + horizPad) !== clientWidth) {
              width -= getBordersSize(styles, 'left', 'right') + horizPad;
            }
            if (Math.round(height + vertPad) !== clientHeight) {
              height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
            }
          }
          // Following steps can't be applied to the document's root element as its
          // client[Width/Height] properties represent viewport area of the window.
          // Besides, it's as well not necessary as the <html> itself neither has
          // rendered scroll bars nor it can be clipped.
          if (!isDocumentElement(target)) {
            // In some browsers (only in Firefox, actually) CSS width & height
            // include scroll bars size which can be removed at this step as scroll
            // bars are the only difference between rounded dimensions + paddings
            // and "client" properties, though that is not always true in Chrome.
            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
            var horizScrollbar = Math.round(height + vertPad) - clientHeight;
            // Chrome has a rather weird rounding of "client" properties.
            // E.g. for an element with content width of 314.2px it sometimes gives
            // the client width of 315px and for the width of 314.7px it may give
            // 314px. And it doesn't happen all the time. So just ignore this delta
            // as a non-relevant.
            if (Math.abs(vertScrollbar) !== 1) {
              width -= vertScrollbar;
            }
            if (Math.abs(horizScrollbar) !== 1) {
              height -= horizScrollbar;
            }
          }
          return createRectInit(paddings.left, paddings.top, width, height);
        }
        /**
         * Checks whether provided element is an instance of the SVGGraphicsElement.
         *
         * @param {Element} target - Element to be checked.
         * @returns {boolean}
         */
        var isSVGGraphicsElement = (function () {
          // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
          // interface.
          if (typeof SVGGraphicsElement !== 'undefined') {
            return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
          }
          // If it's so, then check that element is at least an instance of the
          // SVGElement and that it has the "getBBox" method.
          // eslint-disable-next-line no-extra-parens
          return function (target) {
            return (target instanceof getWindowOf(target).SVGElement &&
              typeof target.getBBox === 'function');
          };
        })();
        /**
         * Checks whether provided element is a document element (<html>).
         *
         * @param {Element} target - Element to be checked.
         * @returns {boolean}
         */
        function isDocumentElement(target) {
          return target === getWindowOf(target).document.documentElement;
        }
        /**
         * Calculates an appropriate content rectangle for provided html or svg element.
         *
         * @param {Element} target - Element content rectangle of which needs to be calculated.
         * @returns {DOMRectInit}
         */
        function getContentRect(target) {
          if (!isBrowser) {
            return emptyRect;
          }
          if (isSVGGraphicsElement(target)) {
            return getSVGContentRect(target);
          }
          return getHTMLElementContentRect(target);
        }
        /**
         * Creates rectangle with an interface of the DOMRectReadOnly.
         * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
         *
         * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
         * @returns {DOMRectReadOnly}
         */
        function createReadOnlyRect(_a) {
          var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
          // If DOMRectReadOnly is available use it as a prototype for the rectangle.
          var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
          var rect = Object.create(Constr.prototype);
          // Rectangle's properties are not writable and non-enumerable.
          defineConfigurable(rect, {
            x: x, y: y, width: width, height: height,
            top: y,
            right: x + width,
            bottom: height + y,
            left: x
          });
          return rect;
        }
        /**
         * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
         * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
         *
         * @param {number} x - X coordinate.
         * @param {number} y - Y coordinate.
         * @param {number} width - Rectangle's width.
         * @param {number} height - Rectangle's height.
         * @returns {DOMRectInit}
         */
        function createRectInit(x, y, width, height) {
          return { x: x, y: y, width: width, height: height };
        }

        /**
         * Class that is responsible for computations of the content rectangle of
         * provided DOM element and for keeping track of it's changes.
         */
        var ResizeObservation = /** @class */ (function () {
          /**
           * Creates an instance of ResizeObservation.
           *
           * @param {Element} target - Element to be observed.
           */
          function ResizeObservation(target) {
            /**
             * Broadcasted width of content rectangle.
             *
             * @type {number}
             */
            this.broadcastWidth = 0;
            /**
             * Broadcasted height of content rectangle.
             *
             * @type {number}
             */
            this.broadcastHeight = 0;
            /**
             * Reference to the last observed content rectangle.
             *
             * @private {DOMRectInit}
             */
            this.contentRect_ = createRectInit(0, 0, 0, 0);
            this.target = target;
          }
          /**
           * Updates content rectangle and tells whether it's width or height properties
           * have changed since the last broadcast.
           *
           * @returns {boolean}
           */
          ResizeObservation.prototype.isActive = function () {
            var rect = getContentRect(this.target);
            this.contentRect_ = rect;
            return (rect.width !== this.broadcastWidth ||
              rect.height !== this.broadcastHeight);
          };
          /**
           * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
           * from the corresponding properties of the last observed content rectangle.
           *
           * @returns {DOMRectInit} Last observed content rectangle.
           */
          ResizeObservation.prototype.broadcastRect = function () {
            var rect = this.contentRect_;
            this.broadcastWidth = rect.width;
            this.broadcastHeight = rect.height;
            return rect;
          };
          return ResizeObservation;
        }());

        var ResizeObserverEntry = /** @class */ (function () {
          /**
           * Creates an instance of ResizeObserverEntry.
           *
           * @param {Element} target - Element that is being observed.
           * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
           */
          function ResizeObserverEntry(target, rectInit) {
            var contentRect = createReadOnlyRect(rectInit);
            // According to the specification following properties are not writable
            // and are also not enumerable in the native implementation.
            //
            // Property accessors are not being used as they'd require to define a
            // private WeakMap storage which may cause memory leaks in browsers that
            // don't support this type of collections.
            defineConfigurable(this, { target: target, contentRect: contentRect });
          }
          return ResizeObserverEntry;
        }());

        var ResizeObserverSPI = /** @class */ (function () {
          /**
           * Creates a new instance of ResizeObserver.
           *
           * @param {ResizeObserverCallback} callback - Callback function that is invoked
           *      when one of the observed elements changes it's content dimensions.
           * @param {ResizeObserverController} controller - Controller instance which
           *      is responsible for the updates of observer.
           * @param {ResizeObserver} callbackCtx - Reference to the public
           *      ResizeObserver instance which will be passed to callback function.
           */
          function ResizeObserverSPI(callback, controller, callbackCtx) {
            /**
             * Collection of resize observations that have detected changes in dimensions
             * of elements.
             *
             * @private {Array<ResizeObservation>}
             */
            this.activeObservations_ = [];
            /**
             * Registry of the ResizeObservation instances.
             *
             * @private {Map<Element, ResizeObservation>}
             */
            this.observations_ = new MapShim();
            if (typeof callback !== 'function') {
              throw new TypeError('The callback provided as parameter 1 is not a function.');
            }
            this.callback_ = callback;
            this.controller_ = controller;
            this.callbackCtx_ = callbackCtx;
          }
          /**
           * Starts observing provided element.
           *
           * @param {Element} target - Element to be observed.
           * @returns {void}
           */
          ResizeObserverSPI.prototype.observe = function (target) {
            if (!arguments.length) {
              throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
              return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
              throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is already being observed.
            if (observations.has(target)) {
              return;
            }
            observations.set(target, new ResizeObservation(target));
            this.controller_.addObserver(this);
            // Force the update of observations.
            this.controller_.refresh();
          };
          /**
           * Stops observing provided element.
           *
           * @param {Element} target - Element to stop observing.
           * @returns {void}
           */
          ResizeObserverSPI.prototype.unobserve = function (target) {
            if (!arguments.length) {
              throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
              return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
              throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is not being observed.
            if (!observations.has(target)) {
              return;
            }
            observations.delete(target);
            if (!observations.size) {
              this.controller_.removeObserver(this);
            }
          };
          /**
           * Stops observing all elements.
           *
           * @returns {void}
           */
          ResizeObserverSPI.prototype.disconnect = function () {
            this.clearActive();
            this.observations_.clear();
            this.controller_.removeObserver(this);
          };
          /**
           * Collects observation instances the associated element of which has changed
           * it's content rectangle.
           *
           * @returns {void}
           */
          ResizeObserverSPI.prototype.gatherActive = function () {
            var _this = this;
            this.clearActive();
            this.observations_.forEach(function (observation) {
              if (observation.isActive()) {
                _this.activeObservations_.push(observation);
              }
            });
          };
          /**
           * Invokes initial callback function with a list of ResizeObserverEntry
           * instances collected from active resize observations.
           *
           * @returns {void}
           */
          ResizeObserverSPI.prototype.broadcastActive = function () {
            // Do nothing if observer doesn't have active observations.
            if (!this.hasActive()) {
              return;
            }
            var ctx = this.callbackCtx_;
            // Create ResizeObserverEntry instance for every active observation.
            var entries = this.activeObservations_.map(function (observation) {
              return new ResizeObserverEntry(observation.target, observation.broadcastRect());
            });
            this.callback_.call(ctx, entries, ctx);
            this.clearActive();
          };
          /**
           * Clears the collection of active observations.
           *
           * @returns {void}
           */
          ResizeObserverSPI.prototype.clearActive = function () {
            this.activeObservations_.splice(0);
          };
          /**
           * Tells whether observer has active observations.
           *
           * @returns {boolean}
           */
          ResizeObserverSPI.prototype.hasActive = function () {
            return this.activeObservations_.length > 0;
          };
          return ResizeObserverSPI;
        }());

        // Registry of internal observers. If WeakMap is not available use current shim
        // for the Map collection as it has all required methods and because WeakMap
        // can't be fully polyfilled anyway.
        var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
        /**
         * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
         * exposing only those methods and properties that are defined in the spec.
         */
        var ResizeObserver = /** @class */ (function () {
          /**
           * Creates a new instance of ResizeObserver.
           *
           * @param {ResizeObserverCallback} callback - Callback that is invoked when
           *      dimensions of the observed elements change.
           */
          function ResizeObserver(callback) {
            if (!(this instanceof ResizeObserver)) {
              throw new TypeError('Cannot call a class as a function.');
            }
            if (!arguments.length) {
              throw new TypeError('1 argument required, but only 0 present.');
            }
            var controller = ResizeObserverController.getInstance();
            var observer = new ResizeObserverSPI(callback, controller, this);
            observers.set(this, observer);
          }
          return ResizeObserver;
        }());
        // Expose public methods of ResizeObserver.
        [
          'observe',
          'unobserve',
          'disconnect'
        ].forEach(function (method) {
          ResizeObserver.prototype[method] = function () {
            var _a;
            return (_a = observers.get(this))[method].apply(_a, arguments);
          };
        });

        var index = (function () {
          // Export existing implementation if available.
          if (typeof global$1.ResizeObserver !== 'undefined') {
            return global$1.ResizeObserver;
          }
          return ResizeObserver;
        })();

/* harmony default export */ __webpack_exports__["a"] = (index);

        /* WEBPACK VAR INJECTION */
}.call(this, __webpack_require__(48)))

      /***/
}),
/* 165 */
/***/ (function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(159),
        now = __webpack_require__(221),
        toNumber = __webpack_require__(223);

      /** Error message constants. */
      var FUNC_ERROR_TEXT = 'Expected a function';

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeMax = Math.max,
        nativeMin = Math.min;

      /**
       * Creates a debounced function that delays invoking `func` until after `wait`
       * milliseconds have elapsed since the last time the debounced function was
       * invoked. The debounced function comes with a `cancel` method to cancel
       * delayed `func` invocations and a `flush` method to immediately invoke them.
       * Provide `options` to indicate whether `func` should be invoked on the
       * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
       * with the last arguments provided to the debounced function. Subsequent
       * calls to the debounced function return the result of the last `func`
       * invocation.
       *
       * **Note:** If `leading` and `trailing` options are `true`, `func` is
       * invoked on the trailing edge of the timeout only if the debounced function
       * is invoked more than once during the `wait` timeout.
       *
       * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
       * until to the next tick, similar to `setTimeout` with a timeout of `0`.
       *
       * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
       * for details over the differences between `_.debounce` and `_.throttle`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to debounce.
       * @param {number} [wait=0] The number of milliseconds to delay.
       * @param {Object} [options={}] The options object.
       * @param {boolean} [options.leading=false]
       *  Specify invoking on the leading edge of the timeout.
       * @param {number} [options.maxWait]
       *  The maximum time `func` is allowed to be delayed before it's invoked.
       * @param {boolean} [options.trailing=true]
       *  Specify invoking on the trailing edge of the timeout.
       * @returns {Function} Returns the new debounced function.
       * @example
       *
       * // Avoid costly calculations while the window size is in flux.
       * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
       *
       * // Invoke `sendMail` when clicked, debouncing subsequent calls.
       * jQuery(element).on('click', _.debounce(sendMail, 300, {
       *   'leading': true,
       *   'trailing': false
       * }));
       *
       * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
       * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
       * var source = new EventSource('/stream');
       * jQuery(source).on('message', debounced);
       *
       * // Cancel the trailing debounced invocation.
       * jQuery(window).on('popstate', debounced.cancel);
       */
      function debounce(func, wait, options) {
        var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = 'maxWait' in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = 'trailing' in options ? !!options.trailing : trailing;
        }

        function invokeFunc(time) {
          var args = lastArgs,
            thisArg = lastThis;

          lastArgs = lastThis = undefined;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }

        function leadingEdge(time) {
          // Reset any `maxWait` timer.
          lastInvokeTime = time;
          // Start the timer for the trailing edge.
          timerId = setTimeout(timerExpired, wait);
          // Invoke the leading edge.
          return leading ? invokeFunc(time) : result;
        }

        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

          return maxing
            ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
            : timeWaiting;
        }

        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

          // Either this is the first call, activity has stopped and we're at the
          // trailing edge, the system time has gone backwards and we're treating
          // it as the trailing edge, or we've hit the `maxWait` limit.
          return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
            (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
        }

        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          // Restart the timer.
          timerId = setTimeout(timerExpired, remainingWait(time));
        }

        function trailingEdge(time) {
          timerId = undefined;

          // Only invoke if we have `lastArgs` which means `func` has been
          // debounced at least once.
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined;
          return result;
        }

        function cancel() {
          if (timerId !== undefined) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined;
        }

        function flush() {
          return timerId === undefined ? result : trailingEdge(now());
        }

        function debounced() {
          var time = now(),
            isInvoking = shouldInvoke(time);

          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;

          if (isInvoking) {
            if (timerId === undefined) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              // Handle invocations in a tight loop.
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }

      module.exports = debounce;


      /***/
}),
/* 166 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
/* WEBPACK VAR INJECTION */(function (global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


        /**
         * Detect Element Resize.
         * https://github.com/sdecima/javascript-detect-element-resize
         * Sebastian Decima
         *
         * Forked from version 0.5.3; includes the following modifications:
         * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
         * 2) Defer initialization code via a top-level function wrapper (to support SSR).
         * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
         * 4) Add nonce for style element.
         **/

        function createDetectElementResize(nonce) {
          // Check `document` and `window` in case of server-side rendering
          var _window;
          if (typeof window !== 'undefined') {
            _window = window;
          } else if (typeof self !== 'undefined') {
            _window = self;
          } else {
            _window = global;
          }

          var attachEvent = typeof document !== 'undefined' && document.attachEvent;

          if (!attachEvent) {
            var requestFrame = function () {
              var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
                return _window.setTimeout(fn, 20);
              };
              return function (fn) {
                return raf(fn);
              };
            }();

            var cancelFrame = function () {
              var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
              return function (id) {
                return cancel(id);
              };
            }();

            var resetTriggers = function resetTriggers(element) {
              var triggers = element.__resizeTriggers__,
                expand = triggers.firstElementChild,
                contract = triggers.lastElementChild,
                expandChild = expand.firstElementChild;
              contract.scrollLeft = contract.scrollWidth;
              contract.scrollTop = contract.scrollHeight;
              expandChild.style.width = expand.offsetWidth + 1 + 'px';
              expandChild.style.height = expand.offsetHeight + 1 + 'px';
              expand.scrollLeft = expand.scrollWidth;
              expand.scrollTop = expand.scrollHeight;
            };

            var checkTriggers = function checkTriggers(element) {
              return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
            };

            var scrollListener = function scrollListener(e) {
              // Don't measure (which forces) reflow for scrolls that happen inside of children!
              if (e.target.className && typeof e.target.className.indexOf === 'function' && e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
                return;
              }

              var element = this;
              resetTriggers(this);
              if (this.__resizeRAF__) {
                cancelFrame(this.__resizeRAF__);
              }
              this.__resizeRAF__ = requestFrame(function () {
                if (checkTriggers(element)) {
                  element.__resizeLast__.width = element.offsetWidth;
                  element.__resizeLast__.height = element.offsetHeight;
                  element.__resizeListeners__.forEach(function (fn) {
                    fn.call(element, e);
                  });
                }
              });
            };

            /* Detect CSS Animations support to detect element display/re-attach */
            var animation = false,
              keyframeprefix = '',
              animationstartevent = 'animationstart',
              domPrefixes = 'Webkit Moz O ms'.split(' '),
              startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
              pfx = '';
            {
              var elm = document.createElement('fakeelement');
              if (elm.style.animationName !== undefined) {
                animation = true;
              }

              if (animation === false) {
                for (var i = 0; i < domPrefixes.length; i++) {
                  if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                    pfx = domPrefixes[i];
                    keyframeprefix = '-' + pfx.toLowerCase() + '-';
                    animationstartevent = startEvents[i];
                    animation = true;
                    break;
                  }
                }
              }
            }

            var animationName = 'resizeanim';
            var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
            var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
          }

          var createStyles = function createStyles(doc) {
            if (!doc.getElementById('detectElementResize')) {
              //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
              var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                head = doc.head || doc.getElementsByTagName('head')[0],
                style = doc.createElement('style');

              style.id = 'detectElementResize';
              style.type = 'text/css';

              if (nonce != null) {
                style.setAttribute('nonce', nonce);
              }

              if (style.styleSheet) {
                style.styleSheet.cssText = css;
              } else {
                style.appendChild(doc.createTextNode(css));
              }

              head.appendChild(style);
            }
          };

          var addResizeListener = function addResizeListener(element, fn) {
            if (attachEvent) {
              element.attachEvent('onresize', fn);
            } else {
              if (!element.__resizeTriggers__) {
                var doc = element.ownerDocument;
                var elementStyle = _window.getComputedStyle(element);
                if (elementStyle && elementStyle.position == 'static') {
                  element.style.position = 'relative';
                }
                createStyles(doc);
                element.__resizeLast__ = {};
                element.__resizeListeners__ = [];
                (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
                var expandTrigger = doc.createElement('div');
                expandTrigger.className = 'expand-trigger';
                expandTrigger.appendChild(doc.createElement('div'));
                var contractTrigger = doc.createElement('div');
                contractTrigger.className = 'contract-trigger';
                element.__resizeTriggers__.appendChild(expandTrigger);
                element.__resizeTriggers__.appendChild(contractTrigger);
                element.appendChild(element.__resizeTriggers__);
                resetTriggers(element);
                element.addEventListener('scroll', scrollListener, true);

                /* Listen for a css animation to detect element display/re-attach */
                if (animationstartevent) {
                  element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
                    if (e.animationName == animationName) {
                      resetTriggers(element);
                    }
                  };
                  element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
                }
              }
              element.__resizeListeners__.push(fn);
            }
          };

          var removeResizeListener = function removeResizeListener(element, fn) {
            if (attachEvent) {
              element.detachEvent('onresize', fn);
            } else {
              element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
              if (!element.__resizeListeners__.length) {
                element.removeEventListener('scroll', scrollListener, true);
                if (element.__resizeTriggers__.__animationListener__) {
                  element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
                  element.__resizeTriggers__.__animationListener__ = null;
                }
                try {
                  element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
                } catch (e) {
                  // Preact compat; see developit/preact-compat/issues/228
                }
              }
            }
          };

          return {
            addResizeListener: addResizeListener,
            removeResizeListener: removeResizeListener
          };
        }

        var classCallCheck = function (instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        };

        var createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();

        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        var inherits = function (subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        };

        var possibleConstructorReturn = function (self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        };

        var AutoSizer = function (_React$PureComponent) {
          inherits(AutoSizer, _React$PureComponent);

          function AutoSizer() {
            var _ref;

            var _temp, _this, _ret;

            classCallCheck(this, AutoSizer);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
              height: _this.props.defaultHeight || 0,
              width: _this.props.defaultWidth || 0
            }, _this._onResize = function () {
              var _this$props = _this.props,
                disableHeight = _this$props.disableHeight,
                disableWidth = _this$props.disableWidth,
                onResize = _this$props.onResize;


              if (_this._parentNode) {
                // Guard against AutoSizer component being removed from the DOM immediately after being added.
                // This can result in invalid style values which can result in NaN values if we don't handle them.
                // See issue #150 for more context.

                var _height = _this._parentNode.offsetHeight || 0;
                var _width = _this._parentNode.offsetWidth || 0;

                var _style = window.getComputedStyle(_this._parentNode) || {};
                var paddingLeft = parseInt(_style.paddingLeft, 10) || 0;
                var paddingRight = parseInt(_style.paddingRight, 10) || 0;
                var paddingTop = parseInt(_style.paddingTop, 10) || 0;
                var paddingBottom = parseInt(_style.paddingBottom, 10) || 0;

                var newHeight = _height - paddingTop - paddingBottom;
                var newWidth = _width - paddingLeft - paddingRight;

                if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
                  _this.setState({
                    height: _height - paddingTop - paddingBottom,
                    width: _width - paddingLeft - paddingRight
                  });

                  onResize({ height: _height, width: _width });
                }
              }
            }, _this._setRef = function (autoSizer) {
              _this._autoSizer = autoSizer;
            }, _temp), possibleConstructorReturn(_this, _ret);
          }

          createClass(AutoSizer, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
              var nonce = this.props.nonce;

              if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
                // Delay access of parentNode until mount.
                // This handles edge-cases where the component has already been unmounted before its ref has been set,
                // As well as libraries like react-lite which have a slightly different lifecycle.
                this._parentNode = this._autoSizer.parentNode;

                // Defer requiring resize handler in order to support server-side rendering.
                // See issue #41
                this._detectElementResize = createDetectElementResize(nonce);
                this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

                this._onResize();
              }
            }
          }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
              if (this._detectElementResize && this._parentNode) {
                this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
              }
            }
          }, {
            key: 'render',
            value: function render() {
              var _props = this.props,
                children = _props.children,
                className = _props.className,
                disableHeight = _props.disableHeight,
                disableWidth = _props.disableWidth,
                style = _props.style;
              var _state = this.state,
                height = _state.height,
                width = _state.width;

              // Outer div should not force width/height since that may prevent containers from shrinking.
              // Inner component should overflow and use calculated width/height.
              // See issue #68 for more information.

              var outerStyle = { overflow: 'visible' };
              var childParams = {};

              // Avoid rendering children before the initial measurements have been collected.
              // At best this would just be wasting cycles.
              var bailoutOnChildren = false;

              if (!disableHeight) {
                if (height === 0) {
                  bailoutOnChildren = true;
                }
                outerStyle.height = 0;
                childParams.height = height;
              }

              if (!disableWidth) {
                if (width === 0) {
                  bailoutOnChildren = true;
                }
                outerStyle.width = 0;
                childParams.width = width;
              }

              return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                'div',
                {
                  className: className,
                  ref: this._setRef,
                  style: _extends({}, outerStyle, style)
                },
                !bailoutOnChildren && children(childParams)
              );
            }
          }]);
          return AutoSizer;
        }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

        AutoSizer.defaultProps = {
          onResize: function onResize() { },
          disableHeight: false,
          disableWidth: false,
          style: {}
        };

/* harmony default export */ __webpack_exports__["a"] = (AutoSizer);

        /* WEBPACK VAR INJECTION */
}.call(this, __webpack_require__(48)))

      /***/
}),
/* 167 */
/***/ (function (module, exports, __webpack_require__) {

      // Imports
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(230);
      exports = ___CSS_LOADER_API_IMPORT___(false);
      // Module
      exports.push([module.i, "*{box-sizing:border-box}.mr-sm{margin-right:8px}.react-frames-container{width:100%;height:86px;padding:0 16px;margin-bottom:6px}.App{position:unset}.outer-frame-container .frame-container{display:flex;justify-content:center;height:76px;position:relative}.outer-frame-container .frame-container.darken:after{content:\"\\a\";position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.4);opacity:1}.outer-frame-container .frame-container .frame{width:104px;height:60px;border-radius:4px;position:relative;top:8px;cursor:pointer;border:2px solid #485056;display:flex;flex-direction:column}.outer-frame-container .frame-container .frame.is-selected{top:6px}.outer-frame-container .frame-container .frame.is-current-frame{border:2px solid #3183c8}.outer-frame-container .frame-container .frame .innerFrame{flex:1}.outer-frame-container .frame-container .frame .innerFrame canvas{border-top-left-radius:2px;border-top-right-radius:2px;vertical-align:middle}.video-controls{background:#343a40;padding-bottom:2px;width:100%;bottom:0px;left:0px;z-index:30}.formatted-timeframe{font-size:17px;color:#aeb5bc}.buttons-container{display:flex;justify-content:space-between;padding:6px 10px;background:#343a40;position:relative}.buttons-container .video-buttons{display:flex;align-items:center}.buttons-container .video-buttons.center{position:absolute;left:50%;transform:translateX(-50%)}.buttons-container .video-buttons button{padding:0 6px;border:none;background-color:transparent;outline:none;cursor:pointer}.buttons-container .video-buttons button svg{fill:#adb5bd}.buttons-container .video-buttons button .icon{width:22px;height:22px}.buttons-container .video-buttons .button-with-menu{position:relative;height:25px}.buttons-container .video-buttons .button-with-menu button{font-size:16px;color:#adb5bd}.buttons-container .video-buttons .button-with-menu ul{position:absolute;list-style:none;padding:0;bottom:20px;left:50%;transform:translateX(-50%);z-index:50}.buttons-container .video-buttons .button-with-menu ul:after{top:100%;left:50%;border:solid transparent;content:\"\";position:absolute;pointer-events:none;border-top-color:#000;border-width:10px;margin-left:-10px}.buttons-container .video-buttons .button-with-menu li{padding:.5rem;background-color:#000;color:#adb5bd;text-align:center;cursor:pointer}.buttons-container .video-buttons .button-with-menu li:not(:last-child){border-bottom:1px solid #333}.buttons-container .video-buttons .volume-button-container{display:flex}.buttons-container .video-buttons .volume-button-container:hover>.volume-slider{opacity:1;width:7.5em;height:1.2em}.buttons-container .video-buttons .volume-slider{--min: 0;--max: 100;--val: 50;--range: calc(var(--max) - var(--min));--ratio: calc((var(--val) - var(--min)) / var(--range));--sx: calc(0.5 *1.2em + var(--ratio) * (100% - 1.2em));opacity:0;width:0;transition:width .25s ease-out,opacity .25s ease-out;padding:0;margin-right:0;border:none;background:transparent}.buttons-container .video-buttons .volume-slider,.buttons-container .video-buttons .volume-slider::-webkit-slider-thumb{-webkit-appearance:none}.buttons-container .video-buttons .volume-slider::-webkit-slider-runnable-track{box-sizing:border-box;border:none;width:7.5em;height:.25em;background:#adb5bd;background:linear-gradient(var(--ribbon-active-color), var(--ribbon-active-color)) 0/var(--sx) 100% no-repeat #adb5bd}.buttons-container .video-buttons .volume-slider::-moz-range-track{box-sizing:border-box;border:none;width:7.5em;height:.25em;background:#adb5bd}.buttons-container .video-buttons .volume-slider::-ms-track{box-sizing:border-box;border:none;width:7.5em;height:.25em;background:#adb5bd}.buttons-container .video-buttons .volume-slider::-moz-range-progress{height:.25em;background:var(--ribbon-active-color)}.buttons-container .video-buttons .volume-slider::-ms-fill-lower{height:.25em;background:var(--ribbon-active-color)}.buttons-container .video-buttons .volume-slider::-webkit-slider-thumb{margin-top:-0.475em;box-sizing:border-box;border:none;width:1.2em;height:1.2em;border-radius:50%;background:var(--ribbon-active-color)}.buttons-container .video-buttons .volume-slider::-moz-range-thumb{box-sizing:border-box;border:none;width:1.2em;height:1.2em;border-radius:50%;background:var(--ribbon-active-color)}.buttons-container .video-buttons .volume-slider::-ms-thumb{margin-top:0;box-sizing:border-box;border:none;width:1.2em;height:1.2em;border-radius:50%;background:var(--ribbon-active-color)}.buttons-container .video-buttons .volume-slider::-ms-tooltip{display:none}.divider{width:100%;height:1px;background:#000}.timeline-container{display:flex;justify-content:center;align-items:center;flex-direction:column}.timeline-container .timeline{position:relative;width:100%}.timeline-container .timeline .progress-container{padding:18px 16px;padding-bottom:12px;width:100%}.timeline-container .timeline .progress-container .progress-container-inner{position:relative;width:100%}.timeline-container .timeline .progress-container .progress-container-inner progress{width:100%;height:10px;border-radius:4px;cursor:pointer;display:block}.timeline-container .timeline .progress-container .progress-container-inner progress[value]::-webkit-progress-value{background:#3183c8;background-size:35px 20px,100% 100%,100% 100%}.timeline-container .timeline-frames-container{width:100%;padding:0 16px;z-index:0}.markers-container{width:100%;padding:0 16px}.markers-container .markers{height:26px;width:100%;position:relative;align-items:center;display:flex}.markers-container .markers .marker-and-resize-container{position:absolute;display:flex;align-items:center;height:100%;left:-5px;top:0px}.markers-container .markers .marker-and-resize-container.selected{z-index:2}.markers-container .markers .marker-and-resize-container .left-resize-container{cursor:ew-resize;position:absolute;height:18px;left:-9px;padding-left:4px;-ms-transform:translateY(-50%)}.markers-container .markers .marker-and-resize-container .left-resize-container:hover .left-resize{background:#dee2e6}.markers-container .markers .marker-and-resize-container .left-resize-container .left-resize{height:100%;width:4px;background:#adb5bd;border-radius:2px 2px 2px 2px}.markers-container .markers .marker-and-resize-container .left-resize-container .left-resize.selected{background:#dee2e6}.markers-container .markers .marker-and-resize-container .right-resize-container{position:absolute;cursor:ew-resize;height:18px;right:-9px;padding-right:4px;-ms-transform:translateY(-50%)}.markers-container .markers .marker-and-resize-container .right-resize-container:hover .right-resize{background:#dee2e6}.markers-container .markers .marker-and-resize-container .right-resize-container .right-resize{height:100%;width:4px;background-color:#adb5bd;border-radius:2px 2px 2px 2px}.markers-container .markers .marker-and-resize-container .right-resize-container .right-resize.selected{background:#dee2e6}.markers-container .markers .marker-and-resize-container .marker-container{display:flex;align-items:center;height:100%;border-radius:40px;min-width:12px;z-index:1;cursor:move;cursor:grab}.markers-container .markers .marker-and-resize-container .marker-container.grabbing{cursor:grabbing}.markers-container .markers .marker-and-resize-container .marker-container *{background:#adb5bd}.markers-container .markers .marker-and-resize-container .marker-container .marker{width:12px;height:12px;border-radius:50%;overflow:hidden;position:absolute;-ms-transform:translateY(-50%)}.markers-container .markers .marker-and-resize-container .marker-container .marker-range{height:4px;border-radius:40px;position:relative}.markers-container .markers .marker-and-resize-container .marker-container .marker-range .marker-line{position:absolute;height:16px;width:2px;left:6px;transform:translateX(-50%);top:calc(100% + 24px);background:#adb5bd;pointer-events:none}.markers-container .markers .marker-and-resize-container .marker-container .marker-range .marker-line-2{position:absolute;height:16px;width:2px;right:0px;transform:translateX(50%);top:calc(100% + 24px);background:#adb5bd;pointer-events:none}.tooltip{display:block;position:absolute;z-index:3;left:0px;background-color:rgba(0,0,0,.7);color:#adb5bd;text-align:center;padding:4px 8px;border-radius:6px;font-size:10pt;transform:translateX(-50%) translateY(-100%) translateY(-6px);-ms-transform:translateX(-50%) translateY(-100%) translateY(-6px);visibility:hidden}.tooltip::after{content:\" \";position:absolute;top:100%;left:50%;margin-left:-5px;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid rgba(0,0,0,.5)}", ""]);
      // Exports
      module.exports = exports;


      /***/
}),
/* 168 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var inspectSource = __webpack_require__(61);

      var WeakMap = global.WeakMap;

      module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


      /***/
}),
/* 169 */
/***/ (function (module, exports, __webpack_require__) {

      var has = __webpack_require__(13);
      var ownKeys = __webpack_require__(170);
      var getOwnPropertyDescriptorModule = __webpack_require__(49);
      var definePropertyModule = __webpack_require__(19);

      module.exports = function (target, source) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };


      /***/
}),
/* 170 */
/***/ (function (module, exports, __webpack_require__) {

      var getBuiltIn = __webpack_require__(30);
      var getOwnPropertyNamesModule = __webpack_require__(52);
      var getOwnPropertySymbolsModule = __webpack_require__(88);
      var anObject = __webpack_require__(9);

      // all object keys, includes non-enumerable and symbols
      module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
      };


      /***/
}),
/* 171 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);

      module.exports = global;


      /***/
}),
/* 172 */
/***/ (function (module, exports, __webpack_require__) {

      var NATIVE_SYMBOL = __webpack_require__(92);

      module.exports = NATIVE_SYMBOL
        /* global Symbol -- safe */
        && !Symbol.sham
        && typeof Symbol.iterator == 'symbol';


      /***/
}),
/* 173 */
/***/ (function (module, exports, __webpack_require__) {

      var $ = __webpack_require__(6);
      var assign = __webpack_require__(93);

      // `Object.assign` method
      // https://tc39.es/ecma262/#sec-object.assign
      $({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
        assign: assign
      });


      /***/
}),
/* 174 */
/***/ (function (module, exports, __webpack_require__) {

      var $ = __webpack_require__(6);
      var DESCRIPTORS = __webpack_require__(11);
      var create = __webpack_require__(38);

      // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create
      $({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
        create: create
      });


      /***/
}),
/* 175 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var trim = __webpack_require__(97).trim;
      var whitespaces = __webpack_require__(70);

      var $parseFloat = global.parseFloat;
      var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

      // `parseFloat` method
      // https://tc39.es/ecma262/#sec-parsefloat-string
      module.exports = FORCED ? function parseFloat(string) {
        var trimmedString = trim(String(string));
        var result = $parseFloat(trimmedString);
        return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
      } : $parseFloat;


      /***/
}),
/* 176 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var TO_STRING_TAG_SUPPORT = __webpack_require__(72);
      var classof = __webpack_require__(40);

      // `Object.prototype.toString` method implementation
      // https://tc39.es/ecma262/#sec-object.prototype.tostring
      module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
        return '[object ' + classof(this) + ']';
      };


      /***/
}),
/* 177 */
/***/ (function (module, exports, __webpack_require__) {

      var DESCRIPTORS = __webpack_require__(11);
      var objectKeys = __webpack_require__(54);
      var toIndexedObject = __webpack_require__(28);
      var propertyIsEnumerable = __webpack_require__(58).f;

      // `Object.{ entries, values }` methods implementation
      var createMethod = function (TO_ENTRIES) {
        return function (it) {
          var O = toIndexedObject(it);
          var keys = objectKeys(O);
          var length = keys.length;
          var i = 0;
          var result = [];
          var key;
          while (length > i) {
            key = keys[i++];
            if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
              result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
            }
          }
          return result;
        };
      };

      module.exports = {
        // `Object.entries` method
        // https://tc39.es/ecma262/#sec-object.entries
        entries: createMethod(true),
        // `Object.values` method
        // https://tc39.es/ecma262/#sec-object.values
        values: createMethod(false)
      };


      /***/
}),
/* 178 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);

      module.exports = global.Promise;


      /***/
}),
/* 179 */
/***/ (function (module, exports, __webpack_require__) {

      var anObject = __webpack_require__(9);
      var isArrayIteratorMethod = __webpack_require__(75);
      var toLength = __webpack_require__(8);
      var bind = __webpack_require__(31);
      var getIteratorMethod = __webpack_require__(43);
      var iteratorClose = __webpack_require__(101);

      var Result = function (stopped, result) {
        this.stopped = stopped;
        this.result = result;
      };

      module.exports = function (iterable, unboundFunction, options) {
        var that = options && options.that;
        var AS_ENTRIES = !!(options && options.AS_ENTRIES);
        var IS_ITERATOR = !!(options && options.IS_ITERATOR);
        var INTERRUPTED = !!(options && options.INTERRUPTED);
        var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
        var iterator, iterFn, index, length, result, next, step;

        var stop = function (condition) {
          if (iterator) iteratorClose(iterator);
          return new Result(true, condition);
        };

        var callFn = function (value) {
          if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
          } return INTERRUPTED ? fn(value, stop) : fn(value);
        };

        if (IS_ITERATOR) {
          iterator = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
          // optimisation for array iterators
          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = toLength(iterable.length); length > index; index++) {
              result = callFn(iterable[index]);
              if (result && result instanceof Result) return result;
            } return new Result(false);
          }
          iterator = iterFn.call(iterable);
        }

        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          try {
            result = callFn(step.value);
          } catch (error) {
            iteratorClose(iterator);
            throw error;
          }
          if (typeof result == 'object' && result && result instanceof Result) return result;
        } return new Result(false);
      };


      /***/
}),
/* 180 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var getOwnPropertyDescriptor = __webpack_require__(49).f;
      var macrotask = __webpack_require__(102).set;
      var IS_IOS = __webpack_require__(103);
      var IS_WEBOS_WEBKIT = __webpack_require__(181);
      var IS_NODE = __webpack_require__(77);

      var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
      var document = global.document;
      var process = global.process;
      var Promise = global.Promise;
      // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
      var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
      var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

      var flush, head, last, notify, toggle, node, promise, then;

      // modern engines have queueMicrotask method
      if (!queueMicrotask) {
        flush = function () {
          var parent, fn;
          if (IS_NODE && (parent = process.domain)) parent.exit();
          while (head) {
            fn = head.fn;
            head = head.next;
            try {
              fn();
            } catch (error) {
              if (head) notify();
              else last = undefined;
              throw error;
            }
          } last = undefined;
          if (parent) parent.enter();
        };

        // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
        // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
        if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
          toggle = true;
          node = document.createTextNode('');
          new MutationObserver(flush).observe(node, { characterData: true });
          notify = function () {
            node.data = toggle = !toggle;
          };
          // environments with maybe non-completely correct, but existent Promise
        } else if (Promise && Promise.resolve) {
          // Promise.resolve without an argument throws an error in LG WebOS 2
          promise = Promise.resolve(undefined);
          then = promise.then;
          notify = function () {
            then.call(promise, flush);
          };
          // Node.js without promises
        } else if (IS_NODE) {
          notify = function () {
            process.nextTick(flush);
          };
          // for other environments - macrotask based on:
          // - setImmediate
          // - MessageChannel
          // - window.postMessag
          // - onreadystatechange
          // - setTimeout
        } else {
          notify = function () {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(global, flush);
          };
        }
      }

      module.exports = queueMicrotask || function (fn) {
        var task = { fn: fn, next: undefined };
        if (last) last.next = task;
        if (!head) {
          head = task;
          notify();
        } last = task;
      };


      /***/
}),
/* 181 */
/***/ (function (module, exports, __webpack_require__) {

      var userAgent = __webpack_require__(53);

      module.exports = /web0s(?!.*chrome)/i.test(userAgent);


      /***/
}),
/* 182 */
/***/ (function (module, exports, __webpack_require__) {

      var anObject = __webpack_require__(9);
      var isObject = __webpack_require__(12);
      var newPromiseCapability = __webpack_require__(104);

      module.exports = function (C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };


      /***/
}),
/* 183 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);

      module.exports = function (a, b) {
        var console = global.console;
        if (console && console.error) {
          arguments.length === 1 ? console.error(a) : console.error(a, b);
        }
      };


      /***/
}),
/* 184 */
/***/ (function (module, exports) {

      module.exports = function (exec) {
        try {
          return { error: false, value: exec() };
        } catch (error) {
          return { error: true, value: error };
        }
      };


      /***/
}),
/* 185 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var $some = __webpack_require__(17).some;
      var arrayMethodIsStrict = __webpack_require__(39);

      var STRICT_METHOD = arrayMethodIsStrict('some');

      // `Array.prototype.some` method
      // https://tc39.es/ecma262/#sec-array.prototype.some
      $({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
        some: function some(callbackfn /* , thisArg */) {
          return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });


      /***/
}),
/* 186 */
/***/ (function (module, exports, __webpack_require__) {

      var $ = __webpack_require__(6);
      var toISOString = __webpack_require__(187);

      // `Date.prototype.toISOString` method
      // https://tc39.es/ecma262/#sec-date.prototype.toisostring
      // PhantomJS / old WebKit has a broken implementations
      $({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {
        toISOString: toISOString
      });


      /***/
}),
/* 187 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var fails = __webpack_require__(3);
      var padStart = __webpack_require__(188).start;

      var abs = Math.abs;
      var DatePrototype = Date.prototype;
      var getTime = DatePrototype.getTime;
      var nativeDateToISOString = DatePrototype.toISOString;

      // `Date.prototype.toISOString` method implementation
      // https://tc39.es/ecma262/#sec-date.prototype.toisostring
      // PhantomJS / old WebKit fails here:
      module.exports = (fails(function () {
        return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
      }) || !fails(function () {
        nativeDateToISOString.call(new Date(NaN));
      })) ? function toISOString() {
        if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
        var date = this;
        var year = date.getUTCFullYear();
        var milliseconds = date.getUTCMilliseconds();
        var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
        return sign + padStart(abs(year), sign ? 6 : 4, 0) +
          '-' + padStart(date.getUTCMonth() + 1, 2, 0) +
          '-' + padStart(date.getUTCDate(), 2, 0) +
          'T' + padStart(date.getUTCHours(), 2, 0) +
          ':' + padStart(date.getUTCMinutes(), 2, 0) +
          ':' + padStart(date.getUTCSeconds(), 2, 0) +
          '.' + padStart(milliseconds, 3, 0) +
          'Z';
      } : nativeDateToISOString;


      /***/
}),
/* 188 */
/***/ (function (module, exports, __webpack_require__) {

      // https://github.com/tc39/proposal-string-pad-start-end
      var toLength = __webpack_require__(8);
      var repeat = __webpack_require__(189);
      var requireObjectCoercible = __webpack_require__(22);

      var ceil = Math.ceil;

      // `String.prototype.{ padStart, padEnd }` methods implementation
      var createMethod = function (IS_END) {
        return function ($this, maxLength, fillString) {
          var S = String(requireObjectCoercible($this));
          var stringLength = S.length;
          var fillStr = fillString === undefined ? ' ' : String(fillString);
          var intMaxLength = toLength(maxLength);
          var fillLen, stringFiller;
          if (intMaxLength <= stringLength || fillStr == '') return S;
          fillLen = intMaxLength - stringLength;
          stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
          if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
          return IS_END ? S + stringFiller : stringFiller + S;
        };
      };

      module.exports = {
        // `String.prototype.padStart` method
        // https://tc39.es/ecma262/#sec-string.prototype.padstart
        start: createMethod(false),
        // `String.prototype.padEnd` method
        // https://tc39.es/ecma262/#sec-string.prototype.padend
        end: createMethod(true)
      };


      /***/
}),
/* 189 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var toInteger = __webpack_require__(24);
      var requireObjectCoercible = __webpack_require__(22);

      // `String.prototype.repeat` method implementation
      // https://tc39.es/ecma262/#sec-string.prototype.repeat
      module.exports = ''.repeat || function repeat(count) {
        var str = String(requireObjectCoercible(this));
        var result = '';
        var n = toInteger(count);
        if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
        for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
        return result;
      };


      /***/
}),
/* 190 */
/***/ (function (module, exports, __webpack_require__) {

      var $ = __webpack_require__(6);
      var toObject = __webpack_require__(14);
      var nativeKeys = __webpack_require__(54);
      var fails = __webpack_require__(3);

      var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

      // `Object.keys` method
      // https://tc39.es/ecma262/#sec-object.keys
      $({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
        keys: function keys(it) {
          return nativeKeys(toObject(it));
        }
      });


      /***/
}),
/* 191 */
/***/ (function (module, exports, __webpack_require__) {

      var fails = __webpack_require__(3);

      module.exports = !fails(function () {
        function F() { /* empty */ }
        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });


      /***/
}),
/* 192 */
/***/ (function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(12);

      module.exports = function (it) {
        if (!isObject(it) && it !== null) {
          throw TypeError("Can't set " + String(it) + ' as a prototype');
        } return it;
      };


      /***/
}),
/* 193 */
/***/ (function (module, exports) {

      // IEEE754 conversions based on https://github.com/feross/ieee754
      var abs = Math.abs;
      var pow = Math.pow;
      var floor = Math.floor;
      var log = Math.log;
      var LN2 = Math.LN2;

      var pack = function (number, mantissaLength, bytes) {
        var buffer = new Array(bytes);
        var exponentLength = bytes * 8 - mantissaLength - 1;
        var eMax = (1 << exponentLength) - 1;
        var eBias = eMax >> 1;
        var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
        var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
        var index = 0;
        var exponent, mantissa, c;
        number = abs(number);
        // eslint-disable-next-line no-self-compare -- NaN check
        if (number != number || number === Infinity) {
          // eslint-disable-next-line no-self-compare -- NaN check
          mantissa = number != number ? 1 : 0;
          exponent = eMax;
        } else {
          exponent = floor(log(number) / LN2);
          if (number * (c = pow(2, -exponent)) < 1) {
            exponent--;
            c *= 2;
          }
          if (exponent + eBias >= 1) {
            number += rt / c;
          } else {
            number += rt * pow(2, 1 - eBias);
          }
          if (number * c >= 2) {
            exponent++;
            c /= 2;
          }
          if (exponent + eBias >= eMax) {
            mantissa = 0;
            exponent = eMax;
          } else if (exponent + eBias >= 1) {
            mantissa = (number * c - 1) * pow(2, mantissaLength);
            exponent = exponent + eBias;
          } else {
            mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
            exponent = 0;
          }
        }
        for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
        exponent = exponent << mantissaLength | mantissa;
        exponentLength += mantissaLength;
        for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
        buffer[--index] |= sign * 128;
        return buffer;
      };

      var unpack = function (buffer, mantissaLength) {
        var bytes = buffer.length;
        var exponentLength = bytes * 8 - mantissaLength - 1;
        var eMax = (1 << exponentLength) - 1;
        var eBias = eMax >> 1;
        var nBits = exponentLength - 7;
        var index = bytes - 1;
        var sign = buffer[index--];
        var exponent = sign & 127;
        var mantissa;
        sign >>= 7;
        for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
        mantissa = exponent & (1 << -nBits) - 1;
        exponent >>= -nBits;
        nBits += mantissaLength;
        for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
        if (exponent === 0) {
          exponent = 1 - eBias;
        } else if (exponent === eMax) {
          return mantissa ? NaN : sign ? -Infinity : Infinity;
        } else {
          mantissa = mantissa + pow(2, mantissaLength);
          exponent = exponent - eBias;
        } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
      };

      module.exports = {
        pack: pack,
        unpack: unpack
      };


      /***/
}),
/* 194 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var trim = __webpack_require__(97).trim;
      var whitespaces = __webpack_require__(70);

      var $parseInt = global.parseInt;
      var hex = /^[+-]?0[Xx]/;
      var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

      // `parseInt` method
      // https://tc39.es/ecma262/#sec-parseint-string-radix
      module.exports = FORCED ? function parseInt(string, radix) {
        var S = trim(String(string));
        return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
      } : $parseInt;


      /***/
}),
/* 195 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var fixRegExpWellKnownSymbolLogic = __webpack_require__(120);
      var anObject = __webpack_require__(9);
      var toLength = __webpack_require__(8);
      var toInteger = __webpack_require__(24);
      var requireObjectCoercible = __webpack_require__(22);
      var advanceStringIndex = __webpack_require__(121);
      var getSubstitution = __webpack_require__(196);
      var regExpExec = __webpack_require__(122);

      var max = Math.max;
      var min = Math.min;

      var maybeToString = function (it) {
        return it === undefined ? it : String(it);
      };

      // @@replace logic
      fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
        var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
        var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
        var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

        return [
          // `String.prototype.replace` method
          // https://tc39.es/ecma262/#sec-string.prototype.replace
          function replace(searchValue, replaceValue) {
            var O = requireObjectCoercible(this);
            var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
            return replacer !== undefined
              ? replacer.call(searchValue, O, replaceValue)
              : nativeReplace.call(String(O), searchValue, replaceValue);
          },
          // `RegExp.prototype[@@replace]` method
          // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
          function (regexp, replaceValue) {
            if (
              (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
              (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
            ) {
              var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
              if (res.done) return res.value;
            }

            var rx = anObject(regexp);
            var S = String(this);

            var functionalReplace = typeof replaceValue === 'function';
            if (!functionalReplace) replaceValue = String(replaceValue);

            var global = rx.global;
            if (global) {
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
            }
            var results = [];
            while (true) {
              var result = regExpExec(rx, S);
              if (result === null) break;

              results.push(result);
              if (!global) break;

              var matchStr = String(result[0]);
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }

            var accumulatedResult = '';
            var nextSourcePosition = 0;
            for (var i = 0; i < results.length; i++) {
              result = results[i];

              var matched = String(result[0]);
              var position = max(min(toInteger(result.index), S.length), 0);
              var captures = [];
              // NOTE: This is equivalent to
              //   captures = result.slice(1).map(maybeToString)
              // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
              // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
              // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
              for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
              var namedCaptures = result.groups;
              if (functionalReplace) {
                var replacerArgs = [matched].concat(captures, position, S);
                if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                var replacement = String(replaceValue.apply(undefined, replacerArgs));
              } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
              }
              if (position >= nextSourcePosition) {
                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
              }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
          }
        ];
      });


      /***/
}),
/* 196 */
/***/ (function (module, exports, __webpack_require__) {

      var toObject = __webpack_require__(14);

      var floor = Math.floor;
      var replace = ''.replace;
      var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
      var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

      // https://tc39.es/ecma262/#sec-getsubstitution
      module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
        if (namedCaptures !== undefined) {
          namedCaptures = toObject(namedCaptures);
          symbols = SUBSTITUTION_SYMBOLS;
        }
        return replace.call(replacement, symbols, function (match, ch) {
          var capture;
          switch (ch.charAt(0)) {
            case '$': return '$';
            case '&': return matched;
            case '`': return str.slice(0, position);
            case "'": return str.slice(tailPos);
            case '<':
              capture = namedCaptures[ch.slice(1, -1)];
              break;
            default: // \d\d?
              var n = +ch;
              if (n === 0) return match;
              if (n > m) {
                var f = floor(n / 10);
                if (f === 0) return match;
                if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                return match;
              }
              capture = captures[n - 1];
          }
          return capture === undefined ? '' : capture;
        });
      };


      /***/
}),
/* 197 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var global = __webpack_require__(2);
      var DESCRIPTORS = __webpack_require__(11);
      var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(125);
      var ArrayBufferViewCore = __webpack_require__(4);
      var ArrayBufferModule = __webpack_require__(114);
      var anInstance = __webpack_require__(41);
      var createPropertyDescriptor = __webpack_require__(27);
      var createNonEnumerableProperty = __webpack_require__(15);
      var toLength = __webpack_require__(8);
      var toIndex = __webpack_require__(116);
      var toOffset = __webpack_require__(126);
      var toPrimitive = __webpack_require__(51);
      var has = __webpack_require__(13);
      var classof = __webpack_require__(40);
      var isObject = __webpack_require__(12);
      var create = __webpack_require__(38);
      var setPrototypeOf = __webpack_require__(45);
      var getOwnPropertyNames = __webpack_require__(52).f;
      var typedArrayFrom = __webpack_require__(127);
      var forEach = __webpack_require__(17).forEach;
      var setSpecies = __webpack_require__(74);
      var definePropertyModule = __webpack_require__(19);
      var getOwnPropertyDescriptorModule = __webpack_require__(49);
      var InternalStateModule = __webpack_require__(23);
      var inheritIfRequired = __webpack_require__(128);

      var getInternalState = InternalStateModule.get;
      var setInternalState = InternalStateModule.set;
      var nativeDefineProperty = definePropertyModule.f;
      var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      var round = Math.round;
      var RangeError = global.RangeError;
      var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
      var DataView = ArrayBufferModule.DataView;
      var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
      var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
      var TypedArray = ArrayBufferViewCore.TypedArray;
      var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
      var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
      var isTypedArray = ArrayBufferViewCore.isTypedArray;
      var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
      var WRONG_LENGTH = 'Wrong length';

      var fromList = function (C, list) {
        var index = 0;
        var length = list.length;
        var result = new (aTypedArrayConstructor(C))(length);
        while (length > index) result[index] = list[index++];
        return result;
      };

      var addGetter = function (it, key) {
        nativeDefineProperty(it, key, {
          get: function () {
            return getInternalState(this)[key];
          }
        });
      };

      var isArrayBuffer = function (it) {
        var klass;
        return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
      };

      var isTypedArrayIndex = function (target, key) {
        return isTypedArray(target)
          && typeof key != 'symbol'
          && key in target
          && String(+key) == String(key);
      };

      var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
        return isTypedArrayIndex(target, key = toPrimitive(key, true))
          ? createPropertyDescriptor(2, target[key])
          : nativeGetOwnPropertyDescriptor(target, key);
      };

      var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
        if (isTypedArrayIndex(target, key = toPrimitive(key, true))
          && isObject(descriptor)
          && has(descriptor, 'value')
          && !has(descriptor, 'get')
          && !has(descriptor, 'set')
          // TODO: add validation descriptor w/o calling accessors
          && !descriptor.configurable
          && (!has(descriptor, 'writable') || descriptor.writable)
          && (!has(descriptor, 'enumerable') || descriptor.enumerable)
        ) {
          target[key] = descriptor.value;
          return target;
        } return nativeDefineProperty(target, key, descriptor);
      };

      if (DESCRIPTORS) {
        if (!NATIVE_ARRAY_BUFFER_VIEWS) {
          getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
          definePropertyModule.f = wrappedDefineProperty;
          addGetter(TypedArrayPrototype, 'buffer');
          addGetter(TypedArrayPrototype, 'byteOffset');
          addGetter(TypedArrayPrototype, 'byteLength');
          addGetter(TypedArrayPrototype, 'length');
        }

        $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
          getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
          defineProperty: wrappedDefineProperty
        });

        module.exports = function (TYPE, wrapper, CLAMPED) {
          var BYTES = TYPE.match(/\d+$/)[0] / 8;
          var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
          var GETTER = 'get' + TYPE;
          var SETTER = 'set' + TYPE;
          var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
          var TypedArrayConstructor = NativeTypedArrayConstructor;
          var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
          var exported = {};

          var getter = function (that, index) {
            var data = getInternalState(that);
            return data.view[GETTER](index * BYTES + data.byteOffset, true);
          };

          var setter = function (that, index, value) {
            var data = getInternalState(that);
            if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
            data.view[SETTER](index * BYTES + data.byteOffset, value, true);
          };

          var addElement = function (that, index) {
            nativeDefineProperty(that, index, {
              get: function () {
                return getter(this, index);
              },
              set: function (value) {
                return setter(this, index, value);
              },
              enumerable: true
            });
          };

          if (!NATIVE_ARRAY_BUFFER_VIEWS) {
            TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
              anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
              var index = 0;
              var byteOffset = 0;
              var buffer, byteLength, length;
              if (!isObject(data)) {
                length = toIndex(data);
                byteLength = length * BYTES;
                buffer = new ArrayBuffer(byteLength);
              } else if (isArrayBuffer(data)) {
                buffer = data;
                byteOffset = toOffset(offset, BYTES);
                var $len = data.byteLength;
                if ($length === undefined) {
                  if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                  byteLength = $len - byteOffset;
                  if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                } else {
                  byteLength = toLength($length) * BYTES;
                  if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
                }
                length = byteLength / BYTES;
              } else if (isTypedArray(data)) {
                return fromList(TypedArrayConstructor, data);
              } else {
                return typedArrayFrom.call(TypedArrayConstructor, data);
              }
              setInternalState(that, {
                buffer: buffer,
                byteOffset: byteOffset,
                byteLength: byteLength,
                length: length,
                view: new DataView(buffer)
              });
              while (index < length) addElement(that, index++);
            });

            if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
            TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
          } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
            TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
              anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
              return inheritIfRequired(function () {
                if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
                if (isArrayBuffer(data)) return $length !== undefined
                  ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
                  : typedArrayOffset !== undefined
                    ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
                    : new NativeTypedArrayConstructor(data);
                if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
                return typedArrayFrom.call(TypedArrayConstructor, data);
              }(), dummy, TypedArrayConstructor);
            });

            if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
            forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
              if (!(key in TypedArrayConstructor)) {
                createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
              }
            });
            TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
          }

          if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
            createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
          }

          if (TYPED_ARRAY_TAG) {
            createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
          }

          exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

          $({
            global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
          }, exported);

          if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
            createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
          }

          if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
            createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
          }

          setSpecies(CONSTRUCTOR_NAME);
        };
      } else module.exports = function () { /* empty */ };


      /***/
}),
/* 198 */
/***/ (function (module, exports, __webpack_require__) {

      var toInteger = __webpack_require__(24);

      module.exports = function (it) {
        var result = toInteger(it);
        if (result < 0) throw RangeError("The argument can't be less than 0");
        return result;
      };


      /***/
}),
/* 199 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var toObject = __webpack_require__(14);
      var toAbsoluteIndex = __webpack_require__(37);
      var toLength = __webpack_require__(8);

      var min = Math.min;

      // `Array.prototype.copyWithin` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.copywithin
      module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
        var O = toObject(this);
        var len = toLength(O.length);
        var to = toAbsoluteIndex(target, len);
        var from = toAbsoluteIndex(start, len);
        var end = arguments.length > 2 ? arguments[2] : undefined;
        var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
        var inc = 1;
        if (from < to && to < from + count) {
          inc = -1;
          from += count - 1;
          to += count - 1;
        }
        while (count-- > 0) {
          if (from in O) O[to] = O[from];
          else delete O[to];
          to += inc;
          from += inc;
        } return O;
      };


      /***/
}),
/* 200 */
/***/ (function (module, exports, __webpack_require__) {

      var aTypedArrayConstructor = __webpack_require__(4).aTypedArrayConstructor;
      var speciesConstructor = __webpack_require__(26);

      module.exports = function (instance, list) {
        var C = speciesConstructor(instance, instance.constructor);
        var index = 0;
        var length = list.length;
        var result = new (aTypedArrayConstructor(C))(length);
        while (length > index) result[index] = list[index++];
        return result;
      };


      /***/
}),
/* 201 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(125);
      var exportTypedArrayStaticMethod = __webpack_require__(4).exportTypedArrayStaticMethod;
      var typedArrayFrom = __webpack_require__(127);

      // `%TypedArray%.from` method
      // https://tc39.es/ecma262/#sec-%typedarray%.from
      exportTypedArrayStaticMethod('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);


      /***/
}),
/* 202 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var toIndexedObject = __webpack_require__(28);
      var toInteger = __webpack_require__(24);
      var toLength = __webpack_require__(8);
      var arrayMethodIsStrict = __webpack_require__(39);

      var min = Math.min;
      var nativeLastIndexOf = [].lastIndexOf;
      var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
      var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

      // `Array.prototype.lastIndexOf` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
      module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
        // convert -0 to +0
        if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
        var O = toIndexedObject(this);
        var length = toLength(O.length);
        var index = length - 1;
        if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
        if (index < 0) index = length + index;
        for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
        return -1;
      } : nativeLastIndexOf;


      /***/
}),
/* 203 */
/***/ (function (module, exports, __webpack_require__) {

      var global = __webpack_require__(2);
      var DOMIterables = __webpack_require__(105);
      var ArrayIteratorMethods = __webpack_require__(44);
      var createNonEnumerableProperty = __webpack_require__(15);
      var wellKnownSymbol = __webpack_require__(7);

      var ITERATOR = wellKnownSymbol('iterator');
      var TO_STRING_TAG = wellKnownSymbol('toStringTag');
      var ArrayValues = ArrayIteratorMethods.values;

      for (var COLLECTION_NAME in DOMIterables) {
        var Collection = global[COLLECTION_NAME];
        var CollectionPrototype = Collection && Collection.prototype;
        if (CollectionPrototype) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
          } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues;
          }
          if (!CollectionPrototype[TO_STRING_TAG]) {
            createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
          }
          if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
              createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
            } catch (error) {
              CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
            }
          }
        }
      }


      /***/
}),
/* 204 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
      __webpack_require__(82);
      var $ = __webpack_require__(6);
      var DESCRIPTORS = __webpack_require__(11);
      var USE_NATIVE_URL = __webpack_require__(153);
      var global = __webpack_require__(2);
      var defineProperties = __webpack_require__(94);
      var redefine = __webpack_require__(16);
      var anInstance = __webpack_require__(41);
      var has = __webpack_require__(13);
      var assign = __webpack_require__(93);
      var arrayFrom = __webpack_require__(154);
      var codeAt = __webpack_require__(83).codeAt;
      var toASCII = __webpack_require__(206);
      var setToStringTag = __webpack_require__(33);
      var URLSearchParamsModule = __webpack_require__(207);
      var InternalStateModule = __webpack_require__(23);

      var NativeURL = global.URL;
      var URLSearchParams = URLSearchParamsModule.URLSearchParams;
      var getInternalSearchParamsState = URLSearchParamsModule.getState;
      var setInternalState = InternalStateModule.set;
      var getInternalURLState = InternalStateModule.getterFor('URL');
      var floor = Math.floor;
      var pow = Math.pow;

      var INVALID_AUTHORITY = 'Invalid authority';
      var INVALID_SCHEME = 'Invalid scheme';
      var INVALID_HOST = 'Invalid host';
      var INVALID_PORT = 'Invalid port';

      var ALPHA = /[A-Za-z]/;
      var ALPHANUMERIC = /[\d+-.A-Za-z]/;
      var DIGIT = /\d/;
      var HEX_START = /^(0x|0X)/;
      var OCT = /^[0-7]+$/;
      var DEC = /^\d+$/;
      var HEX = /^[\dA-Fa-f]+$/;
      /* eslint-disable no-control-regex -- safe */
      var FORBIDDEN_HOST_CODE_POINT = /[\u0000\t\u000A\u000D #%/:?@[\\]]/;
      var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\t\u000A\u000D #/:?@[\\]]/;
      var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
      var TAB_AND_NEW_LINE = /[\t\u000A\u000D]/g;
      /* eslint-enable no-control-regex -- safe */
      var EOF;

      var parseHost = function (url, input) {
        var result, codePoints, index;
        if (input.charAt(0) == '[') {
          if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
          result = parseIPv6(input.slice(1, -1));
          if (!result) return INVALID_HOST;
          url.host = result;
          // opaque host
        } else if (!isSpecial(url)) {
          if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
          result = '';
          codePoints = arrayFrom(input);
          for (index = 0; index < codePoints.length; index++) {
            result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
          }
          url.host = result;
        } else {
          input = toASCII(input);
          if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
          result = parseIPv4(input);
          if (result === null) return INVALID_HOST;
          url.host = result;
        }
      };

      var parseIPv4 = function (input) {
        var parts = input.split('.');
        var partsLength, numbers, index, part, radix, number, ipv4;
        if (parts.length && parts[parts.length - 1] == '') {
          parts.pop();
        }
        partsLength = parts.length;
        if (partsLength > 4) return input;
        numbers = [];
        for (index = 0; index < partsLength; index++) {
          part = parts[index];
          if (part == '') return input;
          radix = 10;
          if (part.length > 1 && part.charAt(0) == '0') {
            radix = HEX_START.test(part) ? 16 : 8;
            part = part.slice(radix == 8 ? 1 : 2);
          }
          if (part === '') {
            number = 0;
          } else {
            if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
            number = parseInt(part, radix);
          }
          numbers.push(number);
        }
        for (index = 0; index < partsLength; index++) {
          number = numbers[index];
          if (index == partsLength - 1) {
            if (number >= pow(256, 5 - partsLength)) return null;
          } else if (number > 255) return null;
        }
        ipv4 = numbers.pop();
        for (index = 0; index < numbers.length; index++) {
          ipv4 += numbers[index] * pow(256, 3 - index);
        }
        return ipv4;
      };

      // eslint-disable-next-line max-statements -- TODO
      var parseIPv6 = function (input) {
        var address = [0, 0, 0, 0, 0, 0, 0, 0];
        var pieceIndex = 0;
        var compress = null;
        var pointer = 0;
        var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

        var char = function () {
          return input.charAt(pointer);
        };

        if (char() == ':') {
          if (input.charAt(1) != ':') return;
          pointer += 2;
          pieceIndex++;
          compress = pieceIndex;
        }
        while (char()) {
          if (pieceIndex == 8) return;
          if (char() == ':') {
            if (compress !== null) return;
            pointer++;
            pieceIndex++;
            compress = pieceIndex;
            continue;
          }
          value = length = 0;
          while (length < 4 && HEX.test(char())) {
            value = value * 16 + parseInt(char(), 16);
            pointer++;
            length++;
          }
          if (char() == '.') {
            if (length == 0) return;
            pointer -= length;
            if (pieceIndex > 6) return;
            numbersSeen = 0;
            while (char()) {
              ipv4Piece = null;
              if (numbersSeen > 0) {
                if (char() == '.' && numbersSeen < 4) pointer++;
                else return;
              }
              if (!DIGIT.test(char())) return;
              while (DIGIT.test(char())) {
                number = parseInt(char(), 10);
                if (ipv4Piece === null) ipv4Piece = number;
                else if (ipv4Piece == 0) return;
                else ipv4Piece = ipv4Piece * 10 + number;
                if (ipv4Piece > 255) return;
                pointer++;
              }
              address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
              numbersSeen++;
              if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
            }
            if (numbersSeen != 4) return;
            break;
          } else if (char() == ':') {
            pointer++;
            if (!char()) return;
          } else if (char()) return;
          address[pieceIndex++] = value;
        }
        if (compress !== null) {
          swaps = pieceIndex - compress;
          pieceIndex = 7;
          while (pieceIndex != 0 && swaps > 0) {
            swap = address[pieceIndex];
            address[pieceIndex--] = address[compress + swaps - 1];
            address[compress + --swaps] = swap;
          }
        } else if (pieceIndex != 8) return;
        return address;
      };

      var findLongestZeroSequence = function (ipv6) {
        var maxIndex = null;
        var maxLength = 1;
        var currStart = null;
        var currLength = 0;
        var index = 0;
        for (; index < 8; index++) {
          if (ipv6[index] !== 0) {
            if (currLength > maxLength) {
              maxIndex = currStart;
              maxLength = currLength;
            }
            currStart = null;
            currLength = 0;
          } else {
            if (currStart === null) currStart = index;
            ++currLength;
          }
        }
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }
        return maxIndex;
      };

      var serializeHost = function (host) {
        var result, index, compress, ignore0;
        // ipv4
        if (typeof host == 'number') {
          result = [];
          for (index = 0; index < 4; index++) {
            result.unshift(host % 256);
            host = floor(host / 256);
          } return result.join('.');
          // ipv6
        } else if (typeof host == 'object') {
          result = '';
          compress = findLongestZeroSequence(host);
          for (index = 0; index < 8; index++) {
            if (ignore0 && host[index] === 0) continue;
            if (ignore0) ignore0 = false;
            if (compress === index) {
              result += index ? ':' : '::';
              ignore0 = true;
            } else {
              result += host[index].toString(16);
              if (index < 7) result += ':';
            }
          }
          return '[' + result + ']';
        } return host;
      };

      var C0ControlPercentEncodeSet = {};
      var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
        ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
      });
      var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
        '#': 1, '?': 1, '{': 1, '}': 1
      });
      var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
        '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
      });

      var percentEncode = function (char, set) {
        var code = codeAt(char, 0);
        return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
      };

      var specialSchemes = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
      };

      var isSpecial = function (url) {
        return has(specialSchemes, url.scheme);
      };

      var includesCredentials = function (url) {
        return url.username != '' || url.password != '';
      };

      var cannotHaveUsernamePasswordPort = function (url) {
        return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
      };

      var isWindowsDriveLetter = function (string, normalized) {
        var second;
        return string.length == 2 && ALPHA.test(string.charAt(0))
          && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
      };

      var startsWithWindowsDriveLetter = function (string) {
        var third;
        return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
          string.length == 2 ||
          ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
        );
      };

      var shortenURLsPath = function (url) {
        var path = url.path;
        var pathSize = path.length;
        if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
          path.pop();
        }
      };

      var isSingleDot = function (segment) {
        return segment === '.' || segment.toLowerCase() === '%2e';
      };

      var isDoubleDot = function (segment) {
        segment = segment.toLowerCase();
        return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
      };

      // States:
      var SCHEME_START = {};
      var SCHEME = {};
      var NO_SCHEME = {};
      var SPECIAL_RELATIVE_OR_AUTHORITY = {};
      var PATH_OR_AUTHORITY = {};
      var RELATIVE = {};
      var RELATIVE_SLASH = {};
      var SPECIAL_AUTHORITY_SLASHES = {};
      var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
      var AUTHORITY = {};
      var HOST = {};
      var HOSTNAME = {};
      var PORT = {};
      var FILE = {};
      var FILE_SLASH = {};
      var FILE_HOST = {};
      var PATH_START = {};
      var PATH = {};
      var CANNOT_BE_A_BASE_URL_PATH = {};
      var QUERY = {};
      var FRAGMENT = {};

      // eslint-disable-next-line max-statements -- TODO
      var parseURL = function (url, input, stateOverride, base) {
        var state = stateOverride || SCHEME_START;
        var pointer = 0;
        var buffer = '';
        var seenAt = false;
        var seenBracket = false;
        var seenPasswordToken = false;
        var codePoints, char, bufferCodePoints, failure;

        if (!stateOverride) {
          url.scheme = '';
          url.username = '';
          url.password = '';
          url.host = null;
          url.port = null;
          url.path = [];
          url.query = null;
          url.fragment = null;
          url.cannotBeABaseURL = false;
          input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
        }

        input = input.replace(TAB_AND_NEW_LINE, '');

        codePoints = arrayFrom(input);

        while (pointer <= codePoints.length) {
          char = codePoints[pointer];
          switch (state) {
            case SCHEME_START:
              if (char && ALPHA.test(char)) {
                buffer += char.toLowerCase();
                state = SCHEME;
              } else if (!stateOverride) {
                state = NO_SCHEME;
                continue;
              } else return INVALID_SCHEME;
              break;

            case SCHEME:
              if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
                buffer += char.toLowerCase();
              } else if (char == ':') {
                if (stateOverride && (
                  (isSpecial(url) != has(specialSchemes, buffer)) ||
                  (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
                  (url.scheme == 'file' && !url.host)
                )) return;
                url.scheme = buffer;
                if (stateOverride) {
                  if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
                  return;
                }
                buffer = '';
                if (url.scheme == 'file') {
                  state = FILE;
                } else if (isSpecial(url) && base && base.scheme == url.scheme) {
                  state = SPECIAL_RELATIVE_OR_AUTHORITY;
                } else if (isSpecial(url)) {
                  state = SPECIAL_AUTHORITY_SLASHES;
                } else if (codePoints[pointer + 1] == '/') {
                  state = PATH_OR_AUTHORITY;
                  pointer++;
                } else {
                  url.cannotBeABaseURL = true;
                  url.path.push('');
                  state = CANNOT_BE_A_BASE_URL_PATH;
                }
              } else if (!stateOverride) {
                buffer = '';
                state = NO_SCHEME;
                pointer = 0;
                continue;
              } else return INVALID_SCHEME;
              break;

            case NO_SCHEME:
              if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
              if (base.cannotBeABaseURL && char == '#') {
                url.scheme = base.scheme;
                url.path = base.path.slice();
                url.query = base.query;
                url.fragment = '';
                url.cannotBeABaseURL = true;
                state = FRAGMENT;
                break;
              }
              state = base.scheme == 'file' ? FILE : RELATIVE;
              continue;

            case SPECIAL_RELATIVE_OR_AUTHORITY:
              if (char == '/' && codePoints[pointer + 1] == '/') {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                pointer++;
              } else {
                state = RELATIVE;
                continue;
              } break;

            case PATH_OR_AUTHORITY:
              if (char == '/') {
                state = AUTHORITY;
                break;
              } else {
                state = PATH;
                continue;
              }

            case RELATIVE:
              url.scheme = base.scheme;
              if (char == EOF) {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.query = base.query;
              } else if (char == '/' || (char == '\\' && isSpecial(url))) {
                state = RELATIVE_SLASH;
              } else if (char == '?') {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.query = '';
                state = QUERY;
              } else if (char == '#') {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.path.pop();
                state = PATH;
                continue;
              } break;

            case RELATIVE_SLASH:
              if (isSpecial(url) && (char == '/' || char == '\\')) {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              } else if (char == '/') {
                state = AUTHORITY;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                state = PATH;
                continue;
              } break;

            case SPECIAL_AUTHORITY_SLASHES:
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
              pointer++;
              break;

            case SPECIAL_AUTHORITY_IGNORE_SLASHES:
              if (char != '/' && char != '\\') {
                state = AUTHORITY;
                continue;
              } break;

            case AUTHORITY:
              if (char == '@') {
                if (seenAt) buffer = '%40' + buffer;
                seenAt = true;
                bufferCodePoints = arrayFrom(buffer);
                for (var i = 0; i < bufferCodePoints.length; i++) {
                  var codePoint = bufferCodePoints[i];
                  if (codePoint == ':' && !seenPasswordToken) {
                    seenPasswordToken = true;
                    continue;
                  }
                  var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                  if (seenPasswordToken) url.password += encodedCodePoints;
                  else url.username += encodedCodePoints;
                }
                buffer = '';
              } else if (
                char == EOF || char == '/' || char == '?' || char == '#' ||
                (char == '\\' && isSpecial(url))
              ) {
                if (seenAt && buffer == '') return INVALID_AUTHORITY;
                pointer -= arrayFrom(buffer).length + 1;
                buffer = '';
                state = HOST;
              } else buffer += char;
              break;

            case HOST:
            case HOSTNAME:
              if (stateOverride && url.scheme == 'file') {
                state = FILE_HOST;
                continue;
              } else if (char == ':' && !seenBracket) {
                if (buffer == '') return INVALID_HOST;
                failure = parseHost(url, buffer);
                if (failure) return failure;
                buffer = '';
                state = PORT;
                if (stateOverride == HOSTNAME) return;
              } else if (
                char == EOF || char == '/' || char == '?' || char == '#' ||
                (char == '\\' && isSpecial(url))
              ) {
                if (isSpecial(url) && buffer == '') return INVALID_HOST;
                if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
                failure = parseHost(url, buffer);
                if (failure) return failure;
                buffer = '';
                state = PATH_START;
                if (stateOverride) return;
                continue;
              } else {
                if (char == '[') seenBracket = true;
                else if (char == ']') seenBracket = false;
                buffer += char;
              } break;

            case PORT:
              if (DIGIT.test(char)) {
                buffer += char;
              } else if (
                char == EOF || char == '/' || char == '?' || char == '#' ||
                (char == '\\' && isSpecial(url)) ||
                stateOverride
              ) {
                if (buffer != '') {
                  var port = parseInt(buffer, 10);
                  if (port > 0xFFFF) return INVALID_PORT;
                  url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
                  buffer = '';
                }
                if (stateOverride) return;
                state = PATH_START;
                continue;
              } else return INVALID_PORT;
              break;

            case FILE:
              url.scheme = 'file';
              if (char == '/' || char == '\\') state = FILE_SLASH;
              else if (base && base.scheme == 'file') {
                if (char == EOF) {
                  url.host = base.host;
                  url.path = base.path.slice();
                  url.query = base.query;
                } else if (char == '?') {
                  url.host = base.host;
                  url.path = base.path.slice();
                  url.query = '';
                  state = QUERY;
                } else if (char == '#') {
                  url.host = base.host;
                  url.path = base.path.slice();
                  url.query = base.query;
                  url.fragment = '';
                  state = FRAGMENT;
                } else {
                  if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                    url.host = base.host;
                    url.path = base.path.slice();
                    shortenURLsPath(url);
                  }
                  state = PATH;
                  continue;
                }
              } else {
                state = PATH;
                continue;
              } break;

            case FILE_SLASH:
              if (char == '/' || char == '\\') {
                state = FILE_HOST;
                break;
              }
              if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
                else url.host = base.host;
              }
              state = PATH;
              continue;

            case FILE_HOST:
              if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
                if (!stateOverride && isWindowsDriveLetter(buffer)) {
                  state = PATH;
                } else if (buffer == '') {
                  url.host = '';
                  if (stateOverride) return;
                  state = PATH_START;
                } else {
                  failure = parseHost(url, buffer);
                  if (failure) return failure;
                  if (url.host == 'localhost') url.host = '';
                  if (stateOverride) return;
                  buffer = '';
                  state = PATH_START;
                } continue;
              } else buffer += char;
              break;

            case PATH_START:
              if (isSpecial(url)) {
                state = PATH;
                if (char != '/' && char != '\\') continue;
              } else if (!stateOverride && char == '?') {
                url.query = '';
                state = QUERY;
              } else if (!stateOverride && char == '#') {
                url.fragment = '';
                state = FRAGMENT;
              } else if (char != EOF) {
                state = PATH;
                if (char != '/') continue;
              } break;

            case PATH:
              if (
                char == EOF || char == '/' ||
                (char == '\\' && isSpecial(url)) ||
                (!stateOverride && (char == '?' || char == '#'))
              ) {
                if (isDoubleDot(buffer)) {
                  shortenURLsPath(url);
                  if (char != '/' && !(char == '\\' && isSpecial(url))) {
                    url.path.push('');
                  }
                } else if (isSingleDot(buffer)) {
                  if (char != '/' && !(char == '\\' && isSpecial(url))) {
                    url.path.push('');
                  }
                } else {
                  if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                    if (url.host) url.host = '';
                    buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
                  }
                  url.path.push(buffer);
                }
                buffer = '';
                if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
                  while (url.path.length > 1 && url.path[0] === '') {
                    url.path.shift();
                  }
                }
                if (char == '?') {
                  url.query = '';
                  state = QUERY;
                } else if (char == '#') {
                  url.fragment = '';
                  state = FRAGMENT;
                }
              } else {
                buffer += percentEncode(char, pathPercentEncodeSet);
              } break;

            case CANNOT_BE_A_BASE_URL_PATH:
              if (char == '?') {
                url.query = '';
                state = QUERY;
              } else if (char == '#') {
                url.fragment = '';
                state = FRAGMENT;
              } else if (char != EOF) {
                url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
              } break;

            case QUERY:
              if (!stateOverride && char == '#') {
                url.fragment = '';
                state = FRAGMENT;
              } else if (char != EOF) {
                if (char == "'" && isSpecial(url)) url.query += '%27';
                else if (char == '#') url.query += '%23';
                else url.query += percentEncode(char, C0ControlPercentEncodeSet);
              } break;

            case FRAGMENT:
              if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
              break;
          }

          pointer++;
        }
      };

      // `URL` constructor
      // https://url.spec.whatwg.org/#url-class
      var URLConstructor = function URL(url /* , base */) {
        var that = anInstance(this, URLConstructor, 'URL');
        var base = arguments.length > 1 ? arguments[1] : undefined;
        var urlString = String(url);
        var state = setInternalState(that, { type: 'URL' });
        var baseState, failure;
        if (base !== undefined) {
          if (base instanceof URLConstructor) baseState = getInternalURLState(base);
          else {
            failure = parseURL(baseState = {}, String(base));
            if (failure) throw TypeError(failure);
          }
        }
        failure = parseURL(state, urlString, null, baseState);
        if (failure) throw TypeError(failure);
        var searchParams = state.searchParams = new URLSearchParams();
        var searchParamsState = getInternalSearchParamsState(searchParams);
        searchParamsState.updateSearchParams(state.query);
        searchParamsState.updateURL = function () {
          state.query = String(searchParams) || null;
        };
        if (!DESCRIPTORS) {
          that.href = serializeURL.call(that);
          that.origin = getOrigin.call(that);
          that.protocol = getProtocol.call(that);
          that.username = getUsername.call(that);
          that.password = getPassword.call(that);
          that.host = getHost.call(that);
          that.hostname = getHostname.call(that);
          that.port = getPort.call(that);
          that.pathname = getPathname.call(that);
          that.search = getSearch.call(that);
          that.searchParams = getSearchParams.call(that);
          that.hash = getHash.call(that);
        }
      };

      var URLPrototype = URLConstructor.prototype;

      var serializeURL = function () {
        var url = getInternalURLState(this);
        var scheme = url.scheme;
        var username = url.username;
        var password = url.password;
        var host = url.host;
        var port = url.port;
        var path = url.path;
        var query = url.query;
        var fragment = url.fragment;
        var output = scheme + ':';
        if (host !== null) {
          output += '//';
          if (includesCredentials(url)) {
            output += username + (password ? ':' + password : '') + '@';
          }
          output += serializeHost(host);
          if (port !== null) output += ':' + port;
        } else if (scheme == 'file') output += '//';
        output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
        if (query !== null) output += '?' + query;
        if (fragment !== null) output += '#' + fragment;
        return output;
      };

      var getOrigin = function () {
        var url = getInternalURLState(this);
        var scheme = url.scheme;
        var port = url.port;
        if (scheme == 'blob') try {
          return new URL(scheme.path[0]).origin;
        } catch (error) {
          return 'null';
        }
        if (scheme == 'file' || !isSpecial(url)) return 'null';
        return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
      };

      var getProtocol = function () {
        return getInternalURLState(this).scheme + ':';
      };

      var getUsername = function () {
        return getInternalURLState(this).username;
      };

      var getPassword = function () {
        return getInternalURLState(this).password;
      };

      var getHost = function () {
        var url = getInternalURLState(this);
        var host = url.host;
        var port = url.port;
        return host === null ? ''
          : port === null ? serializeHost(host)
            : serializeHost(host) + ':' + port;
      };

      var getHostname = function () {
        var host = getInternalURLState(this).host;
        return host === null ? '' : serializeHost(host);
      };

      var getPort = function () {
        var port = getInternalURLState(this).port;
        return port === null ? '' : String(port);
      };

      var getPathname = function () {
        var url = getInternalURLState(this);
        var path = url.path;
        return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
      };

      var getSearch = function () {
        var query = getInternalURLState(this).query;
        return query ? '?' + query : '';
      };

      var getSearchParams = function () {
        return getInternalURLState(this).searchParams;
      };

      var getHash = function () {
        var fragment = getInternalURLState(this).fragment;
        return fragment ? '#' + fragment : '';
      };

      var accessorDescriptor = function (getter, setter) {
        return { get: getter, set: setter, configurable: true, enumerable: true };
      };

      if (DESCRIPTORS) {
        defineProperties(URLPrototype, {
          // `URL.prototype.href` accessors pair
          // https://url.spec.whatwg.org/#dom-url-href
          href: accessorDescriptor(serializeURL, function (href) {
            var url = getInternalURLState(this);
            var urlString = String(href);
            var failure = parseURL(url, urlString);
            if (failure) throw TypeError(failure);
            getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
          }),
          // `URL.prototype.origin` getter
          // https://url.spec.whatwg.org/#dom-url-origin
          origin: accessorDescriptor(getOrigin),
          // `URL.prototype.protocol` accessors pair
          // https://url.spec.whatwg.org/#dom-url-protocol
          protocol: accessorDescriptor(getProtocol, function (protocol) {
            var url = getInternalURLState(this);
            parseURL(url, String(protocol) + ':', SCHEME_START);
          }),
          // `URL.prototype.username` accessors pair
          // https://url.spec.whatwg.org/#dom-url-username
          username: accessorDescriptor(getUsername, function (username) {
            var url = getInternalURLState(this);
            var codePoints = arrayFrom(String(username));
            if (cannotHaveUsernamePasswordPort(url)) return;
            url.username = '';
            for (var i = 0; i < codePoints.length; i++) {
              url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
            }
          }),
          // `URL.prototype.password` accessors pair
          // https://url.spec.whatwg.org/#dom-url-password
          password: accessorDescriptor(getPassword, function (password) {
            var url = getInternalURLState(this);
            var codePoints = arrayFrom(String(password));
            if (cannotHaveUsernamePasswordPort(url)) return;
            url.password = '';
            for (var i = 0; i < codePoints.length; i++) {
              url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
            }
          }),
          // `URL.prototype.host` accessors pair
          // https://url.spec.whatwg.org/#dom-url-host
          host: accessorDescriptor(getHost, function (host) {
            var url = getInternalURLState(this);
            if (url.cannotBeABaseURL) return;
            parseURL(url, String(host), HOST);
          }),
          // `URL.prototype.hostname` accessors pair
          // https://url.spec.whatwg.org/#dom-url-hostname
          hostname: accessorDescriptor(getHostname, function (hostname) {
            var url = getInternalURLState(this);
            if (url.cannotBeABaseURL) return;
            parseURL(url, String(hostname), HOSTNAME);
          }),
          // `URL.prototype.port` accessors pair
          // https://url.spec.whatwg.org/#dom-url-port
          port: accessorDescriptor(getPort, function (port) {
            var url = getInternalURLState(this);
            if (cannotHaveUsernamePasswordPort(url)) return;
            port = String(port);
            if (port == '') url.port = null;
            else parseURL(url, port, PORT);
          }),
          // `URL.prototype.pathname` accessors pair
          // https://url.spec.whatwg.org/#dom-url-pathname
          pathname: accessorDescriptor(getPathname, function (pathname) {
            var url = getInternalURLState(this);
            if (url.cannotBeABaseURL) return;
            url.path = [];
            parseURL(url, pathname + '', PATH_START);
          }),
          // `URL.prototype.search` accessors pair
          // https://url.spec.whatwg.org/#dom-url-search
          search: accessorDescriptor(getSearch, function (search) {
            var url = getInternalURLState(this);
            search = String(search);
            if (search == '') {
              url.query = null;
            } else {
              if ('?' == search.charAt(0)) search = search.slice(1);
              url.query = '';
              parseURL(url, search, QUERY);
            }
            getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
          }),
          // `URL.prototype.searchParams` getter
          // https://url.spec.whatwg.org/#dom-url-searchparams
          searchParams: accessorDescriptor(getSearchParams),
          // `URL.prototype.hash` accessors pair
          // https://url.spec.whatwg.org/#dom-url-hash
          hash: accessorDescriptor(getHash, function (hash) {
            var url = getInternalURLState(this);
            hash = String(hash);
            if (hash == '') {
              url.fragment = null;
              return;
            }
            if ('#' == hash.charAt(0)) hash = hash.slice(1);
            url.fragment = '';
            parseURL(url, hash, FRAGMENT);
          })
        });
      }

      // `URL.prototype.toJSON` method
      // https://url.spec.whatwg.org/#dom-url-tojson
      redefine(URLPrototype, 'toJSON', function toJSON() {
        return serializeURL.call(this);
      }, { enumerable: true });

      // `URL.prototype.toString` method
      // https://url.spec.whatwg.org/#URL-stringification-behavior
      redefine(URLPrototype, 'toString', function toString() {
        return serializeURL.call(this);
      }, { enumerable: true });

      if (NativeURL) {
        var nativeCreateObjectURL = NativeURL.createObjectURL;
        var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
        // `URL.createObjectURL` method
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
          return nativeCreateObjectURL.apply(NativeURL, arguments);
        });
        // `URL.revokeObjectURL` method
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
          return nativeRevokeObjectURL.apply(NativeURL, arguments);
        });
      }

      setToStringTag(URLConstructor, 'URL');

      $({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
        URL: URLConstructor
      });


      /***/
}),
/* 205 */
/***/ (function (module, exports, __webpack_require__) {

      var anObject = __webpack_require__(9);
      var iteratorClose = __webpack_require__(101);

      // call something on iterator step with safe closing on error
      module.exports = function (iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
          // 7.4.6 IteratorClose(iterator, completion)
        } catch (error) {
          iteratorClose(iterator);
          throw error;
        }
      };


      /***/
}),
/* 206 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
      var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
      var base = 36;
      var tMin = 1;
      var tMax = 26;
      var skew = 38;
      var damp = 700;
      var initialBias = 72;
      var initialN = 128; // 0x80
      var delimiter = '-'; // '\x2D'
      var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
      var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
      var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
      var baseMinusTMin = base - tMin;
      var floor = Math.floor;
      var stringFromCharCode = String.fromCharCode;

      /**
       * Creates an array containing the numeric code points of each Unicode
       * character in the string. While JavaScript uses UCS-2 internally,
       * this function will convert a pair of surrogate halves (each of which
       * UCS-2 exposes as separate characters) into a single code point,
       * matching UTF-16.
       */
      var ucs2decode = function (string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        while (counter < length) {
          var value = string.charCodeAt(counter++);
          if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // It's a high surrogate, and there is a next character.
            var extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
              output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
              // It's an unmatched surrogate; only append this code unit, in case the
              // next code unit is the high surrogate of a surrogate pair.
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      };

      /**
       * Converts a digit/integer into a basic code point.
       */
      var digitToBasic = function (digit) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26);
      };

      /**
       * Bias adaptation function as per section 3.4 of RFC 3492.
       * https://tools.ietf.org/html/rfc3492#section-3.4
       */
      var adapt = function (delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      };

      /**
       * Converts a string of Unicode symbols (e.g. a domain name label) to a
       * Punycode string of ASCII-only symbols.
       */
      // eslint-disable-next-line max-statements -- TODO
      var encode = function (input) {
        var output = [];

        // Convert the input in UCS-2 to an array of Unicode code points.
        input = ucs2decode(input);

        // Cache the length.
        var inputLength = input.length;

        // Initialize the state.
        var n = initialN;
        var delta = 0;
        var bias = initialBias;
        var i, currentValue;

        // Handle the basic code points.
        for (i = 0; i < input.length; i++) {
          currentValue = input[i];
          if (currentValue < 0x80) {
            output.push(stringFromCharCode(currentValue));
          }
        }

        var basicLength = output.length; // number of basic code points.
        var handledCPCount = basicLength; // number of code points that have been handled;

        // Finish the basic string with a delimiter unless it's empty.
        if (basicLength) {
          output.push(delimiter);
        }

        // Main encoding loop:
        while (handledCPCount < inputLength) {
          // All non-basic code points < n have been handled already. Find the next larger one:
          var m = maxInt;
          for (i = 0; i < input.length; i++) {
            currentValue = input[i];
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }

          // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
          var handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            throw RangeError(OVERFLOW_ERROR);
          }

          delta += (m - n) * handledCPCountPlusOne;
          n = m;

          for (i = 0; i < input.length; i++) {
            currentValue = input[i];
            if (currentValue < n && ++delta > maxInt) {
              throw RangeError(OVERFLOW_ERROR);
            }
            if (currentValue == n) {
              // Represent delta as a generalized variable-length integer.
              var q = delta;
              for (var k = base; /* no condition */; k += base) {
                var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
                if (q < t) break;
                var qMinusT = q - t;
                var baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
                q = floor(qMinusT / baseMinusT);
              }

              output.push(stringFromCharCode(digitToBasic(q)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }

          ++delta;
          ++n;
        }
        return output.join('');
      };

      module.exports = function (input) {
        var encoded = [];
        var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
        var i, label;
        for (i = 0; i < labels.length; i++) {
          label = labels[i];
          encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
        }
        return encoded.join('.');
      };


      /***/
}),
/* 207 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
      __webpack_require__(44);
      var $ = __webpack_require__(6);
      var getBuiltIn = __webpack_require__(30);
      var USE_NATIVE_URL = __webpack_require__(153);
      var redefine = __webpack_require__(16);
      var redefineAll = __webpack_require__(73);
      var setToStringTag = __webpack_require__(33);
      var createIteratorConstructor = __webpack_require__(111);
      var InternalStateModule = __webpack_require__(23);
      var anInstance = __webpack_require__(41);
      var hasOwn = __webpack_require__(13);
      var bind = __webpack_require__(31);
      var classof = __webpack_require__(40);
      var anObject = __webpack_require__(9);
      var isObject = __webpack_require__(12);
      var create = __webpack_require__(38);
      var createPropertyDescriptor = __webpack_require__(27);
      var getIterator = __webpack_require__(208);
      var getIteratorMethod = __webpack_require__(43);
      var wellKnownSymbol = __webpack_require__(7);

      var $fetch = getBuiltIn('fetch');
      var Headers = getBuiltIn('Headers');
      var ITERATOR = wellKnownSymbol('iterator');
      var URL_SEARCH_PARAMS = 'URLSearchParams';
      var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
      var setInternalState = InternalStateModule.set;
      var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
      var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

      var plus = /\+/g;
      var sequences = Array(4);

      var percentSequence = function (bytes) {
        return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
      };

      var percentDecode = function (sequence) {
        try {
          return decodeURIComponent(sequence);
        } catch (error) {
          return sequence;
        }
      };

      var deserialize = function (it) {
        var result = it.replace(plus, ' ');
        var bytes = 4;
        try {
          return decodeURIComponent(result);
        } catch (error) {
          while (bytes) {
            result = result.replace(percentSequence(bytes--), percentDecode);
          }
          return result;
        }
      };

      var find = /[!'()~]|%20/g;

      var replace = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
      };

      var replacer = function (match) {
        return replace[match];
      };

      var serialize = function (it) {
        return encodeURIComponent(it).replace(find, replacer);
      };

      var parseSearchParams = function (result, query) {
        if (query) {
          var attributes = query.split('&');
          var index = 0;
          var attribute, entry;
          while (index < attributes.length) {
            attribute = attributes[index++];
            if (attribute.length) {
              entry = attribute.split('=');
              result.push({
                key: deserialize(entry.shift()),
                value: deserialize(entry.join('='))
              });
            }
          }
        }
      };

      var updateSearchParams = function (query) {
        this.entries.length = 0;
        parseSearchParams(this.entries, query);
      };

      var validateArgumentsLength = function (passed, required) {
        if (passed < required) throw TypeError('Not enough arguments');
      };

      var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
        setInternalState(this, {
          type: URL_SEARCH_PARAMS_ITERATOR,
          iterator: getIterator(getInternalParamsState(params).entries),
          kind: kind
        });
      }, 'Iterator', function next() {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var step = state.iterator.next();
        var entry = step.value;
        if (!step.done) {
          step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
        } return step;
      });

      // `URLSearchParams` constructor
      // https://url.spec.whatwg.org/#interface-urlsearchparams
      var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
        anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
        var init = arguments.length > 0 ? arguments[0] : undefined;
        var that = this;
        var entries = [];
        var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

        setInternalState(that, {
          type: URL_SEARCH_PARAMS,
          entries: entries,
          updateURL: function () { /* empty */ },
          updateSearchParams: updateSearchParams
        });

        if (init !== undefined) {
          if (isObject(init)) {
            iteratorMethod = getIteratorMethod(init);
            if (typeof iteratorMethod === 'function') {
              iterator = iteratorMethod.call(init);
              next = iterator.next;
              while (!(step = next.call(iterator)).done) {
                entryIterator = getIterator(anObject(step.value));
                entryNext = entryIterator.next;
                if (
                  (first = entryNext.call(entryIterator)).done ||
                  (second = entryNext.call(entryIterator)).done ||
                  !entryNext.call(entryIterator).done
                ) throw TypeError('Expected sequence with length 2');
                entries.push({ key: first.value + '', value: second.value + '' });
              }
            } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
          } else {
            parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
          }
        }
      };

      var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

      redefineAll(URLSearchParamsPrototype, {
        // `URLSearchParams.prototype.append` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-append
        append: function append(name, value) {
          validateArgumentsLength(arguments.length, 2);
          var state = getInternalParamsState(this);
          state.entries.push({ key: name + '', value: value + '' });
          state.updateURL();
        },
        // `URLSearchParams.prototype.delete` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
        'delete': function (name) {
          validateArgumentsLength(arguments.length, 1);
          var state = getInternalParamsState(this);
          var entries = state.entries;
          var key = name + '';
          var index = 0;
          while (index < entries.length) {
            if (entries[index].key === key) entries.splice(index, 1);
            else index++;
          }
          state.updateURL();
        },
        // `URLSearchParams.prototype.get` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-get
        get: function get(name) {
          validateArgumentsLength(arguments.length, 1);
          var entries = getInternalParamsState(this).entries;
          var key = name + '';
          var index = 0;
          for (; index < entries.length; index++) {
            if (entries[index].key === key) return entries[index].value;
          }
          return null;
        },
        // `URLSearchParams.prototype.getAll` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
        getAll: function getAll(name) {
          validateArgumentsLength(arguments.length, 1);
          var entries = getInternalParamsState(this).entries;
          var key = name + '';
          var result = [];
          var index = 0;
          for (; index < entries.length; index++) {
            if (entries[index].key === key) result.push(entries[index].value);
          }
          return result;
        },
        // `URLSearchParams.prototype.has` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-has
        has: function has(name) {
          validateArgumentsLength(arguments.length, 1);
          var entries = getInternalParamsState(this).entries;
          var key = name + '';
          var index = 0;
          while (index < entries.length) {
            if (entries[index++].key === key) return true;
          }
          return false;
        },
        // `URLSearchParams.prototype.set` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-set
        set: function set(name, value) {
          validateArgumentsLength(arguments.length, 1);
          var state = getInternalParamsState(this);
          var entries = state.entries;
          var found = false;
          var key = name + '';
          var val = value + '';
          var index = 0;
          var entry;
          for (; index < entries.length; index++) {
            entry = entries[index];
            if (entry.key === key) {
              if (found) entries.splice(index--, 1);
              else {
                found = true;
                entry.value = val;
              }
            }
          }
          if (!found) entries.push({ key: key, value: val });
          state.updateURL();
        },
        // `URLSearchParams.prototype.sort` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
        sort: function sort() {
          var state = getInternalParamsState(this);
          var entries = state.entries;
          // Array#sort is not stable in some engines
          var slice = entries.slice();
          var entry, entriesIndex, sliceIndex;
          entries.length = 0;
          for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
            entry = slice[sliceIndex];
            for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
              if (entries[entriesIndex].key > entry.key) {
                entries.splice(entriesIndex, 0, entry);
                break;
              }
            }
            if (entriesIndex === sliceIndex) entries.push(entry);
          }
          state.updateURL();
        },
        // `URLSearchParams.prototype.forEach` method
        forEach: function forEach(callback /* , thisArg */) {
          var entries = getInternalParamsState(this).entries;
          var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
          var index = 0;
          var entry;
          while (index < entries.length) {
            entry = entries[index++];
            boundFunction(entry.value, entry.key, this);
          }
        },
        // `URLSearchParams.prototype.keys` method
        keys: function keys() {
          return new URLSearchParamsIterator(this, 'keys');
        },
        // `URLSearchParams.prototype.values` method
        values: function values() {
          return new URLSearchParamsIterator(this, 'values');
        },
        // `URLSearchParams.prototype.entries` method
        entries: function entries() {
          return new URLSearchParamsIterator(this, 'entries');
        }
      }, { enumerable: true });

      // `URLSearchParams.prototype[@@iterator]` method
      redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

      // `URLSearchParams.prototype.toString` method
      // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
      redefine(URLSearchParamsPrototype, 'toString', function toString() {
        var entries = getInternalParamsState(this).entries;
        var result = [];
        var index = 0;
        var entry;
        while (index < entries.length) {
          entry = entries[index++];
          result.push(serialize(entry.key) + '=' + serialize(entry.value));
        } return result.join('&');
      }, { enumerable: true });

      setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

      $({ global: true, forced: !USE_NATIVE_URL }, {
        URLSearchParams: URLSearchParamsConstructor
      });

      // Wrap `fetch` for correct work with polyfilled `URLSearchParams`
      // https://github.com/zloirock/core-js/issues/674
      if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
        $({ global: true, enumerable: true, forced: true }, {
          fetch: function fetch(input /* , init */) {
            var args = [input];
            var init, body, headers;
            if (arguments.length > 1) {
              init = arguments[1];
              if (isObject(init)) {
                body = init.body;
                if (classof(body) === URL_SEARCH_PARAMS) {
                  headers = init.headers ? new Headers(init.headers) : new Headers();
                  if (!headers.has('content-type')) {
                    headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                  }
                  init = create(init, {
                    body: createPropertyDescriptor(0, String(body)),
                    headers: createPropertyDescriptor(0, headers)
                  });
                }
              }
              args.push(init);
            } return $fetch.apply(this, args);
          }
        });
      }

      module.exports = {
        URLSearchParams: URLSearchParamsConstructor,
        getState: getInternalParamsState
      };


      /***/
}),
/* 208 */
/***/ (function (module, exports, __webpack_require__) {

      var anObject = __webpack_require__(9);
      var getIteratorMethod = __webpack_require__(43);

      module.exports = function (it) {
        var iteratorMethod = getIteratorMethod(it);
        if (typeof iteratorMethod != 'function') {
          throw TypeError(String(it) + ' is not iterable');
        } return anObject(iteratorMethod.call(it));
      };


      /***/
}),
/* 209 */
/***/ (function (module, exports, __webpack_require__) {

      var isRegExp = __webpack_require__(84);

      module.exports = function (it) {
        if (isRegExp(it)) {
          throw TypeError("The method doesn't accept regular expressions");
        } return it;
      };


      /***/
}),
/* 210 */
/***/ (function (module, exports, __webpack_require__) {

      var wellKnownSymbol = __webpack_require__(7);

      var MATCH = wellKnownSymbol('match');

      module.exports = function (METHOD_NAME) {
        var regexp = /./;
        try {
          '/./'[METHOD_NAME](regexp);
        } catch (error1) {
          try {
            regexp[MATCH] = false;
            return '/./'[METHOD_NAME](regexp);
          } catch (error2) { /* empty */ }
        } return false;
      };


      /***/
}),
/* 211 */
/***/ (function (module, exports, __webpack_require__) {

      var DESCRIPTORS = __webpack_require__(11);
      var global = __webpack_require__(2);
      var isForced = __webpack_require__(67);
      var inheritIfRequired = __webpack_require__(128);
      var defineProperty = __webpack_require__(19).f;
      var getOwnPropertyNames = __webpack_require__(52).f;
      var isRegExp = __webpack_require__(84);
      var getFlags = __webpack_require__(81);
      var stickyHelpers = __webpack_require__(119);
      var redefine = __webpack_require__(16);
      var fails = __webpack_require__(3);
      var setInternalState = __webpack_require__(23).set;
      var setSpecies = __webpack_require__(74);
      var wellKnownSymbol = __webpack_require__(7);

      var MATCH = wellKnownSymbol('match');
      var NativeRegExp = global.RegExp;
      var RegExpPrototype = NativeRegExp.prototype;
      var re1 = /a/g;
      var re2 = /a/g;

      // "new" should create a new object, old webkit bug
      var CORRECT_NEW = new NativeRegExp(re1) !== re1;

      var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

      var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
        re2[MATCH] = false;
        // RegExp constructor can alter flags and IsRegExp works correct with @@match
        return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
      })));

      // `RegExp` constructor
      // https://tc39.es/ecma262/#sec-regexp-constructor
      if (FORCED) {
        var RegExpWrapper = function RegExp(pattern, flags) {
          var thisIsRegExp = this instanceof RegExpWrapper;
          var patternIsRegExp = isRegExp(pattern);
          var flagsAreUndefined = flags === undefined;
          var sticky;

          if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
            return pattern;
          }

          if (CORRECT_NEW) {
            if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
          } else if (pattern instanceof RegExpWrapper) {
            if (flagsAreUndefined) flags = getFlags.call(pattern);
            pattern = pattern.source;
          }

          if (UNSUPPORTED_Y) {
            sticky = !!flags && flags.indexOf('y') > -1;
            if (sticky) flags = flags.replace(/y/g, '');
          }

          var result = inheritIfRequired(
            CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
            thisIsRegExp ? this : RegExpPrototype,
            RegExpWrapper
          );

          if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

          return result;
        };
        var proxy = function (key) {
          key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
            configurable: true,
            get: function () { return NativeRegExp[key]; },
            set: function (it) { NativeRegExp[key] = it; }
          });
        };
        var keys = getOwnPropertyNames(NativeRegExp);
        var index = 0;
        while (keys.length > index) proxy(keys[index++]);
        RegExpPrototype.constructor = RegExpWrapper;
        RegExpWrapper.prototype = RegExpPrototype;
        redefine(global, 'RegExp', RegExpWrapper);
      }

      // https://tc39.es/ecma262/#sec-get-regexp-@@species
      setSpecies('RegExp');


      /***/
}),
/* 212 */
/***/ (function (module, exports) {

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      module.exports = _arrayWithHoles;

      /***/
}),
/* 213 */
/***/ (function (module, exports) {

      function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      module.exports = _iterableToArrayLimit;

      /***/
}),
/* 214 */
/***/ (function (module, exports, __webpack_require__) {

      var arrayLikeToArray = __webpack_require__(215);

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
      }

      module.exports = _unsupportedIterableToArray;

      /***/
}),
/* 215 */
/***/ (function (module, exports) {

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }

      module.exports = _arrayLikeToArray;

      /***/
}),
/* 216 */
/***/ (function (module, exports) {

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      module.exports = _nonIterableRest;

      /***/
}),
/* 217 */
/***/ (function (module, exports, __webpack_require__) {

      var $ = __webpack_require__(6);
      var from = __webpack_require__(154);
      var checkCorrectnessOfIteration = __webpack_require__(76);

      var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
        Array.from(iterable);
      });

      // `Array.from` method
      // https://tc39.es/ecma262/#sec-array.from
      $({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
        from: from
      });


      /***/
}),
/* 218 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      /** @license React v16.14.0
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var l = __webpack_require__(158), n = "function" === typeof Symbol && Symbol.for, p = n ? Symbol.for("react.element") : 60103, q = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, t = n ? Symbol.for("react.strict_mode") : 60108, u = n ? Symbol.for("react.profiler") : 60114, v = n ? Symbol.for("react.provider") : 60109, w = n ? Symbol.for("react.context") : 60110, x = n ? Symbol.for("react.forward_ref") : 60112, y = n ? Symbol.for("react.suspense") : 60113, z = n ? Symbol.for("react.memo") : 60115, A = n ? Symbol.for("react.lazy") :
        60116, B = "function" === typeof Symbol && Symbol.iterator; function C(a) { for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]); return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
      var D = { isMounted: function () { return !1 }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, E = {}; function F(a, b, c) { this.props = a; this.context = b; this.refs = E; this.updater = c || D } F.prototype.isReactComponent = {}; F.prototype.setState = function (a, b) { if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(C(85)); this.updater.enqueueSetState(this, a, b, "setState") }; F.prototype.forceUpdate = function (a) { this.updater.enqueueForceUpdate(this, a, "forceUpdate") };
      function G() { } G.prototype = F.prototype; function H(a, b, c) { this.props = a; this.context = b; this.refs = E; this.updater = c || D } var I = H.prototype = new G; I.constructor = H; l(I, F.prototype); I.isPureReactComponent = !0; var J = { current: null }, K = Object.prototype.hasOwnProperty, L = { key: !0, ref: !0, __self: !0, __source: !0 };
      function M(a, b, c) { var e, d = {}, g = null, k = null; if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]); var f = arguments.length - 2; if (1 === f) d.children = c; else if (1 < f) { for (var h = Array(f), m = 0; m < f; m++)h[m] = arguments[m + 2]; d.children = h } if (a && a.defaultProps) for (e in f = a.defaultProps, f) void 0 === d[e] && (d[e] = f[e]); return { $$typeof: p, type: a, key: g, ref: k, props: d, _owner: J.current } }
      function N(a, b) { return { $$typeof: p, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner } } function O(a) { return "object" === typeof a && null !== a && a.$$typeof === p } function escape(a) { var b = { "=": "=0", ":": "=2" }; return "$" + ("" + a).replace(/[=:]/g, function (a) { return b[a] }) } var P = /\/+/g, Q = []; function R(a, b, c, e) { if (Q.length) { var d = Q.pop(); d.result = a; d.keyPrefix = b; d.func = c; d.context = e; d.count = 0; return d } return { result: a, keyPrefix: b, func: c, context: e, count: 0 } }
      function S(a) { a.result = null; a.keyPrefix = null; a.func = null; a.context = null; a.count = 0; 10 > Q.length && Q.push(a) }
      function T(a, b, c, e) {
        var d = typeof a; if ("undefined" === d || "boolean" === d) a = null; var g = !1; if (null === a) g = !0; else switch (d) { case "string": case "number": g = !0; break; case "object": switch (a.$$typeof) { case p: case q: g = !0 } }if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1; g = 0; b = "" === b ? "." : b + ":"; if (Array.isArray(a)) for (var k = 0; k < a.length; k++) { d = a[k]; var f = b + U(d, k); g += T(d, f, c, e) } else if (null === a || "object" !== typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k =
          0; !(d = a.next()).done;)d = d.value, f = b + U(d, k++), g += T(d, f, c, e); else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, "")); return g
      } function V(a, b, c) { return null == a ? 0 : T(a, "", b, c) } function U(a, b) { return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36) } function W(a, b) { a.func.call(a.context, b, a.count++) }
      function aa(a, b, c) { var e = a.result, d = a.keyPrefix; a = a.func.call(a.context, b, a.count++); Array.isArray(a) ? X(a, e, c, function (a) { return a }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a)) } function X(a, b, c, e, d) { var g = ""; null != c && (g = ("" + c).replace(P, "$&/") + "/"); b = R(b, g, e, d); V(a, aa, b); S(b) } var Y = { current: null }; function Z() { var a = Y.current; if (null === a) throw Error(C(321)); return a }
      var ba = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: J, IsSomeRendererActing: { current: !1 }, assign: l }; exports.Children = { map: function (a, b, c) { if (null == a) return a; var e = []; X(a, e, null, b, c); return e }, forEach: function (a, b, c) { if (null == a) return a; b = R(null, null, b, c); V(a, W, b); S(b) }, count: function (a) { return V(a, function () { return null }, null) }, toArray: function (a) { var b = []; X(a, b, null, function (a) { return a }); return b }, only: function (a) { if (!O(a)) throw Error(C(143)); return a } };
      exports.Component = F; exports.Fragment = r; exports.Profiler = u; exports.PureComponent = H; exports.StrictMode = t; exports.Suspense = y; exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;
      exports.cloneElement = function (a, b, c) {
        if (null === a || void 0 === a) throw Error(C(267, a)); var e = l({}, a.props), d = a.key, g = a.ref, k = a._owner; if (null != b) { void 0 !== b.ref && (g = b.ref, k = J.current); void 0 !== b.key && (d = "" + b.key); if (a.type && a.type.defaultProps) var f = a.type.defaultProps; for (h in b) K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]) } var h = arguments.length - 2; if (1 === h) e.children = c; else if (1 < h) { f = Array(h); for (var m = 0; m < h; m++)f[m] = arguments[m + 2]; e.children = f } return {
          $$typeof: p, type: a.type,
          key: d, ref: g, props: e, _owner: k
        }
      }; exports.createContext = function (a, b) { void 0 === b && (b = null); a = { $$typeof: w, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null }; a.Provider = { $$typeof: v, _context: a }; return a.Consumer = a }; exports.createElement = M; exports.createFactory = function (a) { var b = M.bind(null, a); b.type = a; return b }; exports.createRef = function () { return { current: null } }; exports.forwardRef = function (a) { return { $$typeof: x, render: a } }; exports.isValidElement = O;
      exports.lazy = function (a) { return { $$typeof: A, _ctor: a, _status: -1, _result: null } }; exports.memo = function (a, b) { return { $$typeof: z, type: a, compare: void 0 === b ? null : b } }; exports.useCallback = function (a, b) { return Z().useCallback(a, b) }; exports.useContext = function (a, b) { return Z().useContext(a, b) }; exports.useDebugValue = function () { }; exports.useEffect = function (a, b) { return Z().useEffect(a, b) }; exports.useImperativeHandle = function (a, b, c) { return Z().useImperativeHandle(a, b, c) };
      exports.useLayoutEffect = function (a, b) { return Z().useLayoutEffect(a, b) }; exports.useMemo = function (a, b) { return Z().useMemo(a, b) }; exports.useReducer = function (a, b, c) { return Z().useReducer(a, b, c) }; exports.useRef = function (a) { return Z().useRef(a) }; exports.useState = function (a) { return Z().useState(a) }; exports.version = "16.14.0";


      /***/
}),
/* 219 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */



      var ReactPropTypesSecret = __webpack_require__(220);

      function emptyFunction() { }
      function emptyFunctionWithReset() { }
      emptyFunctionWithReset.resetWarningCache = emptyFunction;

      module.exports = function () {
        function shim(props, propName, componentName, location, propFullName, secret) {
          if (secret === ReactPropTypesSecret) {
            // It is still safe when called from React.
            return;
          }
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use PropTypes.checkPropTypes() to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        };
        shim.isRequired = shim;
        function getShim() {
          return shim;
        };
        // Important!
        // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
        var ReactPropTypes = {
          array: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,

          any: shim,
          arrayOf: getShim,
          element: shim,
          elementType: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim,

          checkPropTypes: emptyFunctionWithReset,
          resetWarningCache: emptyFunction
        };

        ReactPropTypes.PropTypes = ReactPropTypes;

        return ReactPropTypes;
      };


      /***/
}),
/* 220 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */



      var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

      module.exports = ReactPropTypesSecret;


      /***/
}),
/* 221 */
/***/ (function (module, exports, __webpack_require__) {

      var root = __webpack_require__(160);

      /**
       * Gets the timestamp of the number of milliseconds that have elapsed since
       * the Unix epoch (1 January 1970 00:00:00 UTC).
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Date
       * @returns {number} Returns the timestamp.
       * @example
       *
       * _.defer(function(stamp) {
       *   console.log(_.now() - stamp);
       * }, _.now());
       * // => Logs the number of milliseconds it took for the deferred invocation.
       */
      var now = function () {
        return root.Date.now();
      };

      module.exports = now;


      /***/
}),
/* 222 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (global) {/** Detect free variable `global` from Node.js. */
        var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

        module.exports = freeGlobal;

        /* WEBPACK VAR INJECTION */
}.call(this, __webpack_require__(48)))

      /***/
}),
/* 223 */
/***/ (function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(159),
        isSymbol = __webpack_require__(224);

      /** Used as references for various `Number` constants. */
      var NAN = 0 / 0;

      /** Used to match leading and trailing whitespace. */
      var reTrim = /^\s+|\s+$/g;

      /** Used to detect bad signed hexadecimal string values. */
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

      /** Used to detect binary string values. */
      var reIsBinary = /^0b[01]+$/i;

      /** Used to detect octal string values. */
      var reIsOctal = /^0o[0-7]+$/i;

      /** Built-in method references without a dependency on `root`. */
      var freeParseInt = parseInt;

      /**
       * Converts `value` to a number.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to process.
       * @returns {number} Returns the number.
       * @example
       *
       * _.toNumber(3.2);
       * // => 3.2
       *
       * _.toNumber(Number.MIN_VALUE);
       * // => 5e-324
       *
       * _.toNumber(Infinity);
       * // => Infinity
       *
       * _.toNumber('3.2');
       * // => 3.2
       */
      function toNumber(value) {
        if (typeof value == 'number') {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
          value = isObject(other) ? (other + '') : other;
        }
        if (typeof value != 'string') {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, '');
        var isBinary = reIsBinary.test(value);
        return (isBinary || reIsOctal.test(value))
          ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
          : (reIsBadHex.test(value) ? NAN : +value);
      }

      module.exports = toNumber;


      /***/
}),
/* 224 */
/***/ (function (module, exports, __webpack_require__) {

      var baseGetTag = __webpack_require__(225),
        isObjectLike = __webpack_require__(228);

      /** `Object#toString` result references. */
      var symbolTag = '[object Symbol]';

      /**
       * Checks if `value` is classified as a `Symbol` primitive or object.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
       * @example
       *
       * _.isSymbol(Symbol.iterator);
       * // => true
       *
       * _.isSymbol('abc');
       * // => false
       */
      function isSymbol(value) {
        return typeof value == 'symbol' ||
          (isObjectLike(value) && baseGetTag(value) == symbolTag);
      }

      module.exports = isSymbol;


      /***/
}),
/* 225 */
/***/ (function (module, exports, __webpack_require__) {

      var Symbol = __webpack_require__(161),
        getRawTag = __webpack_require__(226),
        objectToString = __webpack_require__(227);

      /** `Object#toString` result references. */
      var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';

      /** Built-in value references. */
      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      /**
       * The base implementation of `getTag` without fallbacks for buggy environments.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the `toStringTag`.
       */
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }
        return (symToStringTag && symToStringTag in Object(value))
          ? getRawTag(value)
          : objectToString(value);
      }

      module.exports = baseGetTag;


      /***/
}),
/* 226 */
/***/ (function (module, exports, __webpack_require__) {

      var Symbol = __webpack_require__(161);

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */
      var nativeObjectToString = objectProto.toString;

      /** Built-in value references. */
      var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      /**
       * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the raw `toStringTag`.
       */
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) { }

        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }

      module.exports = getRawTag;


      /***/
}),
/* 227 */
/***/ (function (module, exports) {

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */
      var nativeObjectToString = objectProto.toString;

      /**
       * Converts `value` to a string using `Object.prototype.toString`.
       *
       * @private
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       */
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }

      module.exports = objectToString;


      /***/
}),
/* 228 */
/***/ (function (module, exports) {

      /**
       * Checks if `value` is object-like. A value is object-like if it's not `null`
       * and has a `typeof` result of "object".
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
       * @example
       *
       * _.isObjectLike({});
       * // => true
       *
       * _.isObjectLike([1, 2, 3]);
       * // => true
       *
       * _.isObjectLike(_.noop);
       * // => false
       *
       * _.isObjectLike(null);
       * // => false
       */
      function isObjectLike(value) {
        return value != null && typeof value == 'object';
      }

      module.exports = isObjectLike;


      /***/
}),
/* 229 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      var $ = __webpack_require__(6);
      var $indexOf = __webpack_require__(36).indexOf;
      var arrayMethodIsStrict = __webpack_require__(39);

      var nativeIndexOf = [].indexOf;

      var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict('indexOf');

      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      $({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
        indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
          return NEGATIVE_ZERO
            // convert -0 to +0
            ? nativeIndexOf.apply(this, arguments) || 0
            : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
        }
      });


      /***/
}),
/* 230 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names
      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names


        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)


      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        return "/*# ".concat(data, " */");
      }

      /***/
}),
/* 231 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      /** @license React v16.14.0
       * react-dom.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      /*
       Modernizr 3.0.0pre (Custom Build) | MIT
      */
      var aa = __webpack_require__(0), n = __webpack_require__(158), r = __webpack_require__(232); function u(a) { for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]); return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } if (!aa) throw Error(u(227));
      function ba(a, b, c, d, e, f, g, h, k) { var l = Array.prototype.slice.call(arguments, 3); try { b.apply(c, l) } catch (m) { this.onError(m) } } var da = !1, ea = null, fa = !1, ha = null, ia = { onError: function (a) { da = !0; ea = a } }; function ja(a, b, c, d, e, f, g, h, k) { da = !1; ea = null; ba.apply(ia, arguments) } function ka(a, b, c, d, e, f, g, h, k) { ja.apply(this, arguments); if (da) { if (da) { var l = ea; da = !1; ea = null } else throw Error(u(198)); fa || (fa = !0, ha = l) } } var la = null, ma = null, na = null;
      function oa(a, b, c) { var d = a.type || "unknown-event"; a.currentTarget = na(c); ka(d, b, void 0, a); a.currentTarget = null } var pa = null, qa = {};
      function ra() { if (pa) for (var a in qa) { var b = qa[a], c = pa.indexOf(a); if (!(-1 < c)) throw Error(u(96, a)); if (!sa[c]) { if (!b.extractEvents) throw Error(u(97, a)); sa[c] = b; c = b.eventTypes; for (var d in c) { var e = void 0; var f = c[d], g = b, h = d; if (ta.hasOwnProperty(h)) throw Error(u(99, h)); ta[h] = f; var k = f.phasedRegistrationNames; if (k) { for (e in k) k.hasOwnProperty(e) && ua(k[e], g, h); e = !0 } else f.registrationName ? (ua(f.registrationName, g, h), e = !0) : e = !1; if (!e) throw Error(u(98, d, a)); } } } }
      function ua(a, b, c) { if (va[a]) throw Error(u(100, a)); va[a] = b; wa[a] = b.eventTypes[c].dependencies } var sa = [], ta = {}, va = {}, wa = {}; function xa(a) { var b = !1, c; for (c in a) if (a.hasOwnProperty(c)) { var d = a[c]; if (!qa.hasOwnProperty(c) || qa[c] !== d) { if (qa[c]) throw Error(u(102, c)); qa[c] = d; b = !0 } } b && ra() } var ya = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), za = null, Aa = null, Ba = null;
      function Ca(a) { if (a = ma(a)) { if ("function" !== typeof za) throw Error(u(280)); var b = a.stateNode; b && (b = la(b), za(a.stateNode, a.type, b)) } } function Da(a) { Aa ? Ba ? Ba.push(a) : Ba = [a] : Aa = a } function Ea() { if (Aa) { var a = Aa, b = Ba; Ba = Aa = null; Ca(a); if (b) for (a = 0; a < b.length; a++)Ca(b[a]) } } function Fa(a, b) { return a(b) } function Ga(a, b, c, d, e) { return a(b, c, d, e) } function Ha() { } var Ia = Fa, Ja = !1, Ka = !1; function La() { if (null !== Aa || null !== Ba) Ha(), Ea() }
      function Ma(a, b, c) { if (Ka) return a(b, c); Ka = !0; try { return Ia(a, b, c) } finally { Ka = !1, La() } } var Na = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oa = Object.prototype.hasOwnProperty, Pa = {}, Qa = {};
      function Ra(a) { if (Oa.call(Qa, a)) return !0; if (Oa.call(Pa, a)) return !1; if (Na.test(a)) return Qa[a] = !0; Pa[a] = !0; return !1 } function Sa(a, b, c, d) { if (null !== c && 0 === c.type) return !1; switch (typeof b) { case "function": case "symbol": return !0; case "boolean": if (d) return !1; if (null !== c) return !c.acceptsBooleans; a = a.toLowerCase().slice(0, 5); return "data-" !== a && "aria-" !== a; default: return !1 } }
      function Ta(a, b, c, d) { if (null === b || "undefined" === typeof b || Sa(a, b, c, d)) return !0; if (d) return !1; if (null !== c) switch (c.type) { case 3: return !b; case 4: return !1 === b; case 5: return isNaN(b); case 6: return isNaN(b) || 1 > b }return !1 } function v(a, b, c, d, e, f) { this.acceptsBooleans = 2 === b || 3 === b || 4 === b; this.attributeName = d; this.attributeNamespace = e; this.mustUseProperty = c; this.propertyName = a; this.type = b; this.sanitizeURL = f } var C = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) { C[a] = new v(a, 0, !1, a, null, !1) });[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) { var b = a[0]; C[b] = new v(b, 1, !1, a[1], null, !1) });["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) { C[a] = new v(a, 2, !1, a.toLowerCase(), null, !1) });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) { C[a] = new v(a, 2, !1, a, null, !1) }); "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) { C[a] = new v(a, 3, !1, a.toLowerCase(), null, !1) });
      ["checked", "multiple", "muted", "selected"].forEach(function (a) { C[a] = new v(a, 3, !0, a, null, !1) });["capture", "download"].forEach(function (a) { C[a] = new v(a, 4, !1, a, null, !1) });["cols", "rows", "size", "span"].forEach(function (a) { C[a] = new v(a, 6, !1, a, null, !1) });["rowSpan", "start"].forEach(function (a) { C[a] = new v(a, 5, !1, a.toLowerCase(), null, !1) }); var Ua = /[\-:]([a-z])/g; function Va(a) { return a[1].toUpperCase() }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
        var b = a.replace(Ua,
          Va); C[b] = new v(b, 1, !1, a, null, !1)
      }); "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) { var b = a.replace(Ua, Va); C[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1) });["xml:base", "xml:lang", "xml:space"].forEach(function (a) { var b = a.replace(Ua, Va); C[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1) });["tabIndex", "crossOrigin"].forEach(function (a) { C[a] = new v(a, 1, !1, a.toLowerCase(), null, !1) });
      C.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);["src", "href", "action", "formAction"].forEach(function (a) { C[a] = new v(a, 1, !1, a.toLowerCase(), null, !0) }); var Wa = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; Wa.hasOwnProperty("ReactCurrentDispatcher") || (Wa.ReactCurrentDispatcher = { current: null }); Wa.hasOwnProperty("ReactCurrentBatchConfig") || (Wa.ReactCurrentBatchConfig = { suspense: null });
      function Xa(a, b, c, d) { var e = C.hasOwnProperty(b) ? C[b] : null; var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0; f || (Ta(b, c, e, d) && (c = null), d || null === e ? Ra(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)))) }
      var Ya = /^(.*)[\\\/]/, E = "function" === typeof Symbol && Symbol.for, Za = E ? Symbol.for("react.element") : 60103, $a = E ? Symbol.for("react.portal") : 60106, ab = E ? Symbol.for("react.fragment") : 60107, bb = E ? Symbol.for("react.strict_mode") : 60108, cb = E ? Symbol.for("react.profiler") : 60114, db = E ? Symbol.for("react.provider") : 60109, eb = E ? Symbol.for("react.context") : 60110, fb = E ? Symbol.for("react.concurrent_mode") : 60111, gb = E ? Symbol.for("react.forward_ref") : 60112, hb = E ? Symbol.for("react.suspense") : 60113, ib = E ? Symbol.for("react.suspense_list") :
        60120, jb = E ? Symbol.for("react.memo") : 60115, kb = E ? Symbol.for("react.lazy") : 60116, lb = E ? Symbol.for("react.block") : 60121, mb = "function" === typeof Symbol && Symbol.iterator; function nb(a) { if (null === a || "object" !== typeof a) return null; a = mb && a[mb] || a["@@iterator"]; return "function" === typeof a ? a : null } function ob(a) { if (-1 === a._status) { a._status = 0; var b = a._ctor; b = b(); a._result = b; b.then(function (b) { 0 === a._status && (b = b.default, a._status = 1, a._result = b) }, function (b) { 0 === a._status && (a._status = 2, a._result = b) }) } }
      function pb(a) {
        if (null == a) return null; if ("function" === typeof a) return a.displayName || a.name || null; if ("string" === typeof a) return a; switch (a) { case ab: return "Fragment"; case $a: return "Portal"; case cb: return "Profiler"; case bb: return "StrictMode"; case hb: return "Suspense"; case ib: return "SuspenseList" }if ("object" === typeof a) switch (a.$$typeof) {
          case eb: return "Context.Consumer"; case db: return "Context.Provider"; case gb: var b = a.render; b = b.displayName || b.name || ""; return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" :
            "ForwardRef"); case jb: return pb(a.type); case lb: return pb(a.render); case kb: if (a = 1 === a._status ? a._result : null) return pb(a)
        }return null
      } function qb(a) { var b = ""; do { a: switch (a.tag) { case 3: case 4: case 6: case 7: case 10: case 9: var c = ""; break a; default: var d = a._debugOwner, e = a._debugSource, f = pb(a.type); c = null; d && (c = pb(d.type)); d = f; f = ""; e ? f = " (at " + e.fileName.replace(Ya, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")"); c = "\n    in " + (d || "Unknown") + f }b += c; a = a.return } while (a); return b }
      function rb(a) { switch (typeof a) { case "boolean": case "number": case "object": case "string": case "undefined": return a; default: return "" } } function sb(a) { var b = a.type; return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b) }
      function tb(a) {
        var b = sb(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b]; if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e = c.get, f = c.set; Object.defineProperty(a, b, { configurable: !0, get: function () { return e.call(this) }, set: function (a) { d = "" + a; f.call(this, a) } }); Object.defineProperty(a, b, { enumerable: c.enumerable }); return {
            getValue: function () { return d }, setValue: function (a) { d = "" + a }, stopTracking: function () {
              a._valueTracker =
              null; delete a[b]
            }
          }
        }
      } function xb(a) { a._valueTracker || (a._valueTracker = tb(a)) } function yb(a) { if (!a) return !1; var b = a._valueTracker; if (!b) return !0; var c = b.getValue(); var d = ""; a && (d = sb(a) ? a.checked ? "true" : "false" : a.value); a = d; return a !== c ? (b.setValue(a), !0) : !1 } function zb(a, b) { var c = b.checked; return n({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked }) }
      function Ab(a, b) { var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked; c = rb(null != b.value ? b.value : c); a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value } } function Bb(a, b) { b = b.checked; null != b && Xa(a, "checked", b, !1) }
      function Cb(a, b) { Bb(a, b); var c = rb(b.value), d = b.type; if (null != c) if ("number" === d) { if (0 === c && "" === a.value || a.value != c) a.value = "" + c } else a.value !== "" + c && (a.value = "" + c); else if ("submit" === d || "reset" === d) { a.removeAttribute("value"); return } b.hasOwnProperty("value") ? Db(a, b.type, c) : b.hasOwnProperty("defaultValue") && Db(a, b.type, rb(b.defaultValue)); null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked) }
      function Eb(a, b, c) { if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) { var d = b.type; if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return; b = "" + a._wrapperState.initialValue; c || b === a.value || (a.value = b); a.defaultValue = b } c = a.name; "" !== c && (a.name = ""); a.defaultChecked = !!a._wrapperState.initialChecked; "" !== c && (a.name = c) }
      function Db(a, b, c) { if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c) } function Fb(a) { var b = ""; aa.Children.forEach(a, function (a) { null != a && (b += a) }); return b } function Gb(a, b) { a = n({ children: void 0 }, b); if (b = Fb(b.children)) a.children = b; return a }
      function Hb(a, b, c, d) { a = a.options; if (b) { b = {}; for (var e = 0; e < c.length; e++)b["$" + c[e]] = !0; for (c = 0; c < a.length; c++)e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0) } else { c = "" + rb(c); b = null; for (e = 0; e < a.length; e++) { if (a[e].value === c) { a[e].selected = !0; d && (a[e].defaultSelected = !0); return } null !== b || a[e].disabled || (b = a[e]) } null !== b && (b.selected = !0) } }
      function Ib(a, b) { if (null != b.dangerouslySetInnerHTML) throw Error(u(91)); return n({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue }) } function Jb(a, b) { var c = b.value; if (null == c) { c = b.children; b = b.defaultValue; if (null != c) { if (null != b) throw Error(u(92)); if (Array.isArray(c)) { if (!(1 >= c.length)) throw Error(u(93)); c = c[0] } b = c } null == b && (b = ""); c = b } a._wrapperState = { initialValue: rb(c) } }
      function Kb(a, b) { var c = rb(b.value), d = rb(b.defaultValue); null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c)); null != d && (a.defaultValue = "" + d) } function Lb(a) { var b = a.textContent; b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b) } var Mb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
      function Nb(a) { switch (a) { case "svg": return "http://www.w3.org/2000/svg"; case "math": return "http://www.w3.org/1998/Math/MathML"; default: return "http://www.w3.org/1999/xhtml" } } function Ob(a, b) { return null == a || "http://www.w3.org/1999/xhtml" === a ? Nb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a }
      var Pb, Qb = function (a) { return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) { MSApp.execUnsafeLocalFunction(function () { return a(b, c, d, e) }) } : a }(function (a, b) { if (a.namespaceURI !== Mb.svg || "innerHTML" in a) a.innerHTML = b; else { Pb = Pb || document.createElement("div"); Pb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>"; for (b = Pb.firstChild; a.firstChild;)a.removeChild(a.firstChild); for (; b.firstChild;)a.appendChild(b.firstChild) } });
      function Rb(a, b) { if (b) { var c = a.firstChild; if (c && c === a.lastChild && 3 === c.nodeType) { c.nodeValue = b; return } } a.textContent = b } function Sb(a, b) { var c = {}; c[a.toLowerCase()] = b.toLowerCase(); c["Webkit" + a] = "webkit" + b; c["Moz" + a] = "moz" + b; return c } var Tb = { animationend: Sb("Animation", "AnimationEnd"), animationiteration: Sb("Animation", "AnimationIteration"), animationstart: Sb("Animation", "AnimationStart"), transitionend: Sb("Transition", "TransitionEnd") }, Ub = {}, Vb = {};
      ya && (Vb = document.createElement("div").style, "AnimationEvent" in window || (delete Tb.animationend.animation, delete Tb.animationiteration.animation, delete Tb.animationstart.animation), "TransitionEvent" in window || delete Tb.transitionend.transition); function Wb(a) { if (Ub[a]) return Ub[a]; if (!Tb[a]) return a; var b = Tb[a], c; for (c in b) if (b.hasOwnProperty(c) && c in Vb) return Ub[a] = b[c]; return a }
      var Xb = Wb("animationend"), Yb = Wb("animationiteration"), Zb = Wb("animationstart"), $b = Wb("transitionend"), ac = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bc = new ("function" === typeof WeakMap ? WeakMap : Map); function cc(a) { var b = bc.get(a); void 0 === b && (b = new Map, bc.set(a, b)); return b }
      function dc(a) { var b = a, c = a; if (a.alternate) for (; b.return;)b = b.return; else { a = b; do b = a, 0 !== (b.effectTag & 1026) && (c = b.return), a = b.return; while (a) } return 3 === b.tag ? c : null } function ec(a) { if (13 === a.tag) { var b = a.memoizedState; null === b && (a = a.alternate, null !== a && (b = a.memoizedState)); if (null !== b) return b.dehydrated } return null } function fc(a) { if (dc(a) !== a) throw Error(u(188)); }
      function gc(a) {
        var b = a.alternate; if (!b) { b = dc(a); if (null === b) throw Error(u(188)); return b !== a ? null : a } for (var c = a, d = b; ;) {
          var e = c.return; if (null === e) break; var f = e.alternate; if (null === f) { d = e.return; if (null !== d) { c = d; continue } break } if (e.child === f.child) { for (f = e.child; f;) { if (f === c) return fc(e), a; if (f === d) return fc(e), b; f = f.sibling } throw Error(u(188)); } if (c.return !== d.return) c = e, d = f; else {
            for (var g = !1, h = e.child; h;) { if (h === c) { g = !0; c = e; d = f; break } if (h === d) { g = !0; d = e; c = f; break } h = h.sibling } if (!g) {
              for (h = f.child; h;) {
                if (h ===
                  c) { g = !0; c = f; d = e; break } if (h === d) { g = !0; d = f; c = e; break } h = h.sibling
              } if (!g) throw Error(u(189));
            }
          } if (c.alternate !== d) throw Error(u(190));
        } if (3 !== c.tag) throw Error(u(188)); return c.stateNode.current === c ? a : b
      } function hc(a) { a = gc(a); if (!a) return null; for (var b = a; ;) { if (5 === b.tag || 6 === b.tag) return b; if (b.child) b.child.return = b, b = b.child; else { if (b === a) break; for (; !b.sibling;) { if (!b.return || b.return === a) return null; b = b.return } b.sibling.return = b.return; b = b.sibling } } return null }
      function ic(a, b) { if (null == b) throw Error(u(30)); if (null == a) return b; if (Array.isArray(a)) { if (Array.isArray(b)) return a.push.apply(a, b), a; a.push(b); return a } return Array.isArray(b) ? [a].concat(b) : [a, b] } function jc(a, b, c) { Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a) } var kc = null;
      function lc(a) { if (a) { var b = a._dispatchListeners, c = a._dispatchInstances; if (Array.isArray(b)) for (var d = 0; d < b.length && !a.isPropagationStopped(); d++)oa(a, b[d], c[d]); else b && oa(a, b, c); a._dispatchListeners = null; a._dispatchInstances = null; a.isPersistent() || a.constructor.release(a) } } function mc(a) { null !== a && (kc = ic(kc, a)); a = kc; kc = null; if (a) { jc(a, lc); if (kc) throw Error(u(95)); if (fa) throw a = ha, fa = !1, ha = null, a; } }
      function nc(a) { a = a.target || a.srcElement || window; a.correspondingUseElement && (a = a.correspondingUseElement); return 3 === a.nodeType ? a.parentNode : a } function oc(a) { if (!ya) return !1; a = "on" + a; var b = a in document; b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]); return b } var pc = []; function qc(a) { a.topLevelType = null; a.nativeEvent = null; a.targetInst = null; a.ancestors.length = 0; 10 > pc.length && pc.push(a) }
      function rc(a, b, c, d) { if (pc.length) { var e = pc.pop(); e.topLevelType = a; e.eventSystemFlags = d; e.nativeEvent = b; e.targetInst = c; return e } return { topLevelType: a, eventSystemFlags: d, nativeEvent: b, targetInst: c, ancestors: [] } }
      function sc(a) {
        var b = a.targetInst, c = b; do { if (!c) { a.ancestors.push(c); break } var d = c; if (3 === d.tag) d = d.stateNode.containerInfo; else { for (; d.return;)d = d.return; d = 3 !== d.tag ? null : d.stateNode.containerInfo } if (!d) break; b = c.tag; 5 !== b && 6 !== b || a.ancestors.push(c); c = tc(d) } while (c); for (c = 0; c < a.ancestors.length; c++) {
          b = a.ancestors[c]; var e = nc(a.nativeEvent); d = a.topLevelType; var f = a.nativeEvent, g = a.eventSystemFlags; 0 === c && (g |= 64); for (var h = null, k = 0; k < sa.length; k++) {
            var l = sa[k]; l && (l = l.extractEvents(d, b, f, e, g)) && (h =
              ic(h, l))
          } mc(h)
        }
      } function uc(a, b, c) { if (!c.has(a)) { switch (a) { case "scroll": vc(b, "scroll", !0); break; case "focus": case "blur": vc(b, "focus", !0); vc(b, "blur", !0); c.set("blur", null); c.set("focus", null); break; case "cancel": case "close": oc(a) && vc(b, a, !0); break; case "invalid": case "submit": case "reset": break; default: -1 === ac.indexOf(a) && F(a, b) }c.set(a, null) } }
      var wc, xc, yc, zc = !1, Ac = [], Bc = null, Cc = null, Dc = null, Ec = new Map, Fc = new Map, Gc = [], Hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "), Ic = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
      function Jc(a, b) { var c = cc(b); Hc.forEach(function (a) { uc(a, b, c) }); Ic.forEach(function (a) { uc(a, b, c) }) } function Kc(a, b, c, d, e) { return { blockedOn: a, topLevelType: b, eventSystemFlags: c | 32, nativeEvent: e, container: d } }
      function Lc(a, b) { switch (a) { case "focus": case "blur": Bc = null; break; case "dragenter": case "dragleave": Cc = null; break; case "mouseover": case "mouseout": Dc = null; break; case "pointerover": case "pointerout": Ec.delete(b.pointerId); break; case "gotpointercapture": case "lostpointercapture": Fc.delete(b.pointerId) } } function Mc(a, b, c, d, e, f) { if (null === a || a.nativeEvent !== f) return a = Kc(b, c, d, e, f), null !== b && (b = Nc(b), null !== b && xc(b)), a; a.eventSystemFlags |= d; return a }
      function Oc(a, b, c, d, e) { switch (b) { case "focus": return Bc = Mc(Bc, a, b, c, d, e), !0; case "dragenter": return Cc = Mc(Cc, a, b, c, d, e), !0; case "mouseover": return Dc = Mc(Dc, a, b, c, d, e), !0; case "pointerover": var f = e.pointerId; Ec.set(f, Mc(Ec.get(f) || null, a, b, c, d, e)); return !0; case "gotpointercapture": return f = e.pointerId, Fc.set(f, Mc(Fc.get(f) || null, a, b, c, d, e)), !0 }return !1 }
      function Pc(a) { var b = tc(a.target); if (null !== b) { var c = dc(b); if (null !== c) if (b = c.tag, 13 === b) { if (b = ec(c), null !== b) { a.blockedOn = b; r.unstable_runWithPriority(a.priority, function () { yc(c) }); return } } else if (3 === b && c.stateNode.hydrate) { a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null; return } } a.blockedOn = null } function Qc(a) { if (null !== a.blockedOn) return !1; var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent); if (null !== b) { var c = Nc(b); null !== c && xc(c); a.blockedOn = b; return !1 } return !0 }
      function Sc(a, b, c) { Qc(a) && c.delete(b) } function Tc() { for (zc = !1; 0 < Ac.length;) { var a = Ac[0]; if (null !== a.blockedOn) { a = Nc(a.blockedOn); null !== a && wc(a); break } var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent); null !== b ? a.blockedOn = b : Ac.shift() } null !== Bc && Qc(Bc) && (Bc = null); null !== Cc && Qc(Cc) && (Cc = null); null !== Dc && Qc(Dc) && (Dc = null); Ec.forEach(Sc); Fc.forEach(Sc) } function Uc(a, b) { a.blockedOn === b && (a.blockedOn = null, zc || (zc = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Tc))) }
      function Vc(a) { function b(b) { return Uc(b, a) } if (0 < Ac.length) { Uc(Ac[0], a); for (var c = 1; c < Ac.length; c++) { var d = Ac[c]; d.blockedOn === a && (d.blockedOn = null) } } null !== Bc && Uc(Bc, a); null !== Cc && Uc(Cc, a); null !== Dc && Uc(Dc, a); Ec.forEach(b); Fc.forEach(b); for (c = 0; c < Gc.length; c++)d = Gc[c], d.blockedOn === a && (d.blockedOn = null); for (; 0 < Gc.length && (c = Gc[0], null === c.blockedOn);)Pc(c), null === c.blockedOn && Gc.shift() }
      var Wc = {}, Yc = new Map, Zc = new Map, $c = ["abort", "abort", Xb, "animationEnd", Yb, "animationIteration", Zb, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking",
        "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", $b, "transitionEnd", "waiting", "waiting"]; function ad(a, b) { for (var c = 0; c < a.length; c += 2) { var d = a[c], e = a[c + 1], f = "on" + (e[0].toUpperCase() + e.slice(1)); f = { phasedRegistrationNames: { bubbled: f, captured: f + "Capture" }, dependencies: [d], eventPriority: b }; Zc.set(d, b); Yc.set(d, f); Wc[e] = f } }
      ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
      ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1); ad($c, 2); for (var bd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), cd = 0; cd < bd.length; cd++)Zc.set(bd[cd], 0);
      var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = !0; function F(a, b) { vc(b, a, !1) } function vc(a, b, c) { var d = Zc.get(b); switch (void 0 === d ? 2 : d) { case 0: d = gd.bind(null, b, 1, a); break; case 1: d = hd.bind(null, b, 1, a); break; default: d = id.bind(null, b, 1, a) }c ? a.addEventListener(b, d, !0) : a.addEventListener(b, d, !1) } function gd(a, b, c, d) { Ja || Ha(); var e = id, f = Ja; Ja = !0; try { Ga(e, a, b, c, d) } finally { (Ja = f) || La() } } function hd(a, b, c, d) { ed(dd, id.bind(null, a, b, c, d)) }
      function id(a, b, c, d) { if (fd) if (0 < Ac.length && -1 < Hc.indexOf(a)) a = Kc(null, a, b, c, d), Ac.push(a); else { var e = Rc(a, b, c, d); if (null === e) Lc(a, d); else if (-1 < Hc.indexOf(a)) a = Kc(e, a, b, c, d), Ac.push(a); else if (!Oc(e, a, b, c, d)) { Lc(a, d); a = rc(a, d, null, b); try { Ma(sc, a) } finally { qc(a) } } } }
      function Rc(a, b, c, d) { c = nc(d); c = tc(c); if (null !== c) { var e = dc(c); if (null === e) c = null; else { var f = e.tag; if (13 === f) { c = ec(e); if (null !== c) return c; c = null } else if (3 === f) { if (e.stateNode.hydrate) return 3 === e.tag ? e.stateNode.containerInfo : null; c = null } else e !== c && (c = null) } } a = rc(a, d, c, b); try { Ma(sc, a) } finally { qc(a) } return null }
      var jd = {
        animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0,
        floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0
      }, kd = ["Webkit", "ms", "Moz", "O"]; Object.keys(jd).forEach(function (a) { kd.forEach(function (b) { b = b + a.charAt(0).toUpperCase() + a.substring(1); jd[b] = jd[a] }) }); function ld(a, b, c) { return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || jd.hasOwnProperty(a) && jd[a] ? ("" + b).trim() : b + "px" }
      function md(a, b) { a = a.style; for (var c in b) if (b.hasOwnProperty(c)) { var d = 0 === c.indexOf("--"), e = ld(c, b[c], d); "float" === c && (c = "cssFloat"); d ? a.setProperty(c, e) : a[c] = e } } var nd = n({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
      function od(a, b) { if (b) { if (nd[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(u(137, a, "")); if (null != b.dangerouslySetInnerHTML) { if (null != b.children) throw Error(u(60)); if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(u(61)); } if (null != b.style && "object" !== typeof b.style) throw Error(u(62, "")); } }
      function pd(a, b) { if (-1 === a.indexOf("-")) return "string" === typeof b.is; switch (a) { case "annotation-xml": case "color-profile": case "font-face": case "font-face-src": case "font-face-uri": case "font-face-format": case "font-face-name": case "missing-glyph": return !1; default: return !0 } } var qd = Mb.html; function rd(a, b) { a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument; var c = cc(a); b = wa[b]; for (var d = 0; d < b.length; d++)uc(b[d], a, c) } function sd() { }
      function td(a) { a = a || ("undefined" !== typeof document ? document : void 0); if ("undefined" === typeof a) return null; try { return a.activeElement || a.body } catch (b) { return a.body } } function ud(a) { for (; a && a.firstChild;)a = a.firstChild; return a } function vd(a, b) { var c = ud(a); a = 0; for (var d; c;) { if (3 === c.nodeType) { d = a + c.textContent.length; if (a <= b && d >= b) return { node: c, offset: b - a }; a = d } a: { for (; c;) { if (c.nextSibling) { c = c.nextSibling; break a } c = c.parentNode } c = void 0 } c = ud(c) } }
      function wd(a, b) { return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? wd(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1 } function xd() { for (var a = window, b = td(); b instanceof a.HTMLIFrameElement;) { try { var c = "string" === typeof b.contentWindow.location.href } catch (d) { c = !1 } if (c) a = b.contentWindow; else break; b = td(a.document) } return b }
      function yd(a) { var b = a && a.nodeName && a.nodeName.toLowerCase(); return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable) } var zd = "$", Ad = "/$", Bd = "$?", Cd = "$!", Dd = null, Ed = null; function Fd(a, b) { switch (a) { case "button": case "input": case "select": case "textarea": return !!b.autoFocus }return !1 }
      function Gd(a, b) { return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html } var Hd = "function" === typeof setTimeout ? setTimeout : void 0, Id = "function" === typeof clearTimeout ? clearTimeout : void 0; function Jd(a) { for (; null != a; a = a.nextSibling) { var b = a.nodeType; if (1 === b || 3 === b) break } return a }
      function Kd(a) { a = a.previousSibling; for (var b = 0; a;) { if (8 === a.nodeType) { var c = a.data; if (c === zd || c === Cd || c === Bd) { if (0 === b) return a; b-- } else c === Ad && b++ } a = a.previousSibling } return null } var Ld = Math.random().toString(36).slice(2), Md = "__reactInternalInstance$" + Ld, Nd = "__reactEventHandlers$" + Ld, Od = "__reactContainere$" + Ld;
      function tc(a) { var b = a[Md]; if (b) return b; for (var c = a.parentNode; c;) { if (b = c[Od] || c[Md]) { c = b.alternate; if (null !== b.child || null !== c && null !== c.child) for (a = Kd(a); null !== a;) { if (c = a[Md]) return c; a = Kd(a) } return b } a = c; c = a.parentNode } return null } function Nc(a) { a = a[Md] || a[Od]; return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a } function Pd(a) { if (5 === a.tag || 6 === a.tag) return a.stateNode; throw Error(u(33)); } function Qd(a) { return a[Nd] || null }
      function Rd(a) { do a = a.return; while (a && 5 !== a.tag); return a ? a : null }
      function Sd(a, b) {
        var c = a.stateNode; if (!c) return null; var d = la(c); if (!d) return null; c = d[b]; a: switch (b) { case "onClick": case "onClickCapture": case "onDoubleClick": case "onDoubleClickCapture": case "onMouseDown": case "onMouseDownCapture": case "onMouseMove": case "onMouseMoveCapture": case "onMouseUp": case "onMouseUpCapture": case "onMouseEnter": (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a)); a = !d; break a; default: a = !1 }if (a) return null; if (c && "function" !== typeof c) throw Error(u(231,
          b, typeof c)); return c
      } function Td(a, b, c) { if (b = Sd(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a) } function Ud(a) { if (a && a.dispatchConfig.phasedRegistrationNames) { for (var b = a._targetInst, c = []; b;)c.push(b), b = Rd(b); for (b = c.length; 0 < b--;)Td(c[b], "captured", a); for (b = 0; b < c.length; b++)Td(c[b], "bubbled", a) } }
      function Vd(a, b, c) { a && c && c.dispatchConfig.registrationName && (b = Sd(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a)) } function Wd(a) { a && a.dispatchConfig.registrationName && Vd(a._targetInst, null, a) } function Xd(a) { jc(a, Ud) } var Yd = null, Zd = null, $d = null;
      function ae() { if ($d) return $d; var a, b = Zd, c = b.length, d, e = "value" in Yd ? Yd.value : Yd.textContent, f = e.length; for (a = 0; a < c && b[a] === e[a]; a++); var g = c - a; for (d = 1; d <= g && b[c - d] === e[f - d]; d++); return $d = e.slice(a, 1 < d ? 1 - d : void 0) } function be() { return !0 } function ce() { return !1 }
      function G(a, b, c, d) { this.dispatchConfig = a; this._targetInst = b; this.nativeEvent = c; a = this.constructor.Interface; for (var e in a) a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]); this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? be : ce; this.isPropagationStopped = ce; return this }
      n(G.prototype, {
        preventDefault: function () { this.defaultPrevented = !0; var a = this.nativeEvent; a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = be) }, stopPropagation: function () { var a = this.nativeEvent; a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = be) }, persist: function () { this.isPersistent = be }, isPersistent: ce, destructor: function () {
          var a = this.constructor.Interface,
          b; for (b in a) this[b] = null; this.nativeEvent = this._targetInst = this.dispatchConfig = null; this.isPropagationStopped = this.isDefaultPrevented = ce; this._dispatchInstances = this._dispatchListeners = null
        }
      }); G.Interface = { type: null, target: null, currentTarget: function () { return null }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function (a) { return a.timeStamp || Date.now() }, defaultPrevented: null, isTrusted: null };
      G.extend = function (a) { function b() { } function c() { return d.apply(this, arguments) } var d = this; b.prototype = d.prototype; var e = new b; n(e, c.prototype); c.prototype = e; c.prototype.constructor = c; c.Interface = n({}, d.Interface, a); c.extend = d.extend; de(c); return c }; de(G); function ee(a, b, c, d) { if (this.eventPool.length) { var e = this.eventPool.pop(); this.call(e, a, b, c, d); return e } return new this(a, b, c, d) }
      function fe(a) { if (!(a instanceof this)) throw Error(u(279)); a.destructor(); 10 > this.eventPool.length && this.eventPool.push(a) } function de(a) { a.eventPool = []; a.getPooled = ee; a.release = fe } var ge = G.extend({ data: null }), he = G.extend({ data: null }), ie = [9, 13, 27, 32], je = ya && "CompositionEvent" in window, ke = null; ya && "documentMode" in document && (ke = document.documentMode);
      var le = ya && "TextEvent" in window && !ke, me = ya && (!je || ke && 8 < ke && 11 >= ke), ne = String.fromCharCode(32), oe = {
        beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture"
          }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
        }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") }
      }, pe = !1;
      function qe(a, b) { switch (a) { case "keyup": return -1 !== ie.indexOf(b.keyCode); case "keydown": return 229 !== b.keyCode; case "keypress": case "mousedown": case "blur": return !0; default: return !1 } } function re(a) { a = a.detail; return "object" === typeof a && "data" in a ? a.data : null } var se = !1; function te(a, b) { switch (a) { case "compositionend": return re(b); case "keypress": if (32 !== b.which) return null; pe = !0; return ne; case "textInput": return a = b.data, a === ne && pe ? null : a; default: return null } }
      function ue(a, b) { if (se) return "compositionend" === a || !je && qe(a, b) ? (a = ae(), $d = Zd = Yd = null, se = !1, a) : null; switch (a) { case "paste": return null; case "keypress": if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) { if (b.char && 1 < b.char.length) return b.char; if (b.which) return String.fromCharCode(b.which) } return null; case "compositionend": return me && "ko" !== b.locale ? null : b.data; default: return null } }
      var ve = {
        eventTypes: oe, extractEvents: function (a, b, c, d) {
          var e; if (je) b: { switch (a) { case "compositionstart": var f = oe.compositionStart; break b; case "compositionend": f = oe.compositionEnd; break b; case "compositionupdate": f = oe.compositionUpdate; break b }f = void 0 } else se ? qe(a, c) && (f = oe.compositionEnd) : "keydown" === a && 229 === c.keyCode && (f = oe.compositionStart); f ? (me && "ko" !== c.locale && (se || f !== oe.compositionStart ? f === oe.compositionEnd && se && (e = ae()) : (Yd = d, Zd = "value" in Yd ? Yd.value : Yd.textContent, se = !0)), f = ge.getPooled(f,
            b, c, d), e ? f.data = e : (e = re(c), null !== e && (f.data = e)), Xd(f), e = f) : e = null; (a = le ? te(a, c) : ue(a, c)) ? (b = he.getPooled(oe.beforeInput, b, c, d), b.data = a, Xd(b)) : b = null; return null === e ? b : null === b ? e : [e, b]
        }
      }, we = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function xe(a) { var b = a && a.nodeName && a.nodeName.toLowerCase(); return "input" === b ? !!we[a.type] : "textarea" === b ? !0 : !1 }
      var ye = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } }; function ze(a, b, c) { a = G.getPooled(ye.change, a, b, c); a.type = "change"; Da(c); Xd(a); return a } var Ae = null, Be = null; function Ce(a) { mc(a) } function De(a) { var b = Pd(a); if (yb(b)) return a } function Ee(a, b) { if ("change" === a) return b } var Fe = !1; ya && (Fe = oc("input") && (!document.documentMode || 9 < document.documentMode));
      function Ge() { Ae && (Ae.detachEvent("onpropertychange", He), Be = Ae = null) } function He(a) { if ("value" === a.propertyName && De(Be)) if (a = ze(Be, a, nc(a)), Ja) mc(a); else { Ja = !0; try { Fa(Ce, a) } finally { Ja = !1, La() } } } function Ie(a, b, c) { "focus" === a ? (Ge(), Ae = b, Be = c, Ae.attachEvent("onpropertychange", He)) : "blur" === a && Ge() } function Je(a) { if ("selectionchange" === a || "keyup" === a || "keydown" === a) return De(Be) } function Ke(a, b) { if ("click" === a) return De(b) } function Le(a, b) { if ("input" === a || "change" === a) return De(b) }
      var Me = { eventTypes: ye, _isInputEventSupported: Fe, extractEvents: function (a, b, c, d) { var e = b ? Pd(b) : window, f = e.nodeName && e.nodeName.toLowerCase(); if ("select" === f || "input" === f && "file" === e.type) var g = Ee; else if (xe(e)) if (Fe) g = Le; else { g = Je; var h = Ie } else (f = e.nodeName) && "input" === f.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (g = Ke); if (g && (g = g(a, b))) return ze(g, c, d); h && h(a, e, b); "blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Db(e, "number", e.value) } }, Ne = G.extend({ view: null, detail: null }),
        Oe = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function Pe(a) { var b = this.nativeEvent; return b.getModifierState ? b.getModifierState(a) : (a = Oe[a]) ? !!b[a] : !1 } function Qe() { return Pe }
      var Re = 0, Se = 0, Te = !1, Ue = !1, Ve = Ne.extend({
        screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: Qe, button: null, buttons: null, relatedTarget: function (a) { return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement) }, movementX: function (a) { if ("movementX" in a) return a.movementX; var b = Re; Re = a.screenX; return Te ? "mousemove" === a.type ? a.screenX - b : 0 : (Te = !0, 0) }, movementY: function (a) {
          if ("movementY" in a) return a.movementY;
          var b = Se; Se = a.screenY; return Ue ? "mousemove" === a.type ? a.screenY - b : 0 : (Ue = !0, 0)
        }
      }), We = Ve.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }), Xe = {
        mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: {
          registrationName: "onPointerLeave",
          dependencies: ["pointerout", "pointerover"]
        }
      }, Ye = {
        eventTypes: Xe, extractEvents: function (a, b, c, d, e) {
          var f = "mouseover" === a || "pointerover" === a, g = "mouseout" === a || "pointerout" === a; if (f && 0 === (e & 32) && (c.relatedTarget || c.fromElement) || !g && !f) return null; f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window; if (g) { if (g = b, b = (b = c.relatedTarget || c.toElement) ? tc(b) : null, null !== b) { var h = dc(b); if (b !== h || 5 !== b.tag && 6 !== b.tag) b = null } } else g = null; if (g === b) return null; if ("mouseout" === a || "mouseover" ===
            a) { var k = Ve; var l = Xe.mouseLeave; var m = Xe.mouseEnter; var p = "mouse" } else if ("pointerout" === a || "pointerover" === a) k = We, l = Xe.pointerLeave, m = Xe.pointerEnter, p = "pointer"; a = null == g ? f : Pd(g); f = null == b ? f : Pd(b); l = k.getPooled(l, g, c, d); l.type = p + "leave"; l.target = a; l.relatedTarget = f; c = k.getPooled(m, b, c, d); c.type = p + "enter"; c.target = f; c.relatedTarget = a; d = g; p = b; if (d && p) a: {
              k = d; m = p; g = 0; for (a = k; a; a = Rd(a))g++; a = 0; for (b = m; b; b = Rd(b))a++; for (; 0 < g - a;)k = Rd(k), g--; for (; 0 < a - g;)m = Rd(m), a--; for (; g--;) {
                if (k === m || k === m.alternate) break a;
                k = Rd(k); m = Rd(m)
              } k = null
            } else k = null; m = k; for (k = []; d && d !== m;) { g = d.alternate; if (null !== g && g === m) break; k.push(d); d = Rd(d) } for (d = []; p && p !== m;) { g = p.alternate; if (null !== g && g === m) break; d.push(p); p = Rd(p) } for (p = 0; p < k.length; p++)Vd(k[p], "bubbled", l); for (p = d.length; 0 < p--;)Vd(d[p], "captured", c); return 0 === (e & 64) ? [l] : [l, c]
        }
      }; function Ze(a, b) { return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b } var $e = "function" === typeof Object.is ? Object.is : Ze, af = Object.prototype.hasOwnProperty;
      function bf(a, b) { if ($e(a, b)) return !0; if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1; var c = Object.keys(a), d = Object.keys(b); if (c.length !== d.length) return !1; for (d = 0; d < c.length; d++)if (!af.call(b, c[d]) || !$e(a[c[d]], b[c[d]])) return !1; return !0 }
      var cf = ya && "documentMode" in document && 11 >= document.documentMode, df = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } }, ef = null, ff = null, gf = null, hf = !1;
      function jf(a, b) { var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument; if (hf || null == ef || ef !== td(c)) return null; c = ef; "selectionStart" in c && yd(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }); return gf && bf(gf, c) ? null : (gf = c, a = G.getPooled(df.select, ff, a, b), a.type = "select", a.target = ef, Xd(a), a) }
      var kf = {
        eventTypes: df, extractEvents: function (a, b, c, d, e, f) {
          e = f || (d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument); if (!(f = !e)) { a: { e = cc(e); f = wa.onSelect; for (var g = 0; g < f.length; g++)if (!e.has(f[g])) { e = !1; break a } e = !0 } f = !e } if (f) return null; e = b ? Pd(b) : window; switch (a) {
            case "focus": if (xe(e) || "true" === e.contentEditable) ef = e, ff = b, gf = null; break; case "blur": gf = ff = ef = null; break; case "mousedown": hf = !0; break; case "contextmenu": case "mouseup": case "dragend": return hf = !1, jf(c, d); case "selectionchange": if (cf) break;
            case "keydown": case "keyup": return jf(c, d)
          }return null
        }
      }, lf = G.extend({ animationName: null, elapsedTime: null, pseudoElement: null }), mf = G.extend({ clipboardData: function (a) { return "clipboardData" in a ? a.clipboardData : window.clipboardData } }), nf = Ne.extend({ relatedTarget: null }); function of(a) { var b = a.keyCode; "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b; 10 === a && (a = 13); return 32 <= a || 13 === a ? a : 0 }
      var pf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, qf = {
        8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4",
        116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta"
      }, rf = Ne.extend({
        key: function (a) { if (a.key) { var b = pf[a.key] || a.key; if ("Unidentified" !== b) return b } return "keypress" === a.type ? (a = of(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? qf[a.keyCode] || "Unidentified" : "" }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: Qe, charCode: function (a) {
          return "keypress" ===
            a.type ? of(a) : 0
        }, keyCode: function (a) { return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0 }, which: function (a) { return "keypress" === a.type ? of(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0 }
      }), sf = Ve.extend({ dataTransfer: null }), tf = Ne.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: Qe }), uf = G.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }), vf = Ve.extend({
        deltaX: function (a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in
            a ? -a.wheelDeltaX : 0
        }, deltaY: function (a) { return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0 }, deltaZ: null, deltaMode: null
      }), wf = {
        eventTypes: Wc, extractEvents: function (a, b, c, d) {
          var e = Yc.get(a); if (!e) return null; switch (a) {
            case "keypress": if (0 === of(c)) return null; case "keydown": case "keyup": a = rf; break; case "blur": case "focus": a = nf; break; case "click": if (2 === c.button) return null; case "auxclick": case "dblclick": case "mousedown": case "mousemove": case "mouseup": case "mouseout": case "mouseover": case "contextmenu": a =
              Ve; break; case "drag": case "dragend": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "dragstart": case "drop": a = sf; break; case "touchcancel": case "touchend": case "touchmove": case "touchstart": a = tf; break; case Xb: case Yb: case Zb: a = lf; break; case $b: a = uf; break; case "scroll": a = Ne; break; case "wheel": a = vf; break; case "copy": case "cut": case "paste": a = mf; break; case "gotpointercapture": case "lostpointercapture": case "pointercancel": case "pointerdown": case "pointermove": case "pointerout": case "pointerover": case "pointerup": a =
                We; break; default: a = G
          }b = a.getPooled(e, b, c, d); Xd(b); return b
        }
      }; if (pa) throw Error(u(101)); pa = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")); ra(); var xf = Nc; la = Qd; ma = xf; na = Pd; xa({ SimpleEventPlugin: wf, EnterLeaveEventPlugin: Ye, ChangeEventPlugin: Me, SelectEventPlugin: kf, BeforeInputEventPlugin: ve }); var yf = [], zf = -1; function H(a) { 0 > zf || (a.current = yf[zf], yf[zf] = null, zf--) }
      function I(a, b) { zf++; yf[zf] = a.current; a.current = b } var Af = {}, J = { current: Af }, K = { current: !1 }, Bf = Af; function Cf(a, b) { var c = a.type.contextTypes; if (!c) return Af; var d = a.stateNode; if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext; var e = {}, f; for (f in c) e[f] = b[f]; d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e); return e } function L(a) { a = a.childContextTypes; return null !== a && void 0 !== a }
      function Df() { H(K); H(J) } function Ef(a, b, c) { if (J.current !== Af) throw Error(u(168)); I(J, b); I(K, c) } function Ff(a, b, c) { var d = a.stateNode; a = b.childContextTypes; if ("function" !== typeof d.getChildContext) return c; d = d.getChildContext(); for (var e in d) if (!(e in a)) throw Error(u(108, pb(b) || "Unknown", e)); return n({}, c, {}, d) } function Gf(a) { a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Af; Bf = J.current; I(J, a); I(K, K.current); return !0 }
      function Hf(a, b, c) { var d = a.stateNode; if (!d) throw Error(u(169)); c ? (a = Ff(a, b, Bf), d.__reactInternalMemoizedMergedChildContext = a, H(K), H(J), I(J, a)) : H(K); I(K, c) }
      var If = r.unstable_runWithPriority, Jf = r.unstable_scheduleCallback, Kf = r.unstable_cancelCallback, Lf = r.unstable_requestPaint, Mf = r.unstable_now, Nf = r.unstable_getCurrentPriorityLevel, Of = r.unstable_ImmediatePriority, Pf = r.unstable_UserBlockingPriority, Qf = r.unstable_NormalPriority, Rf = r.unstable_LowPriority, Sf = r.unstable_IdlePriority, Tf = {}, Uf = r.unstable_shouldYield, Vf = void 0 !== Lf ? Lf : function () { }, Wf = null, Xf = null, Yf = !1, Zf = Mf(), $f = 1E4 > Zf ? Mf : function () { return Mf() - Zf };
      function ag() { switch (Nf()) { case Of: return 99; case Pf: return 98; case Qf: return 97; case Rf: return 96; case Sf: return 95; default: throw Error(u(332)); } } function bg(a) { switch (a) { case 99: return Of; case 98: return Pf; case 97: return Qf; case 96: return Rf; case 95: return Sf; default: throw Error(u(332)); } } function cg(a, b) { a = bg(a); return If(a, b) } function dg(a, b, c) { a = bg(a); return Jf(a, b, c) } function eg(a) { null === Wf ? (Wf = [a], Xf = Jf(Of, fg)) : Wf.push(a); return Tf } function gg() { if (null !== Xf) { var a = Xf; Xf = null; Kf(a) } fg() }
      function fg() { if (!Yf && null !== Wf) { Yf = !0; var a = 0; try { var b = Wf; cg(99, function () { for (; a < b.length; a++) { var c = b[a]; do c = c(!0); while (null !== c) } }); Wf = null } catch (c) { throw null !== Wf && (Wf = Wf.slice(a + 1)), Jf(Of, gg), c; } finally { Yf = !1 } } } function hg(a, b, c) { c /= 10; return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c } function ig(a, b) { if (a && a.defaultProps) { b = n({}, b); a = a.defaultProps; for (var c in a) void 0 === b[c] && (b[c] = a[c]) } return b } var jg = { current: null }, kg = null, lg = null, mg = null; function ng() { mg = lg = kg = null }
      function og(a) { var b = jg.current; H(jg); a.type._context._currentValue = b } function pg(a, b) { for (; null !== a;) { var c = a.alternate; if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b); else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b; else break; a = a.return } } function qg(a, b) { kg = a; mg = lg = null; a = a.dependencies; null !== a && null !== a.firstContext && (a.expirationTime >= b && (rg = !0), a.firstContext = null) }
      function sg(a, b) { if (mg !== a && !1 !== b && 0 !== b) { if ("number" !== typeof b || 1073741823 === b) mg = a, b = 1073741823; b = { context: a, observedBits: b, next: null }; if (null === lg) { if (null === kg) throw Error(u(308)); lg = b; kg.dependencies = { expirationTime: 0, firstContext: b, responders: null } } else lg = lg.next = b } return a._currentValue } var tg = !1; function ug(a) { a.updateQueue = { baseState: a.memoizedState, baseQueue: null, shared: { pending: null }, effects: null } }
      function vg(a, b) { a = a.updateQueue; b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, baseQueue: a.baseQueue, shared: a.shared, effects: a.effects }) } function wg(a, b) { a = { expirationTime: a, suspenseConfig: b, tag: 0, payload: null, callback: null, next: null }; return a.next = a } function xg(a, b) { a = a.updateQueue; if (null !== a) { a = a.shared; var c = a.pending; null === c ? b.next = b : (b.next = c.next, c.next = b); a.pending = b } }
      function yg(a, b) { var c = a.alternate; null !== c && vg(c, a); a = a.updateQueue; c = a.baseQueue; null === c ? (a.baseQueue = b.next = b, b.next = b) : (b.next = c.next, c.next = b) }
      function zg(a, b, c, d) {
        var e = a.updateQueue; tg = !1; var f = e.baseQueue, g = e.shared.pending; if (null !== g) { if (null !== f) { var h = f.next; f.next = g.next; g.next = h } f = g; e.shared.pending = null; h = a.alternate; null !== h && (h = h.updateQueue, null !== h && (h.baseQueue = g)) } if (null !== f) {
          h = f.next; var k = e.baseState, l = 0, m = null, p = null, x = null; if (null !== h) {
            var z = h; do {
              g = z.expirationTime; if (g < d) {
                var ca = { expirationTime: z.expirationTime, suspenseConfig: z.suspenseConfig, tag: z.tag, payload: z.payload, callback: z.callback, next: null }; null === x ? (p = x =
                  ca, m = k) : x = x.next = ca; g > l && (l = g)
              } else {
                null !== x && (x = x.next = { expirationTime: 1073741823, suspenseConfig: z.suspenseConfig, tag: z.tag, payload: z.payload, callback: z.callback, next: null }); Ag(g, z.suspenseConfig); a: { var D = a, t = z; g = b; ca = c; switch (t.tag) { case 1: D = t.payload; if ("function" === typeof D) { k = D.call(ca, k, g); break a } k = D; break a; case 3: D.effectTag = D.effectTag & -4097 | 64; case 0: D = t.payload; g = "function" === typeof D ? D.call(ca, k, g) : D; if (null === g || void 0 === g) break a; k = n({}, k, g); break a; case 2: tg = !0 } } null !== z.callback &&
                  (a.effectTag |= 32, g = e.effects, null === g ? e.effects = [z] : g.push(z))
              } z = z.next; if (null === z || z === h) if (g = e.shared.pending, null === g) break; else z = f.next = g.next, g.next = h, e.baseQueue = f = g, e.shared.pending = null
            } while (1)
          } null === x ? m = k : x.next = p; e.baseState = m; e.baseQueue = x; Bg(l); a.expirationTime = l; a.memoizedState = k
        }
      }
      function Cg(a, b, c) { a = b.effects; b.effects = null; if (null !== a) for (b = 0; b < a.length; b++) { var d = a[b], e = d.callback; if (null !== e) { d.callback = null; d = e; e = c; if ("function" !== typeof d) throw Error(u(191, d)); d.call(e) } } } var Dg = Wa.ReactCurrentBatchConfig, Eg = (new aa.Component).refs; function Fg(a, b, c, d) { b = a.memoizedState; c = c(d, b); c = null === c || void 0 === c ? b : n({}, b, c); a.memoizedState = c; 0 === a.expirationTime && (a.updateQueue.baseState = c) }
      var Jg = {
        isMounted: function (a) { return (a = a._reactInternalFiber) ? dc(a) === a : !1 }, enqueueSetState: function (a, b, c) { a = a._reactInternalFiber; var d = Gg(), e = Dg.suspense; d = Hg(d, a, e); e = wg(d, e); e.payload = b; void 0 !== c && null !== c && (e.callback = c); xg(a, e); Ig(a, d) }, enqueueReplaceState: function (a, b, c) { a = a._reactInternalFiber; var d = Gg(), e = Dg.suspense; d = Hg(d, a, e); e = wg(d, e); e.tag = 1; e.payload = b; void 0 !== c && null !== c && (e.callback = c); xg(a, e); Ig(a, d) }, enqueueForceUpdate: function (a, b) {
          a = a._reactInternalFiber; var c = Gg(), d = Dg.suspense;
          c = Hg(c, a, d); d = wg(c, d); d.tag = 2; void 0 !== b && null !== b && (d.callback = b); xg(a, d); Ig(a, c)
        }
      }; function Kg(a, b, c, d, e, f, g) { a = a.stateNode; return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !bf(c, d) || !bf(e, f) : !0 }
      function Lg(a, b, c) { var d = !1, e = Af; var f = b.contextType; "object" === typeof f && null !== f ? f = sg(f) : (e = L(b) ? Bf : J.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Cf(a, e) : Af); b = new b(c, f); a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null; b.updater = Jg; a.stateNode = b; b._reactInternalFiber = a; d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f); return b }
      function Mg(a, b, c, d) { a = b.state; "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d); "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d); b.state !== a && Jg.enqueueReplaceState(b, b.state, null) }
      function Ng(a, b, c, d) {
        var e = a.stateNode; e.props = c; e.state = a.memoizedState; e.refs = Eg; ug(a); var f = b.contextType; "object" === typeof f && null !== f ? e.context = sg(f) : (f = L(b) ? Bf : J.current, e.context = Cf(a, f)); zg(a, c, e, d); e.state = a.memoizedState; f = b.getDerivedStateFromProps; "function" === typeof f && (Fg(a, b, f, c), e.state = a.memoizedState); "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount ||
          (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Jg.enqueueReplaceState(e, e.state, null), zg(a, c, e, d), e.state = a.memoizedState); "function" === typeof e.componentDidMount && (a.effectTag |= 4)
      } var Og = Array.isArray;
      function Pg(a, b, c) { a = c.ref; if (null !== a && "function" !== typeof a && "object" !== typeof a) { if (c._owner) { c = c._owner; if (c) { if (1 !== c.tag) throw Error(u(309)); var d = c.stateNode } if (!d) throw Error(u(147, a)); var e = "" + a; if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref; b = function (a) { var b = d.refs; b === Eg && (b = d.refs = {}); null === a ? delete b[e] : b[e] = a }; b._stringRef = e; return b } if ("string" !== typeof a) throw Error(u(284)); if (!c._owner) throw Error(u(290, a)); } return a }
      function Qg(a, b) { if ("textarea" !== a.type) throw Error(u(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "")); }
      function Rg(a) {
        function b(b, c) { if (a) { var d = b.lastEffect; null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c; c.nextEffect = null; c.effectTag = 8 } } function c(c, d) { if (!a) return null; for (; null !== d;)b(c, d), d = d.sibling; return null } function d(a, b) { for (a = new Map; null !== b;)null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling; return a } function e(a, b) { a = Sg(a, b); a.index = 0; a.sibling = null; return a } function f(b, c, d) {
          b.index = d; if (!a) return c; d = b.alternate; if (null !== d) return d = d.index, d < c ? (b.effectTag =
            2, c) : d; b.effectTag = 2; return c
        } function g(b) { a && null === b.alternate && (b.effectTag = 2); return b } function h(a, b, c, d) { if (null === b || 6 !== b.tag) return b = Tg(c, a.mode, d), b.return = a, b; b = e(b, c); b.return = a; return b } function k(a, b, c, d) { if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Pg(a, b, c), d.return = a, d; d = Ug(c.type, c.key, c.props, null, a.mode, d); d.ref = Pg(a, b, c); d.return = a; return d } function l(a, b, c, d) {
          if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !==
            c.implementation) return b = Vg(c, a.mode, d), b.return = a, b; b = e(b, c.children || []); b.return = a; return b
        } function m(a, b, c, d, f) { if (null === b || 7 !== b.tag) return b = Wg(c, a.mode, d, f), b.return = a, b; b = e(b, c); b.return = a; return b } function p(a, b, c) {
          if ("string" === typeof b || "number" === typeof b) return b = Tg("" + b, a.mode, c), b.return = a, b; if ("object" === typeof b && null !== b) {
            switch (b.$$typeof) { case Za: return c = Ug(b.type, b.key, b.props, null, a.mode, c), c.ref = Pg(a, null, b), c.return = a, c; case $a: return b = Vg(b, a.mode, c), b.return = a, b }if (Og(b) ||
              nb(b)) return b = Wg(b, a.mode, c, null), b.return = a, b; Qg(a, b)
          } return null
        } function x(a, b, c, d) { var e = null !== b ? b.key : null; if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d); if ("object" === typeof c && null !== c) { switch (c.$$typeof) { case Za: return c.key === e ? c.type === ab ? m(a, b, c.props.children, d, e) : k(a, b, c, d) : null; case $a: return c.key === e ? l(a, b, c, d) : null }if (Og(c) || nb(c)) return null !== e ? null : m(a, b, c, d, null); Qg(a, c) } return null } function z(a, b, c, d, e) {
          if ("string" === typeof d || "number" === typeof d) return a =
            a.get(c) || null, h(b, a, "" + d, e); if ("object" === typeof d && null !== d) { switch (d.$$typeof) { case Za: return a = a.get(null === d.key ? c : d.key) || null, d.type === ab ? m(b, a, d.props.children, e, d.key) : k(b, a, d, e); case $a: return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e) }if (Og(d) || nb(d)) return a = a.get(c) || null, m(b, a, d, e, null); Qg(b, d) } return null
        } function ca(e, g, h, k) {
          for (var l = null, t = null, m = g, y = g = 0, A = null; null !== m && y < h.length; y++) {
            m.index > y ? (A = m, m = null) : A = m.sibling; var q = x(e, m, h[y], k); if (null === q) { null === m && (m = A); break } a &&
              m && null === q.alternate && b(e, m); g = f(q, g, y); null === t ? l = q : t.sibling = q; t = q; m = A
          } if (y === h.length) return c(e, m), l; if (null === m) { for (; y < h.length; y++)m = p(e, h[y], k), null !== m && (g = f(m, g, y), null === t ? l = m : t.sibling = m, t = m); return l } for (m = d(e, m); y < h.length; y++)A = z(m, e, y, h[y], k), null !== A && (a && null !== A.alternate && m.delete(null === A.key ? y : A.key), g = f(A, g, y), null === t ? l = A : t.sibling = A, t = A); a && m.forEach(function (a) { return b(e, a) }); return l
        } function D(e, g, h, l) {
          var k = nb(h); if ("function" !== typeof k) throw Error(u(150)); h = k.call(h);
          if (null == h) throw Error(u(151)); for (var m = k = null, t = g, y = g = 0, A = null, q = h.next(); null !== t && !q.done; y++, q = h.next()) { t.index > y ? (A = t, t = null) : A = t.sibling; var D = x(e, t, q.value, l); if (null === D) { null === t && (t = A); break } a && t && null === D.alternate && b(e, t); g = f(D, g, y); null === m ? k = D : m.sibling = D; m = D; t = A } if (q.done) return c(e, t), k; if (null === t) { for (; !q.done; y++, q = h.next())q = p(e, q.value, l), null !== q && (g = f(q, g, y), null === m ? k = q : m.sibling = q, m = q); return k } for (t = d(e, t); !q.done; y++, q = h.next())q = z(t, e, y, q.value, l), null !== q && (a && null !==
            q.alternate && t.delete(null === q.key ? y : q.key), g = f(q, g, y), null === m ? k = q : m.sibling = q, m = q); a && t.forEach(function (a) { return b(e, a) }); return k
        } return function (a, d, f, h) {
          var k = "object" === typeof f && null !== f && f.type === ab && null === f.key; k && (f = f.props.children); var l = "object" === typeof f && null !== f; if (l) switch (f.$$typeof) {
            case Za: a: {
              l = f.key; for (k = d; null !== k;) {
                if (k.key === l) {
                  switch (k.tag) {
                    case 7: if (f.type === ab) { c(a, k.sibling); d = e(k, f.props.children); d.return = a; a = d; break a } break; default: if (k.elementType === f.type) {
                      c(a,
                        k.sibling); d = e(k, f.props); d.ref = Pg(a, k, f); d.return = a; a = d; break a
                    }
                  }c(a, k); break
                } else b(a, k); k = k.sibling
              } f.type === ab ? (d = Wg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Ug(f.type, f.key, f.props, null, a.mode, h), h.ref = Pg(a, d, f), h.return = a, a = h)
            } return g(a); case $a: a: {
              for (k = f.key; null !== d;) {
                if (d.key === k) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) { c(a, d.sibling); d = e(d, f.children || []); d.return = a; a = d; break a } else { c(a, d); break } else b(a, d); d =
                  d.sibling
              } d = Vg(f, a.mode, h); d.return = a; a = d
            } return g(a)
          }if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Tg(f, a.mode, h), d.return = a, a = d), g(a); if (Og(f)) return ca(a, d, f, h); if (nb(f)) return D(a, d, f, h); l && Qg(a, f); if ("undefined" === typeof f && !k) switch (a.tag) { case 1: case 0: throw a = a.type, Error(u(152, a.displayName || a.name || "Component")); }return c(a, d)
        }
      } var Xg = Rg(!0), Yg = Rg(!1), Zg = {}, $g = { current: Zg }, ah = { current: Zg }, bh = { current: Zg };
      function ch(a) { if (a === Zg) throw Error(u(174)); return a } function dh(a, b) { I(bh, b); I(ah, a); I($g, Zg); a = b.nodeType; switch (a) { case 9: case 11: b = (b = b.documentElement) ? b.namespaceURI : Ob(null, ""); break; default: a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = Ob(b, a) }H($g); I($g, b) } function eh() { H($g); H(ah); H(bh) } function fh(a) { ch(bh.current); var b = ch($g.current); var c = Ob(b, a.type); b !== c && (I(ah, a), I($g, c)) } function gh(a) { ah.current === a && (H($g), H(ah)) } var M = { current: 0 };
      function hh(a) { for (var b = a; null !== b;) { if (13 === b.tag) { var c = b.memoizedState; if (null !== c && (c = c.dehydrated, null === c || c.data === Bd || c.data === Cd)) return b } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) { if (0 !== (b.effectTag & 64)) return b } else if (null !== b.child) { b.child.return = b; b = b.child; continue } if (b === a) break; for (; null === b.sibling;) { if (null === b.return || b.return === a) return null; b = b.return } b.sibling.return = b.return; b = b.sibling } return null } function ih(a, b) { return { responder: a, props: b } }
      var jh = Wa.ReactCurrentDispatcher, kh = Wa.ReactCurrentBatchConfig, lh = 0, N = null, O = null, P = null, mh = !1; function Q() { throw Error(u(321)); } function nh(a, b) { if (null === b) return !1; for (var c = 0; c < b.length && c < a.length; c++)if (!$e(a[c], b[c])) return !1; return !0 }
      function oh(a, b, c, d, e, f) { lh = f; N = b; b.memoizedState = null; b.updateQueue = null; b.expirationTime = 0; jh.current = null === a || null === a.memoizedState ? ph : qh; a = c(d, e); if (b.expirationTime === lh) { f = 0; do { b.expirationTime = 0; if (!(25 > f)) throw Error(u(301)); f += 1; P = O = null; b.updateQueue = null; jh.current = rh; a = c(d, e) } while (b.expirationTime === lh) } jh.current = sh; b = null !== O && null !== O.next; lh = 0; P = O = N = null; mh = !1; if (b) throw Error(u(300)); return a }
      function th() { var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; null === P ? N.memoizedState = P = a : P = P.next = a; return P } function uh() { if (null === O) { var a = N.alternate; a = null !== a ? a.memoizedState : null } else a = O.next; var b = null === P ? N.memoizedState : P.next; if (null !== b) P = b, O = a; else { if (null === a) throw Error(u(310)); O = a; a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null }; null === P ? N.memoizedState = P = a : P = P.next = a } return P }
      function vh(a, b) { return "function" === typeof b ? b(a) : b }
      function wh(a) {
        var b = uh(), c = b.queue; if (null === c) throw Error(u(311)); c.lastRenderedReducer = a; var d = O, e = d.baseQueue, f = c.pending; if (null !== f) { if (null !== e) { var g = e.next; e.next = f.next; f.next = g } d.baseQueue = e = f; c.pending = null } if (null !== e) {
          e = e.next; d = d.baseState; var h = g = f = null, k = e; do {
            var l = k.expirationTime; if (l < lh) {
              var m = { expirationTime: k.expirationTime, suspenseConfig: k.suspenseConfig, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }; null === h ? (g = h = m, f = d) : h = h.next = m; l > N.expirationTime &&
                (N.expirationTime = l, Bg(l))
            } else null !== h && (h = h.next = { expirationTime: 1073741823, suspenseConfig: k.suspenseConfig, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), Ag(l, k.suspenseConfig), d = k.eagerReducer === a ? k.eagerState : a(d, k.action); k = k.next
          } while (null !== k && k !== e); null === h ? f = d : h.next = g; $e(d, b.memoizedState) || (rg = !0); b.memoizedState = d; b.baseState = f; b.baseQueue = h; c.lastRenderedState = d
        } return [b.memoizedState, c.dispatch]
      }
      function xh(a) { var b = uh(), c = b.queue; if (null === c) throw Error(u(311)); c.lastRenderedReducer = a; var d = c.dispatch, e = c.pending, f = b.memoizedState; if (null !== e) { c.pending = null; var g = e = e.next; do f = a(f, g.action), g = g.next; while (g !== e); $e(f, b.memoizedState) || (rg = !0); b.memoizedState = f; null === b.baseQueue && (b.baseState = f); c.lastRenderedState = f } return [f, d] }
      function yh(a) { var b = th(); "function" === typeof a && (a = a()); b.memoizedState = b.baseState = a; a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: vh, lastRenderedState: a }; a = a.dispatch = zh.bind(null, N, a); return [b.memoizedState, a] } function Ah(a, b, c, d) { a = { tag: a, create: b, destroy: c, deps: d, next: null }; b = N.updateQueue; null === b ? (b = { lastEffect: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a)); return a }
      function Bh() { return uh().memoizedState } function Ch(a, b, c, d) { var e = th(); N.effectTag |= a; e.memoizedState = Ah(1 | b, c, void 0, void 0 === d ? null : d) } function Dh(a, b, c, d) { var e = uh(); d = void 0 === d ? null : d; var f = void 0; if (null !== O) { var g = O.memoizedState; f = g.destroy; if (null !== d && nh(d, g.deps)) { Ah(b, c, f, d); return } } N.effectTag |= a; e.memoizedState = Ah(1 | b, c, f, d) } function Eh(a, b) { return Ch(516, 4, a, b) } function Fh(a, b) { return Dh(516, 4, a, b) } function Gh(a, b) { return Dh(4, 2, a, b) }
      function Hh(a, b) { if ("function" === typeof b) return a = a(), b(a), function () { b(null) }; if (null !== b && void 0 !== b) return a = a(), b.current = a, function () { b.current = null } } function Ih(a, b, c) { c = null !== c && void 0 !== c ? c.concat([a]) : null; return Dh(4, 2, Hh.bind(null, b, a), c) } function Jh() { } function Kh(a, b) { th().memoizedState = [a, void 0 === b ? null : b]; return a } function Lh(a, b) { var c = uh(); b = void 0 === b ? null : b; var d = c.memoizedState; if (null !== d && null !== b && nh(b, d[1])) return d[0]; c.memoizedState = [a, b]; return a }
      function Mh(a, b) { var c = uh(); b = void 0 === b ? null : b; var d = c.memoizedState; if (null !== d && null !== b && nh(b, d[1])) return d[0]; a = a(); c.memoizedState = [a, b]; return a } function Nh(a, b, c) { var d = ag(); cg(98 > d ? 98 : d, function () { a(!0) }); cg(97 < d ? 97 : d, function () { var d = kh.suspense; kh.suspense = void 0 === b ? null : b; try { a(!1), c() } finally { kh.suspense = d } }) }
      function zh(a, b, c) {
        var d = Gg(), e = Dg.suspense; d = Hg(d, a, e); e = { expirationTime: d, suspenseConfig: e, action: c, eagerReducer: null, eagerState: null, next: null }; var f = b.pending; null === f ? e.next = e : (e.next = f.next, f.next = e); b.pending = e; f = a.alternate; if (a === N || null !== f && f === N) mh = !0, e.expirationTime = lh, N.expirationTime = lh; else {
          if (0 === a.expirationTime && (null === f || 0 === f.expirationTime) && (f = b.lastRenderedReducer, null !== f)) try { var g = b.lastRenderedState, h = f(g, c); e.eagerReducer = f; e.eagerState = h; if ($e(h, g)) return } catch (k) { } finally { } Ig(a,
            d)
        }
      }
      var sh = { readContext: sg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useResponder: Q, useDeferredValue: Q, useTransition: Q }, ph = {
        readContext: sg, useCallback: Kh, useContext: sg, useEffect: Eh, useImperativeHandle: function (a, b, c) { c = null !== c && void 0 !== c ? c.concat([a]) : null; return Ch(4, 2, Hh.bind(null, b, a), c) }, useLayoutEffect: function (a, b) { return Ch(4, 2, a, b) }, useMemo: function (a, b) {
          var c = th(); b = void 0 === b ? null : b; a = a(); c.memoizedState = [a,
            b]; return a
        }, useReducer: function (a, b, c) { var d = th(); b = void 0 !== c ? c(b) : b; d.memoizedState = d.baseState = b; a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b }; a = a.dispatch = zh.bind(null, N, a); return [d.memoizedState, a] }, useRef: function (a) { var b = th(); a = { current: a }; return b.memoizedState = a }, useState: yh, useDebugValue: Jh, useResponder: ih, useDeferredValue: function (a, b) {
          var c = yh(a), d = c[0], e = c[1]; Eh(function () {
            var c = kh.suspense; kh.suspense = void 0 === b ? null : b; try { e(a) } finally {
              kh.suspense =
              c
            }
          }, [a, b]); return d
        }, useTransition: function (a) { var b = yh(!1), c = b[0]; b = b[1]; return [Kh(Nh.bind(null, b, a), [b, a]), c] }
      }, qh = {
        readContext: sg, useCallback: Lh, useContext: sg, useEffect: Fh, useImperativeHandle: Ih, useLayoutEffect: Gh, useMemo: Mh, useReducer: wh, useRef: Bh, useState: function () { return wh(vh) }, useDebugValue: Jh, useResponder: ih, useDeferredValue: function (a, b) { var c = wh(vh), d = c[0], e = c[1]; Fh(function () { var c = kh.suspense; kh.suspense = void 0 === b ? null : b; try { e(a) } finally { kh.suspense = c } }, [a, b]); return d }, useTransition: function (a) {
          var b =
            wh(vh), c = b[0]; b = b[1]; return [Lh(Nh.bind(null, b, a), [b, a]), c]
        }
      }, rh = {
        readContext: sg, useCallback: Lh, useContext: sg, useEffect: Fh, useImperativeHandle: Ih, useLayoutEffect: Gh, useMemo: Mh, useReducer: xh, useRef: Bh, useState: function () { return xh(vh) }, useDebugValue: Jh, useResponder: ih, useDeferredValue: function (a, b) { var c = xh(vh), d = c[0], e = c[1]; Fh(function () { var c = kh.suspense; kh.suspense = void 0 === b ? null : b; try { e(a) } finally { kh.suspense = c } }, [a, b]); return d }, useTransition: function (a) {
          var b = xh(vh), c = b[0]; b = b[1]; return [Lh(Nh.bind(null,
            b, a), [b, a]), c]
        }
      }, Oh = null, Ph = null, Qh = !1; function Rh(a, b) { var c = Sh(5, null, null, 0); c.elementType = "DELETED"; c.type = "DELETED"; c.stateNode = b; c.return = a; c.effectTag = 8; null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c }
      function Th(a, b) { switch (a.tag) { case 5: var c = a.type; b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b; return null !== b ? (a.stateNode = b, !0) : !1; case 6: return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1; case 13: return !1; default: return !1 } }
      function Uh(a) { if (Qh) { var b = Ph; if (b) { var c = b; if (!Th(a, b)) { b = Jd(c.nextSibling); if (!b || !Th(a, b)) { a.effectTag = a.effectTag & -1025 | 2; Qh = !1; Oh = a; return } Rh(Oh, c) } Oh = a; Ph = Jd(b.firstChild) } else a.effectTag = a.effectTag & -1025 | 2, Qh = !1, Oh = a } } function Vh(a) { for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;)a = a.return; Oh = a }
      function Wh(a) { if (a !== Oh) return !1; if (!Qh) return Vh(a), Qh = !0, !1; var b = a.type; if (5 !== a.tag || "head" !== b && "body" !== b && !Gd(b, a.memoizedProps)) for (b = Ph; b;)Rh(a, b), b = Jd(b.nextSibling); Vh(a); if (13 === a.tag) { a = a.memoizedState; a = null !== a ? a.dehydrated : null; if (!a) throw Error(u(317)); a: { a = a.nextSibling; for (b = 0; a;) { if (8 === a.nodeType) { var c = a.data; if (c === Ad) { if (0 === b) { Ph = Jd(a.nextSibling); break a } b-- } else c !== zd && c !== Cd && c !== Bd || b++ } a = a.nextSibling } Ph = null } } else Ph = Oh ? Jd(a.stateNode.nextSibling) : null; return !0 }
      function Xh() { Ph = Oh = null; Qh = !1 } var Yh = Wa.ReactCurrentOwner, rg = !1; function R(a, b, c, d) { b.child = null === a ? Yg(b, null, c, d) : Xg(b, a.child, c, d) } function Zh(a, b, c, d, e) { c = c.render; var f = b.ref; qg(b, e); d = oh(a, b, c, d, f, e); if (null !== a && !rg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e); b.effectTag |= 1; R(a, b, d, e); return b.child }
      function ai(a, b, c, d, e, f) { if (null === a) { var g = c.type; if ("function" === typeof g && !bi(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ci(a, b, g, d, e, f); a = Ug(c.type, null, d, null, b.mode, f); a.ref = b.ref; a.return = b; return b.child = a } g = a.child; if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : bf, c(e, d) && a.ref === b.ref)) return $h(a, b, f); b.effectTag |= 1; a = Sg(g, d); a.ref = b.ref; a.return = b; return b.child = a }
      function ci(a, b, c, d, e, f) { return null !== a && bf(a.memoizedProps, d) && a.ref === b.ref && (rg = !1, e < f) ? (b.expirationTime = a.expirationTime, $h(a, b, f)) : di(a, b, c, d, f) } function ei(a, b) { var c = b.ref; if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128 } function di(a, b, c, d, e) { var f = L(c) ? Bf : J.current; f = Cf(b, f); qg(b, e); c = oh(a, b, c, d, f, e); if (null !== a && !rg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e); b.effectTag |= 1; R(a, b, c, e); return b.child }
      function fi(a, b, c, d, e) {
        if (L(c)) { var f = !0; Gf(b) } else f = !1; qg(b, e); if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Lg(b, c, d), Ng(b, c, d, e), d = !0; else if (null === a) {
          var g = b.stateNode, h = b.memoizedProps; g.props = h; var k = g.context, l = c.contextType; "object" === typeof l && null !== l ? l = sg(l) : (l = L(c) ? Bf : J.current, l = Cf(b, l)); var m = c.getDerivedStateFromProps, p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate; p || "function" !== typeof g.UNSAFE_componentWillReceiveProps &&
            "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l); tg = !1; var x = b.memoizedState; g.state = x; zg(b, d, g, e); k = b.memoizedState; h !== d || x !== k || K.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), k = b.memoizedState), (h = tg || Kg(b, c, h, d, x, k, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" ===
              typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1)
        } else g = b.stateNode, vg(a, b), h = b.memoizedProps, g.props = b.type === b.elementType ? h : ig(b.type, h), k = g.context, l = c.contextType, "object" === typeof l && null !== l ? l = sg(l) : (l = L(c) ? Bf : J.current, l = Cf(b, l)), m = c.getDerivedStateFromProps, (p = "function" === typeof m || "function" ===
          typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l), tg = !1, k = b.memoizedState, g.state = k, zg(b, d, g, e), x = b.memoizedState, h !== d || k !== x || K.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), x = b.memoizedState), (m = tg || Kg(b, c, h, d, k, x, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d,
            x, l), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, l)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = l, d = m) :
            ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = !1); return gi(a, b, c, d, f, e)
      }
      function gi(a, b, c, d, e, f) { ei(a, b); var g = 0 !== (b.effectTag & 64); if (!d && !g) return e && Hf(b, c, !1), $h(a, b, f); d = b.stateNode; Yh.current = b; var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render(); b.effectTag |= 1; null !== a && g ? (b.child = Xg(b, a.child, null, f), b.child = Xg(b, null, h, f)) : R(a, b, h, f); b.memoizedState = d.state; e && Hf(b, c, !0); return b.child } function hi(a) { var b = a.stateNode; b.pendingContext ? Ef(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ef(a, b.context, !1); dh(a, b.containerInfo) }
      var ii = { dehydrated: null, retryTime: 0 };
      function ji(a, b, c) {
        var d = b.mode, e = b.pendingProps, f = M.current, g = !1, h; (h = 0 !== (b.effectTag & 64)) || (h = 0 !== (f & 2) && (null === a || null !== a.memoizedState)); h ? (g = !0, b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= 1); I(M, f & 1); if (null === a) {
          void 0 !== e.fallback && Uh(b); if (g) {
            g = e.fallback; e = Wg(null, d, 0, null); e.return = b; if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;)a.return = e, a = a.sibling; c = Wg(g, d, c, null); c.return =
              b; e.sibling = c; b.memoizedState = ii; b.child = e; return c
          } d = e.children; b.memoizedState = null; return b.child = Yg(b, null, d, c)
        } if (null !== a.memoizedState) {
          a = a.child; d = a.sibling; if (g) { e = e.fallback; c = Sg(a, a.pendingProps); c.return = b; if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child)) for (c.child = g; null !== g;)g.return = c, g = g.sibling; d = Sg(d, e); d.return = b; c.sibling = d; c.childExpirationTime = 0; b.memoizedState = ii; b.child = c; return d } c = Xg(b, a.child, e.children, c); b.memoizedState = null; return b.child =
            c
        } a = a.child; if (g) { g = e.fallback; e = Wg(null, d, 0, null); e.return = b; e.child = a; null !== a && (a.return = e); if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;)a.return = e, a = a.sibling; c = Wg(g, d, c, null); c.return = b; e.sibling = c; c.effectTag |= 2; e.childExpirationTime = 0; b.memoizedState = ii; b.child = e; return c } b.memoizedState = null; return b.child = Xg(b, a, e.children, c)
      }
      function ki(a, b) { a.expirationTime < b && (a.expirationTime = b); var c = a.alternate; null !== c && c.expirationTime < b && (c.expirationTime = b); pg(a.return, b) } function li(a, b, c, d, e, f) { var g = a.memoizedState; null === g ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailExpiration: 0, tailMode: e, lastEffect: f } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f) }
      function mi(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail; R(a, b, d.children, c); d = M.current; if (0 !== (d & 2)) d = d & 1 | 2, b.effectTag |= 64; else { if (null !== a && 0 !== (a.effectTag & 64)) a: for (a = b.child; null !== a;) { if (13 === a.tag) null !== a.memoizedState && ki(a, c); else if (19 === a.tag) ki(a, c); else if (null !== a.child) { a.child.return = a; a = a.child; continue } if (a === b) break a; for (; null === a.sibling;) { if (null === a.return || a.return === b) break a; a = a.return } a.sibling.return = a.return; a = a.sibling } d &= 1 } I(M, d); if (0 === (b.mode & 2)) b.memoizedState =
          null; else switch (e) { case "forwards": c = b.child; for (e = null; null !== c;)a = c.alternate, null !== a && null === hh(a) && (e = c), c = c.sibling; c = e; null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null); li(b, !1, e, c, f, b.lastEffect); break; case "backwards": c = null; e = b.child; for (b.child = null; null !== e;) { a = e.alternate; if (null !== a && null === hh(a)) { b.child = e; break } a = e.sibling; e.sibling = c; c = e; e = a } li(b, !0, c, null, f, b.lastEffect); break; case "together": li(b, !1, null, null, void 0, b.lastEffect); break; default: b.memoizedState = null }return b.child
      }
      function $h(a, b, c) { null !== a && (b.dependencies = a.dependencies); var d = b.expirationTime; 0 !== d && Bg(d); if (b.childExpirationTime < c) return null; if (null !== a && b.child !== a.child) throw Error(u(153)); if (null !== b.child) { a = b.child; c = Sg(a, a.pendingProps); b.child = c; for (c.return = b; null !== a.sibling;)a = a.sibling, c = c.sibling = Sg(a, a.pendingProps), c.return = b; c.sibling = null } return b.child } var ni, oi, pi, qi;
      ni = function (a, b) { for (var c = b.child; null !== c;) { if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode); else if (4 !== c.tag && null !== c.child) { c.child.return = c; c = c.child; continue } if (c === b) break; for (; null === c.sibling;) { if (null === c.return || c.return === b) return; c = c.return } c.sibling.return = c.return; c = c.sibling } }; oi = function () { };
      pi = function (a, b, c, d, e) {
        var f = a.memoizedProps; if (f !== d) {
          var g = b.stateNode; ch($g.current); a = null; switch (c) { case "input": f = zb(g, f); d = zb(g, d); a = []; break; case "option": f = Gb(g, f); d = Gb(g, d); a = []; break; case "select": f = n({}, f, { value: void 0 }); d = n({}, d, { value: void 0 }); a = []; break; case "textarea": f = Ib(g, f); d = Ib(g, d); a = []; break; default: "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = sd) }od(c, d); var h, k; c = null; for (h in f) if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && null != f[h]) if ("style" ===
            h) for (k in g = f[h], g) g.hasOwnProperty(k) && (c || (c = {}), c[k] = ""); else "dangerouslySetInnerHTML" !== h && "children" !== h && "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (va.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null)); for (h in d) {
              var l = d[h]; g = null != f ? f[h] : void 0; if (d.hasOwnProperty(h) && l !== g && (null != l || null != g)) if ("style" === h) if (g) {
                for (k in g) !g.hasOwnProperty(k) || l && l.hasOwnProperty(k) || (c || (c = {}), c[k] = ""); for (k in l) l.hasOwnProperty(k) && g[k] !== l[k] && (c || (c = {}),
                  c[k] = l[k])
              } else c || (a || (a = []), a.push(h, c)), c = l; else "dangerouslySetInnerHTML" === h ? (l = l ? l.__html : void 0, g = g ? g.__html : void 0, null != l && g !== l && (a = a || []).push(h, l)) : "children" === h ? g === l || "string" !== typeof l && "number" !== typeof l || (a = a || []).push(h, "" + l) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && (va.hasOwnProperty(h) ? (null != l && rd(e, h), a || g === l || (a = [])) : (a = a || []).push(h, l))
            } c && (a = a || []).push("style", c); e = a; if (b.updateQueue = e) b.effectTag |= 4
        }
      };
      qi = function (a, b, c, d) { c !== d && (b.effectTag |= 4) }; function ri(a, b) { switch (a.tailMode) { case "hidden": b = a.tail; for (var c = null; null !== b;)null !== b.alternate && (c = b), b = b.sibling; null === c ? a.tail = null : c.sibling = null; break; case "collapsed": c = a.tail; for (var d = null; null !== c;)null !== c.alternate && (d = c), c = c.sibling; null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null } }
      function si(a, b, c) {
        var d = b.pendingProps; switch (b.tag) {
          case 2: case 16: case 15: case 0: case 11: case 7: case 8: case 12: case 9: case 14: return null; case 1: return L(b.type) && Df(), null; case 3: return eh(), H(K), H(J), c = b.stateNode, c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), null !== a && null !== a.child || !Wh(b) || (b.effectTag |= 4), oi(b), null; case 5: gh(b); c = ch(bh.current); var e = b.type; if (null !== a && null != b.stateNode) pi(a, b, e, d, c), a.ref !== b.ref && (b.effectTag |= 128); else {
            if (!d) {
              if (null === b.stateNode) throw Error(u(166));
              return null
            } a = ch($g.current); if (Wh(b)) {
              d = b.stateNode; e = b.type; var f = b.memoizedProps; d[Md] = b; d[Nd] = f; switch (e) {
                case "iframe": case "object": case "embed": F("load", d); break; case "video": case "audio": for (a = 0; a < ac.length; a++)F(ac[a], d); break; case "source": F("error", d); break; case "img": case "image": case "link": F("error", d); F("load", d); break; case "form": F("reset", d); F("submit", d); break; case "details": F("toggle", d); break; case "input": Ab(d, f); F("invalid", d); rd(c, "onChange"); break; case "select": d._wrapperState =
                  { wasMultiple: !!f.multiple }; F("invalid", d); rd(c, "onChange"); break; case "textarea": Jb(d, f), F("invalid", d), rd(c, "onChange")
              }od(e, f); a = null; for (var g in f) if (f.hasOwnProperty(g)) { var h = f[g]; "children" === g ? "string" === typeof h ? d.textContent !== h && (a = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (a = ["children", "" + h]) : va.hasOwnProperty(g) && null != h && rd(c, g) } switch (e) {
                case "input": xb(d); Eb(d, f, !0); break; case "textarea": xb(d); Lb(d); break; case "select": case "option": break; default: "function" === typeof f.onClick &&
                  (d.onclick = sd)
              }c = a; b.updateQueue = c; null !== c && (b.effectTag |= 4)
            } else {
              g = 9 === c.nodeType ? c : c.ownerDocument; a === qd && (a = Nb(e)); a === qd ? "script" === e ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(e, { is: d.is }) : (a = g.createElement(e), "select" === e && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, e); a[Md] = b; a[Nd] = d; ni(a, b, !1, !1); b.stateNode = a; g = pd(e, d); switch (e) {
                case "iframe": case "object": case "embed": F("load",
                  a); h = d; break; case "video": case "audio": for (h = 0; h < ac.length; h++)F(ac[h], a); h = d; break; case "source": F("error", a); h = d; break; case "img": case "image": case "link": F("error", a); F("load", a); h = d; break; case "form": F("reset", a); F("submit", a); h = d; break; case "details": F("toggle", a); h = d; break; case "input": Ab(a, d); h = zb(a, d); F("invalid", a); rd(c, "onChange"); break; case "option": h = Gb(a, d); break; case "select": a._wrapperState = { wasMultiple: !!d.multiple }; h = n({}, d, { value: void 0 }); F("invalid", a); rd(c, "onChange"); break; case "textarea": Jb(a,
                    d); h = Ib(a, d); F("invalid", a); rd(c, "onChange"); break; default: h = d
              }od(e, h); var k = h; for (f in k) if (k.hasOwnProperty(f)) { var l = k[f]; "style" === f ? md(a, l) : "dangerouslySetInnerHTML" === f ? (l = l ? l.__html : void 0, null != l && Qb(a, l)) : "children" === f ? "string" === typeof l ? ("textarea" !== e || "" !== l) && Rb(a, l) : "number" === typeof l && Rb(a, "" + l) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (va.hasOwnProperty(f) ? null != l && rd(c, f) : null != l && Xa(a, f, l, g)) } switch (e) {
                case "input": xb(a); Eb(a, d, !1);
                  break; case "textarea": xb(a); Lb(a); break; case "option": null != d.value && a.setAttribute("value", "" + rb(d.value)); break; case "select": a.multiple = !!d.multiple; c = d.value; null != c ? Hb(a, !!d.multiple, c, !1) : null != d.defaultValue && Hb(a, !!d.multiple, d.defaultValue, !0); break; default: "function" === typeof h.onClick && (a.onclick = sd)
              }Fd(e, d) && (b.effectTag |= 4)
            } null !== b.ref && (b.effectTag |= 128)
          } return null; case 6: if (a && null != b.stateNode) qi(a, b, a.memoizedProps, d); else {
            if ("string" !== typeof d && null === b.stateNode) throw Error(u(166));
            c = ch(bh.current); ch($g.current); Wh(b) ? (c = b.stateNode, d = b.memoizedProps, c[Md] = b, c.nodeValue !== d && (b.effectTag |= 4)) : (c = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), c[Md] = b, b.stateNode = c)
          } return null; case 13: H(M); d = b.memoizedState; if (0 !== (b.effectTag & 64)) return b.expirationTime = c, b; c = null !== d; d = !1; null === a ? void 0 !== b.memoizedProps.fallback && Wh(b) : (e = a.memoizedState, d = null !== e, c || null === e || (e = a.child.sibling, null !== e && (f = b.firstEffect, null !== f ? (b.firstEffect = e, e.nextEffect = f) : (b.firstEffect = b.lastEffect =
            e, e.nextEffect = null), e.effectTag = 8))); if (c && !d && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & 1)) S === ti && (S = ui); else { if (S === ti || S === ui) S = vi; 0 !== wi && null !== T && (xi(T, U), yi(T, wi)) } if (c || d) b.effectTag |= 4; return null; case 4: return eh(), oi(b), null; case 10: return og(b), null; case 17: return L(b.type) && Df(), null; case 19: H(M); d = b.memoizedState; if (null === d) return null; e = 0 !== (b.effectTag & 64); f = d.rendering; if (null === f) if (e) ri(d, !1); else {
              if (S !== ti || null !== a && 0 !== (a.effectTag &
                64)) for (f = b.child; null !== f;) {
                  a = hh(f); if (null !== a) {
                    b.effectTag |= 64; ri(d, !1); e = a.updateQueue; null !== e && (b.updateQueue = e, b.effectTag |= 4); null === d.lastEffect && (b.firstEffect = null); b.lastEffect = d.lastEffect; for (d = b.child; null !== d;)e = d, f = c, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, a = e.alternate, null === a ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = a.childExpirationTime,
                      e.expirationTime = a.expirationTime, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, f = a.dependencies, e.dependencies = null === f ? null : { expirationTime: f.expirationTime, firstContext: f.firstContext, responders: f.responders }), d = d.sibling; I(M, M.current & 1 | 2); return b.child
                  } f = f.sibling
                }
            } else {
              if (!e) if (a = hh(f), null !== a) {
                if (b.effectTag |= 64, e = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.effectTag |= 4), ri(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate) return b =
                  b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null
              } else 2 * $f() - d.renderingStartTime > d.tailExpiration && 1 < c && (b.effectTag |= 64, e = !0, ri(d, !1), b.expirationTime = b.childExpirationTime = c - 1); d.isBackwards ? (f.sibling = b.child, b.child = f) : (c = d.last, null !== c ? c.sibling = f : b.child = f, d.last = f)
            } return null !== d.tail ? (0 === d.tailExpiration && (d.tailExpiration = $f() + 500), c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = $f(), c.sibling = null, b = M.current, I(M, e ? b & 1 | 2 : b & 1), c) : null
        }throw Error(u(156,
          b.tag));
      } function zi(a) { switch (a.tag) { case 1: L(a.type) && Df(); var b = a.effectTag; return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null; case 3: eh(); H(K); H(J); b = a.effectTag; if (0 !== (b & 64)) throw Error(u(285)); a.effectTag = b & -4097 | 64; return a; case 5: return gh(a), null; case 13: return H(M), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null; case 19: return H(M), null; case 4: return eh(), null; case 10: return og(a), null; default: return null } } function Ai(a, b) { return { value: a, source: b, stack: qb(b) } }
      var Bi = "function" === typeof WeakSet ? WeakSet : Set; function Ci(a, b) { var c = b.source, d = b.stack; null === d && null !== c && (d = qb(c)); null !== c && pb(c.type); b = b.value; null !== a && 1 === a.tag && pb(a.type); try { console.error(b) } catch (e) { setTimeout(function () { throw e; }) } } function Di(a, b) { try { b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount() } catch (c) { Ei(a, c) } } function Fi(a) { var b = a.ref; if (null !== b) if ("function" === typeof b) try { b(null) } catch (c) { Ei(a, c) } else b.current = null }
      function Gi(a, b) { switch (b.tag) { case 0: case 11: case 15: case 22: return; case 1: if (b.effectTag & 256 && null !== a) { var c = a.memoizedProps, d = a.memoizedState; a = b.stateNode; b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : ig(b.type, c), d); a.__reactInternalSnapshotBeforeUpdate = b } return; case 3: case 5: case 6: case 4: case 17: return }throw Error(u(163)); }
      function Hi(a, b) { b = b.updateQueue; b = null !== b ? b.lastEffect : null; if (null !== b) { var c = b = b.next; do { if ((c.tag & a) === a) { var d = c.destroy; c.destroy = void 0; void 0 !== d && d() } c = c.next } while (c !== b) } } function Ii(a, b) { b = b.updateQueue; b = null !== b ? b.lastEffect : null; if (null !== b) { var c = b = b.next; do { if ((c.tag & a) === a) { var d = c.create; c.destroy = d() } c = c.next } while (c !== b) } }
      function Ji(a, b, c) {
        switch (c.tag) {
          case 0: case 11: case 15: case 22: Ii(3, c); return; case 1: a = c.stateNode; if (c.effectTag & 4) if (null === b) a.componentDidMount(); else { var d = c.elementType === c.type ? b.memoizedProps : ig(c.type, b.memoizedProps); a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate) } b = c.updateQueue; null !== b && Cg(c, b, a); return; case 3: b = c.updateQueue; if (null !== b) { a = null; if (null !== c.child) switch (c.child.tag) { case 5: a = c.child.stateNode; break; case 1: a = c.child.stateNode }Cg(c, b, a) } return;
          case 5: a = c.stateNode; null === b && c.effectTag & 4 && Fd(c.type, c.memoizedProps) && a.focus(); return; case 6: return; case 4: return; case 12: return; case 13: null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Vc(c)))); return; case 19: case 17: case 20: case 21: return
        }throw Error(u(163));
      }
      function Ki(a, b, c) { "function" === typeof Li && Li(b); switch (b.tag) { case 0: case 11: case 14: case 15: case 22: a = b.updateQueue; if (null !== a && (a = a.lastEffect, null !== a)) { var d = a.next; cg(97 < c ? 97 : c, function () { var a = d; do { var c = a.destroy; if (void 0 !== c) { var g = b; try { c() } catch (h) { Ei(g, h) } } a = a.next } while (a !== d) }) } break; case 1: Fi(b); c = b.stateNode; "function" === typeof c.componentWillUnmount && Di(b, c); break; case 5: Fi(b); break; case 4: Mi(a, b, c) } }
      function Ni(a) { var b = a.alternate; a.return = null; a.child = null; a.memoizedState = null; a.updateQueue = null; a.dependencies = null; a.alternate = null; a.firstEffect = null; a.lastEffect = null; a.pendingProps = null; a.memoizedProps = null; a.stateNode = null; null !== b && Ni(b) } function Oi(a) { return 5 === a.tag || 3 === a.tag || 4 === a.tag }
      function Pi(a) {
        a: { for (var b = a.return; null !== b;) { if (Oi(b)) { var c = b; break a } b = b.return } throw Error(u(160)); } b = c.stateNode; switch (c.tag) { case 5: var d = !1; break; case 3: b = b.containerInfo; d = !0; break; case 4: b = b.containerInfo; d = !0; break; default: throw Error(u(161)); }c.effectTag & 16 && (Rb(b, ""), c.effectTag &= -17); a: b: for (c = a; ;) {
          for (; null === c.sibling;) { if (null === c.return || Oi(c.return)) { c = null; break a } c = c.return } c.sibling.return = c.return; for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
            if (c.effectTag & 2) continue b;
            if (null === c.child || 4 === c.tag) continue b; else c.child.return = c, c = c.child
          } if (!(c.effectTag & 2)) { c = c.stateNode; break a }
        } d ? Qi(a, c, b) : Ri(a, c, b)
      }
      function Qi(a, b, c) { var d = a.tag, e = 5 === d || 6 === d; if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = sd)); else if (4 !== d && (a = a.child, null !== a)) for (Qi(a, b, c), a = a.sibling; null !== a;)Qi(a, b, c), a = a.sibling }
      function Ri(a, b, c) { var d = a.tag, e = 5 === d || 6 === d; if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a); else if (4 !== d && (a = a.child, null !== a)) for (Ri(a, b, c), a = a.sibling; null !== a;)Ri(a, b, c), a = a.sibling }
      function Mi(a, b, c) {
        for (var d = b, e = !1, f, g; ;) {
          if (!e) { e = d.return; a: for (; ;) { if (null === e) throw Error(u(160)); f = e.stateNode; switch (e.tag) { case 5: g = !1; break a; case 3: f = f.containerInfo; g = !0; break a; case 4: f = f.containerInfo; g = !0; break a }e = e.return } e = !0 } if (5 === d.tag || 6 === d.tag) {
            a: for (var h = a, k = d, l = c, m = k; ;)if (Ki(h, m, l), null !== m.child && 4 !== m.tag) m.child.return = m, m = m.child; else { if (m === k) break a; for (; null === m.sibling;) { if (null === m.return || m.return === k) break a; m = m.return } m.sibling.return = m.return; m = m.sibling } g ? (h =
              f, k = d.stateNode, 8 === h.nodeType ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode)
          } else if (4 === d.tag) { if (null !== d.child) { f = d.stateNode.containerInfo; g = !0; d.child.return = d; d = d.child; continue } } else if (Ki(a, d, c), null !== d.child) { d.child.return = d; d = d.child; continue } if (d === b) break; for (; null === d.sibling;) { if (null === d.return || d.return === b) return; d = d.return; 4 === d.tag && (e = !1) } d.sibling.return = d.return; d = d.sibling
        }
      }
      function Si(a, b) {
        switch (b.tag) {
          case 0: case 11: case 14: case 15: case 22: Hi(3, b); return; case 1: return; case 5: var c = b.stateNode; if (null != c) {
            var d = b.memoizedProps, e = null !== a ? a.memoizedProps : d; a = b.type; var f = b.updateQueue; b.updateQueue = null; if (null !== f) {
              c[Nd] = d; "input" === a && "radio" === d.type && null != d.name && Bb(c, d); pd(a, e); b = pd(a, d); for (e = 0; e < f.length; e += 2) { var g = f[e], h = f[e + 1]; "style" === g ? md(c, h) : "dangerouslySetInnerHTML" === g ? Qb(c, h) : "children" === g ? Rb(c, h) : Xa(c, g, h, b) } switch (a) {
                case "input": Cb(c, d); break;
                case "textarea": Kb(c, d); break; case "select": b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, null != a ? Hb(c, !!d.multiple, a, !1) : b !== !!d.multiple && (null != d.defaultValue ? Hb(c, !!d.multiple, d.defaultValue, !0) : Hb(c, !!d.multiple, d.multiple ? [] : "", !1))
              }
            }
          } return; case 6: if (null === b.stateNode) throw Error(u(162)); b.stateNode.nodeValue = b.memoizedProps; return; case 3: b = b.stateNode; b.hydrate && (b.hydrate = !1, Vc(b.containerInfo)); return; case 12: return; case 13: c = b; null === b.memoizedState ?
            d = !1 : (d = !0, c = b.child, Ti = $f()); if (null !== c) a: for (a = c; ;) {
              if (5 === a.tag) f = a.stateNode, d ? (f = f.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null, f.style.display = ld("display", e)); else if (6 === a.tag) a.stateNode.nodeValue = d ? "" : a.memoizedProps; else if (13 === a.tag && null !== a.memoizedState && null === a.memoizedState.dehydrated) {
                f = a.child.sibling; f.return = a; a =
                  f; continue
              } else if (null !== a.child) { a.child.return = a; a = a.child; continue } if (a === c) break; for (; null === a.sibling;) { if (null === a.return || a.return === c) break a; a = a.return } a.sibling.return = a.return; a = a.sibling
            } Ui(b); return; case 19: Ui(b); return; case 17: return
        }throw Error(u(163));
      } function Ui(a) { var b = a.updateQueue; if (null !== b) { a.updateQueue = null; var c = a.stateNode; null === c && (c = a.stateNode = new Bi); b.forEach(function (b) { var d = Vi.bind(null, a, b); c.has(b) || (c.add(b), b.then(d, d)) }) } }
      var Wi = "function" === typeof WeakMap ? WeakMap : Map; function Xi(a, b, c) { c = wg(c, null); c.tag = 3; c.payload = { element: null }; var d = b.value; c.callback = function () { Yi || (Yi = !0, Zi = d); Ci(a, b) }; return c }
      function $i(a, b, c) { c = wg(c, null); c.tag = 3; var d = a.type.getDerivedStateFromError; if ("function" === typeof d) { var e = b.value; c.payload = function () { Ci(a, b); return d(e) } } var f = a.stateNode; null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () { "function" !== typeof d && (null === aj ? aj = new Set([this]) : aj.add(this), Ci(a, b)); var c = b.stack; this.componentDidCatch(b.value, { componentStack: null !== c ? c : "" }) }); return c }
      var bj = Math.ceil, cj = Wa.ReactCurrentDispatcher, dj = Wa.ReactCurrentOwner, V = 0, ej = 8, fj = 16, gj = 32, ti = 0, hj = 1, ij = 2, ui = 3, vi = 4, jj = 5, W = V, T = null, X = null, U = 0, S = ti, kj = null, lj = 1073741823, mj = 1073741823, nj = null, wi = 0, oj = !1, Ti = 0, pj = 500, Y = null, Yi = !1, Zi = null, aj = null, qj = !1, rj = null, sj = 90, tj = null, uj = 0, vj = null, wj = 0; function Gg() { return (W & (fj | gj)) !== V ? 1073741821 - ($f() / 10 | 0) : 0 !== wj ? wj : wj = 1073741821 - ($f() / 10 | 0) }
      function Hg(a, b, c) { b = b.mode; if (0 === (b & 2)) return 1073741823; var d = ag(); if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822; if ((W & fj) !== V) return U; if (null !== c) a = hg(a, c.timeoutMs | 0 || 5E3, 250); else switch (d) { case 99: a = 1073741823; break; case 98: a = hg(a, 150, 100); break; case 97: case 96: a = hg(a, 5E3, 250); break; case 95: a = 2; break; default: throw Error(u(326)); }null !== T && a === U && --a; return a }
      function Ig(a, b) { if (50 < uj) throw uj = 0, vj = null, Error(u(185)); a = xj(a, b); if (null !== a) { var c = ag(); 1073741823 === b ? (W & ej) !== V && (W & (fj | gj)) === V ? yj(a) : (Z(a), W === V && gg()) : Z(a); (W & 4) === V || 98 !== c && 99 !== c || (null === tj ? tj = new Map([[a, b]]) : (c = tj.get(a), (void 0 === c || c > b) && tj.set(a, b))) } }
      function xj(a, b) { a.expirationTime < b && (a.expirationTime = b); var c = a.alternate; null !== c && c.expirationTime < b && (c.expirationTime = b); var d = a.return, e = null; if (null === d && 3 === a.tag) e = a.stateNode; else for (; null !== d;) { c = d.alternate; d.childExpirationTime < b && (d.childExpirationTime = b); null !== c && c.childExpirationTime < b && (c.childExpirationTime = b); if (null === d.return && 3 === d.tag) { e = d.stateNode; break } d = d.return } null !== e && (T === e && (Bg(b), S === vi && xi(e, U)), yi(e, b)); return e }
      function zj(a) { var b = a.lastExpiredTime; if (0 !== b) return b; b = a.firstPendingTime; if (!Aj(a, b)) return b; var c = a.lastPingedTime; a = a.nextKnownPendingLevel; a = c > a ? c : a; return 2 >= a && b !== a ? 0 : a }
      function Z(a) {
        if (0 !== a.lastExpiredTime) a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = eg(yj.bind(null, a)); else {
          var b = zj(a), c = a.callbackNode; if (0 === b) null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90); else {
            var d = Gg(); 1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95); if (null !== c) { var e = a.callbackPriority; if (a.callbackExpirationTime === b && e >= d) return; c !== Tf && Kf(c) } a.callbackExpirationTime =
              b; a.callbackPriority = d; b = 1073741823 === b ? eg(yj.bind(null, a)) : dg(d, Bj.bind(null, a), { timeout: 10 * (1073741821 - b) - $f() }); a.callbackNode = b
          }
        }
      }
      function Bj(a, b) {
        wj = 0; if (b) return b = Gg(), Cj(a, b), Z(a), null; var c = zj(a); if (0 !== c) {
          b = a.callbackNode; if ((W & (fj | gj)) !== V) throw Error(u(327)); Dj(); a === T && c === U || Ej(a, c); if (null !== X) {
            var d = W; W |= fj; var e = Fj(); do try { Gj(); break } catch (h) { Hj(a, h) } while (1); ng(); W = d; cj.current = e; if (S === hj) throw b = kj, Ej(a, c), xi(a, c), Z(a), b; if (null === X) switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = S, T = null, d) {
              case ti: case hj: throw Error(u(345)); case ij: Cj(a, 2 < c ? 2 : c); break; case ui: xi(a, c); d = a.lastSuspendedTime;
                c === d && (a.nextKnownPendingLevel = Ij(e)); if (1073741823 === lj && (e = Ti + pj - $f(), 10 < e)) { if (oj) { var f = a.lastPingedTime; if (0 === f || f >= c) { a.lastPingedTime = c; Ej(a, c); break } } f = zj(a); if (0 !== f && f !== c) break; if (0 !== d && d !== c) { a.lastPingedTime = d; break } a.timeoutHandle = Hd(Jj.bind(null, a), e); break } Jj(a); break; case vi: xi(a, c); d = a.lastSuspendedTime; c === d && (a.nextKnownPendingLevel = Ij(e)); if (oj && (e = a.lastPingedTime, 0 === e || e >= c)) { a.lastPingedTime = c; Ej(a, c); break } e = zj(a); if (0 !== e && e !== c) break; if (0 !== d && d !== c) {
                  a.lastPingedTime =
                  d; break
                } 1073741823 !== mj ? d = 10 * (1073741821 - mj) - $f() : 1073741823 === lj ? d = 0 : (d = 10 * (1073741821 - lj) - 5E3, e = $f(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * bj(d / 1960)) - d, c < d && (d = c)); if (10 < d) { a.timeoutHandle = Hd(Jj.bind(null, a), d); break } Jj(a); break; case jj: if (1073741823 !== lj && null !== nj) {
                  f = lj; var g = nj; d = g.busyMinDurationMs | 0; 0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = $f() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5E3)), d = f <= e ? 0 : e + d - f); if (10 < d) {
                    xi(a, c); a.timeoutHandle =
                      Hd(Jj.bind(null, a), d); break
                  }
                } Jj(a); break; default: throw Error(u(329));
            }Z(a); if (a.callbackNode === b) return Bj.bind(null, a)
          }
        } return null
      }
      function yj(a) { var b = a.lastExpiredTime; b = 0 !== b ? b : 1073741823; if ((W & (fj | gj)) !== V) throw Error(u(327)); Dj(); a === T && b === U || Ej(a, b); if (null !== X) { var c = W; W |= fj; var d = Fj(); do try { Kj(); break } catch (e) { Hj(a, e) } while (1); ng(); W = c; cj.current = d; if (S === hj) throw c = kj, Ej(a, b), xi(a, b), Z(a), c; if (null !== X) throw Error(u(261)); a.finishedWork = a.current.alternate; a.finishedExpirationTime = b; T = null; Jj(a); Z(a) } return null } function Lj() { if (null !== tj) { var a = tj; tj = null; a.forEach(function (a, c) { Cj(c, a); Z(c) }); gg() } }
      function Mj(a, b) { var c = W; W |= 1; try { return a(b) } finally { W = c, W === V && gg() } } function Nj(a, b) { var c = W; W &= -2; W |= ej; try { return a(b) } finally { W = c, W === V && gg() } }
      function Ej(a, b) { a.finishedWork = null; a.finishedExpirationTime = 0; var c = a.timeoutHandle; -1 !== c && (a.timeoutHandle = -1, Id(c)); if (null !== X) for (c = X.return; null !== c;) { var d = c; switch (d.tag) { case 1: d = d.type.childContextTypes; null !== d && void 0 !== d && Df(); break; case 3: eh(); H(K); H(J); break; case 5: gh(d); break; case 4: eh(); break; case 13: H(M); break; case 19: H(M); break; case 10: og(d) }c = c.return } T = a; X = Sg(a.current, null); U = b; S = ti; kj = null; mj = lj = 1073741823; nj = null; wi = 0; oj = !1 }
      function Hj(a, b) {
        do {
          try {
            ng(); jh.current = sh; if (mh) for (var c = N.memoizedState; null !== c;) { var d = c.queue; null !== d && (d.pending = null); c = c.next } lh = 0; P = O = N = null; mh = !1; if (null === X || null === X.return) return S = hj, kj = b, X = null; a: {
              var e = a, f = X.return, g = X, h = b; b = U; g.effectTag |= 2048; g.firstEffect = g.lastEffect = null; if (null !== h && "object" === typeof h && "function" === typeof h.then) {
                var k = h; if (0 === (g.mode & 2)) {
                  var l = g.alternate; l ? (g.updateQueue = l.updateQueue, g.memoizedState = l.memoizedState, g.expirationTime = l.expirationTime) : (g.updateQueue =
                    null, g.memoizedState = null)
                } var m = 0 !== (M.current & 1), p = f; do {
                  var x; if (x = 13 === p.tag) { var z = p.memoizedState; if (null !== z) x = null !== z.dehydrated ? !0 : !1; else { var ca = p.memoizedProps; x = void 0 === ca.fallback ? !1 : !0 !== ca.unstable_avoidThisFallback ? !0 : m ? !1 : !0 } } if (x) {
                    var D = p.updateQueue; if (null === D) { var t = new Set; t.add(k); p.updateQueue = t } else D.add(k); if (0 === (p.mode & 2)) {
                      p.effectTag |= 64; g.effectTag &= -2981; if (1 === g.tag) if (null === g.alternate) g.tag = 17; else { var y = wg(1073741823, null); y.tag = 2; xg(g, y) } g.expirationTime = 1073741823;
                      break a
                    } h = void 0; g = b; var A = e.pingCache; null === A ? (A = e.pingCache = new Wi, h = new Set, A.set(k, h)) : (h = A.get(k), void 0 === h && (h = new Set, A.set(k, h))); if (!h.has(g)) { h.add(g); var q = Oj.bind(null, e, k, g); k.then(q, q) } p.effectTag |= 4096; p.expirationTime = b; break a
                  } p = p.return
                } while (null !== p); h = Error((pb(g.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + qb(g))
              } S !==
                jj && (S = ij); h = Ai(h, g); p = f; do { switch (p.tag) { case 3: k = h; p.effectTag |= 4096; p.expirationTime = b; var B = Xi(p, k, b); yg(p, B); break a; case 1: k = h; var w = p.type, ub = p.stateNode; if (0 === (p.effectTag & 64) && ("function" === typeof w.getDerivedStateFromError || null !== ub && "function" === typeof ub.componentDidCatch && (null === aj || !aj.has(ub)))) { p.effectTag |= 4096; p.expirationTime = b; var vb = $i(p, k, b); yg(p, vb); break a } }p = p.return } while (null !== p)
            } X = Pj(X)
          } catch (Xc) { b = Xc; continue } break
        } while (1)
      }
      function Fj() { var a = cj.current; cj.current = sh; return null === a ? sh : a } function Ag(a, b) { a < lj && 2 < a && (lj = a); null !== b && a < mj && 2 < a && (mj = a, nj = b) } function Bg(a) { a > wi && (wi = a) } function Kj() { for (; null !== X;)X = Qj(X) } function Gj() { for (; null !== X && !Uf();)X = Qj(X) } function Qj(a) { var b = Rj(a.alternate, a, U); a.memoizedProps = a.pendingProps; null === b && (b = Pj(a)); dj.current = null; return b }
      function Pj(a) {
        X = a; do {
          var b = X.alternate; a = X.return; if (0 === (X.effectTag & 2048)) {
            b = si(b, X, U); if (1 === U || 1 !== X.childExpirationTime) { for (var c = 0, d = X.child; null !== d;) { var e = d.expirationTime, f = d.childExpirationTime; e > c && (c = e); f > c && (c = f); d = d.sibling } X.childExpirationTime = c } if (null !== b) return b; null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = X.firstEffect), null !== X.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = X.firstEffect), a.lastEffect = X.lastEffect), 1 < X.effectTag && (null !==
              a.lastEffect ? a.lastEffect.nextEffect = X : a.firstEffect = X, a.lastEffect = X))
          } else { b = zi(X); if (null !== b) return b.effectTag &= 2047, b; null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048) } b = X.sibling; if (null !== b) return b; X = a
        } while (null !== X); S === ti && (S = jj); return null
      } function Ij(a) { var b = a.expirationTime; a = a.childExpirationTime; return b > a ? b : a } function Jj(a) { var b = ag(); cg(99, Sj.bind(null, a, b)); return null }
      function Sj(a, b) {
        do Dj(); while (null !== rj); if ((W & (fj | gj)) !== V) throw Error(u(327)); var c = a.finishedWork, d = a.finishedExpirationTime; if (null === c) return null; a.finishedWork = null; a.finishedExpirationTime = 0; if (c === a.current) throw Error(u(177)); a.callbackNode = null; a.callbackExpirationTime = 0; a.callbackPriority = 90; a.nextKnownPendingLevel = 0; var e = Ij(c); a.firstPendingTime = e; d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime =
          d - 1); d <= a.lastPingedTime && (a.lastPingedTime = 0); d <= a.lastExpiredTime && (a.lastExpiredTime = 0); a === T && (X = T = null, U = 0); 1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect; if (null !== e) {
            var f = W; W |= gj; dj.current = null; Dd = fd; var g = xd(); if (yd(g)) {
              if ("selectionStart" in g) var h = { start: g.selectionStart, end: g.selectionEnd }; else a: {
                h = (h = g.ownerDocument) && h.defaultView || window; var k = h.getSelection && h.getSelection(); if (k && 0 !== k.rangeCount) {
                  h = k.anchorNode; var l = k.anchorOffset,
                    m = k.focusNode; k = k.focusOffset; try { h.nodeType, m.nodeType } catch (wb) { h = null; break a } var p = 0, x = -1, z = -1, ca = 0, D = 0, t = g, y = null; b: for (; ;) { for (var A; ;) { t !== h || 0 !== l && 3 !== t.nodeType || (x = p + l); t !== m || 0 !== k && 3 !== t.nodeType || (z = p + k); 3 === t.nodeType && (p += t.nodeValue.length); if (null === (A = t.firstChild)) break; y = t; t = A } for (; ;) { if (t === g) break b; y === h && ++ca === l && (x = p); y === m && ++D === k && (z = p); if (null !== (A = t.nextSibling)) break; t = y; y = t.parentNode } t = A } h = -1 === x || -1 === z ? null : { start: x, end: z }
                } else h = null
              } h = h || { start: 0, end: 0 }
            } else h =
              null; Ed = { activeElementDetached: null, focusedElem: g, selectionRange: h }; fd = !1; Y = e; do try { Tj() } catch (wb) { if (null === Y) throw Error(u(330)); Ei(Y, wb); Y = Y.nextEffect } while (null !== Y); Y = e; do try {
                for (g = a, h = b; null !== Y;) {
                  var q = Y.effectTag; q & 16 && Rb(Y.stateNode, ""); if (q & 128) { var B = Y.alternate; if (null !== B) { var w = B.ref; null !== w && ("function" === typeof w ? w(null) : w.current = null) } } switch (q & 1038) {
                    case 2: Pi(Y); Y.effectTag &= -3; break; case 6: Pi(Y); Y.effectTag &= -3; Si(Y.alternate, Y); break; case 1024: Y.effectTag &= -1025; break; case 1028: Y.effectTag &=
                      -1025; Si(Y.alternate, Y); break; case 4: Si(Y.alternate, Y); break; case 8: l = Y, Mi(g, l, h), Ni(l)
                  }Y = Y.nextEffect
                }
              } catch (wb) { if (null === Y) throw Error(u(330)); Ei(Y, wb); Y = Y.nextEffect } while (null !== Y); w = Ed; B = xd(); q = w.focusedElem; h = w.selectionRange; if (B !== q && q && q.ownerDocument && wd(q.ownerDocument.documentElement, q)) {
                null !== h && yd(q) && (B = h.start, w = h.end, void 0 === w && (w = B), "selectionStart" in q ? (q.selectionStart = B, q.selectionEnd = Math.min(w, q.value.length)) : (w = (B = q.ownerDocument || document) && B.defaultView || window, w.getSelection &&
                  (w = w.getSelection(), l = q.textContent.length, g = Math.min(h.start, l), h = void 0 === h.end ? g : Math.min(h.end, l), !w.extend && g > h && (l = h, h = g, g = l), l = vd(q, g), m = vd(q, h), l && m && (1 !== w.rangeCount || w.anchorNode !== l.node || w.anchorOffset !== l.offset || w.focusNode !== m.node || w.focusOffset !== m.offset) && (B = B.createRange(), B.setStart(l.node, l.offset), w.removeAllRanges(), g > h ? (w.addRange(B), w.extend(m.node, m.offset)) : (B.setEnd(m.node, m.offset), w.addRange(B)))))); B = []; for (w = q; w = w.parentNode;)1 === w.nodeType && B.push({
                    element: w, left: w.scrollLeft,
                    top: w.scrollTop
                  }); "function" === typeof q.focus && q.focus(); for (q = 0; q < B.length; q++)w = B[q], w.element.scrollLeft = w.left, w.element.scrollTop = w.top
              } fd = !!Dd; Ed = Dd = null; a.current = c; Y = e; do try { for (q = a; null !== Y;) { var ub = Y.effectTag; ub & 36 && Ji(q, Y.alternate, Y); if (ub & 128) { B = void 0; var vb = Y.ref; if (null !== vb) { var Xc = Y.stateNode; switch (Y.tag) { case 5: B = Xc; break; default: B = Xc }"function" === typeof vb ? vb(B) : vb.current = B } } Y = Y.nextEffect } } catch (wb) { if (null === Y) throw Error(u(330)); Ei(Y, wb); Y = Y.nextEffect } while (null !== Y); Y =
                null; Vf(); W = f
          } else a.current = c; if (qj) qj = !1, rj = a, sj = b; else for (Y = e; null !== Y;)b = Y.nextEffect, Y.nextEffect = null, Y = b; b = a.firstPendingTime; 0 === b && (aj = null); 1073741823 === b ? a === vj ? uj++ : (uj = 0, vj = a) : uj = 0; "function" === typeof Uj && Uj(c.stateNode, d); Z(a); if (Yi) throw Yi = !1, a = Zi, Zi = null, a; if ((W & ej) !== V) return null; gg(); return null
      } function Tj() { for (; null !== Y;) { var a = Y.effectTag; 0 !== (a & 256) && Gi(Y.alternate, Y); 0 === (a & 512) || qj || (qj = !0, dg(97, function () { Dj(); return null })); Y = Y.nextEffect } }
      function Dj() { if (90 !== sj) { var a = 97 < sj ? 97 : sj; sj = 90; return cg(a, Vj) } } function Vj() { if (null === rj) return !1; var a = rj; rj = null; if ((W & (fj | gj)) !== V) throw Error(u(331)); var b = W; W |= gj; for (a = a.current.firstEffect; null !== a;) { try { var c = a; if (0 !== (c.effectTag & 512)) switch (c.tag) { case 0: case 11: case 15: case 22: Hi(5, c), Ii(5, c) } } catch (d) { if (null === a) throw Error(u(330)); Ei(a, d) } c = a.nextEffect; a.nextEffect = null; a = c } W = b; gg(); return !0 }
      function Wj(a, b, c) { b = Ai(c, b); b = Xi(a, b, 1073741823); xg(a, b); a = xj(a, 1073741823); null !== a && Z(a) } function Ei(a, b) { if (3 === a.tag) Wj(a, a, b); else for (var c = a.return; null !== c;) { if (3 === c.tag) { Wj(c, a, b); break } else if (1 === c.tag) { var d = c.stateNode; if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === aj || !aj.has(d))) { a = Ai(b, a); a = $i(c, a, 1073741823); xg(c, a); c = xj(c, 1073741823); null !== c && Z(c); break } } c = c.return } }
      function Oj(a, b, c) { var d = a.pingCache; null !== d && d.delete(b); T === a && U === c ? S === vi || S === ui && 1073741823 === lj && $f() - Ti < pj ? Ej(a, U) : oj = !0 : Aj(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, Z(a))) } function Vi(a, b) { var c = a.stateNode; null !== c && c.delete(b); b = 0; 0 === b && (b = Gg(), b = Hg(b, a, null)); a = xj(a, b); null !== a && Z(a) } var Rj;
      Rj = function (a, b, c) {
        var d = b.expirationTime; if (null !== a) {
          var e = b.pendingProps; if (a.memoizedProps !== e || K.current) rg = !0; else {
            if (d < c) {
              rg = !1; switch (b.tag) {
                case 3: hi(b); Xh(); break; case 5: fh(b); if (b.mode & 4 && 1 !== c && e.hidden) return b.expirationTime = b.childExpirationTime = 1, null; break; case 1: L(b.type) && Gf(b); break; case 4: dh(b, b.stateNode.containerInfo); break; case 10: d = b.memoizedProps.value; e = b.type._context; I(jg, e._currentValue); e._currentValue = d; break; case 13: if (null !== b.memoizedState) {
                  d = b.child.childExpirationTime;
                  if (0 !== d && d >= c) return ji(a, b, c); I(M, M.current & 1); b = $h(a, b, c); return null !== b ? b.sibling : null
                } I(M, M.current & 1); break; case 19: d = b.childExpirationTime >= c; if (0 !== (a.effectTag & 64)) { if (d) return mi(a, b, c); b.effectTag |= 64 } e = b.memoizedState; null !== e && (e.rendering = null, e.tail = null); I(M, M.current); if (!d) return null
              }return $h(a, b, c)
            } rg = !1
          }
        } else rg = !1; b.expirationTime = 0; switch (b.tag) {
          case 2: d = b.type; null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2); a = b.pendingProps; e = Cf(b, J.current); qg(b, c); e = oh(null,
            b, d, a, e, c); b.effectTag |= 1; if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) { b.tag = 1; b.memoizedState = null; b.updateQueue = null; if (L(d)) { var f = !0; Gf(b) } else f = !1; b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null; ug(b); var g = d.getDerivedStateFromProps; "function" === typeof g && Fg(b, d, g, a); e.updater = Jg; b.stateNode = e; e._reactInternalFiber = b; Ng(b, d, a, c); b = gi(null, b, d, !0, f, c) } else b.tag = 0, R(null, b, e, c), b = b.child; return b; case 16: a: {
              e = b.elementType; null !== a && (a.alternate =
                null, b.alternate = null, b.effectTag |= 2); a = b.pendingProps; ob(e); if (1 !== e._status) throw e._result; e = e._result; b.type = e; f = b.tag = Xj(e); a = ig(e, a); switch (f) { case 0: b = di(null, b, e, a, c); break a; case 1: b = fi(null, b, e, a, c); break a; case 11: b = Zh(null, b, e, a, c); break a; case 14: b = ai(null, b, e, ig(e.type, a), d, c); break a }throw Error(u(306, e, ""));
            } return b; case 0: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), di(a, b, d, e, c); case 1: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), fi(a, b, d, e, c);
          case 3: hi(b); d = b.updateQueue; if (null === a || null === d) throw Error(u(282)); d = b.pendingProps; e = b.memoizedState; e = null !== e ? e.element : null; vg(a, b); zg(b, d, null, c); d = b.memoizedState.element; if (d === e) Xh(), b = $h(a, b, c); else { if (e = b.stateNode.hydrate) Ph = Jd(b.stateNode.containerInfo.firstChild), Oh = b, e = Qh = !0; if (e) for (c = Yg(b, null, d, c), b.child = c; c;)c.effectTag = c.effectTag & -3 | 1024, c = c.sibling; else R(a, b, d, c), Xh(); b = b.child } return b; case 5: return fh(b), null === a && Uh(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps :
            null, g = e.children, Gd(d, e) ? g = null : null !== f && Gd(d, f) && (b.effectTag |= 16), ei(a, b), b.mode & 4 && 1 !== c && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R(a, b, g, c), b = b.child), b; case 6: return null === a && Uh(b), null; case 13: return ji(a, b, c); case 4: return dh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Xg(b, null, d, c) : R(a, b, d, c), b.child; case 11: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), Zh(a, b, d, e, c); case 7: return R(a, b, b.pendingProps, c), b.child; case 8: return R(a,
              b, b.pendingProps.children, c), b.child; case 12: return R(a, b, b.pendingProps.children, c), b.child; case 10: a: {
                d = b.type._context; e = b.pendingProps; g = b.memoizedProps; f = e.value; var h = b.type._context; I(jg, h._currentValue); h._currentValue = f; if (null !== g) if (h = g.value, f = $e(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) { if (g.children === e.children && !K.current) { b = $h(a, b, c); break a } } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
                  var k = h.dependencies; if (null !==
                    k) { g = h.child; for (var l = k.firstContext; null !== l;) { if (l.context === d && 0 !== (l.observedBits & f)) { 1 === h.tag && (l = wg(c, null), l.tag = 2, xg(h, l)); h.expirationTime < c && (h.expirationTime = c); l = h.alternate; null !== l && l.expirationTime < c && (l.expirationTime = c); pg(h.return, c); k.expirationTime < c && (k.expirationTime = c); break } l = l.next } } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child; if (null !== g) g.return = h; else for (g = h; null !== g;) { if (g === b) { g = null; break } h = g.sibling; if (null !== h) { h.return = g.return; g = h; break } g = g.return } h =
                      g
                } R(a, b, e.children, c); b = b.child
              } return b; case 9: return e = b.type, f = b.pendingProps, d = f.children, qg(b, c), e = sg(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R(a, b, d, c), b.child; case 14: return e = b.type, f = ig(e, b.pendingProps), f = ig(e.type, f), ai(a, b, e, f, d, c); case 15: return ci(a, b, b.type, b.pendingProps, d, c); case 17: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, L(d) ? (a = !0, Gf(b)) : a = !1, qg(b, c), Lg(b, d, e), Ng(b, d, e, c), gi(null,
                b, d, !0, a, c); case 19: return mi(a, b, c)
        }throw Error(u(156, b.tag));
      }; var Uj = null, Li = null; function Yj(a) { if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1; var b = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (b.isDisabled || !b.supportsFiber) return !0; try { var c = b.inject(a); Uj = function (a) { try { b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64)) } catch (e) { } }; Li = function (a) { try { b.onCommitFiberUnmount(c, a) } catch (e) { } } } catch (d) { } return !0 }
      function Zj(a, b, c, d) { this.tag = a; this.key = c; this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null; this.index = 0; this.ref = null; this.pendingProps = b; this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null; this.mode = d; this.effectTag = 0; this.lastEffect = this.firstEffect = this.nextEffect = null; this.childExpirationTime = this.expirationTime = 0; this.alternate = null } function Sh(a, b, c, d) { return new Zj(a, b, c, d) }
      function bi(a) { a = a.prototype; return !(!a || !a.isReactComponent) } function Xj(a) { if ("function" === typeof a) return bi(a) ? 1 : 0; if (void 0 !== a && null !== a) { a = a.$$typeof; if (a === gb) return 11; if (a === jb) return 14 } return 2 }
      function Sg(a, b) {
        var c = a.alternate; null === c ? (c = Sh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null); c.childExpirationTime = a.childExpirationTime; c.expirationTime = a.expirationTime; c.child = a.child; c.memoizedProps = a.memoizedProps; c.memoizedState = a.memoizedState; c.updateQueue = a.updateQueue; b = a.dependencies; c.dependencies = null === b ? null : {
          expirationTime: b.expirationTime,
          firstContext: b.firstContext, responders: b.responders
        }; c.sibling = a.sibling; c.index = a.index; c.ref = a.ref; return c
      }
      function Ug(a, b, c, d, e, f) {
        var g = 2; d = a; if ("function" === typeof a) bi(a) && (g = 1); else if ("string" === typeof a) g = 5; else a: switch (a) {
          case ab: return Wg(c.children, e, f, b); case fb: g = 8; e |= 7; break; case bb: g = 8; e |= 1; break; case cb: return a = Sh(12, c, b, e | 8), a.elementType = cb, a.type = cb, a.expirationTime = f, a; case hb: return a = Sh(13, c, b, e), a.type = hb, a.elementType = hb, a.expirationTime = f, a; case ib: return a = Sh(19, c, b, e), a.elementType = ib, a.expirationTime = f, a; default: if ("object" === typeof a && null !== a) switch (a.$$typeof) {
            case db: g =
              10; break a; case eb: g = 9; break a; case gb: g = 11; break a; case jb: g = 14; break a; case kb: g = 16; d = null; break a; case lb: g = 22; break a
          }throw Error(u(130, null == a ? a : typeof a, ""));
        }b = Sh(g, c, b, e); b.elementType = a; b.type = d; b.expirationTime = f; return b
      } function Wg(a, b, c, d) { a = Sh(7, a, d, b); a.expirationTime = c; return a } function Tg(a, b, c) { a = Sh(6, a, null, b); a.expirationTime = c; return a }
      function Vg(a, b, c) { b = Sh(4, null !== a.children ? a.children : [], a.key, b); b.expirationTime = c; b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation }; return b }
      function ak(a, b, c) { this.tag = b; this.current = null; this.containerInfo = a; this.pingCache = this.pendingChildren = null; this.finishedExpirationTime = 0; this.finishedWork = null; this.timeoutHandle = -1; this.pendingContext = this.context = null; this.hydrate = c; this.callbackNode = null; this.callbackPriority = 90; this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0 }
      function Aj(a, b) { var c = a.firstSuspendedTime; a = a.lastSuspendedTime; return 0 !== c && c >= b && a <= b } function xi(a, b) { var c = a.firstSuspendedTime, d = a.lastSuspendedTime; c < b && (a.firstSuspendedTime = b); if (d > b || 0 === c) a.lastSuspendedTime = b; b <= a.lastPingedTime && (a.lastPingedTime = 0); b <= a.lastExpiredTime && (a.lastExpiredTime = 0) }
      function yi(a, b) { b > a.firstPendingTime && (a.firstPendingTime = b); var c = a.firstSuspendedTime; 0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b)) } function Cj(a, b) { var c = a.lastExpiredTime; if (0 === c || c > b) a.lastExpiredTime = b }
      function bk(a, b, c, d) {
        var e = b.current, f = Gg(), g = Dg.suspense; f = Hg(f, e, g); a: if (c) { c = c._reactInternalFiber; b: { if (dc(c) !== c || 1 !== c.tag) throw Error(u(170)); var h = c; do { switch (h.tag) { case 3: h = h.stateNode.context; break b; case 1: if (L(h.type)) { h = h.stateNode.__reactInternalMemoizedMergedChildContext; break b } }h = h.return } while (null !== h); throw Error(u(171)); } if (1 === c.tag) { var k = c.type; if (L(k)) { c = Ff(c, k, h); break a } } c = h } else c = Af; null === b.context ? b.context = c : b.pendingContext = c; b = wg(f, g); b.payload = { element: a }; d = void 0 ===
          d ? null : d; null !== d && (b.callback = d); xg(e, b); Ig(e, f); return f
      } function ck(a) { a = a.current; if (!a.child) return null; switch (a.child.tag) { case 5: return a.child.stateNode; default: return a.child.stateNode } } function dk(a, b) { a = a.memoizedState; null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b) } function ek(a, b) { dk(a, b); (a = a.alternate) && dk(a, b) }
      function fk(a, b, c) { c = null != c && !0 === c.hydrate; var d = new ak(a, b, c), e = Sh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0); d.current = e; e.stateNode = d; ug(e); a[Od] = d.current; c && 0 !== b && Jc(a, 9 === a.nodeType ? a : a.ownerDocument); this._internalRoot = d } fk.prototype.render = function (a) { bk(a, this._internalRoot, null, null) }; fk.prototype.unmount = function () { var a = this._internalRoot, b = a.containerInfo; bk(null, a, null, function () { b[Od] = null }) };
      function gk(a) { return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue)) } function hk(a, b) { b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot"))); if (!b) for (var c; c = a.lastChild;)a.removeChild(c); return new fk(a, 0, b ? { hydrate: !0 } : void 0) }
      function ik(a, b, c, d, e) { var f = c._reactRootContainer; if (f) { var g = f._internalRoot; if ("function" === typeof e) { var h = e; e = function () { var a = ck(g); h.call(a) } } bk(b, g, a, e) } else { f = c._reactRootContainer = hk(c, d); g = f._internalRoot; if ("function" === typeof e) { var k = e; e = function () { var a = ck(g); k.call(a) } } Nj(function () { bk(b, g, a, e) }) } return ck(g) } function jk(a, b, c) { var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: $a, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c } }
      wc = function (a) { if (13 === a.tag) { var b = hg(Gg(), 150, 100); Ig(a, b); ek(a, b) } }; xc = function (a) { 13 === a.tag && (Ig(a, 3), ek(a, 3)) }; yc = function (a) { if (13 === a.tag) { var b = Gg(); b = Hg(b, a, null); Ig(a, b); ek(a, b) } };
      za = function (a, b, c) { switch (b) { case "input": Cb(a, c); b = c.name; if ("radio" === c.type && null != b) { for (c = a; c.parentNode;)c = c.parentNode; c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]'); for (b = 0; b < c.length; b++) { var d = c[b]; if (d !== a && d.form === a.form) { var e = Qd(d); if (!e) throw Error(u(90)); yb(d); Cb(d, e) } } } break; case "textarea": Kb(a, c); break; case "select": b = c.value, null != b && Hb(a, !!c.multiple, b, !1) } }; Fa = Mj;
      Ga = function (a, b, c, d, e) { var f = W; W |= 4; try { return cg(98, a.bind(null, b, c, d, e)) } finally { W = f, W === V && gg() } }; Ha = function () { (W & (1 | fj | gj)) === V && (Lj(), Dj()) }; Ia = function (a, b) { var c = W; W |= 2; try { return a(b) } finally { W = c, W === V && gg() } }; function kk(a, b) { var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!gk(b)) throw Error(u(200)); return jk(a, b, null, c) } var lk = { Events: [Nc, Pd, Qd, xa, ta, Xd, function (a) { jc(a, Wd) }, Da, Ea, id, mc, Dj, { current: !1 }] };
      (function (a) { var b = a.findFiberByHostInstance; return Yj(n({}, a, { overrideHookState: null, overrideProps: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Wa.ReactCurrentDispatcher, findHostInstanceByFiber: function (a) { a = hc(a); return null === a ? null : a.stateNode }, findFiberByHostInstance: function (a) { return b ? b(a) : null }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null })) })({
        findFiberByHostInstance: tc, bundleType: 0, version: "16.14.0",
        rendererPackageName: "react-dom"
      }); exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lk; exports.createPortal = kk; exports.findDOMNode = function (a) { if (null == a) return null; if (1 === a.nodeType) return a; var b = a._reactInternalFiber; if (void 0 === b) { if ("function" === typeof a.render) throw Error(u(188)); throw Error(u(268, Object.keys(a))); } a = hc(b); a = null === a ? null : a.stateNode; return a };
      exports.flushSync = function (a, b) { if ((W & (fj | gj)) !== V) throw Error(u(187)); var c = W; W |= 1; try { return cg(99, a.bind(null, b)) } finally { W = c, gg() } }; exports.hydrate = function (a, b, c) { if (!gk(b)) throw Error(u(200)); return ik(null, a, b, !0, c) }; exports.render = function (a, b, c) { if (!gk(b)) throw Error(u(200)); return ik(null, a, b, !1, c) };
      exports.unmountComponentAtNode = function (a) { if (!gk(a)) throw Error(u(40)); return a._reactRootContainer ? (Nj(function () { ik(null, null, a, !1, function () { a._reactRootContainer = null; a[Od] = null }) }), !0) : !1 }; exports.unstable_batchedUpdates = Mj; exports.unstable_createPortal = function (a, b) { return kk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null) };
      exports.unstable_renderSubtreeIntoContainer = function (a, b, c, d) { if (!gk(c)) throw Error(u(200)); if (null == a || void 0 === a._reactInternalFiber) throw Error(u(38)); return ik(a, b, c, !1, d) }; exports.version = "16.14.0";


      /***/
}),
/* 232 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";


      if (true) {
        module.exports = __webpack_require__(233);
      } else { }


      /***/
}),
/* 233 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      /** @license React v0.19.1
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var f, g, h, k, l;
      if ("undefined" === typeof window || "function" !== typeof MessageChannel) { var p = null, q = null, t = function () { if (null !== p) try { var a = exports.unstable_now(); p(!0, a); p = null } catch (b) { throw setTimeout(t, 0), b; } }, u = Date.now(); exports.unstable_now = function () { return Date.now() - u }; f = function (a) { null !== p ? setTimeout(f, 0, a) : (p = a, setTimeout(t, 0)) }; g = function (a, b) { q = setTimeout(a, b) }; h = function () { clearTimeout(q) }; k = function () { return !1 }; l = exports.unstable_forceFrameRate = function () { } } else {
        var w = window.performance, x = window.Date,
        y = window.setTimeout, z = window.clearTimeout; if ("undefined" !== typeof console) { var A = window.cancelAnimationFrame; "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"); "function" !== typeof A && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills") } if ("object" ===
          typeof w && "function" === typeof w.now) exports.unstable_now = function () { return w.now() }; else { var B = x.now(); exports.unstable_now = function () { return x.now() - B } } var C = !1, D = null, E = -1, F = 5, G = 0; k = function () { return exports.unstable_now() >= G }; l = function () { }; exports.unstable_forceFrameRate = function (a) { 0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : F = 0 < a ? Math.floor(1E3 / a) : 5 }; var H = new MessageChannel, I = H.port2; H.port1.onmessage =
            function () { if (null !== D) { var a = exports.unstable_now(); G = a + F; try { D(!0, a) ? I.postMessage(null) : (C = !1, D = null) } catch (b) { throw I.postMessage(null), b; } } else C = !1 }; f = function (a) { D = a; C || (C = !0, I.postMessage(null)) }; g = function (a, b) { E = y(function () { a(exports.unstable_now()) }, b) }; h = function () { z(E); E = -1 }
      } function J(a, b) { var c = a.length; a.push(b); a: for (; ;) { var d = c - 1 >>> 1, e = a[d]; if (void 0 !== e && 0 < K(e, b)) a[d] = b, a[c] = e, c = d; else break a } } function L(a) { a = a[0]; return void 0 === a ? null : a }
      function M(a) { var b = a[0]; if (void 0 !== b) { var c = a.pop(); if (c !== b) { a[0] = c; a: for (var d = 0, e = a.length; d < e;) { var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v]; if (void 0 !== n && 0 > K(n, c)) void 0 !== r && 0 > K(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m); else if (void 0 !== r && 0 > K(r, c)) a[d] = r, a[v] = c, d = v; else break a } } return b } return null } function K(a, b) { var c = a.sortIndex - b.sortIndex; return 0 !== c ? c : a.id - b.id } var N = [], O = [], P = 1, Q = null, R = 3, S = !1, T = !1, U = !1;
      function V(a) { for (var b = L(O); null !== b;) { if (null === b.callback) M(O); else if (b.startTime <= a) M(O), b.sortIndex = b.expirationTime, J(N, b); else break; b = L(O) } } function W(a) { U = !1; V(a); if (!T) if (null !== L(N)) T = !0, f(X); else { var b = L(O); null !== b && g(W, b.startTime - a) } }
      function X(a, b) { T = !1; U && (U = !1, h()); S = !0; var c = R; try { V(b); for (Q = L(N); null !== Q && (!(Q.expirationTime > b) || a && !k());) { var d = Q.callback; if (null !== d) { Q.callback = null; R = Q.priorityLevel; var e = d(Q.expirationTime <= b); b = exports.unstable_now(); "function" === typeof e ? Q.callback = e : Q === L(N) && M(N); V(b) } else M(N); Q = L(N) } if (null !== Q) var m = !0; else { var n = L(O); null !== n && g(W, n.startTime - b); m = !1 } return m } finally { Q = null, R = c, S = !1 } }
      function Y(a) { switch (a) { case 1: return -1; case 2: return 250; case 5: return 1073741823; case 4: return 1E4; default: return 5E3 } } var Z = l; exports.unstable_IdlePriority = 5; exports.unstable_ImmediatePriority = 1; exports.unstable_LowPriority = 4; exports.unstable_NormalPriority = 3; exports.unstable_Profiling = null; exports.unstable_UserBlockingPriority = 2; exports.unstable_cancelCallback = function (a) { a.callback = null }; exports.unstable_continueExecution = function () { T || S || (T = !0, f(X)) };
      exports.unstable_getCurrentPriorityLevel = function () { return R }; exports.unstable_getFirstCallbackNode = function () { return L(N) }; exports.unstable_next = function (a) { switch (R) { case 1: case 2: case 3: var b = 3; break; default: b = R }var c = R; R = b; try { return a() } finally { R = c } }; exports.unstable_pauseExecution = function () { }; exports.unstable_requestPaint = Z; exports.unstable_runWithPriority = function (a, b) { switch (a) { case 1: case 2: case 3: case 4: case 5: break; default: a = 3 }var c = R; R = a; try { return b() } finally { R = c } };
      exports.unstable_scheduleCallback = function (a, b, c) { var d = exports.unstable_now(); if ("object" === typeof c && null !== c) { var e = c.delay; e = "number" === typeof e && 0 < e ? d + e : d; c = "number" === typeof c.timeout ? c.timeout : Y(a) } else c = Y(a), e = d; c = e + c; a = { id: P++, callback: b, priorityLevel: a, startTime: e, expirationTime: c, sortIndex: -1 }; e > d ? (a.sortIndex = e, J(O, a), null === L(N) && a === L(O) && (U ? h() : U = !0, g(W, e - d))) : (a.sortIndex = c, J(N, a), T || S || (T = !0, f(X))); return a };
      exports.unstable_shouldYield = function () { var a = exports.unstable_now(); V(a); var b = L(N); return b !== Q && null !== Q && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < Q.expirationTime || k() }; exports.unstable_wrapCallback = function (a) { var b = R; return function () { var c = R; R = b; try { return a.apply(this, arguments) } finally { R = c } } };


      /***/
}),
/* 234 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, "initializeVideoViewer", function () { return /* reexport */ initializeVideoViewer; });
      __webpack_require__.d(__webpack_exports__, "renderControlsToDOM", function () { return /* binding */ src_renderControlsToDOM; });
      __webpack_require__.d(__webpack_exports__, "renderFullscreenButton", function () { return /* binding */ src_renderFullscreenButton; });
      __webpack_require__.d(__webpack_exports__, "unmountWebViewerVideo", function () { return /* binding */ src_unmountWebViewerVideo; });

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
      var es_array_concat = __webpack_require__(47);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
      var es_object_assign = __webpack_require__(173);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.create.js
      var es_object_create = __webpack_require__(174);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-float.js
      var es_parse_float = __webpack_require__(96);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
      var regenerator = __webpack_require__(5);
      var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

      // EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
      var runtime = __webpack_require__(25);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
      var asyncToGenerator = __webpack_require__(10);
      var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
      var es_array_for_each = __webpack_require__(71);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
      var es_object_to_string = __webpack_require__(55);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
      var es_object_values = __webpack_require__(99);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
      var es_promise = __webpack_require__(100);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
      var web_dom_collections_for_each = __webpack_require__(78);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
      var es_array_filter = __webpack_require__(106);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
      var es_array_some = __webpack_require__(185);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
      var es_array_sort = __webpack_require__(107);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-iso-string.js
      var es_date_to_iso_string = __webpack_require__(186);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
      var es_date_to_string = __webpack_require__(108);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
      var es_object_keys = __webpack_require__(190);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
      var web_timers = __webpack_require__(79);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
      var es_array_iterator = __webpack_require__(44);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.slice.js
      var es_array_buffer_slice = __webpack_require__(113);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
      var es_parse_int = __webpack_require__(118);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
      var es_regexp_exec = __webpack_require__(80);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
      var es_string_iterator = __webpack_require__(82);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
      var es_string_replace = __webpack_require__(195);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
      var es_string_split = __webpack_require__(123);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js
      var es_typed_array_uint8_array = __webpack_require__(124);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.copy-within.js
      var es_typed_array_copy_within = __webpack_require__(129);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.every.js
      var es_typed_array_every = __webpack_require__(130);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.fill.js
      var es_typed_array_fill = __webpack_require__(131);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.filter.js
      var es_typed_array_filter = __webpack_require__(132);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find.js
      var es_typed_array_find = __webpack_require__(133);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-index.js
      var es_typed_array_find_index = __webpack_require__(134);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.for-each.js
      var es_typed_array_for_each = __webpack_require__(135);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.from.js
      var es_typed_array_from = __webpack_require__(201);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.includes.js
      var es_typed_array_includes = __webpack_require__(136);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.index-of.js
      var es_typed_array_index_of = __webpack_require__(137);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.iterator.js
      var es_typed_array_iterator = __webpack_require__(138);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.join.js
      var es_typed_array_join = __webpack_require__(139);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.last-index-of.js
      var es_typed_array_last_index_of = __webpack_require__(140);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.map.js
      var es_typed_array_map = __webpack_require__(141);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce.js
      var es_typed_array_reduce = __webpack_require__(142);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce-right.js
      var es_typed_array_reduce_right = __webpack_require__(144);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reverse.js
      var es_typed_array_reverse = __webpack_require__(145);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
      var es_typed_array_set = __webpack_require__(146);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.slice.js
      var es_typed_array_slice = __webpack_require__(147);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.some.js
      var es_typed_array_some = __webpack_require__(148);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js
      var es_typed_array_sort = __webpack_require__(149);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.subarray.js
      var es_typed_array_subarray = __webpack_require__(150);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-locale-string.js
      var es_typed_array_to_locale_string = __webpack_require__(151);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-string.js
      var es_typed_array_to_string = __webpack_require__(152);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
      var web_dom_collections_iterator = __webpack_require__(203);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
      var web_url = __webpack_require__(204);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
      var classCallCheck = __webpack_require__(162);
      var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
      var createClass = __webpack_require__(163);
      var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

      // CONCATENATED MODULE: ./node_modules/srt-webvtt/index.js










































      var srt_webvtt_WebVTTConverter = /*#__PURE__*/function () {
        function WebVTTConverter(resource) {
          classCallCheck_default()(this, WebVTTConverter);

          this.resource = resource;
        }

        createClass_default()(WebVTTConverter, [{
          key: "blobToBuffer",
          value: function blobToBuffer() {
            var _this = this;

            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.addEventListener('loadend', function (event) {
                var buf = event.target.result;
                resolve(new Uint8Array(buf));
              });
              reader.addEventListener('error', function () {
                return reject('Error while reading the Blob object');
              });
              reader.readAsArrayBuffer(_this.resource);
            });
          }
          /**
           * @param {*} blob
           * @param {*} success
           * @param {*} fail
           */

        }, {
          key: "getURL",
          value: function getURL() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              if (!(_this2.resource instanceof Blob)) return reject('Expecting resource to be a Blob but something else found.');
              if (!FileReader) return reject('No FileReader constructor found');
              if (!TextDecoder) return reject('No TextDecoder constructor found');
              return WebVTTConverter.blobToString(_this2.resource, function (decoded) {
                var vttString = 'WEBVTT FILE\r\n\r\n';
                var text = vttString.concat(WebVTTConverter.toVTT(decoded));
                var blob = new Blob([text], {
                  type: 'text/vtt'
                });
                _this2.objectURL = URL.createObjectURL(blob);
                return resolve(_this2.objectURL);
              }, function () {
                _this2.blobToBuffer().then(function (buffer) {
                  var utf8str = new TextDecoder('utf-8').decode(buffer);
                  var vttString = 'WEBVTT FILE\r\n\r\n';
                  var text = vttString.concat(WebVTTConverter.toVTT(utf8str));
                  var blob = new Blob([text], {
                    type: 'text/vtt'
                  });
                  _this2.objectURL = URL.createObjectURL(blob);
                  return resolve(_this2.objectURL);
                });
              });
            });
          }
        }, {
          key: "release",
          value: function release() {
            URL.createObjectURL(this.objectURL);
          }
        }], [{
          key: "blobToString",
          value: function blobToString(blob, success, fail) {
            var reader = new FileReader();
            reader.addEventListener('loadend', function (event) {
              var text = event.target.result;
              success(text);
            });
            reader.addEventListener('error', function () {
              return fail();
            });
            reader.readAsText(blob);
          }
          /**
           * @param {*} utf8str
           */

        }, {
          key: "toVTT",
          value: function toVTT(utf8str) {
            return utf8str.replace(/\{\\([ibu])\}/g, '</$1>').replace(/\{\\([ibu])1\}/g, '<$1>').replace(/\{([ibu])\}/g, '<$1>').replace(/\{\/([ibu])\}/g, '</$1>').replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, '$1.$2').concat('\r\n\r\n');
          }
          /**
           * @param {*} str
           */

        }, {
          key: "toTypedArray",
          value: function toTypedArray(str) {
            var result = [];
            str.split('').forEach(function (each) {
              result.push(parseInt(each.charCodeAt(), 16));
            });
            return Uint8Array.from(result);
          }
        }]);

        return WebVTTConverter;
      }();

      window.WebVTTConverter = srt_webvtt_WebVTTConverter;
/* harmony default export */ var srt_webvtt = (srt_webvtt_WebVTTConverter);
      // CONCATENATED MODULE: ./src/lib/api/Video/functions/getTimeFromFrame.js
      /**
       * Returns the conversion of a frame number to a time stamp (in milliseconds).
       * @function
       * @memberof Video
       * @param {number} frame The frame number to convert.
       * @returns {number} The resulting time.
       */
      function getTimeFromFrame(fps) {
        return function (frame) {
          return (frame - 1) / fps;
        };
      }

/* harmony default export */ var functions_getTimeFromFrame = (getTimeFromFrame);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
      var es_array_includes = __webpack_require__(155);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
      var es_string_includes = __webpack_require__(156);

      // CONCATENATED MODULE: ./src/lib/api/Video/functions/extractFrames.js







      /**
       * Returns an array of the canvases for the frame numbers passed in.
       * If a second call is made, then the previous call will return immediately and may not have all the canvases.
       * @function
       * @memberof Video
       * @param {Array} frameNumbers An array of all the frame numbers to retrieve canvases for.
       * @returns {Promise<Array>} An array for some or all the canvases for the frame numbers passed in.
       * If you want to guarantee all the canvases from one call then wait for the promise to finish before making another call.
       */

      function extractFrames(iframeWindow, src, useCrossOrigin, randomizeRequest) {
        var hiddenVideoElement = iframeWindow.document.createElement('video'); // The source of the video can be local (blob) or be external
        // in case of local, we cannot append the external-only query params
        // otherwise it will give us a 404

        if (src.includes('blob')) {
          hiddenVideoElement.src = src;
        } else {
          // If the URL already contains a set of query parameters, we need to
          // continue appending query parameters to the URL
          var queryParamChar = src.includes('?') ? '&' : '?';
          hiddenVideoElement.src = "".concat(src).concat(queryParamChar, "extractFrames=true") + (randomizeRequest ? '&' + Math.random() : '');

          if (useCrossOrigin) {
            hiddenVideoElement.crossOrigin = 'anonymous';
          }
        }

        hiddenVideoElement.muted = true;
        return /*#__PURE__*/function () {
          var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(frameNumbers) {
            var frames, i, frameNumber, canvas, ctx;
            return regenerator_default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    frames = {};
                    i = 0;

                  case 2:
                    if (!(i < frameNumbers.length)) {
                      _context.next = 21;
                      break;
                    }

                    if (!(JSON.stringify(frameNumbers) !== JSON.stringify(frameNumbers))) {
                      _context.next = 5;
                      break;
                    }

                    return _context.abrupt("break", 21);

                  case 5:
                    frameNumber = frameNumbers[i];
                    hiddenVideoElement.currentTime = functions_getTimeFromFrame(1)(frameNumber); // async

                    _context.next = 9;
                    return hiddenVideoElement.play();

                  case 9:
                    if (!(JSON.stringify(frameNumbers) !== JSON.stringify(frameNumbers))) {
                      _context.next = 11;
                      break;
                    }

                    return _context.abrupt("break", 21);

                  case 11:
                    canvas = iframeWindow.document.createElement('canvas');
                    canvas.width = 100;
                    canvas.height = 56;
                    ctx = canvas.getContext('2d');
                    ctx.drawImage(hiddenVideoElement, 0, 0, canvas.width, canvas.height);
                    frames[frameNumber] = canvas; // sync

                    hiddenVideoElement.pause();

                  case 18:
                    i++;
                    _context.next = 2;
                    break;

                  case 21:
                    hiddenVideoElement.pause();
                    return _context.abrupt("return", frames);

                  case 23:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();
      }

/* harmony default export */ var functions_extractFrames = (extractFrames);
      // CONCATENATED MODULE: ./src/utils/isSafari.js
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
/* harmony default export */ var utils_isSafari = (isSafari);
      // CONCATENATED MODULE: ./src/lib/api/Video/index.js















      /* eslint-disable object-shorthand */




      /**
       * Represents a Video. Constructor is private. Use {@link https://www.pdftron.com/api/web/CoreControls.Document.html#getVideo__anchor} to retrieve the instance.
       * @class
       */

      var Video = /*#__PURE__*/function () {
        var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(_ref) {
          var src, thumbnailSrc, annotationManager, iframeWindow, passedInDuration, useCrossOrigin, randomizeRequest, videoElement, trackElement, width, height, duration, readyState, fps, totalFrames, t, videoAnnotations, getSrc, loadSubtitles, getSubtitleTrackElement, getElement, getReadyState, getDuration, getThumbnailSrc, getFormattedDuration, getFormattedCurrentTime, getFormattedTime, addAnnotations, deleteAnnotations, getFrameAnnotations, updateAnnotationsToTime, getAllAnnotations, getFrameFromTime, getCurrentFrame, getNextFrame, getPrevFrame, getTotalFrames, hasAnnotation, annotManagerDeleteAnnotations;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  src = _ref.src, thumbnailSrc = _ref.thumbnailSrc, annotationManager = _ref.annotationManager, iframeWindow = _ref.iframeWindow, passedInDuration = _ref.duration, useCrossOrigin = _ref.useCrossOrigin, randomizeRequest = _ref.randomizeRequest;
                  // const waitForLoadedMetaData = (_videoElement) => {
                  //   return new Promise((resolve) => {
                  //     let once = false;
                  //     _videoElement.addEventListener('durationchange', () => {
                  //       if (!once) {
                  //         once = true;
                  //         let {
                  //           duration,
                  //         } = _videoElement;
                  //         resolve({
                  //           duration,
                  //         });
                  //       }
                  //     });
                  //   });
                  // };
                  videoElement = iframeWindow.document.createElement('video');
                  videoElement.className = 'video'; // videoElement.style.cssText = 'width: 100%';

                  trackElement = iframeWindow.document.createElement('track');
                  trackElement["default"] = true;
                  trackElement.mode = "hidden";

                  if (!utils_isSafari) {
                    videoElement.appendChild(trackElement);
                  } // Fixed width and height. Black bars will be added and video will
                  // be centered if it is smaller or different aspect ratio.
                  // Video can be made bigger/smaller with zoom. This makes it so that
                  // annotation position won't be messed up, like it would be when
                  // changing width and height.


                  width = 640;
                  height = 360; // Assume this default duration for the video until we get the real value.

                  duration = 20 || false;
                  readyState = 0;
                  fps = 1;
                  totalFrames = Math.ceil(fps * duration) + 1; // A video of one second has 2 frames if fps 1

                  t = window.setInterval(function () {
                    if (videoElement.readyState > 0) {
                      if (!passedInDuration) {
                        duration = videoElement.duration;
                        totalFrames = Math.ceil(fps * duration) + 1;
                      }

                      readyState = videoElement.readyState;
                      clearInterval(t);
                    }
                  }, 200); // const [{ width, height, duration }] = await Promise.all([
                  //   waitForLoadedMetaData(videoElement),
                  // ]);

                  videoAnnotations = {};

                  getSrc = function getSrc() {
                    return src;
                  };
                  /**
                   * Loads subtitles in the HTML video element.
                   * @function
                   * @param {File} file The subtitles file. Can be an srt file or vtt file. https://developer.mozilla.org/en-US/docs/Web/API/File
                   * @example
                    WebViewer(...)
                      .then(function(instance) {
                        const { docViewer } = instance;
                        docViewer.on('documentLoaded', () => {
                          const video = docViewer.getDocument().getVideo();
                          ...
                          video.loadSubtitles(file);
                          ...
                        });
                      });
                    */


                  ;

                  loadSubtitles = function loadSubtitles(file) {
                    var fileBlob = new Blob([file], {
                      type: 'text/vtt'
                    });
                    var vttConverter = new srt_webvtt(fileBlob);
                    vttConverter.getURL().then(function (url) {
                      trackElement.src = url;
                      trackElement.track.mode = 'showing';
                    })["catch"](function (err) {
                      console.error(err);
                    });
                  };
                  /**
                   * Returns the underlying HTML track element
                   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
                   * @function
                   * @returns {object}
                   */


                  getSubtitleTrackElement = function getSubtitleTrackElement() {
                    return trackElement;
                  };
                  /**
                   * Returns the underlying HTML5 video element
                   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
                   * @function
                   * @returns {object}
                   */


                  getElement = function getElement() {
                    return videoElement;
                  };
                  /**
                   * Returns the video readystate
                   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
                   * @function
                   * @returns {number}
                   */


                  getReadyState = function getReadyState() {
                    return readyState;
                  };
                  /**
                   * Returns the duration of the video. Guaranteed to be correct when the readyState
                   * of the video is greater than 0.
                   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
                   * @function
                   * @returns {number}
                   */


                  getDuration = function getDuration() {
                    return duration;
                  };

                  getThumbnailSrc = function getThumbnailSrc() {
                    return thumbnailSrc;
                  };

                  getFormattedDuration = function getFormattedDuration() {
                    return getFormattedTime(duration);
                  };
                  /**
                   * Returns a string representing the curretn seeked to time. Formatted as hh:mm:ss.
                   * @function
                   * @returns {string} A string representing the curretn seeked to time. Formatted as hh:mm:ss.
                   */


                  getFormattedCurrentTime = function getFormattedCurrentTime() {
                    return getFormattedTime(videoElement.currentTime);
                  };
                  /**
                   * Returns a string representing the passed in seconds. Formatted as hh:mm:ss.
                   * @function
                   * @param {number} seconds
                   * @returns {string} A string representing the passed in seconds. Formatted as hh:mm:ss.
                   */


                  getFormattedTime = function getFormattedTime(seconds) {
                    try {
                      return new Date(Math.round(seconds) * 1000).toISOString().substr(11, 8);
                    } catch (e) {
                      console.warn(e);
                      return '00:00:00';
                    }
                  };

                  addAnnotations = function addAnnotations(annotations) {
                    annotations.forEach(function (annotation) {
                      var Id = annotation['Id'];

                      if (isNaN(parseFloat(annotation.startTime))) {
                        annotation.startTime = parseFloat(videoElement.currentTime);
                        annotation.endTime = parseFloat(videoElement.currentTime);
                      }

                      if (isNaN(parseFloat(annotation.endTime))) {
                        annotation.endTime = parseFloat(videoElement.currentTime);
                      }

                      if (annotation.endTime < annotation.startTime) {
                        annotation.endTime = annotation.startTime;
                      }

                      videoAnnotations[Id] = annotation;
                    });
                  };

                  deleteAnnotations = function deleteAnnotations(annotations) {
                    annotations.forEach(function (_ref3) {
                      var Id = _ref3['Id'];
                      delete videoAnnotations[Id];
                    });
                  };

                  getFrameAnnotations = function getFrameAnnotations(frame) {
                    var annotations = [];
                    Object.keys(videoAnnotations).forEach(function (id) {
                      var annotation = videoAnnotations[id];
                      var startTime = annotation.startTime,
                        endTime = annotation.endTime;
                      var startFrame = getFrameFromTime(parseFloat(startTime));
                      var endFrame = getFrameFromTime(parseFloat(endTime));

                      if (!isNaN(startFrame)) {
                        if (!isNaN(endFrame)) {
                          if (frame >= startFrame && frame <= endFrame) {
                            annotations.push(annotation);
                          }
                        } else if (frame === startFrame) {
                          annotations.push(annotation);
                        }
                      }
                    });
                    return annotations;
                  };
                  /**
                   * Renders the saved annotations on the annotation canvas at the passed in time
                   * @param {number} newTime A number representing a specific time in the video. The value must be in milliseconds.
                   */


                  updateAnnotationsToTime = function updateAnnotationsToTime(newTime) {
                    var newFrame = getFrameFromTime(newTime);
                    var allFrameAnnotations = getAllAnnotations();
                    var newFrameAnnotations = getFrameAnnotations(newFrame);
                    allFrameAnnotations.forEach(function (annot) {
                      annot['NoView'] = true;
                    });
                    newFrameAnnotations.forEach(function (annot) {
                      annot['NoView'] = false;
                    });
                    var selectedAnnotations = annotationManager.getSelectedAnnotations();
                    var notVisibleSelectedAnnotations = selectedAnnotations.filter(function (annotation) {
                      return annotation.NoView;
                    });
                    notVisibleSelectedAnnotations.forEach(function (annot) {
                      return annotationManager.deselectAnnotation(annot);
                    });
                    annotationManager['drawAnnotationsFromList'](allFrameAnnotations);
                  };
                  /**
                   * Returns all annotations for all frames in the video.
                   * @returns {Array} An array of all annotations.
                   */


                  getAllAnnotations = function getAllAnnotations() {
                    return Object.values(videoAnnotations);
                  };
                  /**
                   * Returns the conversion of a time stamp to a frame number.
                   * @function
                   * @param {number} time A number representing a specific time in the video. The value must be in milliseconds.
                   * @returns {number} The resulting frame number.
                   */


                  getFrameFromTime = function getFrameFromTime(time) {
                    return Math.min(Math.round(time * fps + 1), totalFrames);
                  };

                  getCurrentFrame = function getCurrentFrame() {
                    return getFrameFromTime(videoElement.currentTime);
                  };

                  getNextFrame = function getNextFrame() {
                    return getCurrentFrame() + 1 < getTotalFrames() ? getCurrentFrame() + 1 : getTotalFrames();
                  };

                  getPrevFrame = function getPrevFrame() {
                    return getCurrentFrame() - 1 < 0 ? 0 : getCurrentFrame() - 1;
                  };
                  /**
                   * Returns the total number of frames in the video.
                   * @function
                   * @returns {number} The total number of frames in the video.
                   */


                  getTotalFrames = function getTotalFrames() {
                    return totalFrames;
                  };
                  /**
                   * Returns true if the frame number passed in has at least one annotation associated with it. Returns false otherwise.
                   * @function
                   * @returns {boolean}
                   */


                  hasAnnotation = function hasAnnotation(frameNumber) {
                    var annotations = getAllAnnotations();
                    return annotations.some(function (_ref4) {
                      var startTime = _ref4.startTime;
                      return frameNumber === getFrameFromTime(startTime);
                    });
                  };

                  annotManagerDeleteAnnotations = function annotManagerDeleteAnnotations() {
                    // Sorting annotations so that annotations with InReplyTo are at the front of the array.
                    // This so that deleteAnnotations doesn't clear InReplyTo for replies. This works because
                    // the parent annotations will have zero replies and won't be able to clear InReplyTo if we
                    // delete its children first.
                    var allFrameAnnotations = getAllAnnotations();
                    allFrameAnnotations.sort(function (a, b) {
                      if (a['InReplyTo']) {
                        return -1;
                      }

                      if (b['InReplyTo']) {
                        return 1;
                      }

                      return 0;
                    }); // force is set to true to be able to delete in readOnly mode.

                    annotationManager['deleteAnnotations'](allFrameAnnotations, true, true);
                  };

                  return _context.abrupt("return", {
                    'width': width,
                    'height': height,
                    'getSrc': getSrc,
                    'getDuration': getDuration,
                    'getElement': getElement,
                    'loadSubtitles': loadSubtitles,
                    'getSubtitleTrackElement': getSubtitleTrackElement,
                    'getReadyState': getReadyState,
                    'getThumbnailSrc': getThumbnailSrc,
                    'addAnnotations': addAnnotations,
                    'deleteAnnotations': deleteAnnotations,
                    'getAllAnnotations': getAllAnnotations,
                    'updateAnnotationsToTime': updateAnnotationsToTime,
                    'getCurrentFrame': getCurrentFrame,
                    'getNextFrame': getNextFrame,
                    'getPrevFrame': getPrevFrame,
                    'getTimeFromFrame': functions_getTimeFromFrame(fps),
                    'getFrameFromTime': getFrameFromTime,
                    'getTotalFrames': getTotalFrames,
                    'extractFrames': functions_extractFrames(iframeWindow, src, useCrossOrigin, randomizeRequest),
                    'getFormattedDuration': getFormattedDuration,
                    'getFormattedTime': getFormattedTime,
                    'getFormattedCurrentTime': getFormattedCurrentTime,
                    'hasAnnotation': hasAnnotation,
                    'annotManagerDeleteAnnotations': annotManagerDeleteAnnotations
                  });

                case 39:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function Video(_x) {
          return _ref2.apply(this, arguments);
        };
      }();

/* harmony default export */ var api_Video = (Video);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
      var es_array_map = __webpack_require__(46);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
      var es_regexp_constructor = __webpack_require__(211);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
      var es_regexp_to_string = __webpack_require__(157);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
      var slicedToArray = __webpack_require__(1);
      var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

      // CONCATENATED MODULE: ./src/utils/checkLicense.js





































      function verify(_x, _x2, _x3) {
        return _verify.apply(this, arguments);
      }

      function _verify() {
        _verify = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(publicKeyJwk, signatureStr, message) {
          var signatureArr, signature, publicKey, data, ok;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  signatureArr = signatureStr.split(':').map(function (x) {
                    return +x;
                  });
                  signature = new Uint8Array(signatureArr).buffer;
                  _context.next = 4;
                  return window.crypto.subtle.importKey('jwk', publicKeyJwk, {
                    name: 'RSASSA-PKCS1-v1_5',
                    hash: {
                      name: 'SHA-512'
                    }
                  }, false, ['verify']);

                case 4:
                  publicKey = _context.sent;
                  data = new TextEncoder().encode(message);
                  _context.next = 8;
                  return window.crypto.subtle.verify({
                    name: 'RSASSA-PKCS1-v1_5'
                  }, publicKey, signature, data);

                case 8:
                  ok = _context.sent;
                  return _context.abrupt("return", ok);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _verify.apply(this, arguments);
      }

      function checkLicense(_x4) {
        return _checkLicense.apply(this, arguments);
      }

      function _checkLicense() {
        _checkLicense = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(license) {
          var _license$split, _license$split2, email, signature, emailRegex, publicKey;

          return regenerator_default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _license$split = license.split('///'), _license$split2 = slicedToArray_default()(_license$split, 2), email = _license$split2[0], signature = _license$split2[1]; // Check that email is an actual email and not garbage

                  emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

                  if (!emailRegex.test(email)) {
                    _context2.next = 7;
                    break;
                  }

                  publicKey = JSON.parse("{\"alg\":\"RS512\",\"e\":\"AQAB\",\"ext\":true,\"key_ops\":[\"verify\"],\"kty\":\"RSA\",\"n\":\"qAfFuSOYpWNsCH5ORl13iUE26CiwucZOfloau2bMFG0kcHaMus7ox9kGWn3XSgmqJTWqLNfNpvCxCbptyAXkjBCf3-XWIt-aeJBWzVGm5ByPBw9r-4edelazRb9XqJDtzwqIaXNZiEuxlnDMGHKVZ3frq5lS91h9z9jGCSwQwvwxBUX1Ta3kCfLr8MCSPe6zt5iVIYZlHOts99KTat-owsbI-Beom5Y6VFcX_mzQHKBK8GPfVMS51Qwx2H19KdHkRRDLJh30rXsoH0NDB8EAgmpBBPq_J9jDqc24K_HHccuQg1huWz4eYQ7FIc4EB4g0QdGkCQeJd7wyf2DmTtI6BmRCVWlVVkC1jEGHPNttS8MgYBbQTMI0go4qK4azkOmLv_h3w4tVpWZt6EG5q4TIadazdV7VphYUMO5Eot-f2mRCp_w5P2qvvVLlZJjFmgCZRz0MqWm8rVlxI5dcIR3v3yGHiN5idP62V9VGFS0QQXV0M715oL8ySiDJrVVcwJaHUbl3hnNlaFDTOOK6dH9Y9uyb8U0Nb6Fkje4k5MhrPBi9RD2iAivUMP-lkKdt7S2gQvjtkVD80mq4ulU1BagKkoqTBiYA9-k0CJrPYjSFl4g7-SfnIxs0p_3_cCup9eOQAU5LPEWOb4qH37tDtMvSCcXNK5pE8ofD8b1AjEsw5rU\"}");
                  _context2.next = 6;
                  return verify(publicKey, signature, email);

                case 6:
                  return _context2.abrupt("return", _context2.sent);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _checkLicense.apply(this, arguments);
      }

/* harmony default export */ var utils_checkLicense = (checkLicense);
      // CONCATENATED MODULE: ./src/lib/api/VideoDocument/index.js









      /* eslint-disable object-shorthand */




      function VideoDocument(_x, _x2, _x3, _x4) {
        return _VideoDocument.apply(this, arguments);
      }

      function _VideoDocument() {
        _VideoDocument = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(instance, docViewer, iframeWindow, options) {
          var license, randomizeRequest, useCrossOrigin, _options$license, _options$randomizeReq, _options$useCrossOrig, verified, onceWatermarkDraw;

          return regenerator_default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  // For backwards compatibility
                  if (typeof options === 'string') {
                    license = options;
                  } else {
                    _options$license = options['license'];
                    license = _options$license === void 0 ? '' : _options$license;
                    _options$randomizeReq = options['randomizeRequest'];
                    randomizeRequest = _options$randomizeReq === void 0 ? false : _options$randomizeReq;
                    _options$useCrossOrig = options['useCrossOrigin'];
                    useCrossOrigin = _options$useCrossOrig === void 0 ? false : _options$useCrossOrig;
                  }

                  _context3.next = 3;
                  return utils_checkLicense(license);

                case 3:
                  verified = _context3.sent;
                  onceWatermarkDraw = false;
                  return _context3.abrupt("return", {
                    /**
                     * Only available on documents of type 'video'. Returns the instance of {@link Video} associated with the document.
                     * @method CoreControls.Document#getVideo
                     * @returns {object} the instance of {@link Video} associated with the document.
                     */
                    'getVideo': function getVideo() {
                      var me = this;
                      return me.videos[0];
                    },
                    'getPageCount': function getPageCount() {
                      return 1;
                    },
                    'getLayersArray': function getLayersArray() {
                      return Promise.resolve([]);
                    },
                    'extractXFDF': function extractXFDF() { },
                    'loadThumbnailAsync': function loadThumbnailAsync(pageNumber, onLoadThumbnail) {
                      var pageIndex = pageNumber - 1;
                      var me = this;
                      var video = me.videos[pageIndex];
                      var thumbnailsSrc = video['getThumbnailSrc']();
                      var img = document.createElement('img');
                      img.src = thumbnailsSrc;
                      onLoadThumbnail(img);
                    },
                    'loadTextData': function loadTextData() { },
                    'getBookmarks': function getBookmarks() {
                      return Promise.resolve(this['bookmarks']);
                    },
                    'loadAsync': function () {
                      var _loadAsync = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(_ref, onDocumentLoaded) {
                        var url, thumbnail, duration, me, annotationManager, video, width, height, matrix, pageInfo;
                        return regenerator_default.a.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                url = _ref.url, thumbnail = _ref.thumbnail, duration = _ref.duration;
                                me = this;
                                annotationManager = docViewer['getAnnotationManager']();
                                _context.prev = 3;
                                _context.next = 6;
                                return api_Video({
                                  src: url,
                                  thumbnailSrc: thumbnail,
                                  annotationManager: annotationManager,
                                  iframeWindow: iframeWindow,
                                  duration: duration,
                                  useCrossOrigin: useCrossOrigin,
                                  randomizeRequest: randomizeRequest
                                });

                              case 6:
                                video = _context.sent;
                                width = video['width'], height = video['height'];
                                matrix = new iframeWindow['XODText']['Matrix2D']();
                                matrix['initCoordinates'](1, 0, 0, -1, -0, width);
                                pageInfo = new iframeWindow['PageInfo'](width, height);
                                pageInfo['setFromPageData']({
                                  'width': width,
                                  'height': height,
                                  'matrix': matrix,
                                  'rotation': 0,
                                  // Needed for correct annotation placement
                                  'pageNum': 1 // Doesn't seem to be needed

                                });
                                me['addPage'](pageInfo);
                                me.videos.push(video); // Bind to annotationCreated because this happens before the annotation
                                // shows up on the notes panel. This is useful so that we can set the data
                                // required to sort the annotation on the notes panel.

                                Object.values(instance.Tools.ToolNames).forEach(function (toolName) {
                                  var bindTool = function bindTool(toolName) {
                                    var tool = docViewer.getTool(toolName);

                                    if (tool) {
                                      tool.on('annotationCreated', function (annot) {
                                        annot.startTime = video.getElement().currentTime;
                                        annot.endTime = video.getElement().currentTime;
                                      });
                                    }
                                  };

                                  bindTool("".concat(toolName));
                                  bindTool("".concat(toolName, "2"));
                                  bindTool("".concat(toolName, "3"));
                                  bindTool("".concat(toolName, "4"));
                                });
                                annotationManager['on']('annotationChanged', function (changedAnnotations, type) {
                                  if (docViewer['getDocument']()['getType']() !== 'video') {
                                    return;
                                  } // Adding to our annotation manager.
                                  // Add created annotations or add annotations that are loaded at the beginning.
                                  // Load everything into our annotation manager


                                  var video = me.videos[0];
                                  changedAnnotations.forEach(function (annotation) {
                                    if (video) {
                                      if (type === 'add') {
                                        video['addAnnotations']([annotation]);
                                      } else if (type === 'delete') {
                                        video['deleteAnnotations']([annotation]);
                                      }
                                    } else {
                                      console.warn('Skipping annotation: No video available.');
                                    }
                                  });
                                  video.updateAnnotationsToTime(video.getElement().currentTime);
                                }); // bindings have been set, so it is save to call

                                onDocumentLoaded();
                                _context.next = 22;
                                break;

                              case 19:
                                _context.prev = 19;
                                _context.t0 = _context["catch"](3);
                                console.error('Error:', _context.t0);

                              case 22:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this, [[3, 19]]);
                      }));

                      function loadAsync(_x5, _x6) {
                        return _loadAsync.apply(this, arguments);
                      }

                      return loadAsync;
                    }(),
                    'loadCanvasAsync': function () {
                      var _loadCanvasAsync = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(_ref2) {
                        var drawComplete, drawProgressive, pageNumber, getZoom, me, pageIndex, video, videoContainer, videoElement, src, videoGuidesContainer, videoGuidesChild, videoGuidesChildInner, videoGuidesChildLeft, videoGuidesChildRight, videoGuidesChildTop, videoGuidesChildBottom, fullScreenButtonContainer, annotationManager;
                        return regenerator_default.a.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                drawComplete = _ref2['drawComplete'], drawProgressive = _ref2['drawProgressive'], pageNumber = _ref2['pageNumber'], getZoom = _ref2['getZoom'];
                                me = this;
                                pageIndex = pageNumber - 1;
                                video = me.videos[pageIndex];

                                if (me.videoContainers[pageIndex]) {
                                  videoContainer = me.videoContainers[pageIndex];
                                } else {
                                  videoElement = video['getElement']();
                                  src = video['getSrc']();
                                  videoElement.src = src;

                                  if (useCrossOrigin) {
                                    videoElement.crossOrigin = 'anonymous';
                                  }

                                  videoElement.src = src + (randomizeRequest ? '?' + Math.random() : ''); // Append video to container

                                  videoContainer = document.createElement('div');
                                  videoContainer.appendChild(videoElement); // Append video guides to container, hidden by default

                                  videoGuidesContainer = document.createElement('div');
                                  videoGuidesContainer.setAttribute('id', 'guides-container');
                                  videoGuidesChild = document.createElement('div');
                                  videoGuidesChild.setAttribute('id', 'guides-container-main-child');
                                  videoGuidesChildInner = document.createElement('div');
                                  videoGuidesChildInner.setAttribute('id', 'guides-container-main-child-inner');
                                  videoGuidesChild.appendChild(videoGuidesChildInner);
                                  videoGuidesChildLeft = document.createElement('div');
                                  videoGuidesChildLeft.setAttribute('id', 'guides-container-left-child');
                                  videoGuidesChildRight = document.createElement('div');
                                  videoGuidesChildRight.setAttribute('id', 'guides-container-right-child');
                                  videoGuidesChildTop = document.createElement('div');
                                  videoGuidesChildTop.setAttribute('id', 'guides-container-top-child');
                                  videoGuidesChildBottom = document.createElement('div');
                                  videoGuidesChildBottom.setAttribute('id', 'guides-container-bottom-child');
                                  videoGuidesContainer.appendChild(videoGuidesChildLeft);
                                  videoGuidesContainer.appendChild(videoGuidesChildTop);
                                  videoGuidesContainer.appendChild(videoGuidesChild);
                                  videoGuidesContainer.appendChild(videoGuidesChildRight);
                                  videoGuidesContainer.appendChild(videoGuidesChildBottom); // Fullscreen button

                                  fullScreenButtonContainer = document.createElement('div');
                                  fullScreenButtonContainer.setAttribute('id', 'fullscreen-button-container');
                                  videoContainer.appendChild(fullScreenButtonContainer);
                                  src_renderFullscreenButton(instance, video, fullScreenButtonContainer);
                                  videoContainer.appendChild(videoGuidesContainer);
                                  me.videoContainers[pageIndex] = videoContainer;
                                }

                                annotationManager = docViewer['getAnnotationManager']();

                                if (!onceWatermarkDraw && !verified) {
                                  onceWatermarkDraw = true;
                                  annotationManager['on']('annotationsDrawn', function () {
                                    var annotationCanvas = iframeWindow.document.querySelector('canvas.auxiliary');

                                    if (annotationCanvas && docViewer['getDocument']()['getType']() === 'video') {
                                      var ctx = annotationCanvas.getContext('2d'); // ctx.clearRect(0, 0, annotationCanvas.width, annotationCanvas.height);

                                      ctx.save();
                                      ctx.globalAlpha = 0.3; // TODO: Font size should depend on annotation canvas width. This is fine for now since it is constant.

                                      var fontSize = 64 * getZoom();
                                      ctx.font = "".concat(fontSize, "px Arial");
                                      ctx.fillStyle = '#00A5E4';
                                      var watermarkText = 'PDFTRON DEMO';
                                      var metrics = ctx.measureText(watermarkText);
                                      var width = metrics.width; // height is font size

                                      var height = fontSize; // change the origin coordinate to the middle of the context

                                      ctx.translate(annotationCanvas.width / 2, annotationCanvas.height / 2); // rotate the context (so it's rotated around its center)

                                      ctx.rotate(-Math.atan(annotationCanvas.height / annotationCanvas.width)); // as the origin is now at the center, just need to center the text

                                      ctx.fillText(watermarkText, -width / 2, height / 2);
                                      ctx.restore();
                                    }
                                  });
                                }

                                drawProgressive(videoContainer);
                                drawComplete(videoContainer, pageIndex);

                              case 9:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));

                      function loadCanvasAsync(_x7) {
                        return _loadCanvasAsync.apply(this, arguments);
                      }

                      return loadCanvasAsync;
                    }()
                  });

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _VideoDocument.apply(this, arguments);
      }

/* harmony default export */ var api_VideoDocument = (VideoDocument);
      // CONCATENATED MODULE: ./src/lib/api/loadVideo.js
      function loadVideo(instance, docViewer) {
        // Style needed for just the video element, not the UI.
        var style = instance.iframeWindow.document.createElement('style');
        style.innerHTML = "\n    /*\n    * Needed to fix extra space in video container\n    * https://stackoverflow.com/questions/36389996/html5-video-container-slightly-larger-than-video\n    */\n    video {\n      width: 100%;\n      height: 100%;\n      display: flex;\n    }\n\n    .pageContainer {\n      background-color: transparent !important;\n      border: none !important;\n      box-shadow: none !important;\n    }\n\n    .custom-container {\n      width: 100%;\n    }\n\n    .right-panel {\n      /* needed for weird issue with animation */\n      display: flex !important;\n    }\n\n    .Note.expanded {\n      box-shadow: 0 0 0 1pt #656565;\n    }\n\n    .resize-bar {\n      border-right: none;\n    }\n\n    /* Reset WebViewer's styles to unblock subtitles */\n    .hacc.canvas1 {\n      width: 100%;\n      transform: none;\n      transform-origin: unset;\n      z-index: unset !important;\n      /* position: unset !important; */\n    }\n\n    /* Video guides */\n    #guides-container {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%;\n\n      /* This will be toggle from none to grid */\n      display: none;\n\n      grid-template-columns: 1fr min-content 1fr;\n      grid-template-rows: 1fr min-content 1fr;\n      grid-column-gap: 0px;\n      grid-row-gap: 0px;\n    }\n\n    #guides-container-main-child {\n      position: relative;\n      border: 2px solid hsla(0,0%,100%,.8);\n      transition: width 0.250s ease-out, height 0.250s ease-out;\n\n      grid-column: 2 / 3;\n      grid-row: 2 / 3;\n    }\n\n    #guides-container-left-child {\n      background-color: black;\n      opacity: 0.4;\n      grid-column: 1 / 2;\n      grid-row: 1 / 4;\n    }\n\n    #guides-container-right-child {\n      background-color: black;\n      opacity: 0.4;\n      grid-column: 3 / 4;\n      grid-row: 1 / 4;\n    }\n\n    #guides-container-top-child {\n      background-color: black;\n      opacity: 0.4;\n      grid-column: 1 / 4;\n      grid-row: 1 / 2;\n    }\n\n    #guides-container-bottom-child {\n      background-color: black;\n      opacity: 0.4;\n      grid-column: 1 / 4;\n      grid-row: 3 / 4;\n    }\n\n    #guides-container-main-child-inner {\n      position: relative;\n      width: 80%;\n      height: 80%;\n      margin: 0 auto;\n      top: 50%;\n      transform: translateY(-50%);\n      border: 2px solid hsla(0,0%,100%,.5);\n    }\n\n    #fullscreen-button-container {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      width: 22px;\n      height: 22px;\n      z-index: 9999;\n    }\n\n    #fullscreen-button-container button {\n      border: none;\n      outline: none;\n      background-color: transparent;\n      cursor: pointer;\n      width: 100%;\n      height: 100%;\n      padding: 0;\n    }\n\n    @media (max-width: 900px) {\n      .right-panel {\n        display: none !important;\n      }\n\n      .document-content-container {\n        width: 100% !important;\n      }\n\n      .footer {\n        width: 100% !important;\n      }\n    }\n  ";
        instance.iframeWindow.document.getElementsByTagName('head')[0].appendChild(style); // SAFARI: Fixes a bug with the div with the iframe shifting up slightly shifting
        // above the screen when making an annotation.

        var parentStyle = document.createElement('style');
        parentStyle.innerHTML = "iframe {\n    position: absolute;\n  } ";
        document.getElementsByTagName('head')[0].appendChild(parentStyle);
        return function (url, duration) {
          docViewer['loadAsync']({
            url: url,
            duration: duration
          }, {
            type: 'video'
          });
        };
      }

/* harmony default export */ var api_loadVideo = (loadVideo);
      // CONCATENATED MODULE: ./src/lib/api/setVideoWatermark.js
      function setVideoWatermark(instance, docViewer, iframeWindow) {
        return function (options) {
          var annotationManager = docViewer['getAnnotationManager']();
          annotationManager['on']('annotationsDrawn', function () {
            var annotationCanvas = iframeWindow.document.querySelector('canvas.auxiliary');

            if (annotationCanvas) {
              var ctx = annotationCanvas.getContext('2d');
              ctx.save();
              ctx.globalAlpha = options.globalAlpha || 0.3; // TODO: Font size should depend on annotation canvas width. This is fine for now since it is constant.

              var fontSize = 64 * instance.getZoomLevel();
              ctx.font = "".concat(fontSize, "px Arial");
              ctx.fillStyle = options.fillStyle || '#00A5E4';
              var watermarkText = options.watermarkText;
              var metrics = ctx.measureText(watermarkText);
              var width = metrics.width; // height is font size

              var height = fontSize; // change the origin coordinate to the middle of the context

              ctx.translate(annotationCanvas.width / 2, annotationCanvas.height / 2); // rotate the context (so it's rotated around its center)

              ctx.rotate(-Math.atan(annotationCanvas.height / annotationCanvas.width)); // as the origin is now at the center, just need to center the text

              ctx.fillText(watermarkText, -width / 2, height / 2);
              ctx.restore();
            }
          });
        };
      }

/* harmony default export */ var api_setVideoWatermark = (setVideoWatermark);
      // CONCATENATED MODULE: ./src/lib/index.js










      /**
       * This is an addon for WebViewer that allows loading HTML5 videos (.mp4, ogg, webm) so that their video frames can be annotated.
       * See the npm package on {@link https://www.npmjs.com/package/@pdftron/webviewer-video @pdftron/webviewer-video} for more information.
       * @module @pdftron/webviewer-video
       */

      /**
       * @typedef {Object} VideoFunctions
       * @property {function} loadVideo
       * Loads a video for the WebViewer instance passed into initializeVideoViewer.
       * First param is the video url.
       * Second optional param is the duration of the video in seconds. Pass this in for faster loading of the video.
       * @property {function} setVideoWatermark
       * Set a custom watermark to be applied on the video.
       * First param is an options object containing three keys: watermarkText {string}, fillStyle {string} and globalAlpha {float}.
       * @example
        WebViewer(...)
          .then(function(instance) {
            const license = '---- Insert commercial license key here after purchase ----';
            const { loadVideo, setVideoWatermark } = await initializeVideoViewer(instance, license);
      
            loadVideo('https://www.mydomain.com/my_video_url');
            setVideoWatermark({
              watermarkText: 'My watermark text',
              fillStyle: '#F00',
              globalAlpha: 0.3
            });
          });
       */

      /**
       * Initializes the video viewer so that webviewer can load videos.
       * @alias module:@pdftron/webviewer-video.initializeVideoViewer
       * @param {Object} instance The WebViewer instance
       * @param {Object} options Options object.
       * @param {string} [options.license=''] The WebViewer Video license.
       * @param {boolean} [options.useCrossOrigin=false] Sets crossorigin='anonymous' on the video element. CORS requests for the video element will have the credentials flag set to 'same-origin'.
       * @param {boolean} [options.randomizeRequests=false] Useful when `useCrossOrigin` is set to true. Sometimes, when testing, the browser can cache requests and respond with an old header. Use this option to reset the cache. This fix will be necessary when changing `useCrossOrigin` from false to true for the first time.
       * @returns {VideoFunctions} A promise that resolves to an object containing the functions needed to load videos in WebViewer.
       * @example
        WebViewer(...)
          .then(function(instance) {
            const license = '---- Insert commercial license key here after purchase ----';
            const { loadVideo } = await initializeVideoViewer(
              instance,
              {
                license,
                useCrossOrigin: true,
                randomizeRequest: true,
              },
            );
      
            loadVideo('https://www.mydomain.com/my_video_url');
          });
       */

      var initializeVideoViewer = /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(instance, options) {
          var docViewer, Annotations, CoreControls, iframeWindow, currentVersion, minimumVerson, oldSerialize, newSerialize, oldDeserialize, newDeserialize;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  docViewer = instance['docViewer'], Annotations = instance['Annotations'], CoreControls = instance['CoreControls'], iframeWindow = instance['iframeWindow']; // Disable WebViewer elements that are not useful in WebViewer Video

                  instance.disableElements(['searchButton', 'pageNavOverlay', 'viewControlsButton', 'panToolButton', 'underlineToolGroupButton', 'strikeoutToolGroupButton', 'highlightToolGroupButton', 'squigglyToolGroupButton', 'signatureToolButton', 'leftPanel', 'leftPanelButton', 'toolbarGroup-Edit', 'themeChangeButton', 'fullscreenButton', 'menuButton', 'annotationCommentButton', 'toggleNotesButton', 'annotationNoteConnectorLine']); // We only support Dark theme for now (themeChangeButton is disabled, for instance)

                  instance.setTheme('dark');
                  currentVersion = CoreControls.getVersion();
                  minimumVerson = '7.1.0';

                  if (currentVersion < minimumVerson) {
                    console.error("WebViewer-video requires WebViewer version ".concat(minimumVerson, " or greater. Your Webviewer version is ").concat(currentVersion));
                  }

                  oldSerialize = Annotations.Annotation.prototype.serialize;

                  newSerialize = function newSerialize() {
                    // call the old serialize function.
                    // Returns an Element
                    var el = oldSerialize.apply(this, arguments); // Add our custom attribute to the element

                    if (this.startTime >= 0) {
                      el.setAttribute('start-time', this.startTime);
                    }

                    if (this.endTime >= 0) {
                      el.setAttribute('end-time', this.endTime);
                    }

                    return el;
                  };

                  Annotations.Annotation.prototype.serialize = newSerialize; // Save a reference to the old deserialize function

                  oldDeserialize = Annotations.Annotation.prototype.deserialize;

                  newDeserialize = function newDeserialize(el) {
                    // call the old deserialze function
                    oldDeserialize.apply(this, arguments); // Apply the custom attribute to the Annotation

                    var startTime = parseFloat(el.getAttribute('start-time'));
                    var endTime = parseFloat(el.getAttribute('end-time'));
                    this.startTime = isNaN(startTime) ? 0 : startTime;
                    this.endTime = isNaN(startTime) ? 0 : isNaN(endTime) ? this.startTime : endTime;
                  };

                  Annotations.Annotation.prototype.deserialize = newDeserialize;

                  CoreControls.VideoDocument = function () {
                    this['bookmarks'] = [];
                    this.videos = [];
                    this.videoContainers = [];
                  };

                  CoreControls.VideoDocument.prototype = Object.create(CoreControls['BaseDocument'].prototype);
                  _context.t0 = Object;
                  _context.t1 = CoreControls.VideoDocument.prototype;
                  _context.next = 18;
                  return api_VideoDocument(instance, docViewer, iframeWindow, options);

                case 18:
                  _context.t2 = _context.sent;

                  _context.t0.assign.call(_context.t0, _context.t1, _context.t2);

                  CoreControls.Document.registerDocumentType('video', CoreControls.VideoDocument, ['getVideo']);
                  return _context.abrupt("return", {
                    loadVideo: api_loadVideo(instance, docViewer),
                    setVideoWatermark: api_setVideoWatermark(instance, docViewer, iframeWindow)
                  });

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function initializeVideoViewer(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();


      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
      var es_array_from = __webpack_require__(217);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
      var defineProperty = __webpack_require__(21);
      var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

      // EXTERNAL MODULE: ./node_modules/react/index.js
      var react = __webpack_require__(0);
      var react_default = /*#__PURE__*/__webpack_require__.n(react);

      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
      function _extends() {
        _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        return _extends.apply(this, arguments);
      }
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;

        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }

        return target;
      }
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      // EXTERNAL MODULE: ./node_modules/prop-types/index.js
      var prop_types = __webpack_require__(20);
      var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

      // EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
      var ResizeObserver_es = __webpack_require__(164);

      // CONCATENATED MODULE: ./node_modules/react-measure/dist/index.esm.js







      var index_esm_types = ['client', 'offset', 'scroll', 'bounds', 'margin'];
      function getTypes(props) {
        var allowedTypes = [];
        index_esm_types.forEach(function (type) {
          if (props[type]) {
            allowedTypes.push(type);
          }
        });
        return allowedTypes;
      }

      function getContentRect(node, types) {
        var calculations = {};

        if (types.indexOf('client') > -1) {
          calculations.client = {
            top: node.clientTop,
            left: node.clientLeft,
            width: node.clientWidth,
            height: node.clientHeight
          };
        }

        if (types.indexOf('offset') > -1) {
          calculations.offset = {
            top: node.offsetTop,
            left: node.offsetLeft,
            width: node.offsetWidth,
            height: node.offsetHeight
          };
        }

        if (types.indexOf('scroll') > -1) {
          calculations.scroll = {
            top: node.scrollTop,
            left: node.scrollLeft,
            width: node.scrollWidth,
            height: node.scrollHeight
          };
        }

        if (types.indexOf('bounds') > -1) {
          var rect = node.getBoundingClientRect();
          calculations.bounds = {
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            left: rect.left,
            width: rect.width,
            height: rect.height
          };
        }

        if (types.indexOf('margin') > -1) {
          var styles = getComputedStyle(node);
          calculations.margin = {
            top: styles ? parseInt(styles.marginTop) : 0,
            right: styles ? parseInt(styles.marginRight) : 0,
            bottom: styles ? parseInt(styles.marginBottom) : 0,
            left: styles ? parseInt(styles.marginLeft) : 0
          };
        }

        return calculations;
      }

      /**
       * Returns the global window object associated with provided element.
       */
      function getWindowOf(target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local window object if it's not possible extract one from
        // provided element.

        return ownerGlobal || window;
      }

      function withContentRect(types) {
        return function (WrappedComponent) {
          var _class, _temp;

          return _temp = _class =
            /*#__PURE__*/
            function (_Component) {
              _inheritsLoose(WithContentRect, _Component);

              function WithContentRect() {
                var _this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _Component.call.apply(_Component, [this].concat(args)) || this;
                _this.state = {
                  contentRect: {
                    entry: {},
                    client: {},
                    offset: {},
                    scroll: {},
                    bounds: {},
                    margin: {}
                  }
                };
                _this._animationFrameID = null;
                _this._resizeObserver = null;
                _this._node = null;
                _this._window = null;

                _this.measure = function (entries) {
                  var contentRect = getContentRect(_this._node, types || getTypes(_this.props));

                  if (entries) {
                    contentRect.entry = entries[0].contentRect;
                  }

                  _this._animationFrameID = _this._window.requestAnimationFrame(function () {
                    if (_this._resizeObserver !== null) {
                      _this.setState({
                        contentRect: contentRect
                      });

                      if (typeof _this.props.onResize === 'function') {
                        _this.props.onResize(contentRect);
                      }
                    }
                  });
                };

                _this._handleRef = function (node) {
                  if (_this._resizeObserver !== null && _this._node !== null) {
                    _this._resizeObserver.unobserve(_this._node);
                  }

                  _this._node = node;
                  _this._window = getWindowOf(_this._node);
                  var innerRef = _this.props.innerRef;

                  if (innerRef) {
                    if (typeof innerRef === 'function') {
                      innerRef(_this._node);
                    } else {
                      innerRef.current = _this._node;
                    }
                  }

                  if (_this._resizeObserver !== null && _this._node !== null) {
                    _this._resizeObserver.observe(_this._node);
                  }
                };

                return _this;
              }

              var _proto = WithContentRect.prototype;

              _proto.componentDidMount = function componentDidMount() {
                this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new ResizeObserver_es["a" /* default */](this.measure);

                if (this._node !== null) {
                  this._resizeObserver.observe(this._node);

                  if (typeof this.props.onResize === 'function') {
                    this.props.onResize(getContentRect(this._node, types || getTypes(this.props)));
                  }
                }
              };

              _proto.componentWillUnmount = function componentWillUnmount() {
                if (this._window !== null) {
                  this._window.cancelAnimationFrame(this._animationFrameID);
                }

                if (this._resizeObserver !== null) {
                  this._resizeObserver.disconnect();

                  this._resizeObserver = null;
                }
              };

              _proto.render = function render() {
                var _this$props = this.props,
                  innerRef = _this$props.innerRef,
                  onResize = _this$props.onResize,
                  props = _objectWithoutPropertiesLoose(_this$props, ["innerRef", "onResize"]);

                return Object(react["createElement"])(WrappedComponent, _extends({}, props, {
                  measureRef: this._handleRef,
                  measure: this.measure,
                  contentRect: this.state.contentRect
                }));
              };

              return WithContentRect;
            }(react["Component"]), _class.propTypes = {
              client: prop_types_default.a.bool,
              offset: prop_types_default.a.bool,
              scroll: prop_types_default.a.bool,
              bounds: prop_types_default.a.bool,
              margin: prop_types_default.a.bool,
              innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.func]),
              onResize: prop_types_default.a.func
            }, _temp;
        };
      }

      var Measure = withContentRect()(function (_ref) {
        var measure = _ref.measure,
          measureRef = _ref.measureRef,
          contentRect = _ref.contentRect,
          children = _ref.children;
        return children({
          measure: measure,
          measureRef: measureRef,
          contentRect: contentRect
        });
      });
      Measure.displayName = 'Measure';
      Measure.propTypes.children = prop_types_default.a.func;

/* harmony default export */ var index_esm = (Measure);


      // EXTERNAL MODULE: ./node_modules/lodash/debounce.js
      var debounce = __webpack_require__(165);
      var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

      // CONCATENATED MODULE: ./src/assets/icons/pause-24px.svg
      function pause_24px_extends() { pause_24px_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return pause_24px_extends.apply(this, arguments); }



      var pause_24px_ref = /*#__PURE__*/react["createElement"]("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      });

      var pause_24px_ref2 = /*#__PURE__*/react["createElement"]("path", {
        d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
      });

      function SvgPause24Px(props) {
        return /*#__PURE__*/react["createElement"]("svg", pause_24px_extends({
          xmlns: "http://www.w3.org/2000/svg",
          height: 24,
          width: 24
        }, props), pause_24px_ref, pause_24px_ref2);
      }

/* harmony default export */ var pause_24px = (SvgPause24Px);
      // CONCATENATED MODULE: ./src/assets/icons/play_arrow-24px.svg
      function play_arrow_24px_extends() { play_arrow_24px_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return play_arrow_24px_extends.apply(this, arguments); }



      var play_arrow_24px_ref = /*#__PURE__*/react["createElement"]("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      });

      var play_arrow_24px_ref2 = /*#__PURE__*/react["createElement"]("path", {
        d: "M8 5v14l11-7z"
      });

      function SvgPlayArrow24Px(props) {
        return /*#__PURE__*/react["createElement"]("svg", play_arrow_24px_extends({
          xmlns: "http://www.w3.org/2000/svg",
          height: 24,
          width: 24
        }, props), play_arrow_24px_ref, play_arrow_24px_ref2);
      }

/* harmony default export */ var play_arrow_24px = (SvgPlayArrow24Px);
      // CONCATENATED MODULE: ./src/assets/icons/skip_next-24px.svg
      function skip_next_24px_extends() { skip_next_24px_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return skip_next_24px_extends.apply(this, arguments); }



      var skip_next_24px_ref = /*#__PURE__*/react["createElement"]("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      });

      var skip_next_24px_ref2 = /*#__PURE__*/react["createElement"]("path", {
        d: "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"
      });

      function SvgSkipNext24Px(props) {
        return /*#__PURE__*/react["createElement"]("svg", skip_next_24px_extends({
          xmlns: "http://www.w3.org/2000/svg",
          height: 24,
          width: 24
        }, props), skip_next_24px_ref, skip_next_24px_ref2);
      }

/* harmony default export */ var skip_next_24px = (SvgSkipNext24Px);
      // CONCATENATED MODULE: ./src/assets/icons/skip_previous-24px.svg
      function skip_previous_24px_extends() { skip_previous_24px_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return skip_previous_24px_extends.apply(this, arguments); }



      var skip_previous_24px_ref = /*#__PURE__*/react["createElement"]("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      });

      var skip_previous_24px_ref2 = /*#__PURE__*/react["createElement"]("path", {
        d: "M6 6h2v12H6zm3.5 6l8.5 6V6z"
      });

      function SvgSkipPrevious24Px(props) {
        return /*#__PURE__*/react["createElement"]("svg", skip_previous_24px_extends({
          xmlns: "http://www.w3.org/2000/svg",
          height: 24,
          width: 24
        }, props), skip_previous_24px_ref, skip_previous_24px_ref2);
      }

/* harmony default export */ var skip_previous_24px = (SvgSkipPrevious24Px);
      // CONCATENATED MODULE: ./src/components/Controls/Buttons/PlaybackButtons.js






      function PlaybackButtons(_ref) {
        var video = _ref.video,
          goToTime = _ref.goToTime,
          isPlaying = _ref.isPlaying,
          setIsPlaying = _ref.setIsPlaying;
        var videoElement = video.getElement();

        function toggleVideo() {
          if (isPlaying) {
            videoElement.pause();
          } else {
            videoElement.play();
          }

          setIsPlaying(function (prevState) {
            return !prevState;
          });
        }

        function onNextPrevFrameClicked(event) {
          var id = event.currentTarget.id;
          var frame;

          if (isPlaying) {
            videoElement.pause();
            setIsPlaying(function (prevState) {
              return !prevState;
            });
          }

          if (id === 'next-frame-btn') {
            frame = video.getNextFrame();
          } else if (id === 'prev-frame-btn') {
            frame = video.getPrevFrame();
          }

          goToTime(video.getTimeFromFrame(frame));
        }

        return /*#__PURE__*/react_default.a.createElement("div", {
          className: "video-buttons center"
        }, /*#__PURE__*/react_default.a.createElement("button", {
          id: "prev-frame-btn",
          onClick: onNextPrevFrameClicked,
          title: "Previous frame"
        }, /*#__PURE__*/react_default.a.createElement(skip_previous_24px, null)), /*#__PURE__*/react_default.a.createElement("button", {
          onClick: toggleVideo,
          title: isPlaying ? "Pause video" : "Play video"
        }, isPlaying ? /*#__PURE__*/react_default.a.createElement(pause_24px, null) : /*#__PURE__*/react_default.a.createElement(play_arrow_24px, null)), /*#__PURE__*/react_default.a.createElement("button", {
          id: "next-frame-btn",
          onClick: onNextPrevFrameClicked,
          title: "Next frame"
        }, /*#__PURE__*/react_default.a.createElement(skip_next_24px, null)));
      }

/* harmony default export */ var Buttons_PlaybackButtons = (PlaybackButtons);
      // CONCATENATED MODULE: ./src/components/Controls/Buttons/PlaybackSpeedButton.js




      function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

      function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


      var PLAYBACK_SPEEDS = ["0.25", "0.5", "0.75", "1", "1.25", "1.5", "1.75", "2"];

      function PlaybackSpeedButton(_ref) {
        var video = _ref.video;

        var _useState = Object(react["useState"])({
          menuOpen: false,
          currentSpeed: 1
        }),
          _useState2 = slicedToArray_default()(_useState, 2),
          state = _useState2[0],
          setState = _useState2[1];

        function onChangeSpeed(event) {
          var textContent = event.target.getAttribute('data');
          setState({
            menuOpen: false,
            currentSpeed: textContent
          });
          var videoElement = video.getElement();
          videoElement.playbackRate = textContent;
        }

        return /*#__PURE__*/react_default.a.createElement("div", {
          className: "button-with-menu"
        }, /*#__PURE__*/react_default.a.createElement("button", {
          onClick: function onClick() {
            return setState(function (prevState) {
              return _objectSpread(_objectSpread({}, prevState), {}, {
                menuOpen: !prevState.menuOpen
              });
            });
          },
          title: "Playback speed"
        }, "".concat(state.currentSpeed, "x")), /*#__PURE__*/react_default.a.createElement("ul", {
          hidden: !state.menuOpen
        }, PLAYBACK_SPEEDS.map(function (time) {
          return /*#__PURE__*/react_default.a.createElement("li", {
            key: time,
            data: time,
            onClick: onChangeSpeed
          }, "".concat(time, "x"));
        })));
      }

/* harmony default export */ var Buttons_PlaybackSpeedButton = (PlaybackSpeedButton);
      // CONCATENATED MODULE: ./src/components/Controls/Buttons/LoopButton.js



      function LoopButton(_ref) {
        var video = _ref.video;

        var _useState = Object(react["useState"])(false),
          _useState2 = slicedToArray_default()(_useState, 2),
          looping = _useState2[0],
          setLooping = _useState2[1];

        function toggleLoop() {
          var videoElement = video.getElement();
          videoElement.loop = !looping;
          setLooping(!looping);
        }

        return /*#__PURE__*/react_default.a.createElement("button", {
          onClick: toggleLoop,
          title: looping ? "Stop looping video" : "Loop video"
        }, /*#__PURE__*/react_default.a.createElement("svg", {
          id: "loop",
          className: "icon",
          viewBox: "0 0 19 15",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/react_default.a.createElement("path", {
          d: "M14.75 2.5H11V4H14V10.75H2V4H5.75V6.25L9.5 3.25L5.75 0.25V2.5H1.25C0.83525 2.5 0.5 2.83525 0.5 3.25V11.5C0.5 11.9148 0.83525 12.25 1.25 12.25H14.75C15.1648 12.25 15.5 11.9148 15.5 11.5V3.25C15.5 2.83525 15.1648 2.5 14.75 2.5Z",
          fill: looping ? '#3183C8' : '#ADB5BD'
        })));
      }

/* harmony default export */ var Buttons_LoopButton = (LoopButton);
      // CONCATENATED MODULE: ./src/assets/icons/volume_black_20px-18px.svg
      function volume_black_20px_18px_extends() { volume_black_20px_18px_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return volume_black_20px_18px_extends.apply(this, arguments); }



      var volume_black_20px_18px_ref = /*#__PURE__*/react["createElement"]("path", {
        d: "M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"
      });

      var volume_black_20px_18px_ref2 = /*#__PURE__*/react["createElement"]("path", {
        d: "M11.282 5.282a.909.909 0 000 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 000 1.316c.145.145.636.262 1.018.156a.725.725 0 00.298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 00-1.316 0zm-7.496.726H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"
      });

      function SvgVolumeBlack20Px18Px(props) {
        return /*#__PURE__*/react["createElement"]("svg", volume_black_20px_18px_extends({
          className: "volume_black_20px-18px_svg__icon",
          width: 20,
          height: 18,
          "data-state": "visible",
          xmlns: "http://www.w3.org/2000/svg"
        }, props), volume_black_20px_18px_ref, volume_black_20px_18px_ref2);
      }

/* harmony default export */ var volume_black_20px_18px = (SvgVolumeBlack20Px18Px);
      // CONCATENATED MODULE: ./src/assets/icons/volume_muted_20px-18px.svg
      function volume_muted_20px_18px_extends() { volume_muted_20px_18px_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return volume_muted_20px_18px_extends.apply(this, arguments); }



      var volume_muted_20px_18px_ref = /*#__PURE__*/react["createElement"]("path", {
        d: "M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"
      });

      function SvgVolumeMuted20Px18Px(props) {
        return /*#__PURE__*/react["createElement"]("svg", volume_muted_20px_18px_extends({
          className: "volume_muted_20px-18px_svg__icon",
          width: 20,
          height: 18,
          "data-state": "visible",
          xmlns: "http://www.w3.org/2000/svg"
        }, props), volume_muted_20px_18px_ref);
      }

/* harmony default export */ var volume_muted_20px_18px = (SvgVolumeMuted20Px18Px);
      // CONCATENATED MODULE: ./src/components/Controls/Buttons/VolumeButton.js






      function VolumeButton(_ref) {
        var getElementVolume = _ref.getElementVolume,
          setElementVolume = _ref.setElementVolume,
          getIsElementMuted = _ref.getIsElementMuted,
          toggleElementMute = _ref.toggleElementMute;
        var rangeRef = Object(react["useRef"])(null);

        var _useState = Object(react["useState"])({
          muted: getIsElementMuted(),
          slideValue: 50
        }),
          _useState2 = slicedToArray_default()(_useState, 2),
          state = _useState2[0],
          setState = _useState2[1];

        function toggleMute() {
          toggleElementMute(state.muted);
          var isElementMuted = getIsElementMuted(); // Change the colored track to reflect the value

          var slideValue = isElementMuted ? 0 : 50;
          var element = rangeRef.current;
          element.style.setProperty('--val', +slideValue);
          setState({
            muted: isElementMuted,
            slideValue: slideValue
          });
        }

        function onSlideChange(event) {
          // Volume ranges from 0.0 to 1
          setElementVolume(event.target.value / 100);
          setState({
            muted: getElementVolume() === 0,
            slideValue: event.target.value
          });
        } // This controls the customized colored part of the input[type=range] track


        function onInputChange() {
          var element = rangeRef.current;
          element.style.setProperty('--val', +element.value);
        }

        return /*#__PURE__*/react_default.a.createElement("div", {
          className: "volume-button-container"
        }, /*#__PURE__*/react_default.a.createElement("button", {
          className: "volume-button",
          onClick: toggleMute
        }, state.muted ? /*#__PURE__*/react_default.a.createElement(volume_muted_20px_18px, {
          alt: "Unmute Volume"
        }) : /*#__PURE__*/react_default.a.createElement(volume_black_20px_18px, {
          alt: "Mute Volume"
        })), !utils_isSafari && /*#__PURE__*/react_default.a.createElement("input", {
          className: "volume-slider",
          type: "range",
          min: "0",
          max: "100",
          ref: rangeRef,
          value: state.slideValue,
          onChange: onSlideChange,
          onInput: onInputChange
        }));
      }

/* harmony default export */ var Buttons_VolumeButton = (VolumeButton);
      // CONCATENATED MODULE: ./src/components/Controls/Buttons/SubtitleButton.js



      function SubtitleButton(_ref) {
        var video = _ref.video;
        var subtitleTrack = video.getSubtitleTrackElement();

        var _useState = Object(react["useState"])(false),
          _useState2 = slicedToArray_default()(_useState, 2),
          enabled = _useState2[0],
          setEnabled = _useState2[1];

        var subtitleFileInputRef = Object(react["useRef"])(null);

        function toggleSubtitles() {
          if (!enabled) {
            subtitleFileInputRef.current.click();
          } else {
            subtitleTrack.track.mode = 'hidden';
            setEnabled(false);
          }
        }

        function onFileChange(event) {
          setEnabled(true);
          video.loadSubtitles(event.target.files[0]);
        }

        return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("input", {
          id: "subtitleFileInput",
          type: "file",
          ref: subtitleFileInputRef,
          onChange: onFileChange,
          hidden: true,
          accept: ".srt,.vtt",
          value: "" // Force onChange to be triggered always, even for the same file

        }), /*#__PURE__*/react_default.a.createElement("button", {
          onClick: toggleSubtitles,
          title: enabled ? "Disable subtitles" : "Load subtitles"
        }, /*#__PURE__*/react_default.a.createElement("svg", {
          id: "subtitle",
          xmlns: "http://www.w3.org/2000/svg",
          width: "22",
          height: "22",
          viewBox: "0 0 24 24"
        }, /*#__PURE__*/react_default.a.createElement("path", {
          d: "M6 10v4c0 1.103.897 2 2 2h3v-2H8v-4h3V8H8C6.897 8 6 8.897 6 10zM13 10v4c0 1.103.897 2 2 2h3v-2h-3v-4h3V8h-3C13.897 8 13 8.897 13 10z",
          fill: enabled ? '#3183C8' : '#ADB5BD'
        }), /*#__PURE__*/react_default.a.createElement("path", {
          d: "M20,4H4C2.897,4,2,4.897,2,6v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M4,18V6h16 l0.002,12H4z",
          fill: enabled ? '#3183C8' : '#ADB5BD'
        }))));
      }

/* harmony default export */ var Buttons_SubtitleButton = (SubtitleButton);
      // CONCATENATED MODULE: ./src/hooks/useWindowResizeCallback.js


      function useWindowResizeCallback(callback) {
        Object(react["useEffect"])(function () {
          window.addEventListener('resize', callback);
          return function () {
            window.removeEventListener('resize', callback);
          };
        }, [callback]);
      }

/* harmony default export */ var hooks_useWindowResizeCallback = (useWindowResizeCallback);
      // CONCATENATED MODULE: ./src/components/Controls/Buttons/GuidesButton.js




      function GuidesButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

      function GuidesButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { GuidesButton_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { GuidesButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



      var ASPECT_RATIOS = ["2.35", "1.85", "16:9", "4:3", "1:1"];

      function GuidesButton(_ref) {
        var document = _ref.document;

        var _useState = Object(react["useState"])({
          menuOpen: false,
          currentAspectRatio: "",
          show: false
        }),
          _useState2 = slicedToArray_default()(_useState, 2),
          state = _useState2[0],
          setState = _useState2[1];

        var guidesContainerElement = document.getElementById('guides-container');
        var guidesContainerMainChildElement = document.getElementById('guides-container-main-child');
        hooks_useWindowResizeCallback(function () {
          if (state.show) {
            calculateGuidesSize(state.currentAspectRatio);
          }
        });

        function ratioToWidth(ratio) {
          // 16:9 is our base for calculation and represent a width of 100%
          // other aspect ratios are calculated using the "rule of three"
          switch (ratio) {
            case "1.85":
            case "2.35":
            case "16:9":
              return 100;
            // 16 / 9 => 1.77

            case "4:3":
              return 75.14;
            // 4 / 3 = 1.33 => (1.33 * 100) / 1.77 => 75.14

            case "1:1":
              return 56.49;
            // 1 / 1 = 1 => (1 * 100) / 1.77 => 56.49

            default:
              console.error('ratioToWidth : Unknown width');
              break;
          }
        }

        function ratioToHeight(ratio) {
          switch (ratio) {
            case "1.85":
              return 96.09;

            case "2.35":
              return 75.64;

            case "16:9":
            case "4:3":
            case "1:1":
              return 100;

            default:
              console.error('ratioToHeight : Unknown height');
              break;
          }
        }

        function onChangeAspectRatio(event) {
          var textContent = event.target.textContent;
          setState({
            menuOpen: false,
            currentAspectRatio: textContent,
            show: textContent !== 'Off'
          });

          if (textContent === 'Off') {
            guidesContainerElement.style.display = 'none';
          } else {
            guidesContainerElement.style.display = 'grid';
            calculateGuidesSize(textContent);
          }
        }

        function calculateGuidesSize(currentAspectRatio) {
          var _guidesContainerEleme = guidesContainerElement.getBoundingClientRect(),
            width = _guidesContainerEleme.width,
            height = _guidesContainerEleme.height;

          guidesContainerMainChildElement.style.width = "".concat(ratioToWidth(currentAspectRatio) / 100 * width, "px");
          guidesContainerMainChildElement.style.height = "".concat(ratioToHeight(currentAspectRatio) / 100 * height, "px");
        }

        return /*#__PURE__*/react_default.a.createElement("div", {
          className: "button-with-menu"
        }, /*#__PURE__*/react_default.a.createElement("button", {
          onClick: function onClick() {
            return setState(function (prevState) {
              return GuidesButton_objectSpread(GuidesButton_objectSpread({}, prevState), {}, {
                menuOpen: !prevState.menuOpen
              });
            });
          },
          title: state.show ? "Hide aspect ratio guide" : "Show aspect ratio guide"
        }, /*#__PURE__*/react_default.a.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "22px",
          height: "22px"
        }, /*#__PURE__*/react_default.a.createElement("path", {
          d: "M0 0h24v24H0z",
          fill: "none"
        }), /*#__PURE__*/react_default.a.createElement("path", {
          fill: state.show ? '#3183C8' : '#ADB5BD',
          d: "M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"
        }))), /*#__PURE__*/react_default.a.createElement("ul", {
          hidden: !state.menuOpen
        }, ASPECT_RATIOS.map(function (ratio) {
          return /*#__PURE__*/react_default.a.createElement("li", {
            key: ratio,
            onClick: onChangeAspectRatio
          }, ratio);
        }), /*#__PURE__*/react_default.a.createElement("li", {
          value: 'Off',
          onClick: onChangeAspectRatio
        }, "Off")));
      }

/* harmony default export */ var Buttons_GuidesButton = (GuidesButton);
      // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }
      // CONCATENATED MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
      function areInputsEqual(newInputs, lastInputs) {
        if (newInputs.length !== lastInputs.length) {
          return false;
        }
        for (var i = 0; i < newInputs.length; i++) {
          if (newInputs[i] !== lastInputs[i]) {
            return false;
          }
        }
        return true;
      }

      function memoizeOne(resultFn, isEqual) {
        if (isEqual === void 0) { isEqual = areInputsEqual; }
        var lastThis;
        var lastArgs = [];
        var lastResult;
        var calledOnce = false;
        function memoized() {
          var newArgs = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
          }
          if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
          }
          lastResult = resultFn.apply(this, newArgs);
          calledOnce = true;
          lastThis = this;
          lastArgs = newArgs;
          return lastResult;
        }
        return memoized;
      }

/* harmony default export */ var memoize_one_esm = (memoizeOne);

      // CONCATENATED MODULE: ./node_modules/react-window/dist/index.esm.js







      // Animation frame based implementation of setTimeout.
      // Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
      var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
      var now = hasNativePerformanceNow ? function () {
        return performance.now();
      } : function () {
        return Date.now();
      };
      function cancelTimeout(timeoutID) {
        cancelAnimationFrame(timeoutID.id);
      }
      function requestTimeout(callback, delay) {
        var start = now();

        function tick() {
          if (now() - start >= delay) {
            callback.call(null);
          } else {
            timeoutID.id = requestAnimationFrame(tick);
          }
        }

        var timeoutID = {
          id: requestAnimationFrame(tick)
        };
        return timeoutID;
      }

      var size = -1; // This utility copied from "dom-helpers" package.

      function getScrollbarSize(recalculate) {
        if (recalculate === void 0) {
          recalculate = false;
        }

        if (size === -1 || recalculate) {
          var div = document.createElement('div');
          var style = div.style;
          style.width = '50px';
          style.height = '50px';
          style.overflow = 'scroll';
          document.body.appendChild(div);
          size = div.offsetWidth - div.clientWidth;
          document.body.removeChild(div);
        }

        return size;
      }
      var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
      // Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
      // Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
      // The safest way to check this is to intentionally set a negative offset,
      // and then verify that the subsequent "scroll" event matches the negative offset.
      // If it does not match, then we can assume a non-standard RTL scroll implementation.

      function getRTLOffsetType(recalculate) {
        if (recalculate === void 0) {
          recalculate = false;
        }

        if (cachedRTLResult === null || recalculate) {
          var outerDiv = document.createElement('div');
          var outerStyle = outerDiv.style;
          outerStyle.width = '50px';
          outerStyle.height = '50px';
          outerStyle.overflow = 'scroll';
          outerStyle.direction = 'rtl';
          var innerDiv = document.createElement('div');
          var innerStyle = innerDiv.style;
          innerStyle.width = '100px';
          innerStyle.height = '100px';
          outerDiv.appendChild(innerDiv);
          document.body.appendChild(outerDiv);

          if (outerDiv.scrollLeft > 0) {
            cachedRTLResult = 'positive-descending';
          } else {
            outerDiv.scrollLeft = 1;

            if (outerDiv.scrollLeft === 0) {
              cachedRTLResult = 'negative';
            } else {
              cachedRTLResult = 'positive-ascending';
            }
          }

          document.body.removeChild(outerDiv);
          return cachedRTLResult;
        }

        return cachedRTLResult;
      }

      var IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

      var defaultItemKey = function defaultItemKey(_ref) {
        var columnIndex = _ref.columnIndex,
          data = _ref.data,
          rowIndex = _ref.rowIndex;
        return rowIndex + ":" + columnIndex;
      }; // In DEV mode, this Set helps us only log a warning once per component instance.
      // This avoids spamming the console every time a render happens.


      var devWarningsOverscanCount = null;
      var devWarningsOverscanRowsColumnsCount = null;
      var devWarningsTagName = null;

      if (false) { }

      function createGridComponent(_ref2) {
        var _class, _temp;

        var getColumnOffset = _ref2.getColumnOffset,
          getColumnStartIndexForOffset = _ref2.getColumnStartIndexForOffset,
          getColumnStopIndexForStartIndex = _ref2.getColumnStopIndexForStartIndex,
          getColumnWidth = _ref2.getColumnWidth,
          getEstimatedTotalHeight = _ref2.getEstimatedTotalHeight,
          getEstimatedTotalWidth = _ref2.getEstimatedTotalWidth,
          getOffsetForColumnAndAlignment = _ref2.getOffsetForColumnAndAlignment,
          getOffsetForRowAndAlignment = _ref2.getOffsetForRowAndAlignment,
          getRowHeight = _ref2.getRowHeight,
          getRowOffset = _ref2.getRowOffset,
          getRowStartIndexForOffset = _ref2.getRowStartIndexForOffset,
          getRowStopIndexForStartIndex = _ref2.getRowStopIndexForStartIndex,
          initInstanceProps = _ref2.initInstanceProps,
          shouldResetStyleCacheOnItemSizeChange = _ref2.shouldResetStyleCacheOnItemSizeChange,
          validateProps = _ref2.validateProps;
        return _temp = _class =
          /*#__PURE__*/
          function (_PureComponent) {
            _inheritsLoose(Grid, _PureComponent);

            // Always use explicit constructor for React components.
            // It produces less code after transpilation. (#26)
            // eslint-disable-next-line no-useless-constructor
            function Grid(props) {
              var _this;

              _this = _PureComponent.call(this, props) || this;
              _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized(_assertThisInitialized(_this)));
              _this._resetIsScrollingTimeoutId = null;
              _this._outerRef = void 0;
              _this.state = {
                instance: _assertThisInitialized(_assertThisInitialized(_this)),
                isScrolling: false,
                horizontalScrollDirection: 'forward',
                scrollLeft: typeof _this.props.initialScrollLeft === 'number' ? _this.props.initialScrollLeft : 0,
                scrollTop: typeof _this.props.initialScrollTop === 'number' ? _this.props.initialScrollTop : 0,
                scrollUpdateWasRequested: false,
                verticalScrollDirection: 'forward'
              };
              _this._callOnItemsRendered = void 0;
              _this._callOnItemsRendered = memoize_one_esm(function (overscanColumnStartIndex, overscanColumnStopIndex, overscanRowStartIndex, overscanRowStopIndex, visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex) {
                return _this.props.onItemsRendered({
                  overscanColumnStartIndex: overscanColumnStartIndex,
                  overscanColumnStopIndex: overscanColumnStopIndex,
                  overscanRowStartIndex: overscanRowStartIndex,
                  overscanRowStopIndex: overscanRowStopIndex,
                  visibleColumnStartIndex: visibleColumnStartIndex,
                  visibleColumnStopIndex: visibleColumnStopIndex,
                  visibleRowStartIndex: visibleRowStartIndex,
                  visibleRowStopIndex: visibleRowStopIndex
                });
              });
              _this._callOnScroll = void 0;
              _this._callOnScroll = memoize_one_esm(function (scrollLeft, scrollTop, horizontalScrollDirection, verticalScrollDirection, scrollUpdateWasRequested) {
                return _this.props.onScroll({
                  horizontalScrollDirection: horizontalScrollDirection,
                  scrollLeft: scrollLeft,
                  scrollTop: scrollTop,
                  verticalScrollDirection: verticalScrollDirection,
                  scrollUpdateWasRequested: scrollUpdateWasRequested
                });
              });
              _this._getItemStyle = void 0;

              _this._getItemStyle = function (rowIndex, columnIndex) {
                var _this$props = _this.props,
                  columnWidth = _this$props.columnWidth,
                  direction = _this$props.direction,
                  rowHeight = _this$props.rowHeight;

                var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && columnWidth, shouldResetStyleCacheOnItemSizeChange && direction, shouldResetStyleCacheOnItemSizeChange && rowHeight);

                var key = rowIndex + ":" + columnIndex;
                var style;

                if (itemStyleCache.hasOwnProperty(key)) {
                  style = itemStyleCache[key];
                } else {
                  var _offset = getColumnOffset(_this.props, columnIndex, _this._instanceProps);

                  var isRtl = direction === 'rtl';
                  itemStyleCache[key] = style = {
                    position: 'absolute',
                    left: isRtl ? undefined : _offset,
                    right: isRtl ? _offset : undefined,
                    top: getRowOffset(_this.props, rowIndex, _this._instanceProps),
                    height: getRowHeight(_this.props, rowIndex, _this._instanceProps),
                    width: getColumnWidth(_this.props, columnIndex, _this._instanceProps)
                  };
                }

                return style;
              };

              _this._getItemStyleCache = void 0;
              _this._getItemStyleCache = memoize_one_esm(function (_, __, ___) {
                return {};
              });

              _this._onScroll = function (event) {
                var _event$currentTarget = event.currentTarget,
                  clientHeight = _event$currentTarget.clientHeight,
                  clientWidth = _event$currentTarget.clientWidth,
                  scrollLeft = _event$currentTarget.scrollLeft,
                  scrollTop = _event$currentTarget.scrollTop,
                  scrollHeight = _event$currentTarget.scrollHeight,
                  scrollWidth = _event$currentTarget.scrollWidth;

                _this.setState(function (prevState) {
                  if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
                    // Scroll position may have been updated by cDM/cDU,
                    // In which case we don't need to trigger another render,
                    // And we don't want to update state.isScrolling.
                    return null;
                  }

                  var direction = _this.props.direction; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
                  // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
                  // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
                  // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.

                  var calculatedScrollLeft = scrollLeft;

                  if (direction === 'rtl') {
                    switch (getRTLOffsetType()) {
                      case 'negative':
                        calculatedScrollLeft = -scrollLeft;
                        break;

                      case 'positive-descending':
                        calculatedScrollLeft = scrollWidth - clientWidth - scrollLeft;
                        break;
                    }
                  } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


                  calculatedScrollLeft = Math.max(0, Math.min(calculatedScrollLeft, scrollWidth - clientWidth));
                  var calculatedScrollTop = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
                  return {
                    isScrolling: true,
                    horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
                    scrollLeft: calculatedScrollLeft,
                    scrollTop: calculatedScrollTop,
                    verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward',
                    scrollUpdateWasRequested: false
                  };
                }, _this._resetIsScrollingDebounced);
              };

              _this._outerRefSetter = function (ref) {
                var outerRef = _this.props.outerRef;
                _this._outerRef = ref;

                if (typeof outerRef === 'function') {
                  outerRef(ref);
                } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
                  outerRef.current = ref;
                }
              };

              _this._resetIsScrollingDebounced = function () {
                if (_this._resetIsScrollingTimeoutId !== null) {
                  cancelTimeout(_this._resetIsScrollingTimeoutId);
                }

                _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
              };

              _this._resetIsScrolling = function () {
                _this._resetIsScrollingTimeoutId = null;

                _this.setState({
                  isScrolling: false
                }, function () {
                  // Clear style cache after state update has been committed.
                  // This way we don't break pure sCU for items that don't use isScrolling param.
                  _this._getItemStyleCache(-1);
                });
              };

              return _this;
            }

            Grid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
              validateSharedProps(nextProps, prevState);
              validateProps(nextProps);
              return null;
            };

            var _proto = Grid.prototype;

            _proto.scrollTo = function scrollTo(_ref3) {
              var scrollLeft = _ref3.scrollLeft,
                scrollTop = _ref3.scrollTop;

              if (scrollLeft !== undefined) {
                scrollLeft = Math.max(0, scrollLeft);
              }

              if (scrollTop !== undefined) {
                scrollTop = Math.max(0, scrollTop);
              }

              this.setState(function (prevState) {
                if (scrollLeft === undefined) {
                  scrollLeft = prevState.scrollLeft;
                }

                if (scrollTop === undefined) {
                  scrollTop = prevState.scrollTop;
                }

                if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
                  return null;
                }

                return {
                  horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
                  scrollLeft: scrollLeft,
                  scrollTop: scrollTop,
                  scrollUpdateWasRequested: true,
                  verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward'
                };
              }, this._resetIsScrollingDebounced);
            };

            _proto.scrollToItem = function scrollToItem(_ref4) {
              var _ref4$align = _ref4.align,
                align = _ref4$align === void 0 ? 'auto' : _ref4$align,
                columnIndex = _ref4.columnIndex,
                rowIndex = _ref4.rowIndex;
              var _this$props2 = this.props,
                columnCount = _this$props2.columnCount,
                height = _this$props2.height,
                rowCount = _this$props2.rowCount,
                width = _this$props2.width;
              var _this$state = this.state,
                scrollLeft = _this$state.scrollLeft,
                scrollTop = _this$state.scrollTop;
              var scrollbarSize = getScrollbarSize();

              if (columnIndex !== undefined) {
                columnIndex = Math.max(0, Math.min(columnIndex, columnCount - 1));
              }

              if (rowIndex !== undefined) {
                rowIndex = Math.max(0, Math.min(rowIndex, rowCount - 1));
              }

              var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
              var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps); // The scrollbar size should be considered when scrolling an item into view,
              // to ensure it's fully visible.
              // But we only need to account for its size when it's actually visible.

              var horizontalScrollbarSize = estimatedTotalWidth > width ? scrollbarSize : 0;
              var verticalScrollbarSize = estimatedTotalHeight > height ? scrollbarSize : 0;
              this.scrollTo({
                scrollLeft: columnIndex !== undefined ? getOffsetForColumnAndAlignment(this.props, columnIndex, align, scrollLeft, this._instanceProps, verticalScrollbarSize) : scrollLeft,
                scrollTop: rowIndex !== undefined ? getOffsetForRowAndAlignment(this.props, rowIndex, align, scrollTop, this._instanceProps, horizontalScrollbarSize) : scrollTop
              });
            };

            _proto.componentDidMount = function componentDidMount() {
              var _this$props3 = this.props,
                initialScrollLeft = _this$props3.initialScrollLeft,
                initialScrollTop = _this$props3.initialScrollTop;

              if (this._outerRef != null) {
                var outerRef = this._outerRef;

                if (typeof initialScrollLeft === 'number') {
                  outerRef.scrollLeft = initialScrollLeft;
                }

                if (typeof initialScrollTop === 'number') {
                  outerRef.scrollTop = initialScrollTop;
                }
              }

              this._callPropsCallbacks();
            };

            _proto.componentDidUpdate = function componentDidUpdate() {
              var direction = this.props.direction;
              var _this$state2 = this.state,
                scrollLeft = _this$state2.scrollLeft,
                scrollTop = _this$state2.scrollTop,
                scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

              if (scrollUpdateWasRequested && this._outerRef != null) {
                // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
                // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
                // So we need to determine which browser behavior we're dealing with, and mimic it.
                var outerRef = this._outerRef;

                if (direction === 'rtl') {
                  switch (getRTLOffsetType()) {
                    case 'negative':
                      outerRef.scrollLeft = -scrollLeft;
                      break;

                    case 'positive-ascending':
                      outerRef.scrollLeft = scrollLeft;
                      break;

                    default:
                      var clientWidth = outerRef.clientWidth,
                        scrollWidth = outerRef.scrollWidth;
                      outerRef.scrollLeft = scrollWidth - clientWidth - scrollLeft;
                      break;
                  }
                } else {
                  outerRef.scrollLeft = Math.max(0, scrollLeft);
                }

                outerRef.scrollTop = Math.max(0, scrollTop);
              }

              this._callPropsCallbacks();
            };

            _proto.componentWillUnmount = function componentWillUnmount() {
              if (this._resetIsScrollingTimeoutId !== null) {
                cancelTimeout(this._resetIsScrollingTimeoutId);
              }
            };

            _proto.render = function render() {
              var _this$props4 = this.props,
                children = _this$props4.children,
                className = _this$props4.className,
                columnCount = _this$props4.columnCount,
                direction = _this$props4.direction,
                height = _this$props4.height,
                innerRef = _this$props4.innerRef,
                innerElementType = _this$props4.innerElementType,
                innerTagName = _this$props4.innerTagName,
                itemData = _this$props4.itemData,
                _this$props4$itemKey = _this$props4.itemKey,
                itemKey = _this$props4$itemKey === void 0 ? defaultItemKey : _this$props4$itemKey,
                outerElementType = _this$props4.outerElementType,
                outerTagName = _this$props4.outerTagName,
                rowCount = _this$props4.rowCount,
                style = _this$props4.style,
                useIsScrolling = _this$props4.useIsScrolling,
                width = _this$props4.width;
              var isScrolling = this.state.isScrolling;

              var _this$_getHorizontalR = this._getHorizontalRangeToRender(),
                columnStartIndex = _this$_getHorizontalR[0],
                columnStopIndex = _this$_getHorizontalR[1];

              var _this$_getVerticalRan = this._getVerticalRangeToRender(),
                rowStartIndex = _this$_getVerticalRan[0],
                rowStopIndex = _this$_getVerticalRan[1];

              var items = [];

              if (columnCount > 0 && rowCount) {
                for (var _rowIndex = rowStartIndex; _rowIndex <= rowStopIndex; _rowIndex++) {
                  for (var _columnIndex = columnStartIndex; _columnIndex <= columnStopIndex; _columnIndex++) {
                    items.push(Object(react["createElement"])(children, {
                      columnIndex: _columnIndex,
                      data: itemData,
                      isScrolling: useIsScrolling ? isScrolling : undefined,
                      key: itemKey({
                        columnIndex: _columnIndex,
                        data: itemData,
                        rowIndex: _rowIndex
                      }),
                      rowIndex: _rowIndex,
                      style: this._getItemStyle(_rowIndex, _columnIndex)
                    }));
                  }
                }
              } // Read this value AFTER items have been created,
              // So their actual sizes (if variable) are taken into consideration.


              var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
              var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps);
              return Object(react["createElement"])(outerElementType || outerTagName || 'div', {
                className: className,
                onScroll: this._onScroll,
                ref: this._outerRefSetter,
                style: _extends({
                  position: 'relative',
                  height: height,
                  width: width,
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  willChange: 'transform',
                  direction: direction
                }, style)
              }, Object(react["createElement"])(innerElementType || innerTagName || 'div', {
                children: items,
                ref: innerRef,
                style: {
                  height: estimatedTotalHeight,
                  pointerEvents: isScrolling ? 'none' : undefined,
                  width: estimatedTotalWidth
                }
              }));
            };

            _proto._callPropsCallbacks = function _callPropsCallbacks() {
              var _this$props5 = this.props,
                columnCount = _this$props5.columnCount,
                onItemsRendered = _this$props5.onItemsRendered,
                onScroll = _this$props5.onScroll,
                rowCount = _this$props5.rowCount;

              if (typeof onItemsRendered === 'function') {
                if (columnCount > 0 && rowCount > 0) {
                  var _this$_getHorizontalR2 = this._getHorizontalRangeToRender(),
                    _overscanColumnStartIndex = _this$_getHorizontalR2[0],
                    _overscanColumnStopIndex = _this$_getHorizontalR2[1],
                    _visibleColumnStartIndex = _this$_getHorizontalR2[2],
                    _visibleColumnStopIndex = _this$_getHorizontalR2[3];

                  var _this$_getVerticalRan2 = this._getVerticalRangeToRender(),
                    _overscanRowStartIndex = _this$_getVerticalRan2[0],
                    _overscanRowStopIndex = _this$_getVerticalRan2[1],
                    _visibleRowStartIndex = _this$_getVerticalRan2[2],
                    _visibleRowStopIndex = _this$_getVerticalRan2[3];

                  this._callOnItemsRendered(_overscanColumnStartIndex, _overscanColumnStopIndex, _overscanRowStartIndex, _overscanRowStopIndex, _visibleColumnStartIndex, _visibleColumnStopIndex, _visibleRowStartIndex, _visibleRowStopIndex);
                }
              }

              if (typeof onScroll === 'function') {
                var _this$state3 = this.state,
                  _horizontalScrollDirection = _this$state3.horizontalScrollDirection,
                  _scrollLeft = _this$state3.scrollLeft,
                  _scrollTop = _this$state3.scrollTop,
                  _scrollUpdateWasRequested = _this$state3.scrollUpdateWasRequested,
                  _verticalScrollDirection = _this$state3.verticalScrollDirection;

                this._callOnScroll(_scrollLeft, _scrollTop, _horizontalScrollDirection, _verticalScrollDirection, _scrollUpdateWasRequested);
              }
            }; // Lazily create and cache item styles while scrolling,
            // So that pure component sCU will prevent re-renders.
            // We maintain this cache, and pass a style prop rather than index,
            // So that List can clear cached styles and force item re-render if necessary.


            _proto._getHorizontalRangeToRender = function _getHorizontalRangeToRender() {
              var _this$props6 = this.props,
                columnCount = _this$props6.columnCount,
                overscanColumnCount = _this$props6.overscanColumnCount,
                overscanColumnsCount = _this$props6.overscanColumnsCount,
                overscanCount = _this$props6.overscanCount,
                rowCount = _this$props6.rowCount;
              var _this$state4 = this.state,
                horizontalScrollDirection = _this$state4.horizontalScrollDirection,
                isScrolling = _this$state4.isScrolling,
                scrollLeft = _this$state4.scrollLeft;
              var overscanCountResolved = overscanColumnCount || overscanColumnsCount || overscanCount || 1;

              if (columnCount === 0 || rowCount === 0) {
                return [0, 0, 0, 0];
              }

              var startIndex = getColumnStartIndexForOffset(this.props, scrollLeft, this._instanceProps);
              var stopIndex = getColumnStopIndexForStartIndex(this.props, startIndex, scrollLeft, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
              // If there isn't at least one extra item, tab loops back around.

              var overscanBackward = !isScrolling || horizontalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
              var overscanForward = !isScrolling || horizontalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
              return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(columnCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
            };

            _proto._getVerticalRangeToRender = function _getVerticalRangeToRender() {
              var _this$props7 = this.props,
                columnCount = _this$props7.columnCount,
                overscanCount = _this$props7.overscanCount,
                overscanRowCount = _this$props7.overscanRowCount,
                overscanRowsCount = _this$props7.overscanRowsCount,
                rowCount = _this$props7.rowCount;
              var _this$state5 = this.state,
                isScrolling = _this$state5.isScrolling,
                verticalScrollDirection = _this$state5.verticalScrollDirection,
                scrollTop = _this$state5.scrollTop;
              var overscanCountResolved = overscanRowCount || overscanRowsCount || overscanCount || 1;

              if (columnCount === 0 || rowCount === 0) {
                return [0, 0, 0, 0];
              }

              var startIndex = getRowStartIndexForOffset(this.props, scrollTop, this._instanceProps);
              var stopIndex = getRowStopIndexForStartIndex(this.props, startIndex, scrollTop, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
              // If there isn't at least one extra item, tab loops back around.

              var overscanBackward = !isScrolling || verticalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
              var overscanForward = !isScrolling || verticalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
              return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(rowCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
            };

            return Grid;
          }(react["PureComponent"]), _class.defaultProps = {
            direction: 'ltr',
            itemData: undefined,
            useIsScrolling: false
          }, _temp;
      }

      var validateSharedProps = function validateSharedProps(_ref5, _ref6) {
        var children = _ref5.children,
          direction = _ref5.direction,
          height = _ref5.height,
          innerTagName = _ref5.innerTagName,
          outerTagName = _ref5.outerTagName,
          overscanColumnsCount = _ref5.overscanColumnsCount,
          overscanCount = _ref5.overscanCount,
          overscanRowsCount = _ref5.overscanRowsCount,
          width = _ref5.width;
        var instance = _ref6.instance;

        if (false) { }
      };

      var DEFAULT_ESTIMATED_ITEM_SIZE = 50;

      var index_esm_getEstimatedTotalHeight = function getEstimatedTotalHeight(_ref, _ref2) {
        var rowCount = _ref.rowCount;
        var rowMetadataMap = _ref2.rowMetadataMap,
          estimatedRowHeight = _ref2.estimatedRowHeight,
          lastMeasuredRowIndex = _ref2.lastMeasuredRowIndex;
        var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
        // https://github.com/bvaughn/react-window/pull/138

        if (lastMeasuredRowIndex >= rowCount) {
          lastMeasuredRowIndex = rowCount - 1;
        }

        if (lastMeasuredRowIndex >= 0) {
          var itemMetadata = rowMetadataMap[lastMeasuredRowIndex];
          totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
        }

        var numUnmeasuredItems = rowCount - lastMeasuredRowIndex - 1;
        var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedRowHeight;
        return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
      };

      var index_esm_getEstimatedTotalWidth = function getEstimatedTotalWidth(_ref3, _ref4) {
        var columnCount = _ref3.columnCount;
        var columnMetadataMap = _ref4.columnMetadataMap,
          estimatedColumnWidth = _ref4.estimatedColumnWidth,
          lastMeasuredColumnIndex = _ref4.lastMeasuredColumnIndex;
        var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
        // https://github.com/bvaughn/react-window/pull/138

        if (lastMeasuredColumnIndex >= columnCount) {
          lastMeasuredColumnIndex = columnCount - 1;
        }

        if (lastMeasuredColumnIndex >= 0) {
          var itemMetadata = columnMetadataMap[lastMeasuredColumnIndex];
          totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
        }

        var numUnmeasuredItems = columnCount - lastMeasuredColumnIndex - 1;
        var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedColumnWidth;
        return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
      };

      var getItemMetadata = function getItemMetadata(itemType, props, index, instanceProps) {
        var itemMetadataMap, itemSize, lastMeasuredIndex;

        if (itemType === 'column') {
          itemMetadataMap = instanceProps.columnMetadataMap;
          itemSize = props.columnWidth;
          lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
        } else {
          itemMetadataMap = instanceProps.rowMetadataMap;
          itemSize = props.rowHeight;
          lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
        }

        if (index > lastMeasuredIndex) {
          var offset = 0;

          if (lastMeasuredIndex >= 0) {
            var itemMetadata = itemMetadataMap[lastMeasuredIndex];
            offset = itemMetadata.offset + itemMetadata.size;
          }

          for (var i = lastMeasuredIndex + 1; i <= index; i++) {
            var size = itemSize(i);
            itemMetadataMap[i] = {
              offset: offset,
              size: size
            };
            offset += size;
          }

          if (itemType === 'column') {
            instanceProps.lastMeasuredColumnIndex = index;
          } else {
            instanceProps.lastMeasuredRowIndex = index;
          }
        }

        return itemMetadataMap[index];
      };

      var findNearestItem = function findNearestItem(itemType, props, instanceProps, offset) {
        var itemMetadataMap, lastMeasuredIndex;

        if (itemType === 'column') {
          itemMetadataMap = instanceProps.columnMetadataMap;
          lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
        } else {
          itemMetadataMap = instanceProps.rowMetadataMap;
          lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
        }

        var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

        if (lastMeasuredItemOffset >= offset) {
          // If we've already measured items within this range just use a binary search as it's faster.
          return findNearestItemBinarySearch(itemType, props, instanceProps, lastMeasuredIndex, 0, offset);
        } else {
          // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
          // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
          // The overall complexity for this approach is O(log n).
          return findNearestItemExponentialSearch(itemType, props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
        }
      };

      var findNearestItemBinarySearch = function findNearestItemBinarySearch(itemType, props, instanceProps, high, low, offset) {
        while (low <= high) {
          var middle = low + Math.floor((high - low) / 2);
          var currentOffset = getItemMetadata(itemType, props, middle, instanceProps).offset;

          if (currentOffset === offset) {
            return middle;
          } else if (currentOffset < offset) {
            low = middle + 1;
          } else if (currentOffset > offset) {
            high = middle - 1;
          }
        }

        if (low > 0) {
          return low - 1;
        } else {
          return 0;
        }
      };

      var findNearestItemExponentialSearch = function findNearestItemExponentialSearch(itemType, props, instanceProps, index, offset) {
        var itemCount = itemType === 'column' ? props.columnCount : props.rowCount;
        var interval = 1;

        while (index < itemCount && getItemMetadata(itemType, props, index, instanceProps).offset < offset) {
          index += interval;
          interval *= 2;
        }

        return findNearestItemBinarySearch(itemType, props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
      };

      var index_esm_getOffsetForIndexAndAlignment = function getOffsetForIndexAndAlignment(itemType, props, index, align, scrollOffset, instanceProps, scrollbarSize) {
        var size = itemType === 'column' ? props.width : props.height;
        var itemMetadata = getItemMetadata(itemType, props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
        // To ensure it reflects actual measurements instead of just estimates.

        var estimatedTotalSize = itemType === 'column' ? index_esm_getEstimatedTotalWidth(props, instanceProps) : index_esm_getEstimatedTotalHeight(props, instanceProps);
        var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
        var minOffset = Math.max(0, itemMetadata.offset - size + scrollbarSize + itemMetadata.size);

        if (align === 'smart') {
          if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
            align = 'auto';
          } else {
            align = 'center';
          }
        }

        switch (align) {
          case 'start':
            return maxOffset;

          case 'end':
            return minOffset;

          case 'center':
            return Math.round(minOffset + (maxOffset - minOffset) / 2);

          case 'auto':
          default:
            if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
              return scrollOffset;
            } else if (minOffset > maxOffset) {
              // Because we only take into account the scrollbar size when calculating minOffset
              // this value can be larger than maxOffset when at the end of the list
              return minOffset;
            } else if (scrollOffset < minOffset) {
              return minOffset;
            } else {
              return maxOffset;
            }

        }
      };

      var VariableSizeGrid =
        /*#__PURE__*/
        createGridComponent({
          getColumnOffset: function getColumnOffset(props, index, instanceProps) {
            return getItemMetadata('column', props, index, instanceProps).offset;
          },
          getColumnStartIndexForOffset: function getColumnStartIndexForOffset(props, scrollLeft, instanceProps) {
            return findNearestItem('column', props, instanceProps, scrollLeft);
          },
          getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(props, startIndex, scrollLeft, instanceProps) {
            var columnCount = props.columnCount,
              width = props.width;
            var itemMetadata = getItemMetadata('column', props, startIndex, instanceProps);
            var maxOffset = scrollLeft + width;
            var offset = itemMetadata.offset + itemMetadata.size;
            var stopIndex = startIndex;

            while (stopIndex < columnCount - 1 && offset < maxOffset) {
              stopIndex++;
              offset += getItemMetadata('column', props, stopIndex, instanceProps).size;
            }

            return stopIndex;
          },
          getColumnWidth: function getColumnWidth(props, index, instanceProps) {
            return instanceProps.columnMetadataMap[index].size;
          },
          getEstimatedTotalHeight: index_esm_getEstimatedTotalHeight,
          getEstimatedTotalWidth: index_esm_getEstimatedTotalWidth,
          getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
            return index_esm_getOffsetForIndexAndAlignment('column', props, index, align, scrollOffset, instanceProps, scrollbarSize);
          },
          getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
            return index_esm_getOffsetForIndexAndAlignment('row', props, index, align, scrollOffset, instanceProps, scrollbarSize);
          },
          getRowOffset: function getRowOffset(props, index, instanceProps) {
            return getItemMetadata('row', props, index, instanceProps).offset;
          },
          getRowHeight: function getRowHeight(props, index, instanceProps) {
            return instanceProps.rowMetadataMap[index].size;
          },
          getRowStartIndexForOffset: function getRowStartIndexForOffset(props, scrollTop, instanceProps) {
            return findNearestItem('row', props, instanceProps, scrollTop);
          },
          getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(props, startIndex, scrollTop, instanceProps) {
            var rowCount = props.rowCount,
              height = props.height;
            var itemMetadata = getItemMetadata('row', props, startIndex, instanceProps);
            var maxOffset = scrollTop + height;
            var offset = itemMetadata.offset + itemMetadata.size;
            var stopIndex = startIndex;

            while (stopIndex < rowCount - 1 && offset < maxOffset) {
              stopIndex++;
              offset += getItemMetadata('row', props, stopIndex, instanceProps).size;
            }

            return stopIndex;
          },
          initInstanceProps: function initInstanceProps(props, instance) {
            var _ref5 = props,
              estimatedColumnWidth = _ref5.estimatedColumnWidth,
              estimatedRowHeight = _ref5.estimatedRowHeight;
            var instanceProps = {
              columnMetadataMap: {},
              estimatedColumnWidth: estimatedColumnWidth || DEFAULT_ESTIMATED_ITEM_SIZE,
              estimatedRowHeight: estimatedRowHeight || DEFAULT_ESTIMATED_ITEM_SIZE,
              lastMeasuredColumnIndex: -1,
              lastMeasuredRowIndex: -1,
              rowMetadataMap: {}
            };

            instance.resetAfterColumnIndex = function (columnIndex, shouldForceUpdate) {
              if (shouldForceUpdate === void 0) {
                shouldForceUpdate = true;
              }

              instance.resetAfterIndices({
                columnIndex: columnIndex,
                shouldForceUpdate: shouldForceUpdate
              });
            };

            instance.resetAfterRowIndex = function (rowIndex, shouldForceUpdate) {
              if (shouldForceUpdate === void 0) {
                shouldForceUpdate = true;
              }

              instance.resetAfterIndices({
                rowIndex: rowIndex,
                shouldForceUpdate: shouldForceUpdate
              });
            };

            instance.resetAfterIndices = function (_ref6) {
              var columnIndex = _ref6.columnIndex,
                rowIndex = _ref6.rowIndex,
                _ref6$shouldForceUpda = _ref6.shouldForceUpdate,
                shouldForceUpdate = _ref6$shouldForceUpda === void 0 ? true : _ref6$shouldForceUpda;

              if (typeof columnIndex === 'number') {
                instanceProps.lastMeasuredColumnIndex = Math.min(instanceProps.lastMeasuredColumnIndex, columnIndex - 1);
              }

              if (typeof rowIndex === 'number') {
                instanceProps.lastMeasuredRowIndex = Math.min(instanceProps.lastMeasuredRowIndex, rowIndex - 1);
              } // We could potentially optimize further by only evicting styles after this index,
              // But since styles are only cached while scrolling is in progress-
              // It seems an unnecessary optimization.
              // It's unlikely that resetAfterIndex() will be called while a user is scrolling.


              instance._getItemStyleCache(-1);

              if (shouldForceUpdate) {
                instance.forceUpdate();
              }
            };

            return instanceProps;
          },
          shouldResetStyleCacheOnItemSizeChange: false,
          validateProps: function validateProps(_ref7) {
            var columnWidth = _ref7.columnWidth,
              rowHeight = _ref7.rowHeight;

            if (false) { }
          }
        });

      var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

      var defaultItemKey$1 = function defaultItemKey(index, data) {
        return index;
      }; // In DEV mode, this Set helps us only log a warning once per component instance.
      // This avoids spamming the console every time a render happens.


      var devWarningsDirection = null;
      var devWarningsTagName$1 = null;

      if (false) { }

      function createListComponent(_ref) {
        var _class, _temp;

        var getItemOffset = _ref.getItemOffset,
          getEstimatedTotalSize = _ref.getEstimatedTotalSize,
          getItemSize = _ref.getItemSize,
          getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
          getStartIndexForOffset = _ref.getStartIndexForOffset,
          getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
          initInstanceProps = _ref.initInstanceProps,
          shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
          validateProps = _ref.validateProps;
        return _temp = _class =
          /*#__PURE__*/
          function (_PureComponent) {
            _inheritsLoose(List, _PureComponent);

            // Always use explicit constructor for React components.
            // It produces less code after transpilation. (#26)
            // eslint-disable-next-line no-useless-constructor
            function List(props) {
              var _this;

              _this = _PureComponent.call(this, props) || this;
              _this._instanceProps = initInstanceProps(_this.props, _assertThisInitialized(_assertThisInitialized(_this)));
              _this._outerRef = void 0;
              _this._resetIsScrollingTimeoutId = null;
              _this.state = {
                instance: _assertThisInitialized(_assertThisInitialized(_this)),
                isScrolling: false,
                scrollDirection: 'forward',
                scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
                scrollUpdateWasRequested: false
              };
              _this._callOnItemsRendered = void 0;
              _this._callOnItemsRendered = memoize_one_esm(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
                return _this.props.onItemsRendered({
                  overscanStartIndex: overscanStartIndex,
                  overscanStopIndex: overscanStopIndex,
                  visibleStartIndex: visibleStartIndex,
                  visibleStopIndex: visibleStopIndex
                });
              });
              _this._callOnScroll = void 0;
              _this._callOnScroll = memoize_one_esm(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
                return _this.props.onScroll({
                  scrollDirection: scrollDirection,
                  scrollOffset: scrollOffset,
                  scrollUpdateWasRequested: scrollUpdateWasRequested
                });
              });
              _this._getItemStyle = void 0;

              _this._getItemStyle = function (index) {
                var _this$props = _this.props,
                  direction = _this$props.direction,
                  itemSize = _this$props.itemSize,
                  layout = _this$props.layout;

                var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

                var style;

                if (itemStyleCache.hasOwnProperty(index)) {
                  style = itemStyleCache[index];
                } else {
                  var _offset = getItemOffset(_this.props, index, _this._instanceProps);

                  var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

                  var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
                  var isRtl = direction === 'rtl';
                  var offsetHorizontal = isHorizontal ? _offset : 0;
                  itemStyleCache[index] = style = {
                    position: 'absolute',
                    left: isRtl ? undefined : offsetHorizontal,
                    right: isRtl ? offsetHorizontal : undefined,
                    top: !isHorizontal ? _offset : 0,
                    height: !isHorizontal ? size : '100%',
                    width: isHorizontal ? size : '100%'
                  };
                }

                return style;
              };

              _this._getItemStyleCache = void 0;
              _this._getItemStyleCache = memoize_one_esm(function (_, __, ___) {
                return {};
              });

              _this._onScrollHorizontal = function (event) {
                var _event$currentTarget = event.currentTarget,
                  clientWidth = _event$currentTarget.clientWidth,
                  scrollLeft = _event$currentTarget.scrollLeft,
                  scrollWidth = _event$currentTarget.scrollWidth;

                _this.setState(function (prevState) {
                  if (prevState.scrollOffset === scrollLeft) {
                    // Scroll position may have been updated by cDM/cDU,
                    // In which case we don't need to trigger another render,
                    // And we don't want to update state.isScrolling.
                    return null;
                  }

                  var direction = _this.props.direction;
                  var scrollOffset = scrollLeft;

                  if (direction === 'rtl') {
                    // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
                    // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
                    // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
                    // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
                    switch (getRTLOffsetType()) {
                      case 'negative':
                        scrollOffset = -scrollLeft;
                        break;

                      case 'positive-descending':
                        scrollOffset = scrollWidth - clientWidth - scrollLeft;
                        break;
                    }
                  } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


                  scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
                  return {
                    isScrolling: true,
                    scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
                    scrollOffset: scrollOffset,
                    scrollUpdateWasRequested: false
                  };
                }, _this._resetIsScrollingDebounced);
              };

              _this._onScrollVertical = function (event) {
                var _event$currentTarget2 = event.currentTarget,
                  clientHeight = _event$currentTarget2.clientHeight,
                  scrollHeight = _event$currentTarget2.scrollHeight,
                  scrollTop = _event$currentTarget2.scrollTop;

                _this.setState(function (prevState) {
                  if (prevState.scrollOffset === scrollTop) {
                    // Scroll position may have been updated by cDM/cDU,
                    // In which case we don't need to trigger another render,
                    // And we don't want to update state.isScrolling.
                    return null;
                  } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


                  var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
                  return {
                    isScrolling: true,
                    scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
                    scrollOffset: scrollOffset,
                    scrollUpdateWasRequested: false
                  };
                }, _this._resetIsScrollingDebounced);
              };

              _this._outerRefSetter = function (ref) {
                var outerRef = _this.props.outerRef;
                _this._outerRef = ref;

                if (typeof outerRef === 'function') {
                  outerRef(ref);
                } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
                  outerRef.current = ref;
                }
              };

              _this._resetIsScrollingDebounced = function () {
                if (_this._resetIsScrollingTimeoutId !== null) {
                  cancelTimeout(_this._resetIsScrollingTimeoutId);
                }

                _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
              };

              _this._resetIsScrolling = function () {
                _this._resetIsScrollingTimeoutId = null;

                _this.setState({
                  isScrolling: false
                }, function () {
                  // Clear style cache after state update has been committed.
                  // This way we don't break pure sCU for items that don't use isScrolling param.
                  _this._getItemStyleCache(-1, null);
                });
              };

              return _this;
            }

            List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
              validateSharedProps$1(nextProps, prevState);
              validateProps(nextProps);
              return null;
            };

            var _proto = List.prototype;

            _proto.scrollTo = function scrollTo(scrollOffset) {
              scrollOffset = Math.max(0, scrollOffset);
              this.setState(function (prevState) {
                if (prevState.scrollOffset === scrollOffset) {
                  return null;
                }

                return {
                  scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
                  scrollOffset: scrollOffset,
                  scrollUpdateWasRequested: true
                };
              }, this._resetIsScrollingDebounced);
            };

            _proto.scrollToItem = function scrollToItem(index, align) {
              if (align === void 0) {
                align = 'auto';
              }

              var itemCount = this.props.itemCount;
              var scrollOffset = this.state.scrollOffset;
              index = Math.max(0, Math.min(index, itemCount - 1));
              this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
            };

            _proto.componentDidMount = function componentDidMount() {
              var _this$props2 = this.props,
                direction = _this$props2.direction,
                initialScrollOffset = _this$props2.initialScrollOffset,
                layout = _this$props2.layout;

              if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
                var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

                if (direction === 'horizontal' || layout === 'horizontal') {
                  outerRef.scrollLeft = initialScrollOffset;
                } else {
                  outerRef.scrollTop = initialScrollOffset;
                }
              }

              this._callPropsCallbacks();
            };

            _proto.componentDidUpdate = function componentDidUpdate() {
              var _this$props3 = this.props,
                direction = _this$props3.direction,
                layout = _this$props3.layout;
              var _this$state = this.state,
                scrollOffset = _this$state.scrollOffset,
                scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

              if (scrollUpdateWasRequested && this._outerRef != null) {
                var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

                if (direction === 'horizontal' || layout === 'horizontal') {
                  if (direction === 'rtl') {
                    // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
                    // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
                    // So we need to determine which browser behavior we're dealing with, and mimic it.
                    switch (getRTLOffsetType()) {
                      case 'negative':
                        outerRef.scrollLeft = -scrollOffset;
                        break;

                      case 'positive-ascending':
                        outerRef.scrollLeft = scrollOffset;
                        break;

                      default:
                        var clientWidth = outerRef.clientWidth,
                          scrollWidth = outerRef.scrollWidth;
                        outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                        break;
                    }
                  } else {
                    outerRef.scrollLeft = scrollOffset;
                  }
                } else {
                  outerRef.scrollTop = scrollOffset;
                }
              }

              this._callPropsCallbacks();
            };

            _proto.componentWillUnmount = function componentWillUnmount() {
              if (this._resetIsScrollingTimeoutId !== null) {
                cancelTimeout(this._resetIsScrollingTimeoutId);
              }
            };

            _proto.render = function render() {
              var _this$props4 = this.props,
                children = _this$props4.children,
                className = _this$props4.className,
                direction = _this$props4.direction,
                height = _this$props4.height,
                innerRef = _this$props4.innerRef,
                innerElementType = _this$props4.innerElementType,
                innerTagName = _this$props4.innerTagName,
                itemCount = _this$props4.itemCount,
                itemData = _this$props4.itemData,
                _this$props4$itemKey = _this$props4.itemKey,
                itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey,
                layout = _this$props4.layout,
                outerElementType = _this$props4.outerElementType,
                outerTagName = _this$props4.outerTagName,
                style = _this$props4.style,
                useIsScrolling = _this$props4.useIsScrolling,
                width = _this$props4.width;
              var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

              var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
              var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

              var _this$_getRangeToRend = this._getRangeToRender(),
                startIndex = _this$_getRangeToRend[0],
                stopIndex = _this$_getRangeToRend[1];

              var items = [];

              if (itemCount > 0) {
                for (var _index = startIndex; _index <= stopIndex; _index++) {
                  items.push(Object(react["createElement"])(children, {
                    data: itemData,
                    key: itemKey(_index, itemData),
                    index: _index,
                    isScrolling: useIsScrolling ? isScrolling : undefined,
                    style: this._getItemStyle(_index)
                  }));
                }
              } // Read this value AFTER items have been created,
              // So their actual sizes (if variable) are taken into consideration.


              var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
              return Object(react["createElement"])(outerElementType || outerTagName || 'div', {
                className: className,
                onScroll: onScroll,
                ref: this._outerRefSetter,
                style: _extends({
                  position: 'relative',
                  height: height,
                  width: width,
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  willChange: 'transform',
                  direction: direction
                }, style)
              }, Object(react["createElement"])(innerElementType || innerTagName || 'div', {
                children: items,
                ref: innerRef,
                style: {
                  height: isHorizontal ? '100%' : estimatedTotalSize,
                  pointerEvents: isScrolling ? 'none' : undefined,
                  width: isHorizontal ? estimatedTotalSize : '100%'
                }
              }));
            };

            _proto._callPropsCallbacks = function _callPropsCallbacks() {
              if (typeof this.props.onItemsRendered === 'function') {
                var itemCount = this.props.itemCount;

                if (itemCount > 0) {
                  var _this$_getRangeToRend2 = this._getRangeToRender(),
                    _overscanStartIndex = _this$_getRangeToRend2[0],
                    _overscanStopIndex = _this$_getRangeToRend2[1],
                    _visibleStartIndex = _this$_getRangeToRend2[2],
                    _visibleStopIndex = _this$_getRangeToRend2[3];

                  this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
                }
              }

              if (typeof this.props.onScroll === 'function') {
                var _this$state2 = this.state,
                  _scrollDirection = _this$state2.scrollDirection,
                  _scrollOffset = _this$state2.scrollOffset,
                  _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

                this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
              }
            }; // Lazily create and cache item styles while scrolling,
            // So that pure component sCU will prevent re-renders.
            // We maintain this cache, and pass a style prop rather than index,
            // So that List can clear cached styles and force item re-render if necessary.


            _proto._getRangeToRender = function _getRangeToRender() {
              var _this$props5 = this.props,
                itemCount = _this$props5.itemCount,
                overscanCount = _this$props5.overscanCount;
              var _this$state3 = this.state,
                isScrolling = _this$state3.isScrolling,
                scrollDirection = _this$state3.scrollDirection,
                scrollOffset = _this$state3.scrollOffset;

              if (itemCount === 0) {
                return [0, 0, 0, 0];
              }

              var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
              var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
              // If there isn't at least one extra item, tab loops back around.

              var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
              var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
              return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
            };

            return List;
          }(react["PureComponent"]), _class.defaultProps = {
            direction: 'ltr',
            itemData: undefined,
            layout: 'vertical',
            overscanCount: 2,
            useIsScrolling: false
          }, _temp;
      } // NOTE: I considered further wrapping individual items with a pure ListItem component.
      // This would avoid ever calling the render function for the same index more than once,
      // But it would also add the overhead of a lot of components/fibers.
      // I assume people already do this (render function returning a class component),
      // So my doing it would just unnecessarily double the wrappers.

      var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
        var children = _ref2.children,
          direction = _ref2.direction,
          height = _ref2.height,
          layout = _ref2.layout,
          innerTagName = _ref2.innerTagName,
          outerTagName = _ref2.outerTagName,
          width = _ref2.width;
        var instance = _ref3.instance;

        if (false) { var isHorizontal; }
      };

      var DEFAULT_ESTIMATED_ITEM_SIZE$1 = 50;

      var getItemMetadata$1 = function getItemMetadata(props, index, instanceProps) {
        var _ref = props,
          itemSize = _ref.itemSize;
        var itemMetadataMap = instanceProps.itemMetadataMap,
          lastMeasuredIndex = instanceProps.lastMeasuredIndex;

        if (index > lastMeasuredIndex) {
          var offset = 0;

          if (lastMeasuredIndex >= 0) {
            var itemMetadata = itemMetadataMap[lastMeasuredIndex];
            offset = itemMetadata.offset + itemMetadata.size;
          }

          for (var i = lastMeasuredIndex + 1; i <= index; i++) {
            var size = itemSize(i);
            itemMetadataMap[i] = {
              offset: offset,
              size: size
            };
            offset += size;
          }

          instanceProps.lastMeasuredIndex = index;
        }

        return itemMetadataMap[index];
      };

      var findNearestItem$1 = function findNearestItem(props, instanceProps, offset) {
        var itemMetadataMap = instanceProps.itemMetadataMap,
          lastMeasuredIndex = instanceProps.lastMeasuredIndex;
        var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

        if (lastMeasuredItemOffset >= offset) {
          // If we've already measured items within this range just use a binary search as it's faster.
          return findNearestItemBinarySearch$1(props, instanceProps, lastMeasuredIndex, 0, offset);
        } else {
          // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
          // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
          // The overall complexity for this approach is O(log n).
          return findNearestItemExponentialSearch$1(props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
        }
      };

      var findNearestItemBinarySearch$1 = function findNearestItemBinarySearch(props, instanceProps, high, low, offset) {
        while (low <= high) {
          var middle = low + Math.floor((high - low) / 2);
          var currentOffset = getItemMetadata$1(props, middle, instanceProps).offset;

          if (currentOffset === offset) {
            return middle;
          } else if (currentOffset < offset) {
            low = middle + 1;
          } else if (currentOffset > offset) {
            high = middle - 1;
          }
        }

        if (low > 0) {
          return low - 1;
        } else {
          return 0;
        }
      };

      var findNearestItemExponentialSearch$1 = function findNearestItemExponentialSearch(props, instanceProps, index, offset) {
        var itemCount = props.itemCount;
        var interval = 1;

        while (index < itemCount && getItemMetadata$1(props, index, instanceProps).offset < offset) {
          index += interval;
          interval *= 2;
        }

        return findNearestItemBinarySearch$1(props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
      };

      var index_esm_getEstimatedTotalSize = function getEstimatedTotalSize(_ref2, _ref3) {
        var itemCount = _ref2.itemCount;
        var itemMetadataMap = _ref3.itemMetadataMap,
          estimatedItemSize = _ref3.estimatedItemSize,
          lastMeasuredIndex = _ref3.lastMeasuredIndex;
        var totalSizeOfMeasuredItems = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
        // https://github.com/bvaughn/react-window/pull/138

        if (lastMeasuredIndex >= itemCount) {
          lastMeasuredIndex = itemCount - 1;
        }

        if (lastMeasuredIndex >= 0) {
          var itemMetadata = itemMetadataMap[lastMeasuredIndex];
          totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
        }

        var numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
        var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;
        return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
      };

      var VariableSizeList =
        /*#__PURE__*/
        createListComponent({
          getItemOffset: function getItemOffset(props, index, instanceProps) {
            return getItemMetadata$1(props, index, instanceProps).offset;
          },
          getItemSize: function getItemSize(props, index, instanceProps) {
            return instanceProps.itemMetadataMap[index].size;
          },
          getEstimatedTotalSize: index_esm_getEstimatedTotalSize,
          getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(props, index, align, scrollOffset, instanceProps) {
            var direction = props.direction,
              height = props.height,
              layout = props.layout,
              width = props.width; // TODO Deprecate direction "horizontal"

            var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
            var size = isHorizontal ? width : height;
            var itemMetadata = getItemMetadata$1(props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
            // To ensure it reflects actual measurements instead of just estimates.

            var estimatedTotalSize = index_esm_getEstimatedTotalSize(props, instanceProps);
            var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
            var minOffset = Math.max(0, itemMetadata.offset - size + itemMetadata.size);

            if (align === 'smart') {
              if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
                align = 'auto';
              } else {
                align = 'center';
              }
            }

            switch (align) {
              case 'start':
                return maxOffset;

              case 'end':
                return minOffset;

              case 'center':
                return Math.round(minOffset + (maxOffset - minOffset) / 2);

              case 'auto':
              default:
                if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
                  return scrollOffset;
                } else if (scrollOffset < minOffset) {
                  return minOffset;
                } else {
                  return maxOffset;
                }

            }
          },
          getStartIndexForOffset: function getStartIndexForOffset(props, offset, instanceProps) {
            return findNearestItem$1(props, instanceProps, offset);
          },
          getStopIndexForStartIndex: function getStopIndexForStartIndex(props, startIndex, scrollOffset, instanceProps) {
            var direction = props.direction,
              height = props.height,
              itemCount = props.itemCount,
              layout = props.layout,
              width = props.width; // TODO Deprecate direction "horizontal"

            var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
            var size = isHorizontal ? width : height;
            var itemMetadata = getItemMetadata$1(props, startIndex, instanceProps);
            var maxOffset = scrollOffset + size;
            var offset = itemMetadata.offset + itemMetadata.size;
            var stopIndex = startIndex;

            while (stopIndex < itemCount - 1 && offset < maxOffset) {
              stopIndex++;
              offset += getItemMetadata$1(props, stopIndex, instanceProps).size;
            }

            return stopIndex;
          },
          initInstanceProps: function initInstanceProps(props, instance) {
            var _ref4 = props,
              estimatedItemSize = _ref4.estimatedItemSize;
            var instanceProps = {
              itemMetadataMap: {},
              estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE$1,
              lastMeasuredIndex: -1
            };

            instance.resetAfterIndex = function (index, shouldForceUpdate) {
              if (shouldForceUpdate === void 0) {
                shouldForceUpdate = true;
              }

              instanceProps.lastMeasuredIndex = Math.min(instanceProps.lastMeasuredIndex, index - 1); // We could potentially optimize further by only evicting styles after this index,
              // But since styles are only cached while scrolling is in progress-
              // It seems an unnecessary optimization.
              // It's unlikely that resetAfterIndex() will be called while a user is scrolling.

              instance._getItemStyleCache(-1);

              if (shouldForceUpdate) {
                instance.forceUpdate();
              }
            };

            return instanceProps;
          },
          shouldResetStyleCacheOnItemSizeChange: false,
          validateProps: function validateProps(_ref5) {
            var itemSize = _ref5.itemSize;

            if (false) { }
          }
        });

      var FixedSizeGrid =
        /*#__PURE__*/
        createGridComponent({
          getColumnOffset: function getColumnOffset(_ref, index) {
            var columnWidth = _ref.columnWidth;
            return index * columnWidth;
          },
          getColumnWidth: function getColumnWidth(_ref2, index) {
            var columnWidth = _ref2.columnWidth;
            return columnWidth;
          },
          getRowOffset: function getRowOffset(_ref3, index) {
            var rowHeight = _ref3.rowHeight;
            return index * rowHeight;
          },
          getRowHeight: function getRowHeight(_ref4, index) {
            var rowHeight = _ref4.rowHeight;
            return rowHeight;
          },
          getEstimatedTotalHeight: function getEstimatedTotalHeight(_ref5) {
            var rowCount = _ref5.rowCount,
              rowHeight = _ref5.rowHeight;
            return rowHeight * rowCount;
          },
          getEstimatedTotalWidth: function getEstimatedTotalWidth(_ref6) {
            var columnCount = _ref6.columnCount,
              columnWidth = _ref6.columnWidth;
            return columnWidth * columnCount;
          },
          getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(_ref7, columnIndex, align, scrollLeft, instanceProps, scrollbarSize) {
            var columnCount = _ref7.columnCount,
              columnWidth = _ref7.columnWidth,
              width = _ref7.width;
            var lastColumnOffset = Math.max(0, columnCount * columnWidth - width);
            var maxOffset = Math.min(lastColumnOffset, columnIndex * columnWidth);
            var minOffset = Math.max(0, columnIndex * columnWidth - width + scrollbarSize + columnWidth);

            if (align === 'smart') {
              if (scrollLeft >= minOffset - width && scrollLeft <= maxOffset + width) {
                align = 'auto';
              } else {
                align = 'center';
              }
            }

            switch (align) {
              case 'start':
                return maxOffset;

              case 'end':
                return minOffset;

              case 'center':
                // "Centered" offset is usually the average of the min and max.
                // But near the edges of the list, this doesn't hold true.
                var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

                if (middleOffset < Math.ceil(width / 2)) {
                  return 0; // near the beginning
                } else if (middleOffset > lastColumnOffset + Math.floor(width / 2)) {
                  return lastColumnOffset; // near the end
                } else {
                  return middleOffset;
                }

              case 'auto':
              default:
                if (scrollLeft >= minOffset && scrollLeft <= maxOffset) {
                  return scrollLeft;
                } else if (minOffset > maxOffset) {
                  // Because we only take into account the scrollbar size when calculating minOffset
                  // this value can be larger than maxOffset when at the end of the list
                  return minOffset;
                } else if (scrollLeft < minOffset) {
                  return minOffset;
                } else {
                  return maxOffset;
                }

            }
          },
          getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(_ref8, rowIndex, align, scrollTop, instanceProps, scrollbarSize) {
            var rowHeight = _ref8.rowHeight,
              height = _ref8.height,
              rowCount = _ref8.rowCount;
            var lastRowOffset = Math.max(0, rowCount * rowHeight - height);
            var maxOffset = Math.min(lastRowOffset, rowIndex * rowHeight);
            var minOffset = Math.max(0, rowIndex * rowHeight - height + scrollbarSize + rowHeight);

            if (align === 'smart') {
              if (scrollTop >= minOffset - height && scrollTop <= maxOffset + height) {
                align = 'auto';
              } else {
                align = 'center';
              }
            }

            switch (align) {
              case 'start':
                return maxOffset;

              case 'end':
                return minOffset;

              case 'center':
                // "Centered" offset is usually the average of the min and max.
                // But near the edges of the list, this doesn't hold true.
                var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

                if (middleOffset < Math.ceil(height / 2)) {
                  return 0; // near the beginning
                } else if (middleOffset > lastRowOffset + Math.floor(height / 2)) {
                  return lastRowOffset; // near the end
                } else {
                  return middleOffset;
                }

              case 'auto':
              default:
                if (scrollTop >= minOffset && scrollTop <= maxOffset) {
                  return scrollTop;
                } else if (minOffset > maxOffset) {
                  // Because we only take into account the scrollbar size when calculating minOffset
                  // this value can be larger than maxOffset when at the end of the list
                  return minOffset;
                } else if (scrollTop < minOffset) {
                  return minOffset;
                } else {
                  return maxOffset;
                }

            }
          },
          getColumnStartIndexForOffset: function getColumnStartIndexForOffset(_ref9, scrollLeft) {
            var columnWidth = _ref9.columnWidth,
              columnCount = _ref9.columnCount;
            return Math.max(0, Math.min(columnCount - 1, Math.floor(scrollLeft / columnWidth)));
          },
          getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(_ref10, startIndex, scrollLeft) {
            var columnWidth = _ref10.columnWidth,
              columnCount = _ref10.columnCount,
              width = _ref10.width;
            var left = startIndex * columnWidth;
            var numVisibleColumns = Math.ceil((width + scrollLeft - left) / columnWidth);
            return Math.max(0, Math.min(columnCount - 1, startIndex + numVisibleColumns - 1 // -1 is because stop index is inclusive
            ));
          },
          getRowStartIndexForOffset: function getRowStartIndexForOffset(_ref11, scrollTop) {
            var rowHeight = _ref11.rowHeight,
              rowCount = _ref11.rowCount;
            return Math.max(0, Math.min(rowCount - 1, Math.floor(scrollTop / rowHeight)));
          },
          getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(_ref12, startIndex, scrollTop) {
            var rowHeight = _ref12.rowHeight,
              rowCount = _ref12.rowCount,
              height = _ref12.height;
            var top = startIndex * rowHeight;
            var numVisibleRows = Math.ceil((height + scrollTop - top) / rowHeight);
            return Math.max(0, Math.min(rowCount - 1, startIndex + numVisibleRows - 1 // -1 is because stop index is inclusive
            ));
          },
          initInstanceProps: function initInstanceProps(props) {// Noop
          },
          shouldResetStyleCacheOnItemSizeChange: true,
          validateProps: function validateProps(_ref13) {
            var columnWidth = _ref13.columnWidth,
              rowHeight = _ref13.rowHeight;

            if (false) { }
          }
        });

      var FixedSizeList =
        /*#__PURE__*/
        createListComponent({
          getItemOffset: function getItemOffset(_ref, index) {
            var itemSize = _ref.itemSize;
            return index * itemSize;
          },
          getItemSize: function getItemSize(_ref2, index) {
            var itemSize = _ref2.itemSize;
            return itemSize;
          },
          getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
            var itemCount = _ref3.itemCount,
              itemSize = _ref3.itemSize;
            return itemSize * itemCount;
          },
          getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
            var direction = _ref4.direction,
              height = _ref4.height,
              itemCount = _ref4.itemCount,
              itemSize = _ref4.itemSize,
              layout = _ref4.layout,
              width = _ref4.width;
            // TODO Deprecate direction "horizontal"
            var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
            var size = isHorizontal ? width : height;
            var lastItemOffset = Math.max(0, itemCount * itemSize - size);
            var maxOffset = Math.min(lastItemOffset, index * itemSize);
            var minOffset = Math.max(0, index * itemSize - size + itemSize);

            if (align === 'smart') {
              if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
                align = 'auto';
              } else {
                align = 'center';
              }
            }

            switch (align) {
              case 'start':
                return maxOffset;

              case 'end':
                return minOffset;

              case 'center':
                {
                  // "Centered" offset is usually the average of the min and max.
                  // But near the edges of the list, this doesn't hold true.
                  var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

                  if (middleOffset < Math.ceil(size / 2)) {
                    return 0; // near the beginning
                  } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
                    return lastItemOffset; // near the end
                  } else {
                    return middleOffset;
                  }
                }

              case 'auto':
              default:
                if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
                  return scrollOffset;
                } else if (scrollOffset < minOffset) {
                  return minOffset;
                } else {
                  return maxOffset;
                }

            }
          },
          getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
            var itemCount = _ref5.itemCount,
              itemSize = _ref5.itemSize;
            return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
          },
          getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
            var direction = _ref6.direction,
              height = _ref6.height,
              itemCount = _ref6.itemCount,
              itemSize = _ref6.itemSize,
              layout = _ref6.layout,
              width = _ref6.width;
            // TODO Deprecate direction "horizontal"
            var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
            var offset = startIndex * itemSize;
            var size = isHorizontal ? width : height;
            var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
            return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
            ));
          },
          initInstanceProps: function initInstanceProps(props) {// Noop
          },
          shouldResetStyleCacheOnItemSizeChange: true,
          validateProps: function validateProps(_ref7) {
            var itemSize = _ref7.itemSize;

            if (false) { }
          }
        });

      // Pulled from react-compat
      // https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
      function shallowDiffers(prev, next) {
        for (var attribute in prev) {
          if (!(attribute in next)) {
            return true;
          }
        }

        for (var _attribute in next) {
          if (prev[_attribute] !== next[_attribute]) {
            return true;
          }
        }

        return false;
      }

      // It knows to compare individual style props and ignore the wrapper object.
      // See https://reactjs.org/docs/react-api.html#reactmemo

      function areEqual(prevProps, nextProps) {
        var prevStyle = prevProps.style,
          prevRest = _objectWithoutPropertiesLoose(prevProps, ["style"]);

        var nextStyle = nextProps.style,
          nextRest = _objectWithoutPropertiesLoose(nextProps, ["style"]);

        return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
      }

      // It knows to compare individual style props and ignore the wrapper object.
      // See https://reactjs.org/docs/react-component.html#shouldcomponentupdate

      function shouldComponentUpdate(nextProps, nextState) {
        return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
      }


      //# sourceMappingURL=index.esm.js.map

      // EXTERNAL MODULE: ./node_modules/react-virtualized-auto-sizer/dist/index.esm.js
      var dist_index_esm = __webpack_require__(166);

      // EXTERNAL MODULE: ./node_modules/classnames/index.js
      var classnames = __webpack_require__(18);
      var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

      // CONCATENATED MODULE: ./src/components/Controls/Timeline/Frame.js


      function Frame_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

      function Frame_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Frame_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Frame_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




      var Frame_Frame = function Frame(_ref) {
        var index = _ref.index,
          style = _ref.style,
          data = _ref.data;
        var frameNumber = index + 1;
        var video = data.video,
          goToTime = data.goToTime,
          frameCanvases = data.frameCanvases,
          currentFrameNumber = data.currentFrameNumber,
          selectedAnnotation = data.selectedAnnotation; // "pointer-events" might be disabled on the parent
        // in the case of a video being played, for example.
        // Therefore, we need to re-enable it here.

        var containerCustomStyles = Frame_objectSpread(Frame_objectSpread({}, style), {}, {
          pointerEvents: 'auto'
        });

        var isFrameSelected = false;
        var frameContainerStyle = {};

        if (selectedAnnotation) {
          var _selectedAnnotation$S, _selectedAnnotation$S2;

          var borderColor = ((_selectedAnnotation$S = selectedAnnotation.StrokeColor) === null || _selectedAnnotation$S === void 0 ? void 0 : (_selectedAnnotation$S2 = _selectedAnnotation$S.toHexString) === null || _selectedAnnotation$S2 === void 0 ? void 0 : _selectedAnnotation$S2.call(_selectedAnnotation$S)) || '#ADB5BD';
          var startTime = selectedAnnotation.startTime,
            endTime = selectedAnnotation.endTime;
          var startFrameNumber = video.getFrameFromTime(startTime);
          var endFrameNumber = video.getFrameFromTime(endTime);
          isFrameSelected = frameNumber >= startFrameNumber && frameNumber <= endFrameNumber;

          if (isFrameSelected) {
            if (endFrameNumber === startFrameNumber) {
              frameContainerStyle = {
                borderRadius: "4px",
                border: "2px solid ".concat(borderColor)
              };
            } else if (frameNumber === startFrameNumber) {
              frameContainerStyle = Frame_objectSpread(Frame_objectSpread({
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
                borderTop: "2px solid ".concat(borderColor),
                borderLeft: "2px solid ".concat(borderColor),
                borderBottom: "2px solid ".concat(borderColor)
              }, frameNumber !== 1 && {
                marginLeft: '-2px'
              }), {}, {
                zIndex: 9999
              });
            } else if (frameNumber === endFrameNumber) {
              frameContainerStyle = Frame_objectSpread(Frame_objectSpread({
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
                borderTop: "2px solid ".concat(borderColor),
                borderRight: "2px solid ".concat(borderColor),
                borderBottom: "2px solid ".concat(borderColor)
              }, frameNumber !== video.getTotalFrames() && {
                marginRight: '-2px'
              }), {}, {
                zIndex: 9999
              });
            } else {
              frameContainerStyle = {
                borderTop: "2px solid ".concat(borderColor),
                borderBottom: "2px solid ".concat(borderColor)
              };
            }
          }
        }

        var innerFrameRef = Object(react["useRef"])(null); // TODO: This looks buggy. Why is frameCanvases passed into the component. Just pass the canvas.
        // frameCanvas could change without frameCanvases changing.

        Object(react["useEffect"])(function () {
          if (innerFrameRef !== null && innerFrameRef !== void 0 && innerFrameRef.current) {
            var frameCanvas = frameCanvases[frameNumber];

            if (frameCanvas) {
              innerFrameRef.current.lastChild && innerFrameRef.current.removeChild(innerFrameRef.current.lastChild);
              innerFrameRef.current.appendChild(frameCanvas);
            }
          }
        }, [innerFrameRef, frameCanvases, frameNumber]);
        return /*#__PURE__*/react_default.a.createElement("div", {
          style: containerCustomStyles,
          className: classnames_default()({
            "outer-frame-container": true
          })
        }, /*#__PURE__*/react_default.a.createElement("div", {
          className: classnames_default()({
            "frame-container": true,
            "darken": selectedAnnotation && !isFrameSelected
          }),
          style: frameContainerStyle
        }, /*#__PURE__*/react_default.a.createElement("div", {
          className: classnames_default()({
            "frame": true,
            "is-selected": isFrameSelected,
            "is-current-frame": !isFrameSelected && frameNumber === currentFrameNumber
          }),
          onClick: function onClick() {
            goToTime(video.getTimeFromFrame(frameNumber));
          }
        }, /*#__PURE__*/react_default.a.createElement("div", {
          ref: innerFrameRef,
          className: "innerFrame",
          framenumber: frameNumber
        }))));
      };

/* harmony default export */ var Timeline_Frame = (Frame_Frame);
      // CONCATENATED MODULE: ./src/components/Controls/Timeline/TimelineReel.js




      var TimelineReel_TimelineReel = /*#__PURE__*/Object(react["forwardRef"])( // https://reactjs.org/docs/forwarding-refs.html#displaying-a-custom-name-in-devtools
        function TimelineReel(_ref, ref) {
          var video = _ref.video,
            goToTime = _ref.goToTime,
            frameCanvases = _ref.frameCanvases,
            currentFrameNumber = _ref.currentFrameNumber,
            selectedAnnotation = _ref.selectedAnnotation,
            isPlaying = _ref.isPlaying;
          return /*#__PURE__*/react_default.a.createElement("div", {
            className: "react-frames-container"
          }, /*#__PURE__*/react_default.a.createElement(dist_index_esm["a" /* default */], null, function (_ref2) {
            var height = _ref2.height,
              width = _ref2.width;
            return /*#__PURE__*/react_default.a.createElement(FixedSizeList, {
              style: isPlaying && {
                pointerEvents: "none"
              },
              outerRef: ref,
              itemCount: video.getTotalFrames(),
              itemSize: 116,
              layout: "horizontal",
              height: height,
              width: width,
              itemData: {
                video: video,
                goToTime: goToTime,
                frameCanvases: frameCanvases,
                currentFrameNumber: currentFrameNumber,
                selectedAnnotation: selectedAnnotation
              }
            }, Timeline_Frame);
          }));
        });
/* harmony default export */ var Timeline_TimelineReel = (TimelineReel_TimelineReel);
      // CONCATENATED MODULE: ./src/hooks/useStateRef.js

      // https://stackoverflow.com/questions/53845595/wrong-react-hooks-behaviour-with-event-listener

      var useStateRef_useStateRef = function useStateRef(initialValue) {
        var _useState = Object(react["useState"])(initialValue),
          _useState2 = slicedToArray_default()(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1];

        var ref = Object(react["useRef"])(value);
        Object(react["useEffect"])(function () {
          ref.current = value;
        }, [value]);
        return [value, setValue, ref];
      };

/* harmony default export */ var hooks_useStateRef = (useStateRef_useStateRef);
      // CONCATENATED MODULE: ./src/components/Controls/MarkerBar/ResizeHandle.js





      var ResizeHandle_ResizeHandle = function ResizeHandle(_ref) {
        var instance = _ref.instance,
          onResize = _ref.onResize,
          direction = _ref.direction,
          onFinishedResizing = _ref.onFinishedResizing;

        var _useStateRef = hooks_useStateRef(false),
          _useStateRef2 = slicedToArray_default()(_useStateRef, 3),
          setIsMouseDown = _useStateRef2[1],
          isMouseDownRef = _useStateRef2[2];

        var resizeHandleRef = Object(react["useRef"])();

        var onMove = function onMove(e) {
          if (isMouseDownRef.current) {
            if (direction === 'right') {
              onResize(e.pageX - resizeHandleRef.current.getBoundingClientRect().left);
            } else if (direction === 'left') {
              onResize(e.pageX - resizeHandleRef.current.getBoundingClientRect().right);
            }
          }
        };

        var onMouseDown = function onMouseDown() {
          setIsMouseDown(true);
        };

        var onMouseUp = function onMouseUp() {
          onFinishedResizing();
          setIsMouseDown(false);
        };

        Object(react["useEffect"])(function () {
          instance.iframeWindow.addEventListener('mousemove', onMove);
          instance.iframeWindow.addEventListener('mouseup', onMouseUp);
          return function () {
            instance.iframeWindow.removeEventListener('mousemove', onMove);
            instance.iframeWindow.removeEventListener('mouseup', onMouseUp);
          };
        }, []);
        return /*#__PURE__*/react_default.a.createElement("div", {
          className: classnames_default()({
            "right-resize-container": direction === 'right',
            "left-resize-container": direction === 'left'
          }),
          ref: resizeHandleRef,
          onMouseDown: onMouseDown
        }, /*#__PURE__*/react_default.a.createElement("div", {
          className: classnames_default()({
            "right-resize": direction === 'right',
            "left-resize": direction === 'left',
            "selected": isMouseDownRef.current
          })
        }));
      };

/* harmony default export */ var MarkerBar_ResizeHandle = (ResizeHandle_ResizeHandle);
      // CONCATENATED MODULE: ./src/hooks/useOnClickOutside.js
      // https://usehooks.com/useOnClickOutside/

      var useOnClickOutside_useOnClickOutside = function useOnClickOutside(document, ref, handler) {
        Object(react["useEffect"])(function () {
          var listener = function listener(event) {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
              return;
            }

            handler(event);
          };

          document.addEventListener('mousedown', listener);
          document.addEventListener('touchstart', listener);
          return function () {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
          };
        }, // Add ref and handler to effect dependencies
          // It's worth noting that because passed in handler is a new ...
          // ... function on every render that will cause this effect ...
          // ... callback/cleanup to run every render. It's not a big deal ...
          // ... but to optimize you can wrap handler in useCallback before ...
          // ... passing it into this hook.
          [ref, handler]);
      };

/* harmony default export */ var hooks_useOnClickOutside = (useOnClickOutside_useOnClickOutside);
      // CONCATENATED MODULE: ./src/components/Controls/MarkerBar/Marker.js



      function Marker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

      function Marker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Marker_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Marker_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







      var Marker_Marker = function Marker(_ref) {
        var _annotation$StrokeCol, _annotation$StrokeCol2;

        var document = _ref.document,
          instance = _ref.instance,
          annotation = _ref.annotation,
          isSelected = _ref.isSelected,
          onClick = _ref.onClick,
          video = _ref.video,
          progressBarWidth = _ref.progressBarWidth,
          goToTime = _ref.goToTime,
          onClickOutside = _ref.onClickOutside;
        var percent = annotation.startTime / video.getDuration();
        var rangePercent = (annotation.endTime - annotation.startTime) / video.getDuration();
        var style = {
          left: "calc(".concat(percent * 100, "% - 6px)")
        };
        var width = progressBarWidth * rangePercent;
        var rangeStyle = {
          width: "calc(".concat(width, "px + 6px)")
        };
        var markerAndResizeContainerRef = Object(react["useRef"])();
        var markerContainerRef = Object(react["useRef"])();
        var docViewer = instance.docViewer;
        var annotationManager = docViewer.getAnnotationManager();
        hooks_useOnClickOutside(document, markerAndResizeContainerRef, function (e) {
          onClickOutside(e);
        });

        var _useStateRef = hooks_useStateRef(null),
          _useStateRef2 = slicedToArray_default()(_useStateRef, 3),
          setMouseDownPosition = _useStateRef2[1],
          mouseDownPositionRef = _useStateRef2[2];

        var onMove = function onMove(e) {
          if (mouseDownPositionRef.current !== null) {
            var _markerContainerRef$c = markerContainerRef.current.getBoundingClientRect(),
              left = _markerContainerRef$c.left;

            var offset = e.pageX - (mouseDownPositionRef.current + left);
            var percentChange = offset / progressBarWidth;
            var timeMoved = percentChange * video.getDuration();
            var diff = annotation.endTime - annotation.startTime;
            annotation.startTime = Math.min(Math.max(0, annotation.startTime + timeMoved), video.getDuration() - diff);
            annotation.endTime = Math.min(video.getDuration(), annotation.startTime + diff);
            goToTime(annotation.startTime); // This is to trigger deserialization
            // eslint-disable-next-line

            annotation.Id = annotation.Id;
            annotationManager.trigger('annotationChanged', [[annotation], 'modify', {}]);
          }
        };

        var onMouseDown = function onMouseDown(e) {
          var _markerContainerRef$c2 = markerContainerRef === null || markerContainerRef === void 0 ? void 0 : markerContainerRef.current.getBoundingClientRect(),
            left = _markerContainerRef$c2.left;

          setMouseDownPosition(e.pageX - left);
        };

        var onMouseUp = function onMouseUp() {
          setMouseDownPosition(null);
        };

        Object(react["useEffect"])(function () {
          var keydown = function keydown(e) {
            if (isSelected) {
              if (e.which === 37) {
                annotation.endTime = Math.max(Math.min(video.getDuration(), annotation.endTime - 1), annotation.startTime);
                goToTime(annotation.endTime); // This is to trigger deserialization
                // eslint-disable-next-line

                annotation.Id = annotation.Id;
                annotationManager.trigger('annotationChanged', [[annotation], 'modify', {}]);
              } else if (e.which === 39) {
                annotation.endTime = Math.max(Math.min(video.getDuration(), annotation.endTime + 1), annotation.startTime);
                goToTime(annotation.endTime); // This is to trigger deserialization
                // eslint-disable-next-line

                annotation.Id = annotation.Id;
                annotationManager.trigger('annotationChanged', [[annotation], 'modify', {}]);
              }
            }
          };

          instance.iframeWindow.document.addEventListener('keydown', keydown);
          return function () {
            instance.iframeWindow.document.removeEventListener('keydown', keydown);
          };
        }, [isSelected, annotation]);
        Object(react["useEffect"])(function () {
          instance.iframeWindow.addEventListener('mousemove', onMove);
          instance.iframeWindow.addEventListener('mouseup', onMouseUp);
          return function () {
            instance.iframeWindow.removeEventListener('mousemove', onMove);
            instance.iframeWindow.removeEventListener('mouseup', onMouseUp);
          };
        }, []);
        var markerColor = ((_annotation$StrokeCol = annotation.StrokeColor) === null || _annotation$StrokeCol === void 0 ? void 0 : (_annotation$StrokeCol2 = _annotation$StrokeCol.toHexString) === null || _annotation$StrokeCol2 === void 0 ? void 0 : _annotation$StrokeCol2.call(_annotation$StrokeCol)) || '#ADB5BD';
        return /*#__PURE__*/react_default.a.createElement("div", {
          className: classnames_default()({
            "marker-and-resize-container": true,
            "selected": isSelected
          }),
          ref: markerAndResizeContainerRef,
          style: style
        }, isSelected && /*#__PURE__*/react_default.a.createElement(MarkerBar_ResizeHandle, {
          onResize: function onResize(offset) {
            var percentChange = offset / progressBarWidth;
            var timeMoved = percentChange * video.getDuration();
            var newStartTime = Math.min(Math.max(0, annotation.startTime + timeMoved), annotation.endTime);
            annotation.startTime = newStartTime;
            goToTime(newStartTime); // This is to trigger deserialization
            // eslint-disable-next-line

            annotation.Id = annotation.Id;
            annotationManager.trigger('annotationChanged', [[annotation], 'modify', {}]);
          },
          onFinishedResizing: function onFinishedResizing() {// annotationManager.trigger('annotationChanged', [[annotation], 'modify', {}]);
          },
          instance: instance,
          direction: "left"
        }), /*#__PURE__*/react_default.a.createElement("div", {
          className: classnames_default()({
            "marker-container": true,
            "selected": isSelected,
            "grabbing": mouseDownPositionRef.current !== null
          }),
          onClick: onClick,
          onMouseDown: onMouseDown,
          ref: markerContainerRef
        }, /*#__PURE__*/react_default.a.createElement("div", {
          style: {
            background: markerColor
          },
          className: classnames_default()({
            "marker": true
          })
        }), /*#__PURE__*/react_default.a.createElement("div", {
          className: classnames_default()({
            "marker-range": true
          }),
          style: Marker_objectSpread({
            background: markerColor
          }, rangeStyle)
        }, isSelected && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
          className: "marker-line"
        }), /*#__PURE__*/react_default.a.createElement("div", {
          className: "marker-line-2"
        })))), isSelected && /*#__PURE__*/react_default.a.createElement(MarkerBar_ResizeHandle, {
          onResize: function onResize(offset) {
            var percentChange = offset / progressBarWidth;
            var timeMoved = percentChange * video.getDuration();
            var newEndTime = Math.max(Math.min(video.getDuration(), annotation.endTime + timeMoved), annotation.startTime);
            annotation.endTime = newEndTime;
            goToTime(newEndTime); // This is to trigger deserialization
            // eslint-disable-next-line

            annotation.Id = annotation.Id;
            annotationManager.trigger('annotationChanged', [[annotation], 'modify', {}]);
          },
          onFinishedResizing: function onFinishedResizing() {// annotationManager.trigger('annotationChanged', [[annotation], 'modify', {}]);
          },
          instance: instance,
          direction: "right"
        }));
      };

/* harmony default export */ var MarkerBar_Marker = (Marker_Marker);
      // CONCATENATED MODULE: ./src/components/Controls/MarkerBar/Markers.js







      var Markers_Markers = function Markers(_ref) {
        var document = _ref.document,
          instance = _ref.instance,
          goToTime = _ref.goToTime,
          progressBarWidth = _ref.progressBarWidth,
          selectedAnnotation = _ref.selectedAnnotation,
          setSelectedAnnotation = _ref.setSelectedAnnotation,
          forceUpdate = _ref.forceUpdate;
        var docViewer = instance.docViewer;
        var annotationManager = docViewer.getAnnotationManager();
        var doc = docViewer.getDocument();
        var video = doc.getVideo();

        var _useState = Object(react["useState"])(video.getAllAnnotations()),
          _useState2 = slicedToArray_default()(_useState, 2),
          annotations = _useState2[0],
          setAnnotations = _useState2[1];

        Object(react["useEffect"])(function () {
          var onAnnotationChanged = function onAnnotationChanged() {
            setAnnotations(video.getAllAnnotations());
            forceUpdate();
          };

          annotationManager.on('annotationChanged', onAnnotationChanged);
          return function () {
            annotationManager.off('annotationChanged', onAnnotationChanged);
          };
        }, []);
        Object(react["useEffect"])(function () {
          var onAnnotationSelected = function onAnnotationSelected(annotList, action) {
            if (action === 'selected' && annotList.length === 1) {
              setSelectedAnnotation(annotList[0]);
            } else if (action === 'deselected') {
              // all annotations have been deselected if annotList is null.
              // Yes, I know, that is weird.
              if (annotList === null) {
                setSelectedAnnotation(null);
              } else if (annotList.includes(selectedAnnotation)) {
                setSelectedAnnotation(null);
              }
            }
          };

          annotationManager.on('annotationSelected', onAnnotationSelected);
          return function () {
            annotationManager.off('annotationSelected', onAnnotationSelected);
          };
        }, [selectedAnnotation]);
        return /*#__PURE__*/react_default.a.createElement("div", {
          className: "markers-container"
        }, /*#__PURE__*/react_default.a.createElement("div", {
          className: "markers"
        }, annotations.map(function (annotation) {
          if (annotation.startTime <= video.getDuration()) {
            var annotIsSelected = (selectedAnnotation === null || selectedAnnotation === void 0 ? void 0 : selectedAnnotation.Id) === annotation.Id;
            return /*#__PURE__*/react_default.a.createElement(MarkerBar_Marker, {
              document: document,
              key: annotation.Id,
              progressBarWidth: progressBarWidth,
              instance: instance,
              annotation: annotation,
              isSelected: annotIsSelected,
              onClick: function onClick() {
                goToTime(annotation.startTime);
                annotationManager.deselectAllAnnotations();
                annotationManager.selectAnnotation(annotation);
              },
              goToTime: goToTime,
              video: video,
              onClickOutside: function onClickOutside(e) {
                if (annotIsSelected) {
                  var progressBar = document.getElementById('progress');
                  var clickedInProgressBar = progressBar === null || progressBar === void 0 ? void 0 : progressBar.contains(e.target);
                  var videoControls = document.querySelector(".video-controls");
                  var clickedOnVideoControls = videoControls === null || videoControls === void 0 ? void 0 : videoControls.contains(e.target);

                  if (!clickedInProgressBar && clickedOnVideoControls) {
                    setSelectedAnnotation(null);
                    annotationManager.deselectAllAnnotations();
                  }
                }
              }
            });
          }

          return null;
        })));
      };

/* harmony default export */ var MarkerBar_Markers = (Markers_Markers);
      // CONCATENATED MODULE: ./src/hooks/useComponentWillMount.js
      // https://stackoverflow.com/questions/53464595/how-to-use-componentwillmount-in-react-hooks

      var useComponentWillMount_useComponentWillMount = function useComponentWillMount(func) {
        var willMount = Object(react["useRef"])(true);

        if (willMount.current) {
          func();
        }

        willMount.current = false;
      };

/* harmony default export */ var hooks_useComponentWillMount = (useComponentWillMount_useComponentWillMount);
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
      var es_array_index_of = __webpack_require__(229);

      // CONCATENATED MODULE: ./src/utils/isChrome.js


      var isChrome = function isChrome() {
        var isChromium = window.chrome;
        var winNav = window.navigator;
        var vendorName = winNav.vendor;
        var isOpera = typeof window.opr !== "undefined";
        var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
        return isChromium !== null && typeof isChromium !== "undefined" && vendorName === "Google Inc." && isOpera === false && isIEedge === false;
      };

/* harmony default export */ var utils_isChrome = (isChrome);
      // CONCATENATED MODULE: ./src/components/Controls/styles.scss
      // extracted by mini-css-extract-plugin

      // EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Controls/styles.scss
      var styles = __webpack_require__(167);
      var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

      // CONCATENATED MODULE: ./src/components/Controls/index.js

















      function Controls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

      function Controls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Controls_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Controls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



      // Components








      // Hooks


      // Utils


      // CSS

      // https://stackoverflow.com/questions/59086868/compiling-sass-file-into-css-string-in-javascript-with-loader


      var isIE11 = window.document.documentMode;
      var Controls_document = null;

      var Controls_Controls = function Controls(_ref) {
        var instance = _ref.instance;
        var marginRight = 12;
        var widthFrameContainer = 104; // const timelineHeight = 102;

        var updateVisibleFrames = /*#__PURE__*/function () {
          var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
            var _framesListRef$curren, timelineX, timelineWidth, innerFrames, frameNumbers, extractedFrames;

            return regenerator_default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (utils_isChrome()) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    _framesListRef$curren = framesListRef.current.getBoundingClientRect(), timelineX = _framesListRef$curren.x, timelineWidth = _framesListRef$curren.width;
                    innerFrames = Array.from(framesListRef.current.getElementsByClassName('innerFrame')).filter(function (innerFrame) {
                      var _innerFrame$getBoundi = innerFrame.getBoundingClientRect(),
                        frameX = _innerFrame$getBoundi.x,
                        frameWidth = _innerFrame$getBoundi.width;

                      var isVisible = frameX + frameWidth > timelineX && frameX < timelineX + timelineWidth;
                      return innerFrame.children.length === 0 && isVisible;
                    });
                    frameNumbers = innerFrames.map(function (innerFrame) {
                      return parseInt(innerFrame.attributes.frameNumber.nodeValue);
                    }).filter(function (frameNumber) {
                      return !frameCanvases[frameNumber];
                    });
                    _context.next = 7;
                    return video.extractFrames(frameNumbers);

                  case 7:
                    extractedFrames = _context.sent;
                    setFrameCanvases(Controls_objectSpread(Controls_objectSpread({}, frameCanvases), extractedFrames));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function updateVisibleFrames() {
            return _ref2.apply(this, arguments);
          };
        }();

        var debouncedUpdateVisibleFrames = debounce_default()(updateVisibleFrames, 250);
        Controls_document = instance.iframeWindow.document;
        hooks_useComponentWillMount(function () {
          var style = Controls_document.createElement("style");
          style.innerHTML = styles_default.a.toString();
          Controls_document.head.appendChild(style);
        });
        var docViewer = instance.docViewer;
        var annotationManager = docViewer.getAnnotationManager();
        var doc = docViewer.getDocument();
        var video = doc.getVideo();
        var timeSortStrategy = {
          name: 'Timecode',
          getSortedNotes: function getSortedNotes(notes) {
            var sortByCreatedDate = function sortByCreatedDate(a, b) {
              var createdTimeA = Date.parse(a.DateCreated);
              var createdTimeB = Date.parse(b.DateCreated);
              if (createdTimeA < createdTimeB) return 1;
              if (createdTimeA > createdTimeB) return -1;
              if (createdTimeA === createdTimeB) return 0;
            };

            return notes.sort(function (a, b) {
              if (a.startTime < b.startTime) return 1;
              if (a.startTime > b.startTime) return -1;
              if (a.startTime === b.startTime) return sortByCreatedDate(a, b);
            });
          },
          shouldRenderSeparator: function shouldRenderSeparator(prevNote, currNote) {
            return prevNote.startTime !== currNote.startTime || prevNote.endTime !== currNote.endTime;
          },
          getSeparatorContent: function getSeparatorContent(prevNote, currNote) {
            if (currNote.endTime >= 0 && currNote.startTime !== currNote.endTime) {
              return "".concat(video.getFormattedTime(currNote.startTime), " - ").concat(video.getFormattedTime(currNote.endTime));
            }

            return "".concat(video.getFormattedTime(currNote.startTime));
          }
        };
        instance.addSortStrategy(timeSortStrategy);

        var _useState = Object(react["useState"])(false),
          _useState2 = slicedToArray_default()(_useState, 2),
          isPlaying = _useState2[0],
          setIsPlaying = _useState2[1];

        var _useState3 = Object(react["useState"])(0),
          _useState4 = slicedToArray_default()(_useState3, 2),
          currentTime = _useState4[0],
          setCurrentTime = _useState4[1];

        var _useState5 = Object(react["useState"])(1),
          _useState6 = slicedToArray_default()(_useState5, 2),
          currentFrameNumber = _useState6[0],
          setCurrentFrameNumber = _useState6[1];

        var _useState7 = Object(react["useState"])(video.getDuration()),
          _useState8 = slicedToArray_default()(_useState7, 2),
          videoDuration = _useState8[0],
          setVideoDuration = _useState8[1];

        var _useState9 = Object(react["useState"])(false),
          _useState10 = slicedToArray_default()(_useState9, 2),
          isVideoReady = _useState10[0],
          setIsVideoReady = _useState10[1];

        var _useState11 = Object(react["useState"])(0),
          _useState12 = slicedToArray_default()(_useState11, 2),
          tooltipTime = _useState12[0],
          setTooltipTime = _useState12[1];

        var _useState13 = Object(react["useState"])(null),
          _useState14 = slicedToArray_default()(_useState13, 2),
          selectedAnnotation = _useState14[0],
          setSelectedAnnotation = _useState14[1];

        var _useState15 = Object(react["useState"])(0),
          _useState16 = slicedToArray_default()(_useState15, 2),
          progressBarWidth = _useState16[0],
          setProgressBarWidth = _useState16[1];

        var _useState17 = Object(react["useState"])({}),
          _useState18 = slicedToArray_default()(_useState17, 2),
          frameCanvases = _useState18[0],
          setFrameCanvases = _useState18[1];

        var _useReducer = Object(react["useReducer"])(function (x) {
          return x + 1;
        }, 0),
          _useReducer2 = slicedToArray_default()(_useReducer, 2),
          shouldUpdate = _useReducer2[0],
          forceUpdate = _useReducer2[1];

        var progressRef = Object(react["useRef"])(null);
        var currentTimeTooltip = Object(react["useRef"])(null);
        var framesListRef = Object(react["useRef"])(null);
        hooks_useWindowResizeCallback(debouncedUpdateVisibleFrames);
        Object(react["useEffect"])(function () {
          if (framesListRef.current) {
            var refCurrent = framesListRef.current;
            refCurrent.addEventListener('scroll', debouncedUpdateVisibleFrames);
            return function () {
              refCurrent.removeEventListener('scroll', debouncedUpdateVisibleFrames);
            };
          }
        }, [framesListRef.current, frameCanvases]);
        Object(react["useEffect"])(function () {
          instance.setFitMode(instance.FitMode.FitPage);
          instance.setCustomNoteSelectionFunction(function (annotation) {
            if (!isNaN(annotation === null || annotation === void 0 ? void 0 : annotation.startTime)) {
              goToTime(annotation.startTime);
            }
          });
          var intervalID = window.setInterval(function () {
            if (video.getReadyState() > 0) {
              setVideoDuration(video.getDuration());
              setIsVideoReady(true);
              debouncedUpdateVisibleFrames(); // Updates notes panel with full video duration

              annotationManager.trigger('annotationChanged', [[], 'modify', {}]);
              clearInterval(intervalID);
            }
          }, 200);
          var videoElement = video.getElement();
          videoElement.addEventListener('timeupdate', /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
            var currentFrameNumber;
            return regenerator_default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    video.updateAnnotationsToTime(videoElement.currentTime);
                    setCurrentTime(videoElement.currentTime);
                    currentFrameNumber = video.getFrameFromTime(videoElement.currentTime);
                    setCurrentFrameNumber(currentFrameNumber);
                    scrollToFrame(currentFrameNumber);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })));
        }, []);
        /**
         * Side-effect function that handles the tooltip for a user hovering over the
         * video timeline, represented by a `progress` element
         *
         * @param {SyntheticEvent} event The event passed as a parameter from
         * onMouseMove/onMouseOut
         * @param {boolean} hide Determines if the tooltip will be hidden or not,
         * allowing onMouseMove and onMouseOut to trigger the appropriate logic for
         * their respective events
         */

        var toggleTimeTooltip = function toggleTimeTooltip(event) {
          var hide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          currentTimeTooltip.current.style.visibility = hide ? 'hidden' : 'visible';

          if (hide) {
            return null;
          }

          if (progressRef !== null && progressRef !== void 0 && progressRef.current) {
            var _progressRef$current$ = progressRef.current.getBoundingClientRect(),
              frameLeft = _progressRef$current$.left,
              width = _progressRef$current$.width;

            var pageX = event.pageX;
            currentTimeTooltip.current.style.left = "".concat(pageX - frameLeft, "px");
            /**
             * For calculating the percentage of the bar that is being clicked, an
             * offset of units (x from `getBoundingClientRect`) is required to properly
             * align the position of the mouse cursor, and where the position of the
             * progress bar will end up upon an onClick event
             */

            var percentage = (pageX - frameLeft) / width;
            var newTime = percentage * video.getDuration();
            setTooltipTime(newTime);
          }
        };

        var scrollToFrame = function scrollToFrame(frameNumber) {
          if (framesListRef !== null && framesListRef !== void 0 && framesListRef.current) {
            var rightmostPosition = (frameNumber - 1) * (marginRight + widthFrameContainer);
            var scrollLeft = rightmostPosition - framesListRef.current.clientWidth / 2 + widthFrameContainer / 2;

            if (framesListRef.current.scroll) {
              if (Math.abs(framesListRef.current.scrollLeft - scrollLeft) < 800 && framesListRef.current.scroll) {
                framesListRef.current.scroll({
                  left: scrollLeft,
                  behavior: 'smooth'
                });
              } else {
                framesListRef.current.scrollLeft = scrollLeft;
              }
            } else {
              framesListRef.current.scrollLeft = scrollLeft;
            }
          }
        };
        /**
         * Progresses the video to the clicked portion of the `progress` timeline bar,
         * updating the progress bar and time state value that is displayed in the
         * video player
         *
         * @param {Number} time The unformatted time to jump the video to
         */


        var goToTime = function goToTime(time) {
          video.getElement().currentTime = time; // This is needed so that the progress bar and other things updates immediately

          setCurrentTime(time);
          var newFrameNumber = video.getFrameFromTime(time);
          setCurrentFrameNumber(newFrameNumber);
          video.updateAnnotationsToTime(time);
          scrollToFrame(newFrameNumber);
        };

        return /*#__PURE__*/react_default.a.createElement("div", {
          className: "video-controls"
        }, /*#__PURE__*/react_default.a.createElement("div", {
          className: "buttons-container"
        }, /*#__PURE__*/react_default.a.createElement("div", {
          className: "video-buttons"
        }, /*#__PURE__*/react_default.a.createElement(Buttons_VolumeButton, {
          getElementVolume: function getElementVolume() {
            return video.getElement().volume;
          },
          setElementVolume: function setElementVolume(val) {
            return video.getElement().volume = val;
          },
          getIsElementMuted: function getIsElementMuted() {
            return video.getElement().muted;
          },
          toggleElementMute: function toggleElementMute(muted) {
            return video.getElement().muted = !muted;
          }
        }), /*#__PURE__*/react_default.a.createElement(Buttons_LoopButton, {
          video: video
        }), /*#__PURE__*/react_default.a.createElement(Buttons_PlaybackSpeedButton, {
          video: video
        }), !isIE11 && /*#__PURE__*/react_default.a.createElement(Buttons_GuidesButton, {
          document: Controls_document
        }), !utils_isSafari && !isIE11 && /*#__PURE__*/react_default.a.createElement(Buttons_SubtitleButton, {
          video: video
        })), /*#__PURE__*/react_default.a.createElement(Buttons_PlaybackButtons, {
          video: video,
          goToTime: goToTime,
          isPlaying: isPlaying,
          setIsPlaying: setIsPlaying
        }), /*#__PURE__*/react_default.a.createElement("div", {
          className: "video-buttons"
        }, /*#__PURE__*/react_default.a.createElement("span", {
          className: "formatted-timeframe mr-sm"
        }, video.getFormattedCurrentTime(currentTime)))), /*#__PURE__*/react_default.a.createElement("div", {
          className: "timeline-container"
        }, /*#__PURE__*/react_default.a.createElement("div", {
          className: "timeline"
        }, isVideoReady && /*#__PURE__*/react_default.a.createElement(MarkerBar_Markers, {
          document: Controls_document,
          instance: instance,
          goToTime: goToTime,
          progressBarWidth: progressBarWidth,
          selectedAnnotation: selectedAnnotation,
          setSelectedAnnotation: setSelectedAnnotation,
          forceUpdate: forceUpdate
        }), /*#__PURE__*/react_default.a.createElement("div", {
          className: "divider"
        }), /*#__PURE__*/react_default.a.createElement("div", {
          className: "progress-container"
        }, /*#__PURE__*/react_default.a.createElement("div", {
          className: "progress-container-inner"
        }, /*#__PURE__*/react_default.a.createElement("div", {
          className: "tooltip",
          ref: currentTimeTooltip
        }, video.getFormattedTime(tooltipTime)), /*#__PURE__*/react_default.a.createElement(index_esm, {
          bounds: true,
          innerRef: progressRef,
          onResize: function onResize(_ref4) {
            var bounds = _ref4.bounds;
            setProgressBarWidth(bounds.width);
          }
        }, function (_ref5) {
          var measureRef = _ref5.measureRef;
          return /*#__PURE__*/react_default.a.createElement("progress", {
            id: "progress",
            ref: measureRef,
            max: videoDuration,
            value: currentTime,
            onClick: function onClick() {
              return goToTime(tooltipTime);
            },
            onMouseMove: function onMouseMove(event) {
              return toggleTimeTooltip(event);
            },
            onMouseOut: function onMouseOut(event) {
              return toggleTimeTooltip(event, true);
            }
          });
        })))), utils_isChrome() && /*#__PURE__*/react_default.a.createElement(Timeline_TimelineReel, {
          ref: framesListRef,
          video: video,
          goToTime: goToTime,
          frameCanvases: frameCanvases,
          currentFrameNumber: currentFrameNumber,
          selectedAnnotation: selectedAnnotation,
          shouldUpdate: shouldUpdate,
          isPlaying: isPlaying
        })));
      };

/* harmony default export */ var components_Controls = (Controls_Controls);
      // CONCATENATED MODULE: ./src/assets/icons/full-screen.svg
      function full_screen_extends() { full_screen_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return full_screen_extends.apply(this, arguments); }



      var full_screen_ref = /*#__PURE__*/react["createElement"]("g", {
        filter: "url(#full-screen_svg__filter0_d)"
      }, /*#__PURE__*/react["createElement"]("path", {
        d: "M2 2h5V0H0v7h2V2zm5 14H2v-5H0v7h7v-2zm11-5h-2v5h-5v2h7v-7zm-2-4h2V0h-7v2h5v5z",
        fill: "#fff"
      }));

      var full_screen_ref2 = /*#__PURE__*/react["createElement"]("path", {
        d: "M2 2h5V0H0v7h2V2zm5 14H2v-5H0v7h7v-2zm11-5h-2v5h-5v2h7v-7zm-2-4h2V0h-7v2h5v5z",
        fill: "#AEB4BC"
      });

      var _ref3 = /*#__PURE__*/react["createElement"]("defs", null, /*#__PURE__*/react["createElement"]("filter", {
        id: "full-screen_svg__filter0_d",
        x: 0,
        y: 0,
        width: 19,
        height: 19,
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
      }, /*#__PURE__*/react["createElement"]("feFlood", {
        floodOpacity: 0,
        result: "BackgroundImageFix"
      }), /*#__PURE__*/react["createElement"]("feColorMatrix", {
        "in": "SourceAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/react["createElement"]("feOffset", {
        dx: 1,
        dy: 1
      }), /*#__PURE__*/react["createElement"]("feColorMatrix", {
        values: "0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0.25 0"
      }), /*#__PURE__*/react["createElement"]("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow"
      }), /*#__PURE__*/react["createElement"]("feBlend", {
        "in": "SourceGraphic",
        in2: "effect1_dropShadow",
        result: "shape"
      })));

      function SvgFullScreen(props) {
        return /*#__PURE__*/react["createElement"]("svg", full_screen_extends({
          width: 19,
          height: 19,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, props), full_screen_ref, full_screen_ref2, _ref3);
      }

/* harmony default export */ var full_screen = (SvgFullScreen);
      // CONCATENATED MODULE: ./src/components/Controls/Buttons/FullScreenButton.js





      function FullScreenButton(_ref) {
        var instance = _ref.instance,
          video = _ref.video;

        var _useState = Object(react["useState"])(instance.FitMode.Zoom),
          _useState2 = slicedToArray_default()(_useState, 2),
          fitModeBeforeFullScreen = _useState2[0],
          setFitModeBeforeFullscreen = _useState2[1];

        var document = instance.iframeWindow.document;
        Object(react["useEffect"])(function () {
          var videoElement = video.getElement();
          videoElement.addEventListener('fullscreenchange', function () {
            if (!document.fullscreenElement) {
              instance.setFitMode(fitModeBeforeFullScreen);
            }
          });
        }, [fitModeBeforeFullScreen, instance, video, document.fullscreenElement]);

        if (document.fullscreenEnabled) {
          return /*#__PURE__*/react_default.a.createElement("button", {
            onClick: function onClick() {
              setFitModeBeforeFullscreen(instance.getFitMode());
              instance.setFitMode(instance.FitMode.Zoom);
              setTimeout(function () {
                video.getElement().requestFullscreen();
              }, 100);
            }
          }, /*#__PURE__*/react_default.a.createElement("div", {
            className: "icon"
          }, /*#__PURE__*/react_default.a.createElement(full_screen, {
            alt: "Full Screen"
          })));
        }

        return null;
      }

/* harmony default export */ var Buttons_FullScreenButton = (FullScreenButton);
      // EXTERNAL MODULE: ./node_modules/react-dom/index.js
      var react_dom = __webpack_require__(34);
      var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

      // CONCATENATED MODULE: ./src/index.js





      /**
       * Mounts the react component for the video controls into the passed in container.
       * @alias module:@pdftron/webviewer-video.renderControlsToDOM
       * @param {Object} instance - The WebViewer instance
       * @param {Object} customContainer - A container element, e.g. a div.
       * @example
       * const customContainer = window.document.querySelector('.custom-container');
       * renderControlsToDOM(webViewerInstance, customContainer)
       */

      var src_renderControlsToDOM = function renderControlsToDOM(instance, container) {
        // Because we use ReactDOM to render the react component, we know don't have to worry
        // about double react in sample app and video module
        // In subsequent calls to renderControlsToDOM, for loading other videos for example,
        // it is important to release all the current Control components
        react_dom_default.a.unmountComponentAtNode(container);
        react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(components_Controls, {
          instance: instance
        }), container);
      };
      /**
       * Mounts the fullscreen react component into the passed in container.
       * @alias module:@pdftron/webviewer-video.renderFullscreenButton
       * @param {Object} instance - The WebViewer instance
       * @param {Object} video - The video object
       * @param {Object} customContainer - A container element, e.g. a div.
       * @example
       * const customContainer = window.document.querySelector('.custom-container');
       * const video = webViewerInstance.docViewer.getDocument().getVideo();
       * renderFullscreenButton(webViewerInstance, video, customContainer)
       */


      var src_renderFullscreenButton = function renderFullscreenButton(instance, video, container) {
        react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(Buttons_FullScreenButton, {
          instance: instance,
          video: video
        }), container);
      };
      /**
       * Unmounts webviewer video.
       * @alias module:@pdftron/webviewer-video.unmountWebViewerVideo
       * @param {Object} instance - The WebViewer instance
       * @param {Object} customContainer - A container element, e.g. a div.
       * @example
       * unmountWebViewerVideo(webViewerInstance, container);
       */


      var src_unmountWebViewerVideo = function unmountWebViewerVideo(instance, customContainer) {
        instance.enableElements(['searchButton', 'pageNavOverlay', 'viewControlsButton', 'panToolButton', 'underlineToolGroupButton', 'strikeoutToolGroupButton', 'highlightToolGroupButton', 'squigglyToolGroupButton', 'signatureToolButton', 'leftPanel', 'leftPanelButton', 'toolbarGroup-Edit', 'themeChangeButton', 'fullscreenButton', 'menuButton', 'annotationCommentButton', 'toggleNotesButton', 'annotationNoteConnectorLine']);
        var fullScreenButtonContainer = instance.iframeWindow.document.querySelector('#fullscreen-button-container');
        react_dom_default.a.unmountComponentAtNode(fullScreenButtonContainer);
        react_dom_default.a.unmountComponentAtNode(customContainer);
      };



      /***/
})
/******/]);
});