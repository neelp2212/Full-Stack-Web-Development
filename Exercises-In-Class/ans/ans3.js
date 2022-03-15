// convert the following functions to Arrow function:

```js
function add(a,b) {
  return a+b
}
console.log(add(2,3))

// Arrow function
let add = (a,b) => {
return a + b;
}
console.log(add(2,1));
```

```js
function square(n) {
  return n * n
}
console.log(square(3))

let sqr = (a) => {
    return a * a;
}
console.log(square(3))

```

```js
function myFunc(a, b){
  let chuck = 42;
  return a + b + chuck;
}
console.log(myFunc(2,3))

let myFunc = (a, b) => {
    let chuck = 42;
    return a + b + chuck;
  }

  console.log(myFunc(2,3))
```
        

```js
function sayHello() {
     return "Hello there";
}
console.log(sayHello());

let sayHello = () => {
    return "Hello there";
}
console.log(sayHello());

```

```js
function myObj() {
    return { cost: 500};
}
console.log(myObj());
		
```