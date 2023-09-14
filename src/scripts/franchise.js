function toggleInfo(id) {
    var info = document.getElementById(id);
    var button = document.querySelector(`button[onclick="toggleInfo('${id}')"]`);
    
    if (info.style.display === "none") {
        info.style.display = "block";
        button.textContent = "Ver Menos";
    } else {
        info.style.display = "none";
        button.textContent = "Ver Mais";
    }
}