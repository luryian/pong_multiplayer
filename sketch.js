yRaq = 0;
xRaq = 380;
wRaq = 20;
hRaq = 100;
xRaq2 = 0;
yRaq2 = 0;
xBola = 200;
yBola = 200;
dX = 5;
dY = 6;
raio =20;

pontos1 = 0;
pontos2 = 0;


function setup() {
  createCanvas(400, 400);
  textSize(20);
}

function draw() {
  background(0);
  desenhaRaq();
  desenhaRaq2();
  movimentarRaq();
  movimentaRaq2();
  colisaoRaq2();
  colisaoRaquete();
  desenhaBola();
  limitaBola();

}

function desenhaRaq(){
  rect(xRaq, yRaq, wRaq, hRaq);
}

function movimentarRaq(){
  if (keyIsDown(DOWN_ARROW) && yRaq < 300 ) {
    yRaq += 7;
  }
  if (keyIsDown(UP_ARROW) && yRaq > 0) {
    yRaq -= 7;
  }
}

function desenhaBola(){
 circle(xBola, yBola, raio);
  
    xBola += dX;
    yBola += dY;
}

function limitaBola(){
  if(xBola  + raio >= width){
    pontos1++
    dX *= -1;
  }
  
  if(xBola - raio <= 0){
     pontos2++
    dX *= -1;
     }
  
  if (yBola + raio >= width || yBola - raio <= 0) {
    dY *= -1;
  }
}

function colisaoRaquete(){
  fill(255);
  text(pontos2,300,40);
  if (xBola + raio == xRaq && yBola >= yRaq && yBola <= yRaq + hRaq){
    dX *= -1;
    console.log("entrou1")
  }
}

function desenhaRaq2(){
  rect(xRaq2, yRaq2, wRaq, hRaq);
}

function movimentaRaq2(){
    if (keyIsDown(83) && yRaq2 < 300 ) {
    yRaq2 += 7;
  }
  if (keyIsDown(87) && yRaq2 > 0) {
    yRaq2 -= 7;
  }
}

function colisaoRaq2(){
  fill(255);
  text(pontos1,100,40);
    if (xBola - raio == xRaq2 + wRaq && yBola >= yRaq2 && yBola <= yRaq2 + hRaq){
    dX *= -1;
    console.log("entrou2")
  }
}