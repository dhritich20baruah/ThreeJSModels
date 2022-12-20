//PLANE
const planeGeometry = new THREE.PlaneGeometry(30,30)
const planeMaterial = new THREE.MeshStandardMaterial({color: 0x00ff00})
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane)
//To match the grid with the plane
plane.rotation.x = -0.5 * Math.PI
plane.receiveShadow = true

//GRID HELPER FOR PLANE
const gridHelper = new THREE.GridHelper(30)
scene.add(gridHelper)

//box
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({ map: brickWall })
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0,0.5,0);
cube.castShadow = true;
cube.receiveShadow = true;
// scene.add(cube);

//chimney
const chimneyGeo = new THREE.BoxGeometry(1, 20, 1);
const chimneyMaterial =[
  new THREE.MeshBasicMaterial({ map: brickWall }),
  new THREE.MeshBasicMaterial({ map: brickWall }),
  new THREE.MeshBasicMaterial({ map: brickWall }),
  new THREE.MeshBasicMaterial({ map: brickWall }),
  new THREE.MeshBasicMaterial({ map: brickWall }),
  new THREE.MeshBasicMaterial({ map: brickWall })
] 
const chimney = new THREE.Mesh(chimneyGeo, chimneyMaterial);
chimney.position.set(3,0.5,0);
chimney.castShadow = true;
// scene.add(chimney);

//GROUP
const houseGroup = new THREE.Group();

houseGroup.add(cube, chimney)

scene.add(houseGroup)
//Background color