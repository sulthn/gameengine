import ScriptConnection from "../classes/scriptconnection.js"

const PhysicsUpdate = new ScriptConnection()
var Connections = {

}

PhysicsUpdate.Connect(function(delta){ // Physics step (60 FPS)
    for (let [i, _func] of Object.entries(Connections)){
        _func.call(delta)
    }
})

export default class PhysicsService{
    constructor(){
        return {
            PhysicsStepped: PhysicsUpdate,
        }
    }

    static Connect(func){
        Connections[Connections.length + 1] = new func
    }
}