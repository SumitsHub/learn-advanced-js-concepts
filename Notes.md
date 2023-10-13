# Syntax Parser

A program that reads your code and determines what it does and if its grammar is valid

# Section 2 Execution Contexts and Lexical Environments

## Lexical Environment

Where something sits physically in the code you write
A lexical environment exists in programming languages in which where you write something is important

## Execution Context

A wrapper to help manage the code that is running
There are lots of lexical environments. Which one is currently running is managed via execution context. It can contain things beyond what you've written in your code.

Creation Phase and Code Execution

## Name/Value Pairs and Objects

Object - a collection of name value pairs

## Global Environment - Global Execution Context

Provides Global Object -> example 'window' object which is available in browser and 'this' which refers to window object in case of browser

## Single threaded, Synchronous Execution

By default JS is single threaded (one line at a time) and Synchronous (in order)

# Types and Operators

## 6 Primitive types

1. undefined
2. null
3. String - 'value' or "value"
4. Number - floating point numbers
5. Boolean - true, false
6. Symbol

## types typeof operator returns

1. 'undefined'
2. 'number'
3. 'string'
4. 'object'
5. 'function'
6. 'boolean'
7. 'symbol'

## Operators - A special function that is syntactically (written) different

Arithmetic Operators

```
+, -, /, *
```

- Remainder (%) ex. 12 % 5 -> 2
- Increment (++) - Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one.
- Decrement (--) - Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.
- Unary negation (-) - Unary operator. Returns the negation of its operand.
- Unary plus (+) - Unary operator. Attempts to convert the operand to a number, if it is not already. ex. +"2" -> 2, +true -> 1
- Exponentioan operator (\*\*) - Calculates the base to the exponent power, that is, base^exponent

## Operator Precedence and Associativity

- Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.
- Within operators of the same precedence, the language groups them by associativity.
  Left-associativity (left-to-right) means that it is interpreted as (a OP1 b) OP2 c, while right-associativity (right-to-left) means it is interpreted as a OP1 (b OP2 c)
- Short-circuiting - Short-circuiting is jargon for conditional evaluation.
  For example, in the expression a && (b + c), if a is falsy, then the sub-expression (b + c) will not even get evaluated, even if it is grouped and therefore has higher precedence than &&. We could say that the logical AND operator (&&) is "short-circuited".
  Along with logical AND, other short-circuited operators include logical OR (||), nullish coalescing (??), and optional chaining (?.).
  When evaluating a short-circuited operator, the left operand is always evaluated. The right operand will only be evaluated if the left operand cannot determine the result of the operation.

## Coercion -

Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).

# Section 3 - Objects and Functions

JSON - Javascript Object Notation
Uses - while sending data to server (earlier XML was used), in config files

```json
{
  "firstName": "Marry",
  "adult": true
}
```

When function is called, execution context gets created

## 'this' keyword

By default 'this' keyword points to global 'Window' variable
Value of 'this' inside a function in global context will also refer to Window object
Value of 'this' inside an object will be that object itself

## 'arguments' keyword

Special type of Object which contains arguments passed to the function at the time of calling
It is not Array though it looks like, it's Arguments object and it also has 'length' property

```js
function func(...args) {
  console.log(args);
  console.log(arguments);
  console.log(typeof args); // 'object'
  console.log(typeof arguments); // 'object'
  //   console.log(arguments.map()); // TypeError -> map is not a function
}
func("loren", "desuja");
console.log(func.length); // number of arguments, 0 -> spread operatot
```

## First class function

Simply refers to the concept of Function being an Object in JS.
We can use functions similar to objects, like passing as an argument to another function

## Programming paradigms -

### Declarative Paradigm

You don't write logic

### Imperative Paradigm

You specify the logic

Javascript is multi-paradigm programming language

## Functional Programming

It is sub type of Delarative Programming Paradigm
Usefull Sites -

[underscore](https://underscorejs.org/)
[lodash](https://lodash.com/)

These libraries uses functional programming and provides lot of helper functions without extending any built-in objects.

## Section 4 - Classical Inheritance and Prototypal Inheritance

### Prototype of an Object -

1. Prototype of an Object is also an Object, containing various implicit properties and methods
2. Prototype of an object is kind of similar to context where object will look into for any property starting from it's own prototype to inner-most
3. We can change prototype of any object and also add new properties to it
4. Saving memory using prototype - When we add any property to prototype of object then it becomes available to all the instance of that object as a static , whereas if we add same property in object itself then every time object instance is created memory will be allocated to store that particular property

#### Standard definition from https://developer.mozilla.org

- Every object in JavaScript has a built-in property, which is called its prototype.
- The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

### Reflection

An object can look at itself, listing and changing its properties and methods

## Section 5 - Building Objects

### Function Constructors

- A normal function that is used to construct objects
- The 'this' variable points to a new empty object, and that object is returned from the function automatically
- Important - 'new' keyword need to used while invoking function otherwise it won't return anything i.e. it will be undefined

```js
function Person() {
  return this;
}

console.log(new Person()); // return empty Person object
console.log(Person()); // return Window object, when new keyword not used
```

### Polyfill

- code that adds a feature which the engine may lack
- Example for browser don't has Object.create()

```js
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error(
        "Object.create implementation only accepts the first parameter"
      );
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}
```

### Syntactic Sugar

A different way to type something that doesn't change how it works under the hood

### use strict

can be on the top of the file or inside function definition

```js
"use strict";
var person;

// persom = { name: "Aline" }; // ReferenceError, because of strict mode

function useStrictMode() {
  "use strict";
  var name;
  nane = "Sunny"; // ReferenceError, because of strict mode
}

useStrictMode();
```

# Understanding ES6 and Beyond

## Block Scope

- Scope limited to particular block, In JS block is created using curly braces
- Each block has it's Lexical Environment in Execution Context

### let keyword

- variables declared with the 'let' keyword will be stores into 'lexical environment' of that particular block
- variables declared with the 'var' keyword will be stored into 'variable environment'

### Binding

The connection (pointer) between a variable name and a specific location in the computer's memory location that holds a value

### Immutable

- Something that cannot be changed
- const keyword creates variable that cannot be changed

## Templates

- whitespace characters -> space, tabs, new lines
- multi-line strings using templates

```js
// multi-line string using template
const fullName = "Tony\nAlicea";
const fullName2 = `Tony
Alicea`;

console.log(fullName === fullName2); // true
```

- Interpolation -> Replacing portions of strings with other strings. You 'insert' or 'inject' string into another string.

### Tagged template literals

```js
function greetTemplate(strings, firstName, lastName) {
  console.log(strings); // Array of non interpolated strings -> ['Hello, ', ' ', '']
  console.log(firstName); // Tony
  console.log(lastName); // Alicea

  // returning custom value from tagged template literal, if not returned anything the output of tagged template will be undefined
  return `${strings[0]}${firstName}. Your last name is ${lastName}.`;
}

const greetings = greetTemplate`Hello, ${firstName} ${lastName}`;
console.log(greetings); // Hello, Tony. Your last name is Alicea.
```

## ES6 Classes

- A structure in a programming language that provides a way to create objects
- Classes in JS are just functions which creates objects with syntactic sugar
- Classes created using class keyword are the same as objects created using constructor functions (remember, we need to use new keyword with constructor functions)
- there is not special type of class in JS, it is a function

```js
class A {}

console.log(typeof A); // function
```

### Instance

The actual object created from an object creation feature (like a class or constructor functions)

## Arrow Functions

- x:->x2 (mathemetical)
- Arrow functions don't have this keyword in their execution context, so they refer to it's outer execution context

- From Docs ->
- An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

- 1. Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
- 2. Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
- 3. Arrow functions cannot use yield within their body and cannot be created as generator functions.

## Symbols

Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. [from docs]

- well-known Symbols/ Built-in symbols: All static properties of the Symbol constructor are Symbols themselves, whose values are constant across realms. They are known as well-known Symbols.

## Section 8 - Iterators and Iterables

- Iteration - Repeating a block of code, often by moving through a list or sequence of values. for ex. looping through array

- Enumerable - A property which will appear when looping over the properties of an object (its 'enumerable' flog is set to true)
  The term comes from mathematics, where it means 'countable'

### Iteration Protocol

The information that must be provided by an object to let itself be iterated over

### Iterate over

To move from value to value across a set or list of values
