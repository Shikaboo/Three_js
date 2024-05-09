import { useRef, useEffect } from "react";
import * as THREE from "three";

const threejs = () => {
  const ref = useRef()
  useEffect(()=>{
  const width = window.innerWidth, height = window.innerHeight;

  // init

  const camera = new THREE.PerspectiveCamera(
    75, // 시야각, fov
    width / height, //가로 / 세로, aspect / ratio (종횡비)
    0.01, // 최소 거리 값, near
    1000 // 최대 거리 값, far
  );
  // 카메라 위치

  camera.position.z = 1;

  const scene = new THREE.Scene();

  //   const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2); // 뼈대
  //   const material = new THREE.MeshNormalMaterial(); // 재질
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshBasicMaterial({ color: '#ff00ff' });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // const mesh = new THREE.Mesh(geometry, material); // mesh는 괄호 안의 두 개를 담아주는 변수
  // scene.add(mesh);

  const renderer = new THREE.WebGLRenderer({ antialias: true }); // 화면에 출력하는 변수
  renderer.setSize(width, height);
  renderer.setAnimationLoop(animation); // 애니메이션을 계속 사용하겠다
  // document.body.appendChild(renderer.domElement); //body에서 자식으로 출력
  const cuRef = ref.current;
  cuRef.appendChild(renderer.domElement);

  // animation

  function animation() {
    // requestAnimationFrame(animation);

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
  }
  // animation()

  window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
  })
  })
  return(
    <div ref={ref}></div>
  )
};

export default threejs;
