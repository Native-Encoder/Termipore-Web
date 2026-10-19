// Central image registry. Pages import images from here instead of using
// "/path.png" strings. Static imports are content-hashed at build time, so
// replacing a file (same name) automatically busts every cache.
//
// To swap an image: overwrite the file in ./images/... — nothing else to do.
// To add an image: drop it in ./images/... and add an export line below.

// Common (shared across pages)
export { default as logo } from "./images/common/logo.png";
export { default as logoFooter } from "./images/common/logo-footer.png";
export { default as requestCta } from "./images/common/request.png";

// Home page
export { default as homeHero } from "./images/home-page/home-hero.png";
export { default as architectHome } from "./images/home-page/architect-home.png";
export { default as engineerHome } from "./images/home-page/engineer-home.png";
export { default as pestHome } from "./images/home-page/pest-home.png";
export { default as homeOwnersHome } from "./images/home-page/homeowner-home.png";
export { default as evidenceSpecifierFirst } from "./images/home-page/evidence-specifier-first.png";
export { default as evidenceSpecifierSecond } from "./images/home-page/evidence-specifier-second.png";
export { default as evidenceSpecifierThird } from "./images/home-page/evidence-specifier-third.png";
export { default as evidenceSpecifierFourth } from "./images/home-page/evidence-specifier-fourth.png";
export { default as evidenceSpecifierFifth } from "./images/home-page/evidence-specifier-fifth.png";
export { default as evidenceSpecifierSixth } from "./images/home-page/evidence-specifier-sixth.png";

// Primary page heroes
export { default as faqHero } from "./images/primary-hero/FAQ.png";
export { default as contactHero } from "./images/primary-hero/contact.png";
export { default as installersHero } from "./images/primary-hero/installers.png";
export { default as specificationsHero } from "./images/primary-hero/specifications.png";
export { default as systemHero } from "./images/primary-hero/system-hero.png";

// Secondary page heroes
export { default as architectHero } from "./images/secondary-hero/architect.png";
export { default as architectsHero } from "./images/secondary-hero/architects-hero.png";
export { default as engineerHero } from "./images/secondary-hero/engineer.png";
export { default as homeOwnersHero } from "./images/secondary-hero/home-owners.png";
export { default as pestHero } from "./images/secondary-hero/pest.png";

// Specification page
export { default as pipe14mm } from "./images/specification-page/14mm.png";
export { default as pipe17mm } from "./images/specification-page/17mm.png";
export { default as pipe19mm } from "./images/specification-page/19mm.png";
