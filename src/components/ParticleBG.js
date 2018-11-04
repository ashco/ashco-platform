import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { withTheme } from 'styled-components';

class ParticleBG extends Component {
  shouldComponentUpdate(nextProps) {
    const newWidth = nextProps.innerWidth !== this.props.innerWidth;
    // const newHeight = nextProps.innerHeight !== this.props.innerHeight;
    // Don't trigger on safari mobile scroll screen resize
    const newHeight =
      nextProps.innerHeight > this.props.innerHeight + 140 ||
      nextProps.innerHeight < this.props.innerHeight - 140;
    const newTheme = nextProps.theme !== this.props.theme;

    return newWidth || newHeight || newTheme;
  }

  render() {
    const { colorBackground, colorPrimary } = this.props.theme;
    return (
      <Particles
        style={{
          backgroundColor: colorBackground,
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -10,
        }}
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 4000,
              },
            },
            color: {
              value: colorPrimary,
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: colorPrimary,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
                mode: 'grab',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: false,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    );
  }
}

export default withTheme(ParticleBG);
