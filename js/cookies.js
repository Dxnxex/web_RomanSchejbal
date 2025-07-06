document.addEventListener("DOMContentLoaded", function () {
    if (document.cookie.includes("cookiesAccepted=true")) {
        document.getElementById("cookie-banner").style.display = "none";
    }

    document.getElementById("accept-cookies").addEventListener("click", function () {
        document.cookie = "cookiesAccepted=true; path=/; max-age=" + (60 * 60 * 24 * 30);
        document.getElementById("cookie-banner").style.display = "none";
    });
});
