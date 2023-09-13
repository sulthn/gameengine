import assert from "../syntax/assert.js";
import ScriptConnection from "./scriptconnection.js"

const instance_properties = {
    Position: "Vector2", // Vector2
    Name: "string", // string
    Size: "Vector2", // Vector2
    Mass: "Number", // Number
    Orientation: "Number", // Number
    Restitution: "Number",
    Acceleration: "Vector2",
    Friction: "Number",
};

var Instances = {

};

export default class Instance{
    constructor(properties){
        const _index = Instances.length + 1
        let _instance = {
            Properties: properties,
            Destroy: new ScriptConnection(),
            ChangeProperty: Instance.ChangeProperty,
        };

        _instance.Destroy.Connect(function(){
            Instances[_index] = null;
        });

        Instances[_index] = _instance;

        this.Index = _index;

        return _instance;
    }

    get GetInstances(){
        return Instances
    };

    static ChangeProperty(property, value){
        if (assert(Instances[this.Index] != null, "Instance is null")){
            if (Instances[this.Index][property] != null){
                Instances[this.Index][property] = value;
            }
        }
    }
}