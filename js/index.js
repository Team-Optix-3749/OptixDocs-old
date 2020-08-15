console.log("Team Optix 3749");

document.getElementById("software")
document.getElementById("electrical")
document.getElementById("design")
document.getElementById("build")

const renderGeneral = () => {
    document.getElementById("general").style.display = "inline-block"
    document.getElementById("software").style.display = "none"
    document.getElementById("electrical").style.display = "none"
    document.getElementById("design").style.display = "none"
    document.getElementById("build").style.display = "none"
}

const renderSoftware = () => {
    document.getElementById("software").style.display = "inline-block"
    document.getElementById("general").style.display = "none"
    document.getElementById("electrical").style.display = "none"
    document.getElementById("design").style.display = "none"
    document.getElementById("build").style.display = "none"
}

const renderElectrical = () => {
    document.getElementById("electrical").style.display = "inline-block"
    document.getElementById("general").style.display = "none"
    document.getElementById("software").style.display = "none"
    document.getElementById("design").style.display = "none"
    document.getElementById("build").style.display = "none"
}

const renderDesign = () => {
    document.getElementById("design").style.display = "inline-block"
    document.getElementById("general").style.display = "none"
    document.getElementById("software").style.display = "none"
    document.getElementById("electrical").style.display = "none"
    document.getElementById("build").style.display = "none"
}

const renderBuild = () => {
    document.getElementById("build").style.display = "inline-block"
    document.getElementById("general").style.display = "none"
    document.getElementById("software").style.display = "none"
    document.getElementById("electrical").style.display = "none"
    document.getElementById("design").style.display = "none"
}
