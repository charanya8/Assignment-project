let discountButton = document.getElementById("discountButton");

function calculateDiscount(price, discount) {
  return (price * discount) / 100;
}

const originalPrice = 2999.00;
const discountPercentage = 50;

const discountAmount = calculateDiscount(originalPrice, discountPercentage);

function hrefFunction(){
                windows.location.href = "style.html";
            }
