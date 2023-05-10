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
// Object
    let geometry = new THREE.PlaneGeometry(100, 100)
    var texture = loader.load( 'assets/tile.png', function ( texture ) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set( 50, 50);
    
    } );
    let  material = new THREE.MeshBasicMaterial({map:texture}) //creates an invisible 2d plane 
    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = 0
    mesh.position.z = 0
    mesh.rotation.x -= Math.PI/2
    scene.add(mesh)

    const geometry2 = new THREE.PlaneGeometry(7, 7)
    const  material2 = new THREE.MeshBasicMaterial({map:loader.load('assets/tree2.png'), transparent: true}) //creates an invisible 2d plane 


    const geometry3 = new THREE.PlaneGeometry(40, 40)
    const  material3 = new THREE.MeshBasicMaterial({map:loader.load('assets/sun.png'), transparent: true}) //creates an invisible 2d plane 
    const sun = new THREE.Mesh(geometry3, material3)
    sun.position.y = 100
    sun.rotation.x -= Math.PI/2
    sun.material.side = THREE.DoubleSide
    scene.add(sun)

    const geometry4 = new THREE.PlaneGeometry(5, 5)
    const  material4 = new THREE.MeshBasicMaterial({map:loader.load('assets/cloud.png'), transparent: true}) //creates an invisible 2d plane 

for(let i = 0; i<5; i++){
        let cloud = new THREE.Mesh(geometry4, material4)
        cloud.position.y = 60
        cloud.position.x = Math.floor(Math.random() * 50)+ (-50); 
        cloud.position.z = Math.floor(Math.random() * 50) + (-50); 
        cloud.rotation.x -= Math.PI/2
        cloud.rotation.z += Math.PI

        cloud.material.side = THREE.DoubleSide
        scene.add(cloud)
}

for(let i = 0; i<5; i++){
    let mesh2 = new THREE.Mesh(geometry2, material2)
    mesh2.position.y = 3
    mesh2.position.x = Math.floor(Math.random() * 50)+ (-50); 
    mesh2.position.z = Math.floor(Math.random() * 50) + (-50); 
    mesh2.material.side = THREE.DoubleSide
    scene.add(mesh2)
}

for(let i = 0; i<5; i++){
    let mesh2 = new THREE.Mesh(geometry2, material2)
    mesh2.position.y = 3
    mesh2.position.x = Math.floor(Math.random() * 50); 
    mesh2.position.z = Math.floor(Math.random() * 50) + (-50); 
    mesh2.material.side = THREE.DoubleSide
    scene.add(mesh2)
}

for(let i = 0; i<5; i++){
    let mesh2 = new THREE.Mesh(geometry2, material2)
    mesh2.position.y = 3
    mesh2.position.x = Math.floor(Math.random() * 50)+ (-50); 
    mesh2.position.z = Math.floor(Math.random() * 50) ; 
    mesh2.material.side = THREE.DoubleSide
    scene.add(mesh2)
}

for(let i = 0; i<5; i++){
    let mesh2 = new THREE.Mesh(geometry2, material2)
    mesh2.position.y = 3
    mesh2.position.x = Math.floor(Math.random() * 50); 
    mesh2.position.z = Math.floor(Math.random() * 50) ; 
    mesh2.material.side = THREE.DoubleSide
    scene.add(mesh2)
}

scene.background = new THREE.Color(0xa8def0);
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
