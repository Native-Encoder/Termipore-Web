// Central image registry. Pages import images from here instead of using
// "/path.png" strings. Static imports are content-hashed at build time, so
// replacing a file (same name) automatically busts every cache.
//
// To swap an image: overwrite the file in ./images/... — nothing else to do.
// To add an image: drop it in ./images/... and add an export line below.

// Home page
export { default as architectHome } from "./images/home-page-images/architect-home.png";
export { default as engineerHome } from "./images/home-page-images/engineer-home.png";
export { default as pestHome } from "./images/home-page-images/pest-home.png";
export { default as evidenceSpecifierFirst } from "./images/home-page-images/evidence-specifier-first.png";
export { default as evidenceSpecifierSecond } from "./images/home-page-images/evidence-specifier-second.png";
export { default as evidenceSpecifierThird } from "./images/home-page-images/evidence-specifier-third.png";
export { default as evidenceSpecifierFourth } from "./images/home-page-images/evidence-specifier-fourth.png";
export { default as evidenceSpecifierFifth } from "./images/home-page-images/evidence-specifier-fifth.png";
export { default as evidenceSpecifierSixth } from "./images/home-page-images/evidence-specifier-sixth.png";

// Primary page heroes
export { default as faqHero } from "./images/primary-hero-images/FAQ.png";
export { default as contactHero } from "./images/primary-hero-images/contact.png";
export { default as installersHero } from "./images/primary-hero-images/installers.png";
export { default as specificationsHero } from "./images/primary-hero-images/specifications.png";
export { default as systemHero } from "./images/primary-hero-images/system-hero.png";

// Secondary page heroes
export { default as architectHero } from "./images/secondary-hero-images/architect.png";

// Specification page
export { default as pipe14mm } from "./images/specification-page-images/14mm.png";
export { default as pipe17mm } from "./images/specification-page-images/17mm.png";
export { default as pipe19mm } from "./images/specification-page-images/19mm.png";
