$('#Cargar').click(function(){
    
     var xciudad = $("#selectCiudad").val();
         xselectTipo = $("#selectTipo").val();
         xrangoPrecio = $("#rangoPrecio").val();
		 
      datos2 = {'xciudad':xciudad, 'xselectTipo':xselectTipo,'xrangoPrecio':xrangoPrecio};

 $.ajax({
     url: "php/filtro.php",
     type: "POST",
     data: datos2,
     }).done(function(respuesta){
		  
			console.log(JSON.stringify(respuesta));
			
     let data = JSON.parse(respuesta);
     var r = data.data;
     showResult2(r);

		});    
   });
   
  function showResult2(e){
    $('.resultados').empty();
    for(let i=0; i<e.length; i++){
        $('.resultados').append(`<div class="card horizontal">
            <div class="card-image place-wrapper">
                <img class="img-responsive place-image" src="img/${e[i].Ciudad}.jpg">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <p>
                        <b>Dirección: </b>${e[i].Direccion}<br>
                        <b>Ciudad: </b>${e[i].Ciudad}<br>
                        <b>Teléfono: </b>${e[i].Telefono}<br>
                        <b>Código Postal: </b>${e[i].Codigo_Postal}<br>
                        <b>Tipo: </b>${e[i].Tipo}<br>
                        <span class="price"><b>Precio: </b>${e[i].Precio}</span>
                    </p>
                </div>
                <div class="card-action">
                    <a>Ver mas</a>
                </div>
            </div>
        </div>`);
    }
}
