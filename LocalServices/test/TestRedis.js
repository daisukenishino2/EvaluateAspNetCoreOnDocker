console.log("To exit, hold down [Ctrl] and press [C] twice.");

//////////
console.log("Test Redis");

const redis = require("redis");
const client = redis.createClient();
 
client.on("error", function(error) {
  console.error(error);
});
 
client.set("key", "value", redis.print);
client.get("key", redis.print);