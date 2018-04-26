// 继承sprite, 用于加载糖果图片

var Candy = cc.Sprite.extend({

    type: 0,    //类型(颜色: 0-4五种糖果颜色)
    column: 0,  //列
    row: 0,     //行

    ctor: function (type, column, row) {
        this._super('res/' + (type + 1) + '.png');
        this.init(type, column, row);
    },
    init: function(type, column, row) {
        this.type = type;
        this.column = column;
        this.row = row;
    }
});
Candy.createRandomType = function (column, row) {
    return new Candy(parseInt(Math.random() * Constant.CANDY_TYPE_COUNT), column, row);
}