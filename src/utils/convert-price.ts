export const convertPrice = (price: number) => {
    return new Intl.NumberFormat("en_US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };
  