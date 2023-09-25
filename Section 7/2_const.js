/** const keyword */

const firstName = "Anthony";
// firstName = "Tony"; // TypeError -> Assignment to constant variable

const user = { firstName: "Tony" };
user.firstName = "Anthony";

console.log(user.firstName); // Anthony

// Notes -> while changing property of const object, we are not changing the binding of that variable instead just changing value of the property, hence it works, meaning we can change properties of objects declared with const keywords
