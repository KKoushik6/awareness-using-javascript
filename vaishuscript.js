document.addEventListener("DOMContentLoaded", function () {
    let page = window.location.pathname.split("/").pop(); // Get current page name
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.textAlign = "center";
    document.body.style.backgroundColor = "#f8f9fa";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    let container = document.createElement("div");
    container.style.maxWidth = "600px";
    container.style.margin = "50px auto";
    container.style.background = "white";
    container.style.padding = "20px";
    container.style.borderRadius = "10px";
    container.style.boxShadow = "0px 0px 10px gray";

    let title = document.createElement("h1");
    let image = document.createElement("img");
    image.src = "https://mir-s3-cdn-cf.behance.net/projects/404/e1dfff99102195.5eeb2e1d161b7.png";
    image.alt = "Stop Sexual Violence";
    image.style.width = "100%";
    image.style.maxWidth = "400px";
    image.style.borderRadius = "10px";

    let text = document.createElement("p");
    let button = document.createElement("button");
    button.style.marginTop = "20px";
    button.style.padding = "10px 20px";
    button.style.background = "#c0392b";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    
    if (page === "vaishu4.html" || page === "") {
        title.innerText = "Rape Awareness & Prevention";
        text.innerText = "Sexual violence is a serious issue affecting individuals and communities worldwide. Awareness, education, and support can help prevent it.";
        button.innerText = "Get Support";
        button.onclick = function () {
            window.location.href = "vaishu5.html";
        };
    } else if (page === "vaishu5.html") {
        title.innerText = "Support & Help";
        text.innerHTML = "If you have experienced sexual violence, you are not alone. Here are some ways to get help:<ul>" +
                         "<li>Reach out to a trusted friend or family member.</li>" +
                         "<li>Contact a local support organization or helpline.</li>" +
                         "<li>Seek professional counseling and legal advice.</li>" +
                         "<li>Report the incident to authorities if you feel safe to do so.</li></ul>";
        button.innerText = "Back to Awareness Page";
        button.onclick = function () {
            window.location.href = "index.html";
        };
    }

    container.appendChild(title);
    container.appendChild(image);
    container.appendChild(text);
    container.appendChild(button);
    document.body.appendChild(container);
});