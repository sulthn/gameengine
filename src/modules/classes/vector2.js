function Lerp(a, b, t){
    return a + (b - a) * t
}

export default class Vector2{
    constructor(x, y){
        this.Value = {x, y}

        return this.Value
    };

    static Lerp(b, t){
        return {x: Lerp(this.Value.x, b, t), y: Lerp(this.Value.y, b, t)}
    }
}