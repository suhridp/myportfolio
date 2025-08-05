import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <Particles
        id="tsparticles"
        options={{
          fullScreen: false,
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                area: 1500,
              },
            },
            line_linked: {
              enable: false,
              opacity: 0.03,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                quantity: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default Particle;
