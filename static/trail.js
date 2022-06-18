var lastPooped = 0
var mouseDown = false;

window.addEventListener("mousedown", () => mouseDown = !mouseDown)
window.addEventListener("mouseup",() => mouseDown = !mouseDown)
window.addEventListener("touchstart", () => mouseDown = !mouseDown)
window.addEventListener("touchend", () => mouseDown = !mouseDown)

window.addEventListener("mousemove", function(e) {
    if (Date.now() - lastPooped > 10 && mouseDown) {
        var newDiv = document.createElement("div")
        newDiv.classList.add("poo-trail")
        newDiv.style.left = e.clientX - 67 + "px"
        newDiv.style.top = e.clientY - 67 + "px"
        document.body.appendChild(newDiv)
        lastPooped = Date.now()
    }
})
