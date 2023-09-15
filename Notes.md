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
5. Boollean - true, false
6. Symbol

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
