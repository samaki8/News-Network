const today = new Date();
const formattedDate = today.toLocaleDateString(); // Default format based on locale
console.log(formattedDate);

const dateElement = document.getElementById("currentDate");

dateElement.textContent = formattedDate;
