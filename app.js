var value = document.getElementById("cart-value");
var cButton = document.getElementById("cart");
var add = document.getElementsByClassName("button");

var items = [
  {
    name : "This was our pact",
    quantity : 0,
    dollars : 7,
    cents : 49,
  },
  {
    name : "The famous five",
    quantity : 0,
    dollars : 4,
    cents : 59,
  },
  {
    name : "Matilda",
    quantity : 0,
    dollars : 6,
    cents : 80,
  },
  {
    name : "Harry Potter",
    quantity : 0,
    dollars : 10,
    cents : 0,
  },
  {
    name : "For Young Readers",
    quantity : 0,
    dollars : 7,
    cents : 29,
  },
  {
    name : "Wimpy Kid - DIY",
    quantity : 0,
    dollars : 4,
    cents : 99,
  },
  {
    name : "Dart Board",
    quantity : 0,
    dollars : 17,
    cents : 49,
  },
  {
    name : "Connect Four",
    quantity : 0,
    dollars : 19,
    cents : 99,
  },
  {
    name : "Jenga",
    quantity : 0,
    dollars : 29,
    cents : 99,
  },
  {
    name : "Monopoly",
    quantity : 0,
    dollars : 19,
    cents : 49,
  },
  {
    name : "Bookmarks",
    quantity : 0,
    dollars : 12,
    cents : 49,
  },
  {
    name : "Birthday Card",
    quantity : 0,
    dollars : 12,
    cents : 49,
  },
  {
    name : "Stuffed toys",
    quantity : 0,
    dollars : 15,
    cents : 99,
  },
  {
    name : "Dream catcher drawing",
    quantity : 0,
    dollars : 18,
    cents : 49,
  },
];
function cartUp(){
  let cart =0;
  for(x=0; x<items.length; x++){
    cart = cart + items[x].quantity;
  }
  value.innerHTML = cart;
}

for (let i=0; i<add.length; i++){
  add[i].onclick = (e)=>{
    items[i].quantity++;
    cartUp()
  };
}

var dollar=0;
var cent=0;

function priceUp(){
  let price = 0;

  for(x=0; x<items.length; x++){
    price = price+items[x].quantity*(items[x].dollars*100+items[x].cents);
  }
  dollar = Math.floor(price/100);
  cent=price%100;
}

cButton.onclick=()=>{
  priceUp();

  for(let x=0; x<items.length; x++){
    if(items[x].quantity!=0){
      console.log("Item name:"+items[x].name+" - Quantity: "+items[x].quantity);
    }
  }
  console.log("Total amount:" + dollar +"$ and"+ cent + "cents");
};