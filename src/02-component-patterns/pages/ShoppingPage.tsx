import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import products from "../data/products";
import useShoppingCart from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            className="bg-dark white"
            product={product}
            value={shoppingCart[product.id]?.count || 0}
            onCountChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.values(shoppingCart).map(({ count, ...product }) => (
          <ProductCard
            key={product.id}
            className="bg-dark white"
            product={product}
            style={{
              width: "100px",
            }}
            value={count}
            onCountChange={onProductCountChange}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
