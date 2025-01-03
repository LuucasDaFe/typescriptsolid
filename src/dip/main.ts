// Dependency Inversion Principle (Princípio da Inversão de Dependência)

import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping.cart";
import { NoDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";
import { MessagingProtocol } from "./classes/interfaces/messaging-protocol";

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  "Luis",
  "Miranda",
  "111.111.111.11"
);

const enterpriseCustomer = new EnterpriseCustomer(
  "Empresa X",
  "123.456.789/0001-00"
);

class MessaigingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log("A messagem foi enviada pelo MOCK");
  }
}

const messagingMock = new MessaigingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  enterpriseCustomer
);

shoppingCart.addItem(new Product("A", 49.9));
shoppingCart.addItem(new Product("B", 9.9));
shoppingCart.addItem(new Product("C", 29.9));

console.log(shoppingCart.itens);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
