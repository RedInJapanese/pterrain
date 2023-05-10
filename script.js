// source for raycasting code: (Wael Yasmina) https://youtu.be/oQbfy8QP8Lc
//source for click event listener (Wael Yasmina)

import * as THREE from 'three'
import { MeshDepthMaterial } from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import { VRButton } from 'three/addons/webxr/VRButton.js'
// Canvas
const canvas = document.querySelector('canvas.webgl') //create canvas using the webgl class specified in index.html

// Scene
const scene = new THREE.Scene()
const loader = new THREE.TextureLoader()

const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );
// Object
var meshes = []

for(let i = -50; i<50; i+=2) {

    let geometry = new THREE.PlaneGeometry(2, 2)
    let  material = new THREE.MeshBasicMaterial({map:loader.load('assets/tile.png')}) //creates an invisible 2d plane 
    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = i
    mesh.position.y = 0
    mesh.rotation.x -= Math.PI/2
    meshes.push(mesh)
    scene.add(mesh)
}


const grid = new THREE.GridHelper(100, 100) //three.js class that adds a 2d grid to a given scene
scene.add(grid)
// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100)
camera.position.x = 5
camera.position.y = 5
camera.position.z = 5
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

document.body.appendChild( VRButton.createButton( renderer ) );
renderer.xr.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setAnimationLoop( function () {
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
})
const tick = () =>
{

}

tick()
