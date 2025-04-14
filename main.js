const foods = [ 
 "🍕 Pizza",
  "🍣 Sushi",
  "🥗 Salad",
  "🍔 Burger",
  "🍩 Donut",
  "🍜 Ramen",
  "🍦 Ice Cream"
    
]; 

function suggestFood() {
    const randomIndex = Math.floor(Math.random() * foods.length); 
    const result = document.getElementById("result");
    result.textContent = `you should eat this: ${foods[randomIndex]}!`; 

}
