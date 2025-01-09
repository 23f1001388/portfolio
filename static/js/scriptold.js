function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('.main');
    
    // Toggle the sidebar visibility and the container layout
    

    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('sidebar-visible');
        main.classList.toggle('main-extend');
    }
    else{
        sidebar.classList.toggle('sidebar-hidden');
        main.classList.toggle('main-extend')
    }

}


function toggleTheme() {
    // Get the current theme from the document root
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Toggle the theme based on the current theme value
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');  // Set theme to dark
        localStorage.setItem('theme', 'dark');  // Store the theme in localStorage
    } else {
        document.documentElement.setAttribute('data-theme', 'light');  // Set theme to light
        localStorage.setItem('theme', 'light');  // Store the theme in localStorage
    }
}

// Function to apply the theme from localStorage on page load
function applyStoredTheme() {
    // Check if a theme is stored in localStorage
    const storedTheme = localStorage.getItem('theme');
    
    // If a theme is stored, apply it; otherwise, set the default theme (light)
    if (storedTheme) {
        document.documentElement.setAttribute('data-theme', storedTheme);
    } else {
        // Default theme (light)
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Call the applyStoredTheme function when the page loads
document.addEventListener('DOMContentLoaded', applyStoredTheme);