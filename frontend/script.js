document.getElementById("signinBtn").addEventListener("click", async function () {

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
});