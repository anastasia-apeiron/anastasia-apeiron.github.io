// Grab the eco mode switch button
const themeToggleBtn = document.getElementById('themeToggle');

// Listen for clicks on the button
themeToggleBtn.addEventListener('click', () => {
    // Check if the HTML root document already has dark mode active
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Switch back to light mode variables
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = '☀️ Eco Mode';
    } else {
        // Apply dark mode variables
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '🌙 Bio-Lume';
    }
});