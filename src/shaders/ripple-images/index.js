import SceneSetup from '../scene-setup';
import vertexShader from './shader.vert';
import fragmentShader from './shader.frag';

export default {
  mixins: [SceneSetup],

  stats: true,

  data: () => ({
    uniforms: {
      u_tex_1: { value: undefined },
      u_tex_2: { value: undefined },
      u_duration: { value: 2.0 },
      u_time: { value: 0 },
    },
    clock: undefined,
    images: [],
  }),

  mounted() {
    const geometry = new THREE.PlaneGeometry(2, 1.5);
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
    });

    this.images.push(new THREE.TextureLoader().setPath('/assets/').load('stock_1.jpeg'));
    this.images.push(new THREE.TextureLoader().setPath('/assets/').load('stock_2.jpeg'));

    this.uniforms.u_tex_1.value = this.images[0];
    this.uniforms.u_tex_2.value = this.images[1];

    setInterval(() => {
      this.uniforms.u_time.value = 0;

      this.images.push(this.images.shift());

      this.uniforms.u_tex_1.value = this.images[0];
      this.uniforms.u_tex_2.value = this.images[1];

    }, 3000);


    const mesh = new THREE.Mesh(geometry, material);
    this.clock = new THREE.Clock();
    this.scene.add(mesh);
  },

  methods: {
    animate() {
      if (this.clock) {
        const delta = this.clock.getDelta();
        if (this.uniforms.u_time.value < this.uniforms.u_duration.value) {
          this.uniforms.u_time.value += delta;
        } else {
          this.uniforms.u_time.value = this.uniforms.u_duration.value;
        }
      }
    }
  }
};
