const ScriptConnections_runState = true;

export default class ScriptConnection{
    constructor(){
        this.Connections = {

        };
        this.Connect = ScriptConnection.Connect;
        this.Fire = ScriptConnection.Fire;

        return this;
    };

    static Connect(func){
        this.Connections[this.Connections.length + 1] = func;
    }

    static Fire(...args){
        for (let [i, _func] of Object.entries(this.Connections)){
            _func(...args);
        }
    }
}