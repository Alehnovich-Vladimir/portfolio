import "./product.css";

const Product = ({ product, openLabel }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <span>{product.tag}</span>
      </div>
      <a href={product.link} target="_blank" rel="noreferrer" className="p-link">
        <img src={product.img} alt={product.title} className="p-img" />
        <div className="p-overlay">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <span>{openLabel}</span>
        </div>
      </a>
    </div>
  );
};

export default Product;
