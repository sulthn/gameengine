import ScriptConnection from "../classes/scriptconnection.js";
import PhysicsService from "./physicsservice.js";

const _PhysicsService = new PhysicsService()

let FrameUpdate_ScriptConnection = null;
const time_miliseconds = 1/60

window.onload = function() {            
    function frameStep() { // frame-stepping
        if (FrameUpdate_ScriptConnection != null){ 
            FrameUpdate_ScriptConnection.Fire() // fire frame-update on RunService
        }
    }
    setInterval(frameStep, time_miliseconds);
}

export default class RunService{
    constructor(){
        this.FrameUpdate = new ScriptConnection()

        FrameUpdate_ScriptConnection = this.FrameUpdate

        this.FrameUpdate.Connect(function(){
            _PhysicsService.Fire() // fire physics-update on PhysicsServce
        })

        return this
    }
}