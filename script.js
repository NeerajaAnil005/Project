function generatePortfolio() {
    const markdownText = document.getElementById("markdownInput").value;
    const htmlContent = marked.parse(markdownText);
    document.getElementById("preview").innerHTML = htmlContent;

    showPopup();
}
function setTheme(theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
}