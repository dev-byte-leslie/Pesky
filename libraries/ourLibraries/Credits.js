var creditsGroup = new PIXI.Container();
//buttonBack = createButton($(document).width() / 2, $(document).height() / 2, mainMenu, creditsGroup, 'back');

function mainMenu() {
  activeElement = 'mainMenu';
}

var credits = new PIXI.Text('test1\n\n\ntest2\n\n\ntest3\n\n\ntest4');
credits.anchor.x = 0.5;
credits.anchor.y = 0.5;
credits.y = $(document).height() + 50;
credits.x = $(document).height() / 2;
creditsGroup.addChild(credits);
creditsGroup.addChild(buttonBack);
g.stage.addChild(creditsGroup);
