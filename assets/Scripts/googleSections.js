const websitesData = [
  {
    siteName: "دم دستی",
    ImageAddress: "./assets/Images/Websites/spottedPatterns.svg",
    siteAddress: "#",
  },
  {
    siteName: "شب",
    ImageAddress: "./assets/Images/Websites/nightSite.png",
    siteAddress: "https://www.shab.ir/",
  },
  {
    siteName: "گوگل",
    ImageAddress: "./assets/Images/Websites/google.svg",
    siteAddress: "https://www.google.com/",
  },
  {
    siteName: "کاریار",
    ImageAddress: "./assets/Images/Websites/kaaryar.jpg",
    siteAddress: "https://kaaryar.ir/",
  },
  {
    siteName: "آمازون",
    ImageAddress: "./assets/Images/Websites/amazon.jpg",
    siteAddress: "https://www.amazon.com/",
  },
  {
    siteName: "دیجی کالا",
    ImageAddress: "./assets/Images/Websites/digikala.svg",
    siteAddress: "https://www.digikala.com/",
  },
];

////////////  Get Dom Elements ////////////
const websitesWrapper = document.querySelector(".favoriteWebsites");

const genereteWebsitesElement = () => {
  ///// Generete Popular Websites Element  ///////
  for (let site of websitesData) {
    websitesWrapper.innerHTML += `<div class="favoriteWebsites__appBlock favoriteWebsites__appBlock--border">
    <a href="${site.siteAddress}" class="favoriteWebsites__appLink">
        <img class="favoriteWebsites__appLogo" src="${site.ImageAddress}" alt="logo">
        <span class="favoriteWebsites__appName">${site.siteName}</span>
    </a>
</div>`;
  }
  ///// Generete Empty Websites Element  ///////
  for (let i = 0; i < 12 - websitesData.length; i++) {
    websitesWrapper.innerHTML += `<div class="favoriteWebsites__appBlock">
          <iconify-icon icon="mingcute:add-fill" class="favoriteWebsites__appIcon"></iconify-icon>
      </div>`;
  }
};

genereteWebsitesElement();
