// 常量列表

var Constant = {
    CANDY_WIDTH: 64,        // 糖果图片宽高常量
    CANDY_TYPE_COUNT: 5,    // 糖果颜色
    MAP_SIZE: 10,            // 糖果矩阵宽高常量
    FALL_ACCELERATION: 30,
    levels: [
        { limitStep: 30, targetScore: 500 },      //limitStep:限制步数, targetScore:目标分数
        { limitStep: 25, targetScore: 1000 },
        { limitStep: 20, targetScore: 2000 },
        { limitStep: 20, targetScore: 3000 },
        { limitStep: 15, targetScore: 4000 },
        { limitStep: 10, targetScore: 5000 }
    ]
}