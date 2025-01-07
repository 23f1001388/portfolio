function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    
    // Toggle the sidebar visibility and the container layout
    sidebar.classList.toggle('hidden');
    container.classList.toggle('sidebar-hidden');
}
