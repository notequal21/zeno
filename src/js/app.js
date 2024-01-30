import * as functions from "./modules/functions.js";
import * as sliders from "./modules/sliders.js";

functions.burger();
functions.sequenceAnimation();
functions.faqAccordion();
functions.modal();
functions.tabs();
functions.aboutPlayVideo();
functions.rewardsHoverPlayAnimation();
functions.anchors();
functions.themeSwitcher();
functions.upBtn();
functions.atroposAnim();
functions.mobileFadeUp();
sliders.partnersSlider();
sliders.storiesSlider();
sliders.popularSlider();
sliders.videoInfoSlider();
sliders.teachersSlider();

function cookiesYes() {
    document.getElementById('cookieConsentPopup').style.display = 'none';
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TLVKK3DF');
}

function cookiesNo() {
    document.getElementById('cookieConsentPopup').style.display = 'none';
}
