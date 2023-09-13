import ScriptConnection from "../classes/scriptconnection.js";
import PhysicsService from "./physicsservice.js";

const _PhysicsService = new PhysicsService()

let FrameUpdate_ScriptConnection = null;
var time_miliseconds = 1/60

var FrameUpdate = new ScriptConnection()

window.onload = function() {            
    function frameStep() { // frame-stepping
        if (FrameUpdate_ScriptConnection != null){ 
            _PhysicsService.PhysicsStepped.Fire() // fire physics-update on PhysicsServce
            FrameUpdate_ScriptConnection.Fire() // fire frame-update on RunService
        }
    }
    setInterval(frameStep, time_miliseconds);
}

export default class RunService{
    constructor(){
        FrameUpdate_ScriptConnection = FrameUpdate;

        return {
            RenderStepped: FrameUpdate,
        }
    }
}