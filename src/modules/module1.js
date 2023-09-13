import Vector2 from "./classes/vector2.js"
import Instance from "./classes/instance.js"
import ScriptConnection from "./classes/scriptconnection.js"
import RunService from "./services/runservice.js"

// Instance & Vector2 test



let instance = new Instance({
    Name: "Cube",
    Position: new Vector2(2, 5),
    Size: new Vector2(3, 3)
})

console.log(instance);

instance.Destroy.Fire()

instance.ChangeProperty("Size", new Vector2(5, 5));



// Script Connection Test



let testConnection = new ScriptConnection()

testConnection.Connect(function(a){
    console.log(a);
})

testConnection.Fire("Test Connection");




// RunService Test

const Run = new RunService()

Run.FrameUpdate.Connect(function(){
    console.log("per frame")
})