let all_products = [
  {
    item_id: "1",
    item_name: "item1",
    item_price: 100,
  },
  {
    item_id: "2",
    item_name: "item2",
    item_price: 50,
  },
  {
    item_id: "3",
    item_name: "item3",
    item_price: 110,
  },
  {
    item_id: "4",
    item_name: "item4",
    item_price: 150,
  },
  {
    item_id: "5",
    item_name: "item5",
    item_price: 80,
  },
  {
    item_id: "6",
    item_name: "item6",
    item_price: 180,
  },
  {
    item_id: "7",
    item_name: "item7",
    item_price: 40,
  },
  {
    item_id: "8",
    item_name: "item8",
    item_price: 200,
  },
];

document.getElementById("item_name_one").innerHTML = all_products[0].item_name;
document.getElementById("item_price_one").innerHTML = "₹" + all_products[0].item_price;

document.getElementById("item_name_two").innerHTML = all_products[1].item_name;
document.getElementById("item_price_two").innerHTML = "₹" + all_products[1].item_price;

document.getElementById("item_name_three").innerHTML = all_products[2].item_name;
document.getElementById("item_price_three").innerHTML = "₹" + all_products[2].item_price;

document.getElementById("item_name_four").innerHTML = all_products[3].item_name;
document.getElementById("item_price_four").innerHTML = "₹" + all_products[3].item_price;

document.getElementById("item_name_five").innerHTML = all_products[4].item_name;
document.getElementById("item_price_five").innerHTML = "₹" + all_products[4].item_price;

document.getElementById("item_name_six").innerHTML = all_products[5].item_name;
document.getElementById("item_price_six").innerHTML = "₹" + all_products[5].item_price;

document.getElementById("item_name_seven").innerHTML = all_products[6].item_name;
document.getElementById("item_price_seven").innerHTML = "₹" + all_products[6].item_price;

document.getElementById("item_name_eight").innerHTML = all_products[7].item_name;
document.getElementById("item_price_eight").innerHTML = "₹" + all_products[7].item_price;






var c1 = 0,
  c2 = 0,
  c3 = 0,
  c4 = 0,
  c5 = 0,
  c6 =0,
  c7 = 0,
  c8 = 0,
  itemCount = 0,
  priceTotal = 0;


// js for add to cart 
function addtocart(a) {
  if (a == 0) {
    if (c1 < 3) {
      c1 = c1 + 1;
      priceTotal = priceTotal + all_products[0].item_price;
      itemCount++;
    } else {
      Swal.fire("Maximum limit Per item is 3");
    }
    document.getElementById("count_one").innerHTML = c1;
  }
  if (a == 1) {
    if (c2 < 3) {
      c2 = c2 + 1;
      priceTotal = priceTotal + all_products[1].item_price;
      itemCount++;
    } else {
      Swal.fire("Maximum limit Per item is 3");
    }
    document.getElementById("count_two").innerHTML = c2;
  }
  if (a == 2) {
    if (c3 < 3) {
      c3 = c3 + 1;
      priceTotal = priceTotal + all_products[2].item_price;
      itemCount++;
    } else {
      Swal.fire("Maximum limit Per item is 3");
    }
    document.getElementById("count_three").innerHTML = c3;
  }
  if (a == 3) {
    if (c4 < 3) {
      c4 = c4 + 1;
      priceTotal = priceTotal + all_products[3].item_price;
      itemCount++;
    } else {
      Swal.fire("Maximum limit Per item is 3");
    } 
    document.getElementById("count_four").innerHTML = c4;
  }
  if (a == 4) {
    if (c5 < 3) {
      c5 = c5 + 1;
      priceTotal = priceTotal + all_products[4].item_price;
      itemCount++;
    } else {
      Swal.fire("Maximum limit Per item is 3");
    }
    document.getElementById("count_five").innerHTML = c5;
  }
  if (a == 5) {
    if (c6 < 3) {
      c6 = c6 + 1;
      priceTotal = priceTotal + all_products[5].item_price;
      itemCount++;
    } else {
      Swal.fire("Maximum limit Per item is 3");
    }
    document.getElementById("count_six").innerHTML = c6;
  }
  if (a == 6) {
    if (c7 < 3) {
      c7 = c7 + 1;
      priceTotal = priceTotal + all_products[6].item_price;
      itemCount++;
    } else {
      Swal.fire("Maximum limit Per item is 3");
    }
    document.getElementById("count_seven").innerHTML = c7;
  }
  if (a == 7) {
    if (c8 < 3) {
      c8 = c8 + 1;
      priceTotal = priceTotal + all_products[7].item_price;
      itemCount++;
    } else {
      Swal.fire("Maximum limit Per item is 3");
    }
    document.getElementById("count_eight").innerHTML = c8;
  }
  
  document.getElementById("total_count").innerHTML = itemCount;
  document.getElementById("price_count").innerHTML = priceTotal;
}

// js for remove cart
function removecart(a) {
  if (a == 0) {
    if (c1 > 0) {
      c1 = c1 - 1;
      priceTotal = priceTotal - all_products[0].item_price;
      itemCount--;
    } else {
      Swal.fire("Item is not added yet");
    }
    document.getElementById("count_one").innerHTML = c1;
  }
  if (a == 1) {
    if (c2 > 0) {
      c2 = c2 - 1;
      priceTotal = priceTotal - all_products[1].item_price;
      itemCount--;
    } else {
      Swal.fire("Item is not added yet");
    }
    document.getElementById("count_two").innerHTML = c2;
  }
  if (a == 2) {
    if (c3 > 0) {
      c3 = c3 - 1;
      priceTotal = priceTotal - all_products[2].item_price;
      itemCount--;
    } else {
      Swal.fire("Item is not added yet");
    }
    document.getElementById("count_three").innerHTML = c3;
  }
  if (a == 3) {
    if (c4 > 0) {
      c4 = c4 - 1;
      priceTotal = priceTotal - all_products[3].item_price;
      itemCount--;
    } else {
      Swal.fire("Item is not added yet");
    }
    document.getElementById("count_four").innerHTML = c4;
  }
  if (a == 4) {
    if (c5 > 0) {
      c5 = c5 - 1;
      priceTotal = priceTotal - all_products[4].item_price;
      itemCount--;
    } else {
      Swal.fire("Item is not added yet");
    }
    document.getElementById("count_five").innerHTML = c5;
  }
  if (a == 5) {
    if (c6 > 0) {
      c6 = c6 - 1;
      priceTotal = priceTotal - all_products[5].item_price;
      itemCount--;
    } else {
      Swal.fire("Item is not added yet");
    }
    document.getElementById("count_six").innerHTML = c6;
  }
  if (a == 6) {
    if (c7 > 0) {
      c7 = c7 - 1;
      priceTotal = priceTotal - all_products[6].item_price;
      itemCount--;
    } else {
      Swal.fire("Item is not added yet");
    }
    document.getElementById("count_seven").innerHTML = c7;
  }
  if (a == 7) {
    if (c8 > 0) {
      c8 = c8 - 1;
      priceTotal = priceTotal - all_products[7].item_price;
      itemCount--;
    } else {
      Swal.fire("Item is not added yet");
    }
    document.getElementById("count_eight").innerHTML = c8;
  }
  document.getElementById("total_count").innerHTML = itemCount;
  document.getElementById("price_count").innerHTML = priceTotal;
}




