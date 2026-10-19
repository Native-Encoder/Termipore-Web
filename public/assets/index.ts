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
export {default as firstImage} from "./images/home-page/1.png";
export {default as secondImage} from "./images/home-page/2.png";
export {default as thirdImage} from "./images/home-page/3.png";
export {default as fourthImage} from "./images/home-page/4.png";
export {default as fifthImage} from "./images/home-page/5.png";
export {default as sixthImage} from "./images/home-page/6.png";

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

// System page
export { default as systemDrip } from "./images/system-page/drip.png";
export { default as systemPVC } from "./images/system-page/pvc.png";
export { default as systemTermi } from "./images/system-page/termi.png";

// Home Owners page
export { default as homeOwnersFirst } from "./images/homeowners-page/web images.png";

// Pest Control Companies page
export { default as pestFirst } from "./images/pest-control-companies/pest-first.png";
export { default as pestSecond } from "./images/pest-control-companies/pest-second.png";
export { default as pestThird } from "./images/pest-control-companies/pest-third.png";
export { default as pestFourth } from "./images/pest-control-companies/pest-fourth.png";
export { default as pestFifth } from "./images/pest-control-companies/pest-fifth.png";
export { default as pestSixth } from "./images/pest-control-companies/pest-sixth.png";

// Constrction Page
export { default as constructionFirst } from "./images/construction-page/construction-first.png";
export { default as constructionSecond } from "./images/construction-page/construction-second.png";
export { default as constructionThird } from "./images/construction-page/construction-third.png";
export { default as constructionFourth } from "./images/construction-page/construction-fourth.png";

// Architects Page
export { default as architectsFirst } from "./images/architects-page/architects-first.png";
export { default as architectsSecond } from "./images/architects-page/architects-second.png";
export { default as architectsThird } from "./images/architects-page/architects-third.png";
export { default as architectsFourth } from "./images/architects-page/architects-fourth.png";