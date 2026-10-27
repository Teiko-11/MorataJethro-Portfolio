const nameInput = document.getElementById("int");
const nameDisplay = document.getElementById("Name");
const courseSelect = document.getElementById("course");
const courseDisplay = document.getElementById("BScourse");
const message = document.getElementById("activity-message");

document.getElementById("click").addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
        nameDisplay.textContent = name;
    }
    courseDisplay.textContent = courseSelect.options[courseSelect.selectedIndex].text;
    message.textContent = "Profile updated.";
});

document.getElementById("Dclick").addEventListener("dblclick", () => {
    nameInput.value = "";
    nameDisplay.textContent = "JETHRO MORATA";
    courseSelect.value = "BSIT";
    courseDisplay.textContent = "BS Information Technology";
    message.textContent = "Profile reset.";
});
