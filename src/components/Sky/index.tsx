import React from "react";
import { Entity } from "aframe-react";

export function Sky(props: any) {
  return (
    <Entity
      geometry={{
        primitive: "sphere",
        radius: 30,
        phiLength: 360,
        phiStart: 0,
        thetaLength: 90
      }}
      material={{
        shader: "flat",
        src: "url(/static/sky.jpg)",
        side: "back",
        height: 2048,
        width: 2048
      }}
      {...props}
    />
  );
}
