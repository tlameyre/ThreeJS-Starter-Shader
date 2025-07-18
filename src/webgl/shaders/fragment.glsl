precision highp float;

varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColor;
uniform vec2 uCursor;

void main() {
  gl_FragColor = vec4(vUv, 0.0, 1.0);
}

