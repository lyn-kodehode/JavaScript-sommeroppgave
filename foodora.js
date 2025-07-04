/* TASK 1: Random Takeaway Order

Your task is to write a JavaScript function that creates a random takeaway order message.

Create a function called createOrder that takes two inputs:
- name (a string)
- deliveryStatus (a string: "on time" or "late")

Inside the function:
- Choose ONE random food item from an array of 10 possible options
- Capitalize the first letter of the name and the food
- If deliveryStatus is "on time", set delivery time to "30 minutes"
- If deliveryStatus is "late", set delivery time to "45 minutes"
- If it's anything else, set delivery time to "an unknown time"
- Return a message like: "Hi Luca! Your Pizza will arrive in 30 minutes!"

Example Outputs
createOrder("luca", "on time");      // "Hi Luca! Your Sushi will arrive in 30 minutes!"
createOrder("tina", "late");         // "Hi Tina! Your Burger will arrive in 45 minutes!"
createOrder("milo", "unknown");      // "Hi Milo! Your Pasta will arrive in an unknown time!"
*/

// possible random food options
const menuItems = [
  "burger",
  "pizza",
  "sushi",
  "ramen",
  "tacos",
  "fries",
  "burrito",
  "salad",
  "sandwich",
  "pasta",
];

function createOrder(name, deliveryStatus) {
  /* let deliveryTime = "";
  if (deliveryStatus === "on time") {
    deliveryTime = "30 minutes";
  } else if (deliveryStatus === "late") {
    deliveryTime = "45 minutes";
  } else {
    deliveryTime = "an unknown time";
  } */

  const deliveryTime =
    deliveryStatus === "on time"
      ? "30 minutes"
      : deliveryStatus === "late"
      ? "45 minutes"
      : "an unknown time";
  const foodRandomizer = Math.floor(Math.random() * menuItems.length);
  const order = menuItems[foodRandomizer]
    .charAt(0)
    .toUpperCase()
    .concat(menuItems[foodRandomizer].slice(1));
  const customer = name.charAt(0).toUpperCase().concat(name.slice(1));
  return `Hi ${customer}! Your ${order} will arrive in ${deliveryTime}!`;
}

console.log(createOrder("luca", "on time"));
console.log(createOrder("tina", "late"));
console.log(createOrder("milo", "unknown"));
