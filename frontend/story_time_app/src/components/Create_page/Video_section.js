import React, { useEffect, useRef, useState } from "react";
import * as Three from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import StickMan from '../../3D_models/StickMan.glb'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './Video_section.css';
import play_icon from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import rewind_icon from '../../assets/rewind.svg';
import skip_forward from '../../assets/skip-forward.svg';
import skip_back from '../../assets/skip-back.svg';
import fast_forward from '../../assets/fast-forward.svg';
import maximize from '../../assets/maximize.svg';
import minimize from '../../assets/minimize.svg';

function VideoSection({ addFrameSignal, deleteFrameSignal }) {
  const sectionRef = useRef(null);
  const mountRef = useRef(null);
  const mixerRef = useRef(null);
  const [ play, setPlay  ] = useState(false);
  const [ fullScreen, setFullScreen ] = useState(false);
  const [ tooltip, setTooltip ] = useState('');
  // Time bar
  const [startTimeValue, setStartTimeValue] = useState(0);
  const [finishTimeValue, setFinishTimeValue] = useState(24);
  const [animationInterval, setAnimationInterval] = useState(null);
  const [ sliderValue, setSliderValue ] = useState(0);

  useEffect(() => {
    const progress = (startTimeValue / finishTimeValue) * 10000;
    setSliderValue(progress);
  }, [startTimeValue, finishTimeValue]);

  //handle timeline when skip back button is clicked
  const skipBack = () => { 
    setStartTimeValue(Math.max( startTimeValue - 10,0));
  };

  const rewind = () => {
    if (play) {
      //mixerRef.current.stopAllAction();
      setPlay(false);
      if (animationInterval) {
        clearInterval(animationInterval);
        setAnimationInterval(null);
      }
    } else {
      //mixerRef.current.clipAction().play();
      setPlay(true);
      const interval = setInterval(() => {
        setStartTimeValue(prevTime => {
          if( prevTime === finishTimeValue)
            return 0;
          const newTime = prevTime - 0.2; // Update time, adjust speed as needed
          if (newTime <= 0) {
            clearInterval(interval);
            setPlay(false);
            return 0; // Stop at finish
          }
          return newTime;
        });
      }, 100); // Update every 100ms
      setAnimationInterval(interval);
    }
  };

  const playPause = () => {
    if (play) {
      //mixerRef.current.stopAllAction();
      setPlay(false);
      if (animationInterval) {
        clearInterval(animationInterval);
        setAnimationInterval(null);
      }
    } else {
      //mixerRef.current.clipAction().play();
      setPlay(true);
      const interval = setInterval(() => {
        setStartTimeValue(prevTime => {
          if( prevTime === finishTimeValue)
            return 0;
          const newTime = prevTime + 0.1; // Update time, adjust speed as needed
          if (newTime >= finishTimeValue) {
            clearInterval(interval);
            setPlay(false);
            return finishTimeValue; // Stop at finish
          }
          return newTime;
        });
      }, 100); // Update every 100ms
      setAnimationInterval(interval);
    }
  };

  const fastForward = () => {
    if (play) {
      //mixerRef.current.stopAllAction();
      setPlay(false);
      if (animationInterval) {
        clearInterval(animationInterval);
        setAnimationInterval(null);
      }
    } else {
      //mixerRef.current.clipAction().play();
      setPlay(true);
      const interval = setInterval(() => {
        setStartTimeValue(prevTime => {
          if( prevTime === finishTimeValue)
            return 0;
          const newTime = prevTime + 0.2; // Update time, adjust speed as needed
          if (newTime >= finishTimeValue) {
            clearInterval(interval);
            return finishTimeValue; // Stop at finish
          }
          return newTime;
        });
      }, 100); // Update every 100ms
      setAnimationInterval(interval);
    }
  };

  const skipForward = () => { 
    setStartTimeValue(Math.min( startTimeValue + 10, finishTimeValue));
  }

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
  
  //function to handle video time
  const handleVideoTime = (e) => {
    const value = e.target.value; 
    const min=e.target.min;
    const max=e.target.max; 

    const percentage=(value-min)/(max-min)*100; 
    e.target.style.background='linear-gradient(to right, red ${percentage}%, blue %{1-percentage}%) !important';

    setSliderValue(value);
    const duration= finishTimeValue;
    const currentTime = (value * duration) / 10000;
    setStartTimeValue(currentTime);
  };
  

  const formatTime = (timeInSeconds) => {
    const minutes= Math.floor(timeInSeconds / 60);
    const seconds= Math.floor(timeInSeconds % 60);
    if (seconds < 10 && minutes < 10) {
      return `0${minutes}:0${seconds}`;
    }
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }
    if (minutes < 10) {
      return `0${minutes}:${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  useEffect(() => {
    //handle timeline when a new frame set is added
    if ( addFrameSignal ){
      setFinishTimeValue(finishTimeValue + 24);
    };

    //handle timeline when a frame set is deleted
    if ( deleteFrameSignal ){
      setFinishTimeValue(finishTimeValue - 24);
      if(finishTimeValue-24<startTimeValue)
        setStartTimeValue(finishTimeValue-24);
    };
  }, [addFrameSignal, deleteFrameSignal]);

    useEffect(() => {
    //Handle fullscreen change on button click
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) 
        setFullScreen(false);
      else
        setFullScreen(true);
  };
    window.addEventListener('fullscreenchange', handleFullScreenChange);

    //Handle fullscreen change on escape key and f key
    const handleKeyDownFullScreenChange = (e) => {  
      if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          setFullScreen(true);
        } else {

          setFullScreen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDownFullScreenChange);

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
      if (mixerRef.current) 
        mixerRef.current.update(0.01);
      renderer.render(scene, camera);
    };

    animate();

    

    // Cleanup
    return () => {
      if (animationInterval) {
        clearInterval(animationInterval);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('fullscreenchange', handleFullScreenChange);
      window.removeEventListener('keydown', handleKeyDownFullScreenChange);
    };
  }, []);

  return <div className="video_section" ref={sectionRef}>
          <div className="video_section_canvas" ref={mountRef}></div>
          <div className='video_controls'>
            <button className='skip_back_button' onClick={ skipBack }>
              <img className='svg_icon' src={skip_back} alt='skip back' />
            </button>
            <button className='rewind_button' onClick={rewind}>
              <img className='svg_icon' src={rewind_icon} alt='rewind' />
            </button>
            <button className='play_button' onClick={ playPause}
            onMouseEnter={() => setTooltip(play ? 'Pause': 'Play')}>
              <img className='svg_icon'  src={play ? pause : play_icon} alt={play ? 'pause' : 'play'} />
            </button>
            <button className='fast_forward_button' onClick={ fastForward}>
              <img className='svg_icon' src={fast_forward} alt='fast forward' />
            </button>
            <button className='skip_forward_button' onClick={skipForward}>
              <img className='svg_icon' src={skip_forward} alt='skip forward' />
            </button>
          </div>
          <div className='video_time_bar' method='get'>
            <div className='current_time'>{formatTime(startTimeValue)}</div>
            <input 
            type='range' 
            min='0' 
            max='10000'
            step='0.01'
            value={sliderValue}
            onChange={ handleVideoTime } 
            className='derulation_bar'></input>
            <div className='time_left'>{formatTime(finishTimeValue)}</div>
            <button className='full_screen_button' onClick={ maximizeScreen }>
              <img className='svg_icon' src={ fullScreen ? minimize : maximize } alt={fullScreen ? 'minimize' : 'maximize'} />
            </button>
          </div>

          {tooltip && <div className="tooltip">{tooltip}</div>}
      </div>;
}

export default VideoSection;
