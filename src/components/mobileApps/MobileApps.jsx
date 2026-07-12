import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../../context";
import { apps } from "../../data";
import "./mobileApps.css";

const MobileApps = () => {
  const { language, t } = useContext(LanguageContext);
  const [activeId, setActiveId] = useState(apps[0].id);
  const [screenIndex, setScreenIndex] = useState(0);
  const touchStartX = useRef(null);
  const activeApp = apps.find((app) => app.id === activeId) || apps[0];
  const appCopy = t.mobileApps.items[activeApp.id];
  const screenshots = getScreenshotsForLanguage(activeApp.screenshots, language);
  const activeScreenshot = screenshots[screenIndex] || screenshots[0];

  useEffect(() => {
    setScreenIndex(0);
  }, [activeId, language]);

  const showPreviousScreen = () => {
    if (screenshots.length < 2) {
      return;
    }

    setScreenIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const showNextScreen = () => {
    if (screenshots.length < 2) {
      return;
    }

    setScreenIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 36) {
      return;
    }

    if (deltaX > 0) {
      showPreviousScreen();
    } else {
      showNextScreen();
    }
  };

  return (
    <section className="apps" id="apps">
      <div className="apps-copy">
        <p className="apps-kicker">{t.mobileApps.kicker}</p>
        <h2>{t.mobileApps.title}</h2>
        <p>{t.mobileApps.description}</p>

        <div className="apps-tabs" role="tablist" aria-label={t.mobileApps.tabsLabel}>
          {apps.map((app) => (
            <button
              className={activeId === app.id ? "active" : ""}
              key={app.id}
              type="button"
              role="tab"
              aria-selected={activeId === app.id}
              onClick={() => setActiveId(app.id)}
            >
              {app.name}
            </button>
          ))}
        </div>

        <div className="apps-panel">
          <span>{appCopy.status}</span>
          <h3>{activeApp.name}</h3>
          <p>{appCopy.summary}</p>
          <div className="apps-tags">
            {appCopy.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
          <div className="apps-actions">
            {activeApp.storeLink && (
              <a
                className="store"
                href={activeApp.storeLink}
                target="_blank"
                rel="noreferrer"
              >
                {t.mobileApps.storeButton}
              </a>
            )}
            <a href="#contact">{t.mobileApps.contactButton}</a>
            <a className="secondary" href={activeApp.privacyLink}>
              {t.mobileApps.privacyButton}
            </a>
          </div>
        </div>
      </div>

      <div
        className="apps-device"
        aria-label={`${activeApp.name} ${t.mobileApps.previewLabel}`}
      >
        <div className={`apps-phone ${screenshots.length ? "has-screenshots" : ""}`}>
          <div className="apps-phone-speaker"></div>
          <div
            className={`apps-screen ${screenshots.length ? "has-screenshots" : ""}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={screenshots.length > 1 ? showNextScreen : undefined}
          >
            {activeScreenshot ? (
              <img
                src={activeScreenshot.src}
                alt={`${activeApp.name} ${activeScreenshot.label}`}
                className="apps-screenshot"
              />
            ) : (
              <>
                <div className="apps-status">
                  <span>{appCopy.platform}</span>
                  <span>{t.mobileApps.liveBuild}</span>
                </div>
                <h3>{appCopy.screenTitle}</h3>
                <p>{appCopy.screenMeta}</p>
                <div className="apps-map">
                  <span className="pin start"></span>
                  <span className="pin middle"></span>
                  <span className="pin end"></span>
                  <div className="route-line"></div>
                </div>
                <div className="apps-mini-list">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </>
            )}
          </div>
        </div>

        {screenshots.length > 1 && (
          <div className="apps-screen-controls" aria-label={`${activeApp.name} screens`}>
            <div className="apps-shot-dots">
              {screenshots.map((screenshot, index) => (
                <button
                  className={index === screenIndex ? "active" : ""}
                  key={screenshot.src}
                  type="button"
                  aria-label={screenshot.label}
                  onClick={() => setScreenIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const getScreenshotsForLanguage = (screenshots, language) => {
  if (!screenshots) {
    return [];
  }

  if (Array.isArray(screenshots)) {
    return screenshots;
  }

  return screenshots[language] || screenshots.en || screenshots.ru || [];
};

export default MobileApps;
