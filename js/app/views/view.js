class View {

  constructor(element){
    this._element = element ;

  }

  template () { throw new Error('Erro de template')}

  update(model) {
    this._element.innerHTML = this.template(model) ;

  }


}
