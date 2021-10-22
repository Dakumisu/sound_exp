import './main.scss'

import * as THREE from 'three' // https://threejs.org/docs/
import { TweenLite, TweenMax, gsap } from 'gsap' // https://greensock.com/docs/
import howlerjs from 'howler' // https://github.com/goldfire/howler.js#documentation

// import SoundCloudAPI from '../static/js/SoundCloudAPI' // Soundcloud API

import { Store } from '../static/js/Store' // Store
import Scene from '../static/js/Scene' // Création de la scène + renderer + camera
import LoadAlphabet from '../static/js/LoadAlphabet' // Chargement de l'alphabet
import Letter from '../static/js/Letter' // Ajout d'une lettre à la scène
import Mouse from '../static/js/Mouse' // Obtenir la position de la souris dans tous les environnement
import Torus from '../static/js/Torus' // Torus
import SoundController from '../static/js/SoundController' // Sound Controller
import Control from '../static/js/Control' // Orbitcontrol (pour le debbugage)
import Settings from '../static/js/Settings.js' // Dat.gui (toujours pour le debbugage)

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Mobile
} else {
    // Desktop
}

// const settings = new Settings()

// new SoundCloudAPI()

const scene = new Scene({
    canvas: document.querySelector('.webgl'),
})

const mouse = new Mouse({
    scene: scene
})

const torus = new Torus({
    scene: scene,
    mouse: mouse.mouseScene
})

const soundController = new SoundController({
    camera: scene.camera
})

new LoadAlphabet({
    scene: scene.scene
})

// const control = new Control({
//     camera: scene.camera,
//     renderer: scene.renderer
// })


document.querySelector('.webgl').addEventListener('touchstart', e => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 25))
    Store.alphabetDatas.alphabetArray.push(new Letter({
        scene: scene,
        mesh: Store.alphabet[letters].mesh
    }))
})

document.addEventListener('keydown', e => {
    const key = e.key.toLowerCase()
    const regex = /[a-zA-Z]/
    const checkKey =  e.getModifierState(key)

    if (key.match(regex)) {
        if (key.match(regex).input.length && key.match(regex).input.length == 1) {
            if (!Store.alphabet[key].state) {
                if (Store.alphabetDatas.lettersCount < Store.alphabetDatas.lettersInputLimit) {
                    Store.alphabet[key].state = true
                    Store.alphabet[key].instance = new Letter({
                        id: Store.alphabetDatas.letterIndex,
                        scene: scene,
                        mesh: Store.alphabet[key].mesh,
                        mouse: mouse.mouseScene
                    })

                    console.log(Store.alphabet[key].instance);

                    soundController.addSample(Store.alphabet[key])

                    for (let i = 0; i < Store.alphabetDatas.alphabetArray.length; i++) {
                        console.log(Store.alphabetDatas.alphabetArray[i]);
                        if (Store.alphabetDatas.alphabetArray[i] === null) {
                            Store.alphabetDatas.alphabetArray[i] = Store.alphabet[key].instance
                            // Store.alphabetDatas.alphabetArray[i].find(letterName => letterName == )
                            Store.alphabetDatas.letterIndex ++
                            Store.alphabetDatas.lettersCount ++
                            console.log('here app');
                            return
                        }
                        console.log(Store.alphabetDatas.alphabetArray[i]);
                    }
                }
            } else {
                Store.alphabet[key].state = false
                Store.alphabet[key].instance.remove()
                console.log(Store.alphabet[key].instance);
            }
        }
        console.log(Store.alphabetDatas.alphabetArray.length);
    }
})

let renderPostProc = true
let expand = false
document.querySelector('.toggle').addEventListener('click', () => renderPostProc ? renderPostProc = false: renderPostProc = true )
document.querySelector('.expand').addEventListener('click', () => {
    if (expand) {
        expand = false
        torus.expand(expand)
        
        gsap.to(Store.params.pp.aip, 1, { damp: .75, esae: "Power.easeInOut" })
    } else {
        gsap.to(Store.params.pp.aip, 1, { damp: .825, esae: "Power.easeInOut" })
        expand = true
        torus.expand(expand)
    }
})

document.querySelector('.webgl').addEventListener('mousedown', e => {
    Store.mouseDown = true
    if (e.which == 1) {
        gsap.to(scene.camera, 1, { fov: 45, ease: "Power3.easeInOut" })
        gsap.to(scene.camera.position, 1, { z: 6, ease: "Power3.easeInOut" })
    } else if (e.which == 3) {
        gsap.to(scene.camera, 1, { fov: 145, ease: "Power3.easeInOut" })
        gsap.to(scene.camera.position, 1, { z: 0.1, ease: "Power3.easeInOut" })
    }
});

document.querySelector('.webgl').addEventListener('contextmenu', e => {
    e.stopPropagation()
    e.preventDefault ()
    e.cancelBubble = true;
});

document.querySelector('.webgl').addEventListener('mouseup', e => {
    Store.mouseDown = false
    gsap.to(scene.camera, 1, { fov: 75, ease: "Power3.easeInOut" })
    gsap.to(scene.camera.position, 1, { z: 3, ease: "Power3.easeInOut" })
});

// setTimeout(() => {
//     const parole = new SpeechSynthesisUtterance()
//     const texte = "sheeeeeeeeeesh"
//     parole.text = texte
//     parole.volume = 1
//     parole.rate = .8
//     parole.lang = 'en-US'
//     speechSynthesis.speak(parole)
// }, 2000);

function raf() {
    const deltaTime = scene.clock.getDelta()
    const elapsedTime = scene.clock.getElapsedTime()
    const lowestElapsedTime = elapsedTime / 11

    torus.update(elapsedTime, deltaTime)
    // if (Store.params.experienceStarted) {
        soundController.update()
        scene.update()
    
        scene.camera.updateProjectionMatrix();

        // console.log(Store.alphabetDatas.lettersPositions.x);

        // if (Store.alphabetDatas.alphabetArray.length) {
        //     Store.alphabetDatas.alphabetArray.forEach(letter => {
        //         if (letter !== null) {
        //             letter.update(elapsedTime)
        //         }
        //     })
        // }
    // }

    renderPostProc ? scene.composer.render(): scene.renderer.render(scene.scene, scene.camera)
    
    // Update controls
    // control.controls.update()
    window.requestAnimationFrame(raf)
}

raf()