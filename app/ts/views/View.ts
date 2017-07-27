class View<T> {
  protected _elemento: Element;

  constructor(selector: string) {
    this._elemento = document.querySelector(selector);
  }

  update(model: T): void {
    this._elemento.innerHTML = this.template(model);
  }

  template(model: T): string {
    // return `<p class="alert alert-info">${model}</p>`;
    throw new Error('Você deve implemantar o método template');
  }
}
