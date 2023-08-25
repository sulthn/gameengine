import ScriptConnection from "../classes/scriptconnection.js"

export default class PhysicsService{
    constructor(){
        const PhysicsUpdate = new ScriptConnection()

        PhysicsUpdate.Connect(function(){ // Physics step (60 FPS)

        })

        return PhysicsUpdate
    }
}