const controller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
console.log(controller);
