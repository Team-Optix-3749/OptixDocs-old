console.log("Team Optix 3749");

const general = document.getElementById("general");
const software = document.getElementById("software");
const electrical = document.getElementById("electrical");
const design = document.getElementById("design");
const build = document.getElementById("build");
const news = document.getElementById("news");

const generalLink = document.getElementById("general-link");
const softwareLink = document.getElementById("software-link");
const electricalLink = document.getElementById("electrical-link");
const designLink = document.getElementById("design-link");
const buildLink = document.getElementById("build-link");
const newsLink = document.getElementById("news-link");

const renderGeneral = () => {
  console.log("rendering general");
  general.style.display = "inline-block";
  software.style.display = "none";
  electrical.style.display = "none";
  design.style.display = "none";
  build.style.display = "none";
  news.style.display = "none"
  generalLink.style.backgroundColor = "#14e350";
  softwareLink.style.backgroundColor = "transparent";
  electricalLink.style.backgroundColor = "transparent";
  designLink.style.backgroundColor = "transparent";
  buildLink.style.backgroundColor = "transparent";
  newsLink.style.backgroundColor = "transparent";
};

const renderSoftware = () => {
  console.log("rendering software");
  software.style.display = "inline-block";
  general.style.display = "none";
  electrical.style.display = "none";
  design.style.display = "none";
  build.style.display = "none";
  news.style.display = "none"
  generalLink.style.backgroundColor = "transparent";
  softwareLink.style.backgroundColor = "#14e350";
  electricalLink.style.backgroundColor = "transparent";
  designLink.style.backgroundColor = "transparent";
  buildLink.style.backgroundColor = "transparent";
  newsLink.style.backgroundColor = "transparent";
};

const renderElectrical = () => {
  console.log("rendering electrical");
  electrical.style.display = "inline-block";
  general.style.display = "none";
  software.style.display = "none";
  design.style.display = "none";
  build.style.display = "none";
  news.style.display = "none"
  generalLink.style.backgroundColor = "transparent";
  softwareLink.style.backgroundColor = "transparent";
  electricalLink.style.backgroundColor = "#14e350";
  designLink.style.backgroundColor = "transparent";
  buildLink.style.backgroundColor = "transparent";
  newsLink.style.backgroundColor = "transparent";
};

const renderDesign = () => {
  console.log("rendering design");
  design.style.display = "inline-block";
  general.style.display = "none";
  software.style.display = "none";
  electrical.style.display = "none";
  build.style.display = "none";
  news.style.display = "none"
  generalLink.style.backgroundColor = "transparent";
  softwareLink.style.backgroundColor = "transparent";
  electricalLink.style.backgroundColor = "transparent";
  designLink.style.backgroundColor = "#14e350";
  buildLink.style.backgroundColor = "transparent";
  newsLink.style.backgroundColor = "transparent";
};

const renderBuild = () => {
  console.log("rendering build");
  build.style.display = "inline-block";
  general.style.display = "none";
  software.style.display = "none";
  electrical.style.display = "none";
  design.style.display = "none"
  news.style.display = "none"
  generalLink.style.backgroundColor = "transparent";
  softwareLink.style.backgroundColor = "transparent";
  electricalLink.style.backgroundColor = "transparent";
  designLink.style.backgroundColor = "transparent";
  buildLink.style.backgroundColor = "#14e350";
  newsLink.style.backgroundColor = "transparent";
};

const renderNews = () => {
  console.log("rendering news");
  news.style.display = "inline-block"
  build.style.display = "none";
  general.style.display = "none";
  software.style.display = "none";
  electrical.style.display = "none";
  design.style.display = "none";
  generalLink.style.backgroundColor = "transparent";
  softwareLink.style.backgroundColor = "transparent";
  electricalLink.style.backgroundColor = "transparent";
  designLink.style.backgroundColor = "transparent";
  buildLink.style.backgroundColor = "transparent";
  newsLink.style.backgroundColor = "#14e350";
};