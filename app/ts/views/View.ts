// declare var $: any;

abstract class View<T> {
  protected _elemento: JQuery;

  constructor(selector: string) {
    this._elemento = $(selector);
  }

  update(model: T): void {
    this._elemento.html(this.template(model));
  }

  abstract template(model: T): string;
  // {
    // return `<p class="alert alert-info">${model}</p>`;
    // throw new Error('Você deve implemantar o método template');
  // }
}
