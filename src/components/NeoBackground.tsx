
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NeoBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDarkMode = document.documentElement.classList.contains('dark');

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Create neo-brutalist objects
    const objects: THREE.Mesh[] = [];
    
    // Function to create a neo-brutalist object
    const createNeoObject = (color: number, size: number, position: THREE.Vector3) => {
      const geometry = new THREE.BoxGeometry(size, size, size);
      
      // Create outline material for neo-brutalist effect
      const materials = [
        new THREE.MeshBasicMaterial({ color }),
        new THREE.MeshBasicMaterial({ color }),
        new THREE.MeshBasicMaterial({ color }),
        new THREE.MeshBasicMaterial({ color }),
        new THREE.MeshBasicMaterial({ color }),
        new THREE.MeshBasicMaterial({ color }),
      ];
      
      const cube = new THREE.Mesh(geometry, materials);
      cube.position.set(position.x, position.y, position.z);
      
      // Add black edges for neo-brutalist look
      const edgesGeometry = new THREE.EdgesGeometry(geometry);
      const edgesMaterial = new THREE.LineBasicMaterial({ 
        color: 0x000000, 
        linewidth: 2 
      });
      const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
      cube.add(edges);
      
      scene.add(cube);
      objects.push(cube);
      return cube;
    };
    
    // Colors for neo-brutalist objects
    const colors = [0xFF3A29, 0xFFE14D, 0x0037FF]; // Red, Yellow, Blue
    
    // Create multiple objects at different positions
    for (let i = 0; i < 7; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 1.5 + 0.5;
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = Math.random() * -5 - 2;
      
      createNeoObject(randomColor, size, new THREE.Vector3(x, y, z));
    }
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate objects slowly
      objects.forEach((obj, index) => {
        obj.rotation.x += 0.002 * (index % 2 === 0 ? 1 : -1);
        obj.rotation.y += 0.003 * (index % 3 === 0 ? 1 : -1);
        
        // Apply slight floating animation
        obj.position.y += Math.sin(Date.now() * 0.001 + index) * 0.003;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
      
      // Dispose geometries and materials
      objects.forEach(obj => {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach(mat => mat.dispose());
        } else {
          obj.material.dispose();
        }
      });
    };
  }, []);

  // Only show in light mode
  if (isDarkMode) return null;
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  );
};

export default NeoBackground;
