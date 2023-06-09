// source for raycasting code: (Wael Yasmina) https://youtu.be/oQbfy8QP8Lc
//source for click event listener (Wael Yasmina)

import * as THREE from 'three'
import { MeshDepthMaterial } from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import { VRButton } from 'three/addons/webxr/VRButton.js'
import { XRControllerModelFactory } from 'three/addons/webxr/XRControllerModelFactory.js'
// Canvas
const canvas = document.querySelector('canvas.webgl') //create canvas using the webgl class specified in index.html

let controller1, controller2
let cgrip1, cgrip2
// Scene
const scene = new THREE.Scene()
const loader = new THREE.TextureLoader()
// Object
    let geometry = new THREE.PlaneGeometry(100, 100)
    var texture = loader.load('textures/tile.png', function ( texture ) {

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
    const  material2 = new THREE.MeshBasicMaterial({map:loader.load('textures/tree2.png'), transparent: true}) //creates an invisible 2d plane 


    const geometry3 = new THREE.PlaneGeometry(40, 40)
    const  material3 = new THREE.MeshBasicMaterial({map:loader.load('textures/sun.png'), transparent: true}) //creates an invisible 2d plane 
    const sun = new THREE.Mesh(geometry3, material3)
    sun.position.y = 100
    sun.rotation.x -= Math.PI/2
    sun.material.side = THREE.DoubleSide
    scene.add(sun)

    const geometry4 = new THREE.PlaneGeometry(5, 5)
    const  material4 = new THREE.MeshBasicMaterial({map:loader.load('textures/cloud.png'), transparent: true}) //creates an invisible 2d plane 

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

controller1 = renderer.xr.getController(0)
controller2 = renderer.xr.getController(1)

scene.add(controller1)
scene.add(controller2)

const cmodfac = new XRControllerModelFactory()

cgrip1 = renderer.xr.getControllerGrip(0)
cgrip1.add(cmodfac.createControllerModel(cgrip1))
scene.add(cgrip1)


cgrip2 = renderer.xr.getControllerGrip(1)
cgrip2.add(cmodfac.createControllerModel(cgrip2))
scene.add(cgrip2)
const geom = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, - 1 ) ] );

const geom2 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, -0.06), new THREE.Vector3( 0, 0, -0.06)]);
const geom3 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( -0.07, 0, -0.02), new THREE.Vector3(-0.07, 0, -0.02)]);
const geom4 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(-0.07, 0, 0.03), new THREE.Vector3(-0.07, 0, 0.03)]);
const geom5 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(0.05, 0, -0.04), new THREE.Vector3(0.05, 0, -0.04)]);
const geom6 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(0.07, 0, 0.01), new THREE.Vector3(0.07, 0, 0.01)]);
const geom7 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(0.05, 0, 0.06), new THREE.Vector3(0.05, 0, 0.06)]);


let line = new THREE.LineSegments( geom );
line.material.color = new THREE.Color('red')
line.name = 'line';
line.scale.z = 5;

let line2 = new THREE.Line( geom2 );
line2.material.color = new THREE.Color('white')
line2.name = 'line2';

let line3 = new THREE.Line( geom3 );
line3.material.color = new THREE.Color('white')
line3.name = 'line3';

let line4 = new THREE.Line( geom4 );
line4.material.color = new THREE.Color('white')
line4.name = 'line4';

let line5 = new THREE.Line( geom5 );
line5.material.color = new THREE.Color('white')
line5.name = 'line5';

let line6 = new THREE.Line( geom6 );
line6.material.color = new THREE.Color('white')
line6.name = 'line6';

let line7 = new THREE.Line( geom7 );
line7.material.color = new THREE.Color('white')
line7.name = 'line7';

const color = 0xFFFFFF;
const intensity = 5;
const light = new THREE.AmbientLight(color, intensity);
controller1.add(light.clone());
controller2.add(light.clone());

// controller1.add( line.clone() );
controller1.add( line2.clone() );
controller1.add( line3.clone() );
controller1.add( line4.clone() );
controller1.add( line5.clone() );
controller1.add( line6.clone() );
controller1.add( line7.clone() );

// controller2.add( line.clone() );
controller2.add( line2.clone() );


let ge = new THREE.PlaneGeometry(0.03, 0.03); 
let ma = new THREE.MeshBasicMaterial( { color: 'white' } ); 
let rtrig = new THREE.Mesh( ge, ma ); 
let rsq = new THREE.Mesh( ge, ma ); 
let sp3 = new THREE.Mesh( ge, ma ); 
let sp4 = new THREE.Mesh( ge, ma ); 
let sp5 = new THREE.Mesh( ge, ma ); 
let sp6 = new THREE.Mesh( ge, ma ); 


let ltrig = new THREE.Mesh( ge, ma ); 
let lsq = new THREE.Mesh( ge, ma ); 
let sp9 = new THREE.Mesh( ge, ma ); 
let sp10 = new THREE.Mesh( ge, ma ); 
let sp11 = new THREE.Mesh( ge, ma ); 
let sp12 = new THREE.Mesh( ge, ma ); 


rtrig.position.set(0, 0, -0.06)
rtrig.rotation.x -= Math.PI/2

rsq.position.set(0.07, 0, -0.02)
rsq.rotation.x -= Math.PI/2

sp3.position.set(0.07, 0, 0.03)
sp3.rotation.x -= Math.PI/2

sp4.position.set(-0.05, 0, -0.04)
sp4.rotation.x -= Math.PI/2

sp5.position.set(-0.07, 0, 0.01)
sp5.rotation.x -= Math.PI/2

sp6.position.set(-0.05, 0, 0.06)
sp6.rotation.x -= Math.PI/2



ltrig.position.set(0, 0, -0.06)
ltrig.rotation.x -= Math.PI/2

lsq.position.set(-0.07, 0, -0.02)
lsq.rotation.x -= Math.PI/2

sp9.position.set(-0.07, 0, 0.03)
sp9.rotation.x -= Math.PI/2

sp10.position.set(0.05, 0, -0.04)
sp10.rotation.x -= Math.PI/2

sp11.position.set(0.07, 0, 0.01)
sp11.rotation.x -= Math.PI/2

sp12.position.set(0.05, 0, 0.06)
sp12.rotation.x -= Math.PI/2


controller2.add(sp3.clone())
controller2.add(sp4.clone())
controller2.add(sp5.clone())
controller2.add(sp6.clone())


controller1.add(ltrig.clone())
controller1.add(lsq.clone())
controller1.add(sp9.clone())
controller1.add(sp10.clone())
controller1.add(sp11.clone())
controller1.add(sp12.clone())

controller2.addEventListener( 'connected', ( event )=> {
    controller2.gamepad = event.data.gamepad
});

let c2_prims = [rtrig, rsq, rsq, rsq, rsq, rsq, rsq]

function line_appear(){
    if(controller2.gamepad){
        for(let i = 0; i< controller2.gamepad.buttons.length; i++){
            if(controller2.gamepad.buttons[i].pressed){
                button_start(i)
            }
            // if(controller2.gamepad.buttons[0].pressed){
            //     controller2.add(rtrig)
            //     console.log("a")
            //     held = true
            // } 
            // if(controller2.gamepad.buttons[1].pressed){
            //     controller2.add(rsq)
            //     console.log("b")
            //     held = true
            // } 
            // if(controller2.gamepad.buttons[2].pressed){
            //     controller2.add(rsq)
            //     console.log("c")
            //     held = true
            // } 
            // if(controller2.gamepad.buttons[3].pressed){
            //     controller2.add(rsq)
            //     console.log("d")
            //     held = true
            // } 
            // if(controller2.gamepad.buttons[4].pressed){
            //     controller2.add(rsq)
            //     console.log("e")
            //     held = true
            // } 
            // if(held){
            //     return
            // }
        }

    }
}

function line_disappear(){
    if(controller2.gamepad){
        for(let i = 0; i< controller2.gamepad.buttons.length; i++){
            if(!controller2.gamepad.buttons[i].pressed){
                button_end(i)
            }
            // if(controller2.gamepad.buttons[0].pressed){
            //     controller2.add(rtrig)
            //     console.log("a")
            //     held = true
            // } 
            // if(controller2.gamepad.buttons[1].pressed){
            //     controller2.add(rsq)
            //     console.log("b")
            //     held = true
            // } 
            // if(controller2.gamepad.buttons[2].pressed){
            //     controller2.add(rsq)
            //     console.log("c")
            //     held = true
            // } 
            // if(controller2.gamepad.buttons[3].pressed){
            //     controller2.add(rsq)
            //     console.log("d")
            //     held = true
            // } 
            // if(controller2.gamepad.buttons[4].pressed){
            //     controller2.add(rsq)
            //     console.log("e")
            //     held = true
            // } 
            // if(held){
            //     return
            // }
        }

    }
}

function button_start(i){
    controller2.add(c2_prims[i])
}
 
function button_end(i){
    controller2.remove(c2_prims[i])
}

document.body.appendChild( VRButton.createButton( renderer ) );
renderer.xr.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


function render() {
    line_disappear()
    line_appear()
    controls.update()
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

renderer.setAnimationLoop(render)


const tick = () =>
{

}

tick()
