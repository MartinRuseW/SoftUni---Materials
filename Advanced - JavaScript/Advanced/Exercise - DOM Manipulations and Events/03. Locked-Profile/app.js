function lockedProfile() {
    
    Array.from(document.querySelectorAll(".profile button")).forEach((element) => {
        element.addEventListener("click", onClick);
    });

    function onClick(event) {
        const parent = event.target.parentElement;
        const unlockedCheck = parent.querySelector('input[value="unlock"]').checked;
        
        if (unlockedCheck) {
            const hiddenDiv = parent.querySelector("div");
            hiddenDiv.style.display === "block" ? (hiddenDiv.style.display = "none") : (hiddenDiv.style.display = "block");

            event.target.textContent === 'Show more' ? event.target.textContent = 'Hide it' : event.target.textContent = 'Show more';
        }
    }
}