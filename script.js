document.getElementById('searchIcon').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default link behavior
    
    const inputElement = document.getElementById('searchInput');
    const yOffset = -80; // Adjust this value to position the input properly after scrolling
    
    const y = inputElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    
    inputElement.focus(); // Set focus to the input after scrolling
  });
  