
let num = 42;
let bigInt = 1234567890123456789012345678901234567890n;
let str = "Hello";
let Boolean = true;
let Null = null;
let Undefined = undefined;
let Symbol = Symbol("id");
let Object = { name: "Alice", age: 30 };
let Function = function() { return "Hello"; };

alert(
    "Number: " + typeof num + "\n" +
    "BigInt: " + typeof bigInt + "\n" +
    "String: " + typeof str + "\n" +
    "Boolean: " + typeof Boolean + "\n" +
    "Null: " + typeof Null + "\n" +
    "Undefined: " + typeof Undefined + "\n" +
    "Symbol: " + typeof Symbol + "\n" +
    "Object: " + typeof Object + "\n" +
    "Function: " + typeof Function + "\n"
);