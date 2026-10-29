import React from "react";
import Typewriter from "typewriter-effect";
import profile from "../../data/profile";

function Type() {
  return (
    <Typewriter
      options={{
        strings: profile.taglines,
        autoStart: true,
        loop: true,
        delay: 45,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
