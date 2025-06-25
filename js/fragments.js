document.addEventListener("DOMContentLoaded", function () {

    function loadFragment(url, targetId, callback) {
        const targetElement = document.getElementById(targetId);

        if (!targetElement) {
            console.error(`Element s ID '${targetId}' neexistuje.`);
            return;
        }

        fetch(url)

            .then(response => {
                if (!response.ok) throw new Error(`Chyba při načítání fragmentu: ${url}`);
                return response.text();
            })

            .then(html => {
                targetElement.insertAdjacentHTML('beforeend', html);
                if (callback) callback();
            })

            .catch(error => console.error(error));
    }


    loadFragment('fragments/navigation.html', 'navigation');
    loadFragment('fragments/footer.html', 'footer');
    loadFragment('fragments/sluzby.html', 'sluzby');
    loadFragment('fragments/galerie.html', 'galerie');
    loadFragment('fragments/kontakt.html', 'kontakt');
    loadFragment('fragments/mapa.html', 'mapa');

});
