// Show loader when navigating to a new page
window.addEventListener('beforeunload', function() {
    document.getElementById('loader').style.display = 'block';
  });
  
  // Hide loader when the new page is fully loaded
  window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
  });
  