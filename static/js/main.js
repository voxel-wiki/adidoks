// Set darkmode (and enable it by default for systems using darkmode)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    
    if (localStorage.getItem('theme') === null) {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    }
    
}

document.getElementById('mode').addEventListener('click', () => {
    
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    
});
  
if (localStorage.getItem('theme') === 'dark') {
  
    document.body.classList.add('dark');
  
}
