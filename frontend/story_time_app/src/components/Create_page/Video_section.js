import React, { useEffect, useRef, useState } from "react";
import * as Three from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import StickMan from '../../3D_models/StickMan.glb'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './Video_section.css';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import rewind from '../../assets/rewind.svg';
import skip_forward from '../../assets/skip-forward.svg';
import skip_back from '../../assets/skip-back.svg';
import fast_forward from '../../assets/fast-forward.svg';
import maximize from '../../assets/maximize.svg';
import minimize from '../../assets/minimize.svg';

function VideoSection() {
  const sectionRef = useRef(null);
  const mountRef = useRef(null);
  const mixerRef = useRef(null);
  const [ playing, pausing  ] = useState(false);
  const [ fullScreen, setFullScreen ] = useState(false);
  const [ tooltip, setTooltip ] = useState('');

  const playPause = () => {
    if (playing) {
      // mixerRef.current.stopAllAction();
      pausing(false);
    } else {
      //mixerRef.current.clipAction().play();
      pausing(true);
    }
  };

  const maximizeScreen = () => {
    if (!fullScreen) {
      if (sectionRef.current.requestFullscreen) {
        sectionRef.current.requestFullscreen();
      } else if (sectionRef.current.mozRequestFullScreen) {
        sectionRef.current.mozRequestFullScreen();
      } else if (sectionRef.current.webkitRequestFullscreen) {
        sectionRef.current.webkitRequestFullscreen();
      } else if (sectionRef.current.msRequestFullscreen) {
        sectionRef.current.msRequestFullscreen();
      }
      setFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setFullScreen(false);
    }
  };
  
  useEffect(() => {

    //Handle fullscreen change
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        setFullScreen(false);
      }
    };
    window.addEventListener('fullscreenchange', handleFullScreenChange);

    // Resize the renderer when the window is resized
    const handleResize = () => {
      renderer.setSize(window.innerWidth * 0.75, window.innerHeight * 0.75);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Create scene, camera, and renderer
    const scene = new Three.Scene();
    const camera = new Three.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 5000);
    const renderer = new Three.WebGLRenderer();
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
    renderer.setClearColor(0xffffff, 1);
    
    // Set up controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Add the renderer to the DOM
    mountRef.current.appendChild(renderer.domElement);
    camera.position.set(0, 10, 10);

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
      mixerRef.current = mixer;
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
      if (mixerRef.current) mixerRef.current.update(0.01);
      renderer.render(scene, camera);
    };

    animate();

    

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  return <div className="video_section" ref={sectionRef}>
          <div className="video_section_canvas" ref={mountRef}></div>
          <div className='video_controls'>
            <button className='jump_before_button'>
              <img className='svg_icon' src={skip_back} alt='skip back' />
            </button>
            <button className='rewind_button'>
              <img className='svg_icon' src={rewind} alt='rewind' />
            </button>
            <button className='play_button' onClick={ playPause}
            onMouseEnter={() => setTooltip(playing ? 'Pause': 'Play')}>
              <img className='svg_icon'  src={playing ? pause : play} alt={playing ? 'pause' : 'play'} />
            </button>
            <button className='fast_forward_button' >
              <img className='svg_icon' src={fast_forward} alt='skip forward' />
            </button>
            <button className='jump_next_button'>
              <img className='svg_icon' src={skip_forward} alt='skip forward' />
            </button>
          </div>
          <div className='video_time_bar'>
            <time className='current_time'>00:00</time>
            <input className='derulation_bar' type='range' min='0' max='100' step='0.01'></input>
            <time className='time_left'>00:00</time>
            <button className='full_screen_button' onClick={ maximizeScreen }>
              <img className='svg_icon' src={ fullScreen ? minimize : maximize } alt={fullScreen ? 'minimize' : 'maximize'} />
            </button>
          </div>

          {tooltip && <div className="tooltip">{tooltip}</div>}
      </div>;
}

export default VideoSection;
