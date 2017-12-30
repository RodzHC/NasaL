






$("#submit-button").on("click", function(event){

  event.preventDefault();


  var search = "media_type=image";

  var input = $("#input-text").val();

  var key = "uP4YNNyNHkpy9WscSm4Sh2HkaGP3mUxnekKC1vcn" ;
  //+"&"+"api_key="+ key
  var xhr = new XMLHttpRequest() ;

    let url = "https://images-api.nasa.gov/search?q=";

  xhr.open("GET", url + input +"&"+ search  , true );

  xhr.send() ;




  function lidaResposta () {

    var resposta = JSON.parse(xhr.responseText) ;

    let divRender = document.querySelector('#image-render') ;

    let resp2 = resposta.collection.items
    let resp3 = resp2.map(function(n){

      


    });
    // let teste = new imageRender (divRender)  ;
    //
    // teste.update("Menino");


    console.log(resposta);
    console.log (resp2);

  }

  xhr.addEventListener("load", lidaResposta, false) ;

});
