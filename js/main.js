






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

    var resposta = JSON.parse(xhr.responseText).collection.items.map ( n =>
      n.href ) ;

    for (var i = 0; i < resposta.length; i++) {
      var divRender = document.getElementById("image-reder");
      var request = new XMLHttpRequest() ;
      request.open("GET",resposta[i], true ) ;
      request.send() ;

      request.addEventListener("load", function(n){


      let regex = /http:[^\s]+medium\.jpg/g ;
      var result = regex.exec(n.target.responseText);
      console.log(result[0]);

      if(result[0] != null ){
      let render = new imageRender (divRender) ;
      render.update (result[0]);
}

      }, false) ;




    }



    var divRender = document.querySelector('#image-render') ;

    // var resp2 = resposta.collection.items
    //
    // var resp3 = resp2.map(function(n){
    //   return n.href ;



    // let teste = new imageRender (divRender)  ;
    //
    // teste.update("Menino");




  }

  xhr.addEventListener("load", lidaResposta, false) ;

});
