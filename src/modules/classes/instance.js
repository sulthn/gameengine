import ScriptConnection from "./scriptconnection.js"

const instance_properties = {
    Position: "Vector2", // Vector2
    Name: "string", // string
    Size: "Vector2", // Vector2
    Mass: "Number", // Number
};

const Instances = {

};

export default class Instance{
    constructor(properties){
        const _index = Instances.length + 1
        const _instance = {
            Properties: properties,
            Destroy: new ScriptConnection(),
        };

        console.log(_instance.Destroy)

        _instance.Destroy.Connect(function(){
            Instances[_index] = null;
        });

        Instances[_index] = _instance

        return _instance
    }
}