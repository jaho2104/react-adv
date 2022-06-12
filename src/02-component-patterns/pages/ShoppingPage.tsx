import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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
        <ProductCard className="bg-dark white" product={product}>
          <ProductImage className="custom-image" />
          <ProductTitle className="bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          style={{
            backgroundColor: "#70D1F8",
            color: "#000",
          }}
          product={product}
        >
          <ProductImage
            style={{
              borderRadius: "20px",
              padding: "10px",
              width: "calc(100% - 20px)",
            }}
          />
          <ProductTitle
            style={{
              fontWeight: "bold",
            }}
          />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard className="bg-dark white" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
