var creditsGroup, credits;
function initCredits() {
  creditsGroup = new PIXI.Container();
  buttonBack = createButton(WIDTH * 0.15, HEIGHT * .85, mainMenu, creditsGroup, 'back');
  credits = new PIXI.Text('test1\n\n\ntest2\n\n\ntest3\n\n\ntest4');
  credits.anchor.x = 0.5;
  credits.anchor.y = 0.5;
  credits.y = HEIGHT + 50;
  credits.x = WIDTH / 2;
  creditsGroup.addChild(credits);
  creditsGroup.addChild(buttonBack);
  g.stage.addChild(creditsGroup);
}
