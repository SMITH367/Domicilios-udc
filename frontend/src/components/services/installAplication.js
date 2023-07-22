const installApliction = (installButton) => {
    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
        console.log("beforeinstallprompt fired");
        // Prevent Chrome 76 and earlier from automatically showing a prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Show the install button

        installButton.current.hidden = false;
        installButton.current.addEventListener("click", installApp);
    });

    function installApp() {
        // Show the prompt

        deferredPrompt.prompt();
        installButton.current.disabled = true;

        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("PWA setup accepted");
                installButton.current.hidden = true;
            } else {
                console.log("PWA setup rejected");
            }
            installButton.current.disabled = false;
            deferredPrompt = null;
        });
    }

}



export default installApliction