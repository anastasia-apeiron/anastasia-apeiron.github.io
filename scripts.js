// Grab the eco mode switch button
const themeToggleBtn = document.getElementById('themeToggle');


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Listen for clicks on the button
themeToggleBtn.addEventListener('click', () => {
    // Check if the HTML root document already has dark mode active
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Switch back to light mode variables
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = '☀️ Light';
    } else {
        // Apply dark mode variables
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '🌙 Dark';
    }
});
