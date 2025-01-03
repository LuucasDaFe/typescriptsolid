import { Discount } from "./discount";
import { ShoppingCartProtocol } from "./interfaces/shoping-cart-protocol";

export class ShoppingCart implements ShoppingCartProtocol {
  readonly items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this.items.push(item);
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  get itens(): Readonly<CartItem[]> {
    return this.items;
  }

  total(): number {
    return +this.items
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  }

  totalWithDicount(): number {
    return this.discount.calculete(this.total());
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    console.log("Carrinho de compras foi limpo...");
    this.items.length = 0;
  }
}
