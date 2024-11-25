document.addEventListener("DOMContentLoaded", function () {
    const syncDiv = document.querySelector(".accountSynchronization");
    const urlParams = new URLSearchParams(window.location.search);
    const isSynced = urlParams.get("sync");

    if (isSynced === "true") {
        // Если в URL есть параметр sync=true
        syncDiv.textContent = "Синхронизировано";
        syncDiv.classList.add("greenText");
        localStorage.setItem("pageVisited", "true");
    } else {
        // Если параметра sync нет
        syncDiv.textContent = "Не синхронизировано";
        syncDiv.classList.add("redText");
        localStorage.setItem("pageVisited", "false");
    }
});
