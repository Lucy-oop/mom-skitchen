const KEY = "momkitchen_cart_v1"; //name of box to save cart//

 export function getCart() {
    try {
        const data = localStorage.getItem(KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
 } // get cart & read cart from browser(localstorage)

 export function saveCart(cart) {
    localStorage.setItem(KEY, JSON.stringify(cart));
 } // save cart

 export function addToCart(item) {
    const cart = getCart();

    const found = cart.find((c) => c.id === item.id) ;

    if(found){
        found.qty += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            qty: 1,

        });
    }
     saveCart(cart);
     return cart;
 } // add to cart 

  export function updateQty(id, qty) {
    const cart = getCart().map((item) => {
        if (item.id === id) {
            return {...item,qty: Math.max(1, qty) };
        }
        return item;
    });
    saveCart(cart);
    return cart;
  } // increase item

   export function removeItem(id){
    const cart = getCart().filter((item) => item.id !== id);
    saveCart(cart);
    return cart;
   } // remove item
    export function clearCart() {
        saveCart([]);
    } //Clear cart

    export function calculateTotal(cart, deliveryFee = 1500) {
        const subtotal = cart.reduce (
            (sum, item) => sum + item.price * item.qty,0
        );

        const delivery = cart.length > 0 ? deliveryFee : 0;
        const total = subtotal + delivery;
        return { subtotal, delivery, total };
    }

