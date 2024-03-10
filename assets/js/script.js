document.getElementById("loadPage2").addEventListener("click", async function() {
    try {
        const response = await fetch("./page2.html");
        if (!response.ok) {
            throw new Error('Failed to load page');
        }
        const content = await response.text();
        document.getElementById("pageContent").innerHTML = content;
    } catch (error) {
        console.error('Error:', error);
    }
});