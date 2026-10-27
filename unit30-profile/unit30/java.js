const profile = document.getElementById("profile");
const title = document.getElementById("title");
const course = document.getElementById("course");
const courseLabel = document.getElementById("pickcourse");
const hoverMessage = document.getElementById("hover");

document.getElementById("c-title").addEventListener("click", () => {
    title.textContent = "You Changed the Title";
});

document.getElementById("c-title").addEventListener("dblclick", () => {
    title.textContent = "You Double Clicked the Title";
});

document.getElementById("show-profile").addEventListener("click", () => {
    profile.hidden = false;
});

document.getElementById("hide-profile").addEventListener("click", () => {
    profile.hidden = true;
});

course.addEventListener("change", () => {
    courseLabel.textContent = course.value;
});

document.getElementById("odd").addEventListener("click", () => {
    document.querySelectorAll("#table tr:nth-child(even)").forEach((row) => {
        row.style.backgroundColor = "#e9e3d6";
    });
});

document.getElementById("even").addEventListener("click", () => {
    document.querySelectorAll("#table tr:nth-child(odd)").forEach((row, index) => {
        if (index > 0) row.style.backgroundColor = "#e3edf0";
    });
});

for (const button of [document.getElementById("show-profile"), document.getElementById("hide-profile")]) {
    button.addEventListener("mouseenter", () => {
        hoverMessage.textContent = `You reached the ${button.textContent} button.`;
    });
    button.addEventListener("mouseleave", () => {
        hoverMessage.textContent = "";
    });
}
