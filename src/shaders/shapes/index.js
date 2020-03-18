import SceneSetup from '@/shaders/scene-setup';
import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';

export default {
  mixins: [SceneSetup],

  mounted() {
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
    });

    const plane = new THREE.Mesh(geometry, material);
    this.scene.add(plane);

    this.onParentWindowResize();
  },

  methods: {},
};
