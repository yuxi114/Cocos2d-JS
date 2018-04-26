// 游戏UI

let GameUI = cc.Layer.extend({

    levelText: null,    //当前关卡
    scoreText: null,    //当前分数
    stepText: null,     //剩余步数
    gameLayer: null,    //数据来源

    ctor: function (gameLayer) {
        this._super();
        this.gameLayer = gameLayer;
        this._initInfoPanel();
        this.scheduleUpdate();
    },
    
    // 初始化面板
    _initInfoPanel: function () {
        let size = cc.director.getWinSize();

        //level
        let levelLabel = new cc.LabelTTF('Level', 'arial', 36);
        levelLabel.x = 100;
        levelLabel.y = size.height - 50;
        levelLabel.setColor(cc.color(0, 0, 0));
        this.addChild(levelLabel);

        let levelText = new cc.LabelTTF('1', 'arial', 36);
        levelText.x = 100;
        levelText.y = levelLabel.y - 40;
        levelText.setColor(cc.color(0, 0, 0));
        this.addChild(levelText);
        this.levelText = levelText;

        //score
        let scoreLabel = new cc.LabelTTF('Score', 'arial', 36);
        scoreLabel.x = 370;
        scoreLabel.y = levelLabel.y;
        scoreLabel.setColor(cc.color(0, 0, 0));
        this.addChild(scoreLabel);

        let scoreText = new cc.LabelTTF('1', 'arial', 36);
        scoreText.x = 370;
        scoreText.y = levelLabel.y;
        scoreText.setColor(cc.color(0, 0, 0));
        this.addChild(scoreText);
        this.scoreText = scoreText;

        //step
        let stepLabel = new cc.LabelTTF('Step', 'arial', 36);
        stepLabel.x = 620;
        stepLabel.y = levelLabel.y;
        stepLabel.setColor(cc.color(0, 0, 0));
        this.addChild(stepLabel);

        let stepText = new cc.LabelTTF('1', 'arial', 36);
        stepText.x = 620;
        stepText.y = levelLabel.y;
        stepText.setColor(cc.color(0, 0, 0));
        this.addChild(stepText);
        this.stepText = stepText;
    },
    // 闯关成功
    showSuccess: function () {
        let bg = new cc.LayerColor(cc.color(255, 255, 255), 500, 500);
        this.addChild(bg, 1);
        let size = cc.director.getWinSize();
        bg.x = (size.width - bg.width)/2;
        bg.y = (size.height - bg.height)/2;
        let stepText = new cc.LabelTTF('恭喜完成第' + (this.gameLayer.level + 1) + '关， \n剩余步数30倍奖励', 'arial', 50);
        stepText.setColor(cc.color(0, 0, 0));
        stepText.x = 250;
        stepText.y = 250;
        bg.addChild(stepText);
    },
    // 闯关失败
    showFail: function () {
        let bg = new cc.LayerColor(cc.color(255, 255, 255), 500, 500);
        this.addChild(bg, 1);
        let size = cc.director.getWinSize();
        bg.x = (size.width - bg.width)/2;
        bg.y = (size.height - bg.height)/2;
        let stepText = new cc.LabelTTF('失败了，\n从头来过吧', 'arial', 56);
        stepText.setColor(cc.color(0, 0, 0));
        stepText.x = 250;
        stepText.y = 250;
        bg.addChild(stepText);
    },
    // 每帧更新
    update: function () {
        this.levelText.setString('' + (this.gameLayer.level + 1));
        this.scoreText.setString('' + this.gameLayer.score);
        this.stepText.setString('' + (this.gameLayer.limitStep - this.gameLayer.steps));
    }
});