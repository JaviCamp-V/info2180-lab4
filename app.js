window.onload = function () 
{  const search = document.querySelector('.btn');
    var result = document.querySelector('.result');
    $.ajax({
      url: 'superheroes.php',
      type: 'post',
      success: function(response) 
      {result.innerHTML=response;}
  
    }); 
    search.addEventListener('click', function(event) {
        event.preventDefault();
        var search =document.getElementById("search-value").value;
        $.ajax({
          url: 'superheroes.php',
          type: 'post',
          data: { "query": search},
          success: function(response) 
          {result.innerHTML=response;}
      
        });         
    });

    
}
