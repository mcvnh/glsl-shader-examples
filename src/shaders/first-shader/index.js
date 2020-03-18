import SceneSetup from '@/shaders/scene-setup';
import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';

export default {
  mixins: [SceneSetup],

  data: () => ({
    uniforms: {
      u_time: {
        value: 0.0
      },
    },
    clock: undefined,
  }),

  mounted() {
    this.clock = new THREE.Clock();

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
    });

    const plane = new THREE.Mesh(geometry, material);

    this.scene.add(plane)
  },

  methods: {
    animate() {
      if (this.clock) {
        this.uniforms.u_time.value = this.clock.getElapsedTime();
      }
    }
  }
}
