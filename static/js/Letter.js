import * as THREE from 'three'
import gsap from 'gsap'
import { Store } from './Store' // Store

class Letter {
   constructor(opt) {
      // this.name = opt.name // nom du model
      // this.model = opt.model // lien du model (ex: '../assets/3D/model.glb')
      this.scene = opt.scene.scene
      this.mesh = opt.mesh.clone()
      this.meshMaterial = opt.mesh.material.clone()
      this.mesh.material = this.meshMaterial
      console.log(this.mesh);
      console.log(this.mesh.material);

      this.add()
   }

   add() {
      this.scene.add(this.mesh)

      const randomStartPositions = this.getRandomPositions()

      console.log(randomStartPositions);
      
      gsap.fromTo(this.mesh.position, 3, { x: randomStartPositions.x, ease: "Power3.easeOut" }, { x: (-.5 + Math.random()) * 10, ease: "Power3.easeOut" })
      gsap.fromTo(this.mesh.position, 3, { y: randomStartPositions.y, ease: "Power3.easeOut" }, { y: (-.5 + Math.random()) * 10, ease: "Power3.easeOut" })
      gsap.fromTo(this.mesh.position, 4.3  , { z: 0, ease: "Power3.easeOut" }, { z: -50, ease: "Power3.easeInOut" })
      gsap.to(this.mesh.rotation, 2, { z: (10 * Math.random()) * (Math.PI * 2), ease: "Power3.easeOut" })
      gsap.to(this.mesh.material.uniforms.uAlpha, 1, { value: 0, ease: "Power3.easeOut" , delay: 3, onComplete: () => {
         console.log('here');
         this.scene.remove(this.mesh)
      } })
   }

   getRandomPositions() {
      const randomXState = Math.random() > .5 ? 1 : -1
      const randomYState = Math.random() > .5 ? 1 : -1

      let variationPositionX, variationPositionY

      if (randomXState == 1) {
         variationPositionX = Math.random() * 2
      } else {
         variationPositionX = -Math.random() * 2
      }

      if (randomYState == 1) {
         variationPositionY = Math.random() * 2
      } else {
         variationPositionY = -Math.random() * 2
      }

      const randomStartPositions = {
         x: (randomXState * 5) + variationPositionX,
         y: (randomYState * 5) + variationPositionY
      }

      console.log(randomXState, randomYState);

      return randomStartPositions
   }

   update(time) {
      if (this.mesh) {
         this.mesh.rotation.x = (time * .3) * Math.PI
         this.mesh.rotation.y = (time * .3) * Math.PI
         this.mesh.rotation.z = (time * .3) * Math.PI
      }
   }
}

export default Letter