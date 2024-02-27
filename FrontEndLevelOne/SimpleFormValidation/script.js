

        function validate() {
            let email = document.getElementById("email").value
            if(email === "") {
                alert("Please enter an email address")
                return false
            }
            return true
        }