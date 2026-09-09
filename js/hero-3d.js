(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};

  PharmHub.init3DHero = function (containerId) {
    if (!window.THREE) return;
    const container = document.getElementById(containerId) || document.querySelector('.pharma-hero__visual');
    if (!container) return;

    container.innerHTML = '';
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    
    // High-tech glowing materials
    const matTeal = new THREE.MeshPhysicalMaterial({ 
      color: 0x0D9488, 
      metalness: 0.3, 
      roughness: 0.1, 
      clearcoat: 1.0, 
      clearcoatRoughness: 0.1 
    });
    const matAmber = new THREE.MeshPhysicalMaterial({ 
      color: 0xF59E0B, 
      metalness: 0.3, 
      roughness: 0.1, 
      clearcoat: 1.0, 
      clearcoatRoughness: 0.1 
    });
    const matGlass = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.1,
      transmission: 0.9, // glass-like
      opacity: 1,
      transparent: true,
      ior: 1.5
    });

    // Central Capsule
    const capGeo = new THREE.SphereGeometry(1.2, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const bodyHalf1 = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 1.8, 64), matTeal);
    bodyHalf1.position.y = 0.9;
    bodyHalf1.castShadow = true;
    
    const bodyHalf2 = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 1.8, 64), matAmber);
    bodyHalf2.position.y = -0.9;
    bodyHalf2.castShadow = true;
    
    const topCap = new THREE.Mesh(capGeo, matTeal);
    topCap.position.y = 1.8;
    topCap.castShadow = true;
    
    const bottomCap = new THREE.Mesh(capGeo, matAmber);
    bottomCap.position.y = -1.8;
    bottomCap.rotation.x = Math.PI;
    bottomCap.castShadow = true;

    // Outer orbiting glass ring
    const ringGeo = new THREE.TorusGeometry(3.5, 0.05, 16, 100);
    const orbitRing1 = new THREE.Mesh(ringGeo, matGlass);
    orbitRing1.rotation.x = Math.PI / 2;
    
    const ringGeo2 = new THREE.TorusGeometry(4.5, 0.02, 16, 100);
    const orbitRing2 = new THREE.Mesh(ringGeo2, matAmber);
    orbitRing2.rotation.x = Math.PI / 3;

    group.add(bodyHalf1);
    group.add(bodyHalf2);
    group.add(topCap);
    group.add(bottomCap);
    group.add(orbitRing1);
    group.add(orbitRing2);

    // Floating molecules
    const particles = new THREE.Group();
    const sphereGeo = new THREE.SphereGeometry(0.15, 32, 32);
    for(let i=0; i<30; i++) {
        let mesh = new THREE.Mesh(sphereGeo, Math.random() > 0.5 ? matTeal : matAmber);
        mesh.position.set(
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 12
        );
        mesh.userData = {
            velocity: new THREE.Vector3(
              (Math.random() - 0.5) * 0.02,
              (Math.random() - 0.5) * 0.02,
              (Math.random() - 0.5) * 0.02
            )
        };
        particles.add(mesh);
    }
    
    scene.add(group);
    scene.add(particles);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.set(10, 15, 10);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);
    
    const pointLight = new THREE.PointLight(0x0D9488, 2, 20);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    camera.position.z = 10;

    // Mouse Interactivity
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    });

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = function () {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      
      // Smooth mouse follow
      targetX = mouseX * 0.5;
      targetY = mouseY * 0.5;
      group.rotation.y += 0.02 * (targetX - group.rotation.y);
      group.rotation.x += 0.02 * (targetY - group.rotation.x);

      // Constant auto-rotation
      group.rotation.y += 0.005;
      orbitRing1.rotation.x += 0.01;
      orbitRing1.rotation.y += 0.005;
      orbitRing2.rotation.y -= 0.008;
      
      // Floating particles
      particles.rotation.y -= 0.001;
      particles.children.forEach(p => {
        p.position.add(p.userData.velocity);
        // Bounce bounds
        if(p.position.x > 6 || p.position.x < -6) p.userData.velocity.x *= -1;
        if(p.position.y > 6 || p.position.y < -6) p.userData.velocity.y *= -1;
        if(p.position.z > 6 || p.position.z < -6) p.userData.velocity.z *= -1;
      });

      // Move point light
      pointLight.position.x = Math.sin(time * 0.5) * 8;
      pointLight.position.z = Math.cos(time * 0.5) * 8;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if(!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    
    PharmHub.cleanup3DHero = () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
    };
  };
})();
