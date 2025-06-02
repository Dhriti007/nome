
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ProjectsBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;
    camera.position.y = 5;
    camera.rotation.x = -0.2;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Detect dark mode
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Create grid with adjusted colors for dark mode
    const gridColor = isDarkMode ? 0x1E3A8A : 0x555555;
    const gridColor2 = isDarkMode ? 0x1E293B : 0x333333;
    const gridHelper = new THREE.GridHelper(80, 80, gridColor, gridColor2);
    scene.add(gridHelper);
    
    // Create neo-brutalist objects
    const objects: THREE.Mesh[] = [];
    
    // Function to create a neo-brutalist object
    const createNeoObject = (color: number, size: number, position: THREE.Vector3) => {
      // Randomize between cube, sphere, or torus
      let geometry;
      const shapeType = Math.floor(Math.random() * 3);
      
      if (shapeType === 0) {
        geometry = new THREE.BoxGeometry(size, size, size);
      } else if (shapeType === 1) {
        geometry = new THREE.SphereGeometry(size / 1.5, 16, 16);
      } else {
        geometry = new THREE.TorusGeometry(size / 1.5, size / 4, 16, 32);
      }
      
      const material = new THREE.MeshBasicMaterial({ color });
      
      const object = new THREE.Mesh(geometry, material);
      object.position.set(position.x, position.y, position.z);
      
      // Add black edges for neo-brutalist look
      const edgesGeometry = new THREE.EdgesGeometry(geometry);
      const edgesMaterial = new THREE.LineBasicMaterial({ 
        color: isDarkMode ? 0x1F2937 : 0x000000, 
        linewidth: 2 
      });
      const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
      object.add(edges);
      
      scene.add(object);
      objects.push(object);
      return object;
    };
    
    // Colors for neo-brutalist objects - adjusted for dark mode
    const colors = isDarkMode 
      ? [0xFF5340, 0xFFE86B, 0x4471FF] // Dark mode colors
      : [0xFF3A29, 0xFFE14D, 0x0037FF]; // Light mode colors
    
    // Create multiple objects at different positions
    for (let i = 0; i < 15; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 3 + 1;
      const x = (Math.random() - 0.5) * 60;
      const y = Math.random() * 15;
      const z = (Math.random() - 0.5) * 60;
      
      createNeoObject(randomColor, size, new THREE.Vector3(x, y, z));
    }
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate objects slowly
      objects.forEach((obj, index) => {
        obj.rotation.x += 0.005 * (index % 2 === 0 ? 1 : -1);
        obj.rotation.y += 0.007 * (index % 3 === 0 ? 1 : -1);
        
        // Apply slight floating animation
        obj.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
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
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class' && 
            mutation.target === document.documentElement) {
          const isDarkModeNow = document.documentElement.classList.contains('dark');
          
          // Update grid colors
          if (gridHelper) {
            gridHelper.material.color.set(isDarkModeNow ? 0x1E3A8A : 0x555555);
          }
          
          // Update edge colors for all objects
          objects.forEach(obj => {
            if (obj.children.length > 0 && obj.children[0] instanceof THREE.LineSegments) {
              (obj.children[0].material as THREE.LineBasicMaterial).color.set(
                isDarkModeNow ? 0x1F2937 : 0x000000
              );
            }
          });
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      
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
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
};

export default ProjectsBackground;
