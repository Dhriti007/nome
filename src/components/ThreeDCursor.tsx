
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeDCursorProps {
  color?: string;
  darkModeColor?: string;
}

const ThreeDCursor: React.FC<ThreeDCursorProps> = ({ 
  color = '#FF3A29', 
  darkModeColor = '#FF5340' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Cursor particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    
    const positionArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount; i++) {
      positionArray[i * 3] = (Math.random() - 0.5) * 10; 
      positionArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positionArray[i * 3 + 2] = (Math.random() - 0.5) * 10;
      scaleArray[i] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      color: isDarkMode ? darkModeColor : color,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    // Particles
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Mouse
    const mouse = {
      x: 0,
      y: 0,
      target: {
        x: 0,
        y: 0
      }
    };
    
    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth follow
      mouse.target.x += (mouse.x - mouse.target.x) * 0.05;
      mouse.target.y += (mouse.y - mouse.target.y) * 0.05;
      
      // Rotate particles based on mouse position
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      
      // Move the particles towards the mouse
      particles.position.x = mouse.target.x * 2;
      particles.position.y = mouse.target.y * 2;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Dispose geometries and materials
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [color, darkModeColor]);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ThreeDCursor;
