console.log("Team Optix 3749");

const general = document.getElementById("general")
const software = document.getElementById("software")
const electrical = document.getElementById("electrical")
const design = document.getElementById("design")
const build = document.getElementById("build")

const renderGeneral = () => {
    console.log("rendering general")
    general.style.display = "inline-block"
    software.style.display = "none"
    electrical.style.display = "none"
    design.style.display = "none"
    build.style.display = "none"
}

const renderSoftware = () => {
    console.log("rendering software")
    software.style.display = "inline-block"
    general.style.display = "none"
    electrical.style.display = "none"
    design.style.display = "none"
    build.style.display = "none"
}

const renderElectrical = () => {
    console.log("rendering electrical")
    electrical.style.display = "inline-block"
    general.style.display = "none"
    software.style.display = "none"
    design.style.display = "none"
    build.style.display = "none"
}

const renderDesign = () => {
    console.log("rendering design")
    design.style.display = "inline-block"
    general.style.display = "none"
    software.style.display = "none"
    electrical.style.display = "none"
    build.style.display = "none"
}

const renderBuild = () => {
    console.log("rendering build")
    build.style.display = "inline-block"
    general.style.display = "none"
    software.style.display = "none"
    electrical.style.display = "none"
    design.style.display = "none"
}
