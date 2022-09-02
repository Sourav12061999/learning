import faker from "faker";

const cartText = `<div>${faker.random.number()} items in your cart</div>`;

document.getElementById("cart").innerHTML = cartText;