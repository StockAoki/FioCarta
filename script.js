/* ── PÉTALOS ANIMADOS ── */
(function () {
  const container = document.getElementById('petals');
  const COUNT = 24;

  for (let i = 0; i < COUNT; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';

    petal.style.left              = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (6 + Math.random() * 10) + 's';
    petal.style.animationDelay    = (Math.random() * 12) + 's';
    petal.style.width             = (10 + Math.random() * 10) + 'px';
    petal.style.height            = (14 + Math.random() * 12) + 'px';
    petal.style.opacity           = String(.4 + Math.random() * .4);

    container.appendChild(petal);
  }
})();
