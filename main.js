const botao = document.querySelector('#botaoroll');

  botao.addEventListener('click', () => {
    window.scroll({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    botao.style.display = 'none';
  });

const btnMenu = document.getElementById('btnMenu');

function toggleMenu() {
  const nav = document.getElementById('menumobile');
  nav.classList.toggle('active')
}
  btnMenu.addEventListener('click', toggleMenu);

