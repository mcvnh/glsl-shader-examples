// # vim: set ft=glsl:

const float PI = 3.1415;

varying vec2 v_uv;
varying vec3 v_position;

uniform sampler2D u_tex_1;
uniform sampler2D u_tex_2;
uniform float u_time;
uniform float u_duration;

void main() {
  vec2 p = -1.0 + 2.0 * v_uv;
  float len = length(p);
  vec2 ripple = v_uv + (p/len)*cos(len*12.0-u_time*4.0)*0.03;
  float delta = u_time / u_duration;
  vec2 uv = mix(ripple, v_uv, sin(delta));
  vec3 col1 = texture2D(u_tex_1, uv).rgb;
  vec3 col2 = texture2D(u_tex_2, uv).rgb;
  float fade = smoothstep(delta*1.4, delta*2.5, len);
  vec3 color = mix(col2, col1, fade);
  gl_FragColor = vec4(color, 1.0);
}
