document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.textContent === "C") {
                result.value = "";
            } else if (this.textContent === "=") {
                try {
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = "Error";
                }
            } else {
                result.value += this.textContent;
            }
        });
    });
});
