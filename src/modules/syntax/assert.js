export default function(condition, output){
    if (!condition){
        console.error(output)
    }

    return condition
}

import PhysicsService from "../services/physicsservice"

PhysicsService.PhysicsStepped.Connect()