function solve() {
   let totalPrice = 0;
   const cart = []; //bought products
   const shoppingCartElement = document.querySelector('.shopping-cart')
   shoppingCartElement.addEventListener('click', onClick);
   const output = document.querySelector('textarea');

   function onClick(ev) {
      if(ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
         const product = ev.target.parentNode.parentNode;
        const title = product.querySelector('.product-title').textContent;
        const price = Number(product.querySelector('.product-line-price').textContent);

        output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
        totalPrice += price;
        if(!cart.includes(title)) {
         cart.push(title);
        }
      }
   }
   const checkoutElement = document.querySelector('.checkout');
   checkoutElement.addEventListener('click', checkout);

   function checkout(ev) {
      output.value += "You bought " + cart.join(', ') + ` for ${totalPrice.toFixed(2)}.`;
      checkoutElement.removeEventListener('click', checkout);
      shoppingCartElement.removeEventListener('click', onClick);
   }
}