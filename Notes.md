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
