function appendPicture(picture: File) {
    const pictureBar = document.getElementById("pictureBar");

    if (pictureBar) {
        const imgElement = document.createElement("img");

        imgElement.src = URL.createObjectURL(picture);
        imgElement.className = "pictureBarIMG"

        pictureBar.appendChild(imgElement);
    } else {
        console.error("Element not found.");
    }
}

// This script runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("upload") as HTMLInputElement;
    const fileNameDisplay = document.getElementById(
        "file-name",
    ) as HTMLSpanElement;

    if (input && fileNameDisplay) {
        input.addEventListener("change", () => {
            // Check if the input has files
            if (input.files && input.files.length > 0) {
                const fileName = input.files[0].name;
                fileNameDisplay.textContent = fileName;
                appendPicture(input.files[0]);
            } else {
                fileNameDisplay.textContent = "Keine Datei ausgewählt";
            }
        });
    } else {
        console.error("File input or display element not found.");
    }
});