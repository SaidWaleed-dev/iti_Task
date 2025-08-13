function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        }

        document.getElementById("addParagraph").addEventListener("click", function() {
        const paragraph = document.createElement("p");
        paragraph.textContent = "This is a new paragraph!";
        paragraph.style.color = getRandomColor();
        document.getElementById("content").appendChild(paragraph);

        this.style.backgroundColor = getRandomColor();

        setTimeout(() => {
            this.remove();
        }, 5000);
        });