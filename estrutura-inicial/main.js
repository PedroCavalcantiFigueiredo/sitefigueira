const botao = document.querySelector('#botaoroll');

  botao.addEventListener('click', () => {
    window.scroll({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    botao.style.display = 'none';
  });