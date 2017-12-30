

class imageRender extends View {



template (model) {

    return model.map(n => ` <img src='${n}'></img> `).join('');


}


}
