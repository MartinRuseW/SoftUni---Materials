function search() {
   
   const itemsList = document.querySelectorAll("#towns li");
   const result = document.querySelector("#result");
   const searchInput = document.querySelector("#searchText");

   let counter = 0;

   for (const line of itemsList) {
      if (line.textContent.includes(searchInput.value)) {
         line.style.fontWeight = "bold";
         line.style.textDecoration = "underline";
         counter++;
      } else {
         line.style.fontWeight = "normal";
         line.style.textDecoration = "none";
      }
   }

   result.textContent = `${counter} matches found`
}
