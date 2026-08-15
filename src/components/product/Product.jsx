import "./product.css";

const preparePreviewScroll = (event) => {
  const media = event.currentTarget;
  const image = media.querySelector("img");

  if (!image) return;

  const overflow = Math.max(0, image.scrollHeight - media.clientHeight);
  media.style.setProperty("--preview-scroll", `${overflow}px`);
};

const Product = ({
  product,
  openLabel,
  variant = "archive",
  contextLabel,
  language = "en",
}) => {
  const classNames = ["p", `p--${variant}`];
  const imageSrc =
    typeof product.img === "string"
      ? product.img
      : product.img?.[language] ||
        product.img?.en ||
        product.img?.es ||
        product.img?.ru ||
        "";

  if (variant === "development") {
    return (
      <article className={classNames.join(" ")}>
        <div className="p-dev-visual">
          <img
            src={imageSrc}
            alt={`${product.title} preview`}
            className="p-dev-img"
            loading="lazy"
          />
        </div>

        <div className="p-dev-copy">
          <div className="p-meta-line">
            <span className="p-context">{product.status}</span>
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-tag-text">{product.tag}</span>
          </div>
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          {product.features && (
            <div className="p-dev-features">
              {product.features.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  if (variant === "web-feature") {
    return (
      <article className={classNames.join(" ")}>
        <a
          href={product.link}
          target="_blank"
          rel="noreferrer"
          className="p-web-link"
          aria-label={`${openLabel}: ${product.title}`}
        >
          <div
            className="p-web-media"
            onMouseEnter={preparePreviewScroll}
            onFocus={preparePreviewScroll}
          >
            <img src={product.img} alt={product.title} className="p-web-img" />
          </div>

          <div className="p-web-copy">
            <div className="p-meta-line">
              <span className="p-context">{contextLabel}</span>
              <span className="p-dot" aria-hidden="true"></span>
              <span className="p-tag-text">{product.tag}</span>
            </div>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <span className="p-open">
              {openLabel}
              <span className="p-open-icon" aria-hidden="true">↗</span>
            </span>
          </div>
        </a>
      </article>
    );
  }

  return (
    <article className={classNames.join(" ")}>
      <a
        href={product.link}
        target="_blank"
        rel="noreferrer"
        className="p-archive-link"
        aria-label={`${openLabel}: ${product.title}`}
      >
        <div
          className="p-archive-media"
          onMouseEnter={preparePreviewScroll}
          onFocus={preparePreviewScroll}
        >
          <img src={product.img} alt={product.title} className="p-archive-img" />
          <span className="p-archive-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="p-archive-copy">
          <div className="p-archive-title-row">
            <h4>{product.title}</h4>
            <span className="p-archive-tag">{product.tag}</span>
          </div>
          <p>{product.description}</p>
        </div>
      </a>
    </article>
  );
};

export default Product;
