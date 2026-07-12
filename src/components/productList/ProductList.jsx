import { useContext } from "react";
import { LanguageContext } from "../../context";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="pl" id="projects">
      <div className="pl-texts">
        <p className="pl-kicker">{t.projects.kicker}</p>
        <h1 className="pl-title">{t.projects.title}</h1>
        <p className="pl-desc">{t.projects.description}</p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            product={{ ...item, ...t.projects.items[item.id] }}
            openLabel={t.projects.openProject}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
