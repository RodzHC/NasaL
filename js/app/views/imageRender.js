

class imageRender extends View {



template (html) {

    // return model.map(n => ` <img src='${n}'></img> `).join('');
      var x = document.createElement('div');
      let m = `<img src='${html}'></img>` ;
      x.innerHTML  = m ;
      return x ;
      //return `<img src='${model}'></img>` ;

}


}
