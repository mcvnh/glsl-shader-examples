// # vim: set ft=glsl:
varying vec3 v_position;

float rect(vec2 pt, vec2 size, vec2 center) {
  vec2 p = pt - center;
  vec2 halfsize = size * 0.5;

  float horz = step(-halfsize.x, p.x) - step(halfsize.x, p.x);
  float vert = step(-halfsize.y, p.y) - step(halfsize.y, p.y);

  return horz * vert;
}

float circle(vec2 pt, vec2 center, float radius) {
  vec2 p = pt - center;
  return step(radius, length(p.xy));
}

void main() {
  float square = rect(v_position.xy, vec2(0.5), vec2(-0.5, 0.5));
  float circle = circle(v_position.xy, vec2(0.5, 0.5), 0.2);
  vec3 color =
    vec3(1.0, 0.0, 0.0) * square +
    vec3(0.0, 1.0, 0.1) * circle;
  gl_FragColor = vec4(color, 1.0);
}
