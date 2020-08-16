console.log("Team Optix 3749");

const general = document.getElementById("general")
const software = document.getElementById("software")
const electrical = document.getElementById("electrical")
const design = document.getElementById("design")
const build = document.getElementById("build")

const generalLink = document.getElementById("general-link")
const softwareLink = document.getElementById("software-link")
const electricalLink = document.getElementById("electrical-link")
const designLink = document.getElementById("design-link")
const buildLink = document.getElementById("build-link")

const renderGeneral = () => {
    console.log("rendering general")
    general.style.display = "inline-block"
    software.style.display = "none"
    electrical.style.display = "none"
    design.style.display = "none"
    build.style.display = "none"
    generalLink.style.backgroundColor = "#14e350"
    softwareLink.style.backgroundColor = "none"
    electricalLink.style.backgroundColor = "none"
    designLink.style.backgroundColor = "none"
    buildLink.style.backgroundColor = "none"
}

const renderSoftware = () => {
    console.log("rendering software")
    software.style.display = "inline-block"
    general.style.display = "none"
    electrical.style.display = "none"
    design.style.display = "none"
    build.style.display = "none"
    generalLink.style.backgroundColor = "none"
    softwareLink.style.backgroundColor = "#14e350"
    electricalLink.style.backgroundColor = "none"
    designLink.style.backgroundColor = "none"
    buildLink.style.backgroundColor = "none"
}

const renderElectrical = () => {
    console.log("rendering electrical")
    electrical.style.display = "inline-block"
    general.style.display = "none"
    software.style.display = "none"
    design.style.display = "none"
    build.style.display = "none"
    generalLink.style.backgroundColor = "none"
    softwareLink.style.backgroundColor = "none"
    electricalLink.style.backgroundColor = "#14e350"
    designLink.style.backgroundColor = "none"
    buildLink.style.backgroundColor = "none"
}

const renderDesign = () => {
    console.log("rendering design")
    design.style.display = "inline-block"
    general.style.display = "none"
    software.style.display = "none"
    electrical.style.display = "none"
    build.style.display = "none"
    generalLink.style.backgroundColor = "none"
    softwareLink.style.backgroundColor = "none"
    electricalLink.style.backgroundColor = "none"
    designLink.style.backgroundColor = "#14e350"
    buildLink.style.backgroundColor = "none"
}

const renderBuild = () => {
    console.log("rendering build")
    build.style.display = "inline-block"
    general.style.display = "none"
    software.style.display = "none"
    electrical.style.display = "none"
    design.style.display = "none"
    generalLink.style.backgroundColor = "none"
    softwareLink.style.backgroundColor = "none"
    electricalLink.style.backgroundColor = "none"
    designLink.style.backgroundColor = "none"
    buildLink.style.backgroundColor = "#14e350"
}
