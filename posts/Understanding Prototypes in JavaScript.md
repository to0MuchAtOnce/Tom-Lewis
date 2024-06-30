---
title: 'Understanding Prototypes in JavaScript'
date: '2024-07-30'
---

Understanding prototypes is a fundamental part of understanding JavaScript, and for me it took a while to get my head around the concept. I put this post together to further solidify my understanding.

## Every object has a prototype.

Every object in JavaScript has a <code class="inline-code"> prototype</code>. And that <code class="inline-code"> prototype</code> itself is in an object which the original object inherits from. This means the original object has access to all of its <code class="inline-code"> prototype</code> methods and properties. Later we will take a look at how this can be useful when it comes to prototypical inheritance, but first let's get to the example code.

I made a Library App for an assignment in the Odin Project JavaScript course, in the app you can add books to a simple <code class="inline-code"> html</code> table and set a value of read, or not read for each book. The app consists of two functions. Let’s take a look at one here, called <code class="inline-code"> Book</code>. This is the constructor and takes 4 input parameters: <code class="inline-code"> title</code>, <code class="inline-code">author</code>, <code class="inline-code">numPages</code> and <code class="inline-code">isRead</code>. The parameters are used to set properties of a new <code class="inline-code">Book</code> object. Also a method called <code class="inline-code">info</code> is defined which returns a string containing the details of a book.

```js
function Book(title, author, numPages, isRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.numPages}, ${this.isRead}`;
  };
  console.log('info', this.info);
}
```

If we log <code class="inline-code">this.info</code> to the console we can see the function and its structure:

<img class="image" src="https://res.cloudinary.com/tomlewisphoto/image/upload/v1719763384/blog-images/ymwikndbqbkhtsdnnyah.png" alt="firefox-console-1" />

Inside the function we see various properties, one of which is <code class="inline-code">prototype</code>. Which we can see is also an object. This is because every function in JavaScript automatically gets a <code class="inline-code">prototype</code> property when it's created. If we open the object we see that there is a constructor which points to the function <code class="inline-code">info()</code>. This is because all objects contain a prototypical reference to the original object.

<img class="image" src="https://res.cloudinary.com/tomlewisphoto/image/upload/v1719761875/blog-images/odhjysfoqmoldegx9vpw.png" alt="firefox-console-2" />

## The difference between **proto** & **prototype**.

### 1. `__proto__` Property:

It's important to understand, that this prototype we see here, relates to <code class="inline-code">`__proto__`</code> and in a internal property of an object, pointing to its prototype e.g. the object it inherits properties and methods from. It belongs to the objects internal structure that determines the prototype chain. The Javascript engine uses <code class="inline-code">`__proto__`</code> is a property or method isn't found on the object itself. This is also a [deprecated](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) feature, so we should use <code class="inline-code">Object.getPrototypeOf()</code> instead, avoiding direct manipulation of <code class="inline-code">`__proto__`</code>.

### 2. <code class="inline-code">prototype</code> Property:

The <code class="inline-code">prototype</code> property is specific to functions in JavaScript. All functions automatically have this property when created. This property is an object that includes a <code class="inline-code">constructor</code> property pointing back to the function itself.

The <code class="inline-code">prototype</code> property is used when a function is invoked as a constructor using the `new` keyword like so:

```js
const book = new Book();
```

The newly created object inherits properties and methods from the <code class="inline-code">prototype</code> object of its constructor function. This is how prototypical inheritance is implemented in JavaScript. Meaning that the <code class="inline-code">prototype</code> property is relevant for defining properties and methods that should be inherited by objects created by a constructor function.

To sum this up. <code class="inline-code">`__proto__`</code> is an internal property of an object which points to its prototype (What it inherits from), while <code class="inline-code">prototype</code> is a property of a function that determines what will be inherited by objects created by that function.

## How Does prototypical inheritance work?

When we create on object using a constructor function, in our case, <code class="inline-code">new Book()</code>. This newly created object will inherit properties and methods from the constructor functions prototype. If JavaScript doesn't find any properties or methods then it continues to look up the prototype Chain until it's found, or the end of the chain is reached. If the property or method is still not found by this point, the result is <code class="inline-code">undefined</code>.

It's important to spend some time understanding prototypes in JavaScript as it's a fundamental concept that underpins how JavaScript works as a language. <code class="inline-code">`__proto__`</code> has it's own job of directing the engine to the correct place within objects while <code class="inline-code">prototype</code> is specific to functions and is used upon invocation.

Thanks for reading, if you have any questions queries or see something that isn't quite right, please contact me using the social links below.
