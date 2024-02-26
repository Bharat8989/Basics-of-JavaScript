/* arrays methods
push():add to end
pop(): delete from end and return
toString():converts array to string*/
let foodItems = ["potator","apple","litchi","tomato"];
foodItems.push("chips","burger");
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deleted item:",deletedItem);
//concat(): joins multipl arrays and returns result