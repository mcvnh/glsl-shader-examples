import SceneSetup from '../scene-setup';
import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';
import './OrbitControls.js'

export default {
  mixins: [SceneSetup],

  stats: true, // enable stats

  data: () => ({
    uniforms: {
      u_time: { value: 0.0 },
      u_radius: { value: 20.0 },
      u_speed: { value: 2.0 },
    },
    controls: undefined,
    clock: undefined,
  }),

  mounted() {
    const geometry = new THREE.BoxGeometry(30, 30, 30, 10, 10, 10);
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
      wireframe: true,
    });

    const mesh = new THREE.Mesh(geometry, material);

    this.scene.add(mesh);
    this.clock = new THREE.Clock();

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
  },

  methods: {
    initScene() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.canvasWidth / this.canvasHeight,
        1,
        1000,
      );
      this.camera.position.z = 100;
      this.renderer = new THREE.WebGLRenderer();
    },

    animate() {
      if (this.clock) {
        this.uniforms.u_time.value = this.clock.getElapsedTime();
      }
    },
  },
};
