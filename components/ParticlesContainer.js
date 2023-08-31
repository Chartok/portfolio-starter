import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  // initialize particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);

  return (
    <Particles
    className='w-full h-full absolute translate-z-0'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false},
        autoPlay: { enable: true},
        background: {
          color: {
            value: ''
          }
        },
        fpsLimit: 120,
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 2
            },
            repulse: {
              distance: 90,
              duration: 0.4,
              speed: 0.428,
              easing: 'ease-out-quad'
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#0ef',
            distance: 200,
            enable: true,
            opacity: 0.528,
            triangles: {
              enable: true,
              frequency: 0.123,
              opacity: 0.002
            },
            width: 1
          },
          collisions: {
            absorb: {
              speed: 2.58
            }
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 0.12,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          rotate: {
            random: {
              enable: true,
              minimumValue: 0
            },
            value: 5,
            animation: {
              enable: true,
              speed: 0.528,
              decay: 0,
              sync: false
            },
            direction: 'clockwise',
            path: false
          },
          size: {
            random: false,
            value: 1.258
          }
        }
      }}
    />
  );
};

export default ParticlesContainer;
