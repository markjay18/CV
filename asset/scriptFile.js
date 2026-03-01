// --- WebP Detection & Dynamic Icon ---
const ico = document.getElementById('ico');

// Function to detect WebP support
function supportsWebP() {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img.width === 1 && img.height === 1);
        img.onerror = () => resolve(false);
        img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4TCEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
    });
}

// Set image dynamically based on WebP support
supportsWebP().then((isSupported) => {
    if (ico) ico.src = isSupported ? 'asset/icon.webp' : 'asset/icon.png';
});

// --- Download CV PDF in new tab (obfuscated path) ---
const webRedirectBtn = document.getElementById("webRedirect");

if (webRedirectBtn) {
    webRedirectBtn.addEventListener("click", function () {
        const encodedPath = "Y3ZmaWxlL0NWLnBkZg=="; 
        const filePath = atob(encodedPath);

        window.open(filePath, "_blank", "noopener,noreferrer");
    });
}


const profile = document.getElementById("profile");

if (profile) {
    profile.addEventListener("click", function () {
        const profileEncodedPath = "https://markjay18.github.io/tsxml-app/";

        window.open(profileEncodedPath, "_blank", "noopener,noreferrer");
    });
}

const homePage = document.getElementById("homePage");

if (homePage) {
    homePage.addEventListener("click", function () {
        const errEncodedPath = "err.html";

        window.location.href = errEncodedPath;
    });
}

