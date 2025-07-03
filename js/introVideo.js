
    const video = document.getElementById("responsiveVideo");
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    const source = document.createElement("source");
    source.src = isPortrait
    ? "https://autoservis-ps.cz/images/gallery/RS_Portrait.mp4"
    : "https://autoservis-ps.cz/images/gallery/RS_Landscape.mp4";
    source.type = "video/mp4";

    video.appendChild(source);
    video.load();

    //Při změně orientace přehrát video
    window.addEventListener("orientationchange", () => {
        location.reload();
    });