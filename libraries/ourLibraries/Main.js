// Global variables
const WIDTH = 1280, HEIGHT = 720;
var Container = PIXI.Container,
  autoDetectRenderer = PIXI.autoDetectRenderer,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Texture = PIXI.Texture,
  Sprite = PIXI.Sprite,
  MovieClip = PIXI.extras.MovieClip;

var g, renderer, b, tinkPoint, animalAnimated;

var animalObject, wTexture, whiteFloor, animalTextures, animalAnimated,
  animalObjectTexture, houseBackground1, houseOutside1, houseBackgroundTexture1,
  houseOutsideTexture1, doorText, door, floor, platform;

$(document).ready(function() {
  //initCharacterSwap();
  initEverything();
});
function initEverything() {
  renderer = new PIXI.autoDetectRenderer(WIDTH, HEIGHT);
  b = new Bump(PIXI);
  tinkPoint = new Tink(PIXI, renderer.view);
  animalAnimated = new SpriteUtilities(PIXI);
  g = hexi(WIDTH, HEIGHT, setupGame);
  g.start();
}

function setupGame() {
  g.scaleToWindow();
  startMenu();
  g.state = menuState;

  loader
    .add('../../images/AnimalPlaceHolder.png')
    .add('../../images/BackGround.png')
    .add('../../images/HouseBackground.png')
    .add('../../images/HouseOutside.png')
    .add('../../images/ACPH.png')
    .add('../../images/CarlosWalkCycle.png')
    .add('../../images/animal_control.png')
    .add('../../images/floor.png')
    .load(setup);

  //calls function that designates what each key does when it is pressed
  Keys();
}

function setup() {
  animalObject = new spriteCreator('../../images/CarlosWalkCycle.png', 55, 22);
  whiteFloor = new spriteCreator('../../images/BackGround.png', 1280, 720);
  houseBackground1 = new spriteCreator('../../images/HouseBackground.png', 1000, 1000);
  houseOutside1 = new spriteCreator('../../images/HouseOutside.png', 400, 400);
  door = new spriteCreator('../../images/AnimalPlaceHolder.png', 80, 80);
  //floor = new PIXI.Rectangle(WIDTH / 2, HEIGHT, WIDTH * 0.5, 200);
  floor = new spriteCreator('../../images/HouseBackground.png', 1000, 1000);
}
// Game loops dependent on state
function menuState() {
  g.scaleToWindow();
  hideAll();
  mainMenuGroup.visible = true;
}
function optionsState() {
  g.scaleToWindow();
}
function creditsState() {
  g.scaleToWindow();
  credits.y -= 2;
}
function tutorialState() {
  g.scaleToWindow();
}
function switchCharacterState() {
  g.scaleToWindow();
}
function play() {
  g.scaleToWindow();

  //add x and y velocities to the animal control object
  animalCont1.aCObject.x += animalCont1.aCObject.vx;
  animalCont1.aCObject.y += animalCont1.aCObject.vy;

  if (b.hit(floor, player.sprite, true)) {
    player.sprite.vy = 0;
    floor.y = 700;
  }

  //call functions for player and ai logic
  jump();
  animalCont1.aiMovement();
  tinkPoint.update();
}

// Hide all stage elements
function hideAll() {
  for (var i = 0; i < g.stage.children.length; i++) {
    g.stage.getChildAt(i).visible = false;
  }
}
