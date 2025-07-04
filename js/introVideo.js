
    const video = document.getElementById("responsiveVideo");
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    const source = document.createElement("source");
    source.src = isPortrait
    ? "/images/gallery/RS_Portrait.webm"
    : "/images/gallery/RS_Landscape.webm";
    source.type = "video/webm";

    video.appendChild(source);
    video.load();

    //Při změně orientace přehrát video
    window.addEventListener("orientationchange", () => {
        location.reload();
    });

    