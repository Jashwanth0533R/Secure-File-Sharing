import AnimatedLiquidBackground from 
"https://framer.com/m/AnimatedLiquidBackground-Prod-vIhm.js@ghH1aHLmGZ0iE7qXDFVk";

const container = document.getElementById("liquid-bg");

new AnimatedLiquidBackground({
    target: container
});
async function handleSignin() {

    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "login/login.html";
        return;
    }

    try {
        const res = await fetch(
            "https://secure-file-sharing-4k5x.onrender.com/profile",
            {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }
        );

        if (res.ok) {
            window.location.href = "user_data.html";
        } else {
            localStorage.removeItem("token");
            window.location.href = "login/login.html";
        }

    } catch {
        window.location.href = "login/login.html";
    }
}