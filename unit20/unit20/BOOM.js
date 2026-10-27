const message = document.getElementById("CHUPAPI");
const textInput = document.getElementById("BRUH");
const picture = document.getElementById("picture");

document.getElementById("GAR").addEventListener("click", () => {
    message.textContent = "You clicked the button!";
});

document.getElementById("HERE").addEventListener("dblclick", () => {
    message.textContent = "You double-clicked the button!";
});

textInput.addEventListener("input", () => {
    message.textContent = textInput.value ? `You typed: ${textInput.value}` : "Type something below.";
});

picture.addEventListener("mouseenter", () => {
    message.textContent = "You hovered over the picture.";
});

picture.addEventListener("mouseleave", () => {
    message.textContent = "Try the buttons or type something.";
});
