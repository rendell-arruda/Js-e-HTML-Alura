let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

// cabeça 1
pincel.fillStyle = '#166400';
pincel.fillRect(200, 50, 350, 300);

//olhos 2 e 3
pincel.fillStyle = 'black';
pincel.fillRect(250, 110, 90, 90);
pincel.fillRect(410, 110, 90, 90);

//nariz
pincel.fillRect(340, 200, 70, 100);

//boca
pincel.fillRect(300, 240, 40, 100);
pincel.fillRect(410, 240, 40, 100);
