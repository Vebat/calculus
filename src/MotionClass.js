
export class Motion {
     speedVectorModule
     angleOfSpeedVector
     VectorXModule
     VectorYModule
     time
     distance
     g=9.8
     density=1.204
     surface
     mass
     aerodynamicsRatio //changeable
     boost

     decomposingVector() {
        this.angleOfSpeedVector=this.angleOfSpeedVector*Math.PI/180
        this.VectorXModule=Math.cos(this.angleOfSpeedVector)
        this.VectorYModule=Math.sin(this.angleOfSpeedVector)
     }

     airResistance(){
          var force=(this.density*Math.pow((this.VectorXModule*this.speedVectorModule)-2*this.time,2))/2*this.surface*this.aerodynamicsRatio
          this.boost=force/this.mass

     }

     findDistance() {
          this.time=(this.VectorYModule*this.speedVectorModule/this.g)
          this.airResistance()
          this.distance=this.VectorXModule*this.speedVectorModule*this.time-(this.boost*Math.pow(this.time,2)/2)
     }

     

     constructor(speedVectorModule, angleOfSpeedVector, mass,  surface, aerodynamicsRatio) {
          this.speedVectorModule=speedVectorModule
          this.angleOfSpeedVector=angleOfSpeedVector
          this.mass=mass
          this.surface=surface
          this.aerodynamicsRatio=aerodynamicsRatio
     }
}