import { useContext } from "react";
import { LanguageContext } from "../../context";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  const { language, t } = useContext(LanguageContext);

  return (
    <div className="pl" id="projects">
      <div className="pl-texts">
        <p className="pl-kicker">{t.projects.kicker}</p>
        <h1 className="pl-title">{t.projects.title}</h1>
        <p className="pl-desc">{t.projects.description}</p>
      </div>
      <div className="pl-list">
        {products.map((item, index) => (
          <Product
            key={item.id}
            product={{
              ...item,
              img: getProductImage(item, language),
              ...t.projects.items[item.id],
            }}
            openLabel={t.projects.openProject}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const getProductImage = (product, language) => {
  if (!product.thumbnails) {
    return product.img;
  }

  return product.thumbnails[language] || product.thumbnails.en || product.img;
};

export default ProductList;
