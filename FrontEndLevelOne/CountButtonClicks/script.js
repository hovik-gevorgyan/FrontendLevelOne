
        let clickCount = 0
        function count() {
            let text = document.getElementById("text")
            clickCount++
            text.textContent = "Button has been clicked " + clickCount + " times"
        }
   