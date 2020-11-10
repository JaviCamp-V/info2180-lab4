window.onload = function () 
{  const search = document.querySelector('.btn');
    var httpRequest; 
    var url="superheroes.php";
     
    search.addEventListener('click', function(event) {
        event.preventDefault();
        httpRequest= new XMLHttpRequest();
        httpRequest.onreadystatechange = loadQuote;
        httpRequest.open('GET', url);
        httpRequest.send();
         
    });
    function loadQuote() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            var quote = document.querySelector('#quote');
            alert(response);
          } else {
            alert('There was a problem with the request.');
          }
        }
      }  
    
}
