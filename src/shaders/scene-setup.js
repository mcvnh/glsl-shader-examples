export default {
  stats: false,
  data: () => ({
    camera: undefined,
    scene: undefined,
    renderer: undefined,
    stats: undefined,
  }),

  render: (h) => h('div'),

  mounted() {
    window.addEventListener('resize', this.onParentWindowResize, false);
    this.initScene();
    this.appendCanvas();
    this.onParentAnimate();

    if (this.$options.stats) {
      const loader = import('stats-rs');

      loader.then(({ Stats }) => {
        this.stats = Stats.init();
        this.stats.attach(document.body);
      });
    }
  },

  destroyed() {
    window.removeEventListener('resize', this.onParentWindowResize);
    this.removeCanvas();
  },

  methods: {
    initScene() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
      this.camera.position.z = 1;
      this.renderer = new THREE.WebGLRenderer();
    },

    appendCanvas() {
      if (this.renderer) {
        const pWidth = this.$el.parentNode.clientWidth;
        const pHeight = this.$el.parentNode.clientHeight;
        this.renderer.setSize(pWidth, pHeight);
        this.$el.appendChild(this.renderer.domElement);
      }
    },

    removeCanvas() {
      if (this.renderer) {
        this.$el.removeChild(this.renderer.domElement);
      }
    },

    onParentAnimate() {
      requestAnimationFrame(this.onParentAnimate);

      if (this.$options.stats && this.stats) {
        this.stats.update();
      }

      this.renderer.render(this.scene, this.camera);
      this.animate();
    },

    onParentWindowResize() {
      const pWidth = this.$el.parentNode.clientWidth;
      const pHeight = this.$el.parentNode.clientHeight;

      const aspectRatio =  pWidth / pHeight;
      const width = aspectRatio >= 1 ? 1 : aspectRatio;
      const height = aspectRatio >= 1
        ? (pHeight / pWidth) * width
        : 1;

      if (this.camera) {
        this.camera.left = -width;
        this.camera.right = width;
        this.camera.top = height;
        this.camera.bottom = -height;
        this.camera.updateProjectionMatrix();
      }

      if (this.renderer) {
        this.renderer.setSize(pWidth, pHeight);
      }

      this.onWindowResize();
    },

    animate() {},
    onWindowResize() {},
  },
}
