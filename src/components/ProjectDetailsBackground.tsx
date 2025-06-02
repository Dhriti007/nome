
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ProjectDetailsBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    camera.position.y = 3;
    camera.rotation.x = -0.15;
    
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
    
    // Create floating shapes
    const objects: THREE.Mesh[] = [];
    const totalObjects = 25;
    
    // Function to create a neo-brutalist shape
    const createNeoShape = () => {
      // Choose shape type
      const shapeType = Math.floor(Math.random() * 4);
      let geometry;
      
      switch(shapeType) {
        case 0: // Cube
          geometry = new THREE.BoxGeometry(
            Math.random() * 2 + 0.5,
            Math.random() * 2 + 0.5,
            Math.random() * 2 + 0.5
          );
          break;
        case 1: // Sphere
          geometry = new THREE.SphereGeometry(
            Math.random() * 1 + 0.5,
            16,
            16
          );
          break;
        case 2: // Torus
          geometry = new THREE.TorusGeometry(
            Math.random() * 0.8 + 0.5,
            Math.random() * 0.2 + 0.1,
            16,
            32
          );
          break;
        case 3: // Cone
          geometry = new THREE.ConeGeometry(
            Math.random() * 1 + 0.5,
            Math.random() * 2 + 1,
            16
          );
          break;
        default:
          geometry = new THREE.BoxGeometry(1, 1, 1);
      }
      
      // Choose color from neo-brutalist palette
      const colors = isDarkMode 
        ? [0xFF5340, 0xFFE86B, 0x4471FF, 0x4CEAD7] // Dark mode colors
        : [0xFF3A29, 0xFFE14D, 0x0037FF, 0x00D2B4]; // Light mode colors
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      const material = new THREE.MeshBasicMaterial({ color });
      const object = new THREE.Mesh(geometry, material);
      
      // Add black edges for neo-brutalist look
      const edgesGeometry = new THREE.EdgesGeometry(geometry);
      const edgesMaterial = new THREE.LineBasicMaterial({ 
        color: isDarkMode ? 0x1F2937 : 0x000000, 
        linewidth: 2 
      });
      const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
      object.add(edges);
      
      // Position randomly in 3D space
      const radius = 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      object.position.x = radius * Math.sin(phi) * Math.cos(theta);
      object.position.y = (Math.random() - 0.5) * 15;
      object.position.z = radius * Math.sin(phi) * Math.sin(theta);
      
      // Random rotation
      object.rotation.x = Math.random() * Math.PI;
      object.rotation.y = Math.random() * Math.PI;
      object.rotation.z = Math.random() * Math.PI;
      
      // Add to scene and objects array
      scene.add(object);
      objects.push(object);
      
      return object;
    };
    
    // Create objects
    for (let i = 0; i < totalObjects; i++) {
      createNeoShape();
    }
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Animation
    const clock = new THREE.Clock();
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      const delta = clock.getDelta();
      
      // Animate objects
      objects.forEach((obj, index) => {
        // Rotation
        obj.rotation.x += 0.05 * delta * (index % 2 === 0 ? 1 : -1);
        obj.rotation.y += 0.08 * delta * (index % 3 === 0 ? 1 : -1);
        
        // Floating effect
        const floatSpeed = 0.2 + (index % 5) * 0.05;
        obj.position.y += Math.sin(clock.elapsedTime * floatSpeed) * 0.01;
        
        // Follow mouse movement slightly
        if (window.mouseX !== undefined && window.mouseY !== undefined) {
          obj.position.x += (window.mouseX * 0.0001) * (index % 3);
          obj.position.y += (window.mouseY * -0.0001) * (index % 3);
        }
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Mouse movement tracking
    window.mouseX = 0;
    window.mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      window.mouseX = event.clientX - window.innerWidth / 2;
      window.mouseY = event.clientY - window.innerHeight / 2;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
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
      
      window.removeEventListener('mousemove', handleMouseMove);
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
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  );
};

// Add mousemove type for window object
declare global {
  interface Window {
    mouseX: number;
    mouseY: number;
  }
}

export default ProjectDetailsBackground;
