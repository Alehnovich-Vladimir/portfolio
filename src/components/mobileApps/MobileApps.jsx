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
  const screenshots = getScreenshotsForLanguage(activeApp.screenshots, language);
  const activeScreenshot = screenshots[screenIndex] || screenshots[0];

  useEffect(() => {
    setScreenIndex(0);
  }, [activeId, language]);

  const showPreviousScreen = () => {
    if (screenshots.length < 2) return;
    setScreenIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  const showNextScreen = () => {
    if (screenshots.length < 2) return;
    setScreenIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < 36) return;
    deltaX > 0 ? showPreviousScreen() : showNextScreen();
  };

  return (
    <section className="apps" id="apps">
      <div className="apps-inner">
        <div className="apps-copy">
          <p className="apps-kicker">{t.mobileApps.kicker}</p>
          <h2>{t.mobileApps.title}</h2>
          <p className="apps-description">{t.mobileApps.description}</p>

          <div className="apps-list" role="tablist" aria-label={t.mobileApps.tabsLabel}>
            {apps.map((app) => {
              const copy = t.mobileApps.items[app.id];
              const isActive = activeId === app.id;
              return (
                <button
                  className={`apps-list-item ${isActive ? "active" : ""}`}
                  key={app.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(app.id)}
                >
                  <span className={`apps-list-icon ${app.id}`} aria-hidden="true">
                    {app.id === "my-route" ? "⌖" : "▣"}
                  </span>
                  <span className="apps-list-copy">
                    <strong>{app.name}</strong>
                    <small>{copy.status}</small>
                  </span>
                  <span className="apps-list-arrow" aria-hidden="true">›</span>
                </button>
              );
            })}
          </div>

          <div className="apps-actions">
            {activeApp.storeLink ? (
              <a className="apps-action apps-action--primary" href={activeApp.storeLink} target="_blank" rel="noreferrer">
                {t.mobileApps.storeButton} ↗
              </a>
            ) : (
              <a className="apps-action" href={activeApp.privacyLink}>
                {t.mobileApps.privacyButton} ↗
              </a>
            )}
          </div>
        </div>

        <div className="apps-device" aria-label={`${activeApp.name} ${t.mobileApps.previewLabel}`}>
          <div className="apps-orbit apps-orbit--outer" aria-hidden="true"></div>
          <div className="apps-orbit apps-orbit--inner" aria-hidden="true"></div>
          <span className="apps-orbit-chip apps-orbit-chip--route" aria-hidden="true">⌖</span>
          <span className="apps-orbit-chip apps-orbit-chip--photo" aria-hidden="true">▧</span>
          <span className="apps-orbit-chip apps-orbit-chip--audio" aria-hidden="true">◉</span>

          <div className={`apps-phone ${screenshots.length ? "has-screenshots" : ""}`}>
            <div className="apps-phone-speaker"></div>
            <div
              className={`apps-screen ${screenshots.length ? "has-screenshots" : ""}`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={screenshots.length > 1 ? showNextScreen : undefined}
            >
              {activeScreenshot && (
                <img
                  src={activeScreenshot.src}
                  alt={`${activeApp.name} ${activeScreenshot.label}`}
                  className="apps-screenshot"
                />
              )}
            </div>
          </div>

          {screenshots.length > 1 && (
            <div className="apps-screen-controls" aria-label={`${activeApp.name} screens`}>
              <button type="button" onClick={showPreviousScreen} aria-label="Previous screen">‹</button>
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
              <button type="button" onClick={showNextScreen} aria-label="Next screen">›</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const getScreenshotsForLanguage = (screenshots, language) => {
  if (!screenshots) return [];
  if (Array.isArray(screenshots)) return screenshots;
  return screenshots[language] || screenshots.en || screenshots.ru || [];
};

export default MobileApps;
