import { useCallback, useEffect, useRef } from "react";
import "./product.css";

const Product = ({ product, openLabel, index }) => {
  const projectNumber = String(index + 1).padStart(2, "0");
  const linkRef = useRef(null);
  const imageRef = useRef(null);

  const updateScrollDistance = useCallback(() => {
    const link = linkRef.current;
    const image = imageRef.current;

    if (!link || !image) {
      link?.style.setProperty("--image-scroll", "0px");
      return;
    }

    const styles = window.getComputedStyle(link);
    const topCrop = parseFloat(styles.getPropertyValue("--app-top-crop")) || 0;
    const distance = Math.max(0, image.scrollHeight - link.clientHeight - topCrop);
    link.style.setProperty("--image-scroll", `-${distance}px`);
  }, []);

  useEffect(() => {
    updateScrollDistance();
    window.addEventListener("resize", updateScrollDistance);

    return () => {
      window.removeEventListener("resize", updateScrollDistance);
    };
  }, [updateScrollDistance]);

  return (
    <div className={`p ${index === 0 ? "featured" : ""} ${product.kind === "app" ? "app-project" : ""}`}>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <strong>{projectNumber}</strong>
        <span>{product.tag}</span>
      </div>
      <a
        href={product.link}
        target="_blank"
        rel="noreferrer"
        className="p-link"
        ref={linkRef}
      >
        <img
          src={product.img}
          alt={product.title}
          className="p-img"
          ref={imageRef}
          onLoad={updateScrollDistance}
        />
        <div className="p-overlay">
          <span className="p-tag">{product.tag}</span>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <span className="p-open">{openLabel}</span>
        </div>
      </a>
    </div>
  );
};

export default Product;
