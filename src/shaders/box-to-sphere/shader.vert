// # vim: set ft=glsl:

uniform float u_time;
uniform float u_radius;
uniform float u_speed;

void main() {
  float delta = (sin(u_time * u_speed) + 1.0) / 2.0;

  vec3 v = normalize(position) * u_radius;
  vec3 pos = mix(position, v, delta);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
