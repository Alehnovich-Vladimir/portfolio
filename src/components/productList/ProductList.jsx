import { useContext } from "react";
import { LanguageContext } from "../../context";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  const { language, t } = useContext(LanguageContext);

  const translatedProducts = products.map((item) => ({
    ...item,
    ...(t.projects.items[item.id] || {}),
  }));

  const getProject = (id) => translatedProducts.find((item) => item.id === id);
  const currentBuilds = [10].map(getProject).filter(Boolean);
  const completedProjects = [9, 2].map(getProject).filter(Boolean);
  const archive = [3, 4, 5, 6].map(getProject).filter(Boolean);

  return (
    <section className="pl" id="projects">
      <div className="pl-inner">
        <header className="pl-heading">
          <div>
            <p className="pl-kicker">{t.projects.kicker}</p>
            <h2>{t.projects.title}</h2>
          </div>
          <p>{t.projects.description}</p>
        </header>

        <section className="pl-current">
          <div className="pl-section-title pl-section-title--current">
            <span aria-hidden="true">ϟ</span>
            <h3>{t.projects.currentTitle}</h3>
          </div>
          <div className={`pl-current-grid${currentBuilds.length === 1 ? " pl-current-grid--single" : ""}`}>
            {currentBuilds.map((item) => (
              <Product
                key={item.id}
                product={item}
                variant="development"
                language={language}
              />
            ))}
          </div>
        </section>

        <div className="pl-lower-grid">
          {completedProjects.length > 0 && (
            <section className="pl-completed">
              <div className="pl-section-title pl-section-title--completed">
                <span aria-hidden="true">✓</span>
                <h3>{t.projects.completedTitle || t.projects.webTitle}</h3>
              </div>
              <div className="pl-completed-grid">
                {completedProjects.map((item) => (
                  <Product
                    key={item.id}
                    product={item}
                    openLabel={t.projects.openProject}
                    variant="web-feature"
                    contextLabel={item.status || t.projects.diplomaLabel}
                    language={language}
                  />
                ))}
              </div>
            </section>
          )}

          <section className="pl-archive">
            <div className="pl-section-title pl-section-title--archive">
              <span aria-hidden="true">ϟ</span>
              <h3>{t.projects.archiveTitle}</h3>
            </div>
            <div className="pl-archive-grid">
              {archive.map((item) => (
                <Product
                  key={item.id}
                  product={item}
                  openLabel={t.projects.openProject}
                  variant="archive"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
