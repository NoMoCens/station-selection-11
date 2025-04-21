document.addEventListener("DOMContentLoaded", function () {

    // Insert Ruffle.js into the #script div
    const scriptDiv = document.getElementById("script");
    const ruffleScript = document.createElement("script");
    ruffleScript.src = "https://nomocens.github.io/station-rxffle/ruffle.js";

    ruffleScript.onload = () => {
        // Set Ruffle config BEFORE creating player
        window.RufflePlayer = window.RufflePlayer || {};
        window.RufflePlayer.config = {
            autoplay: true,
            allowFullscreen: true,
            showSwfDownload: true,
            splashScreen: true,
            quality: "high",
            scale: "showAll",
            forceScale: true
        };

        const file = "bullet-bill.swf";
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();

        const container = document.getElementById("container");
        container.appendChild(player);
        player.load(file);
    };

    scriptDiv.appendChild(ruffleScript);

});
