import React, { useEffect, useRef } from "react";
import * as Three from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import StickMan from '../../3D_models/StickMan.glb'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './Video_section.css';

function VideoSection() {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new Three.Scene();
    const camera = new Three.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 5000);
    const renderer = new Three.WebGLRenderer();
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.75);
    renderer.setClearColor(0xffffff, 1);
    
    // Set up controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Add the renderer to the DOM
    mountRef.current.appendChild(renderer.domElement);
    camera.position.set(0, 2, 10);

    // Load the model
    const loader = new GLTFLoader();
    let mixer;
    
    loader.load(StickMan, function(gltf) {
      const model = gltf.scene;
      model.position.set(0, 0, 0);
      model.scale.set(0.5, 0.5, 0.5);
      scene.add(model);
      
      // Initialize mixer and animations
      mixer = new Three.AnimationMixer(model);
      gltf.animations.forEach(animation => {
        mixer.clipAction(animation).play();
      });

      // Traverse through the model to find skinned meshes
      model.traverse(function (object) {
        if (object.isSkinnedMesh) {
          console.log(object);
          // If you need to use the skeleton, you can access it here
          const skeleton = object.skeleton;
          // Do something with skeleton if needed
        }
      });

    }, undefined, function(error) {
      console.error(error);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) mixer.update(0.01);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="video_section" ref={mountRef}>
    <div className='video_controls'>
      <button className='play_button'>Play</button>
      <button className='pause_button'>Pause</button>
      <button className='stop_button'>Stop</button>
      <button className='rewind_button'>Rewind</button>
      <button className='fast_forward_button'>Fast forward</button>
    </div>
  </div>;
}

export default VideoSection;
