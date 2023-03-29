export default function Cart(oldCart) {
    this.updateTotals = () => {
      let totalPrice = 0;
      let totalQty = 0;
      Object.values(this.items).forEach((item) => {
        totalQty += item.quantity;
        totalPrice += item.quantity * item.price;
      });
      this.totalPrice = (totalPrice).toFixed(2);
      this.totalQty = totalQty;
    };
  
    this.add = (item, quantity) => {
      const items = this.items;
      const key = item.url;
      if (!items[key]) {
        items[key] = Object.assign({key: key}, item);
        items[key].quantity = 0;
      }
      items[key].quantity += 1;
      this.updateTotals();
    };
  
    this.items = oldCart ? oldCart.items : {};
    this.totalPrice = oldCart ? oldCart.totalPrice : 0;
    this.totalQty = oldCart ? oldCart.totalQty: 0;
  }