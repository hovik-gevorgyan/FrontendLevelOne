
        function toggleText() {
            let btn = document.getElementById("hideText")
            let text = document.getElementById("text")
            if(btn.innerHTML === "Hide") {
                btn.innerHTML = "Show"
                text.style.display = "none"
            } else {
                btn.innerHTML = "Hide"
                text.style.display = "block"
            }
        }
    