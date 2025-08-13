const quotes = [
        { text: "the first quote", author: "one" },
        { text: "the second quote", author: "two" },
        { text: "the third quote", author: "three" },
        { text: "the fourth quote", author: "four" }
    ];

    function NewQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").textContent = `"${quotes[randomIndex].text}"`;
        document.getElementById("author").textContent = `- ${quotes[randomIndex].author}`;
    }

    