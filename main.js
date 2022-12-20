import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const orbit = new OrbitControls(camera, renderer.domElement)

camera.position.set(35, -2, 35)
orbit.update()

//LIGHT
const ambientLight = new THREE.AmbientLightProbe(0x585858)
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0,0,0)
pointLight.castShadow = true
// const pointLight2 = new THREE.PointLight(0xffffff)
// pointLight2.position.set(30,0,-30)
// pointLight2.castShadow = true
scene.add(ambientLight, pointLight)

//sun
const starGeometry = new THREE.SphereGeometry( 2, 32, 16 );
const starMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const star = new THREE.Mesh( starGeometry, starMaterial );
scene.add( star );

//dyson Sphere1
const geometry =  new THREE.TorusGeometry(15, 0.5, 16, 100)
const material =  new THREE.MeshStandardMaterial( {color: 0xFFA500} )
const hexagon = new THREE.TextureLoader().load('images/hexagon.png')
const material2 =  new THREE.MeshStandardMaterial( {map: hexagon} )

const torus11 = new THREE.Mesh(geometry, material)
const torus12 = new THREE.Mesh(geometry, material)
const torus13 = new THREE.Mesh(geometry, material)
const torus14 = new THREE.Mesh(geometry, material)

torus12.rotation.x = -0.5 * Math.PI
torus13.rotation.x = -0.25 * Math.PI
torus14.rotation.x = -0.75 * Math.PI

torus11.receiveShadow = true
torus12.receiveShadow = true
torus13.receiveShadow = true
torus14.receiveShadow = true

//Secondary
const torus15 = new THREE.Mesh(geometry, material)
const torus16 = new THREE.Mesh(geometry, material)
const torus17 = new THREE.Mesh(geometry, material)

torus15.rotation.y = -0.5 * Math.PI
torus16.rotation.y = -0.25 * Math.PI
torus17.rotation.y = -0.75 * Math.PI

torus15.receiveShadow = true
torus16.receiveShadow = true
torus17.receiveShadow = true

//Tertiary
const torus18 = new THREE.Mesh(geometry, material)
const torus19 = new THREE.Mesh(geometry, material)

torus18.rotation.x = -0.5 * Math.PI
torus18.rotation.y = -0.25 * Math.PI
torus19.rotation.x = -0.5 * Math.PI
torus19.rotation.y = 0.25 * Math.PI

torus18.receiveShadow = true
torus19.receiveShadow = true

//JS planet
const js = new THREE.TextureLoader().load('images/js.jpg')
const jsGeo = new THREE.SphereGeometry(1,50,50)
const jsMat = new THREE.MeshStandardMaterial({map: js})
const jsPlanet = new THREE.Mesh(jsGeo, jsMat)
jsPlanet.receiveShadow = true
jsPlanet.position.set(20,2,20)

//nodeJS planet
const nodejs = new THREE.TextureLoader().load('images/nodejs.jpg')
const nodejsGeo = new THREE.SphereGeometry(1,50,50)
const nodejsMat = new THREE.MeshStandardMaterial({map: nodejs})
const nodejsPlanet = new THREE.Mesh(nodejsGeo, nodejsMat)
nodejsPlanet.receiveShadow = true
nodejsPlanet.position.set(22,4,22)

//GROUP Sphere1
const sphere1Group = new THREE.Group();

sphere1Group.add(torus11, torus12, torus13, torus14, torus15, torus16, torus17, torus18, torus19, jsPlanet, nodejsPlanet)
sphere1Group.rotation.x = 0.1*Math.PI
scene.add(sphere1Group)

//Dyson Sphere2
const geometry2 =  new THREE.TorusGeometry(10, 0.5, 16, 100)
const torus21 = new THREE.Mesh(geometry2, material)
const torus22 = new THREE.Mesh(geometry2, material)
const torus23 = new THREE.Mesh(geometry2, material)
const torus24 = new THREE.Mesh(geometry2, material)

torus21.rotation.x = -0.5 * Math.PI
torus22.rotation.x = -0.25 * Math.PI
torus23.rotation.x = -0.75 * Math.PI

torus21.castShadow = true
torus22.castShadow = true
torus23.castShadow = true
torus24.castShadow = true

//Dyson Sphere2 Secondary
const torus25 = new THREE.Mesh(geometry2, material)
const torus26 = new THREE.Mesh(geometry2, material)
const torus27 = new THREE.Mesh(geometry2, material)

torus25.rotation.y = -0.5 * Math.PI
torus26.rotation.y = -0.25 * Math.PI
torus27.rotation.y = -0.75 * Math.PI

torus25.castShadow = true
torus26.castShadow = true
torus27.castShadow = true

//Tertiary Sphere2
const torus28 = new THREE.Mesh(geometry2, material)
const torus29 = new THREE.Mesh(geometry2, material)

torus28.rotation.x = -0.5 * Math.PI
torus28.rotation.y = -0.25 * Math.PI
torus29.rotation.x = -0.5 * Math.PI
torus29.rotation.y = 0.25 * Math.PI

torus28.castShadow = true
torus29.castShadow = true

//CSS planet
const css = new THREE.TextureLoader().load('images/css.png')
const cssGeo = new THREE.SphereGeometry(1,50,50)
const cssMat = new THREE.MeshStandardMaterial({map: css})
const cssPlanet = new THREE.Mesh(cssGeo, cssMat)
cssPlanet.receiveShadow = true
cssPlanet.position.set(24,-6,24)

//mongo planet
const mongo = new THREE.TextureLoader().load('images/MongoDB.jpg')
const mongoGeo = new THREE.SphereGeometry(1,50,50)
const mongoMat = new THREE.MeshStandardMaterial({map: mongo})
const mongoPlanet = new THREE.Mesh(mongoGeo, mongoMat)
mongoPlanet.receiveShadow = true
mongoPlanet.position.set(26,-4,26)

//GROUP Sphere2
const sphere2Group = new THREE.Group();

sphere2Group.add(torus21, torus22, torus23, torus24, torus25, torus26, torus27, torus28, torus29, cssPlanet, mongoPlanet)
sphere2Group.rotation.x = -0.1*Math.PI

scene.add(sphere2Group)

//Planet system
//Star2
const star2Geometry = new THREE.SphereGeometry( 0.5, 32, 16 );
const star2Material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const star2 = new THREE.Mesh( star2Geometry, star2Material );

//planets
//HTML planet
const html = new THREE.TextureLoader().load('images/html.png')
const htmlGeo = new THREE.SphereGeometry(1,50,50)
const htmlMat = new THREE.MeshStandardMaterial({map: html})
const htmlPlanet = new THREE.Mesh(htmlGeo, htmlMat)
htmlPlanet.receiveShadow = true
htmlPlanet.position.set(23,2,23)

//Group
const planetSystem = new THREE.Group()
planetSystem.add(star2, htmlPlanet)
scene.add(planetSystem)

//Star3
const star3Geometry = new THREE.SphereGeometry( 0.5, 32, 16 );
const star3Material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const star3 = new THREE.Mesh( star3Geometry, star3Material );

//planets
//react planet
const react = new THREE.TextureLoader().load('images/react.png')
const reactGeo = new THREE.SphereGeometry(1,50,50)
const reactMat = new THREE.MeshStandardMaterial({map: react})
const reactPlanet = new THREE.Mesh(reactGeo, reactMat)
reactPlanet.receiveShadow = true
reactPlanet.position.set(21,-2,21)

//Group
const planetSystem2 = new THREE.Group()
planetSystem2.add(star3, reactPlanet)
scene.add(planetSystem2)

//Background
const space = new THREE.TextureLoader().load('images/stars.jpg')
scene.background = space

function animate() {
  requestAnimationFrame(animate);

  sphere1Group.rotation.y += 0.005
  sphere2Group.rotation.y -= 0.006
  planetSystem.rotation.y -= 0.007
  planetSystem2.rotation.y += 0.008

  htmlPlanet.rotation.y += 0.05
  cssPlanet.rotation.y -= 0.05
  jsPlanet.rotation.y += 0.05
  nodejsPlanet.rotation.y += 0.05
  reactPlanet.rotation.y -= 0.05
  mongoPlanet.rotation.y += 0.05

  renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', function(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight)
})