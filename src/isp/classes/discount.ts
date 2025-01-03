export abstract class Discount {
  protected discount = 0;

  calculete(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class NoDiscount extends Discount {
  calculete(price: number): number {
    return price;
  }
}
