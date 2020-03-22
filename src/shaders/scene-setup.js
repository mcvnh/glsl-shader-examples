export default {
  stats: false,
  data: () => ({
    camera: undefined,
    scene: undefined,
    renderer: undefined,
    stats: undefined,

    canvasWidth: 0,
    canvasHeight: 0,
  }),

  render: (h) => h('div'),

  mounted() {
    this.canvasWidth = this.$el.parentNode.clientWidth;
    this.canvasHeight = this.$el.parentNode.clientHeight;

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

    if (this.$options.stats && this.stats) {
      this.stats.detach(document.body);
    }
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
        this.renderer.setSize(this.canvasWidth, this.canvasHeight);
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
      const aspectRatio =  this.canvasWidth / this.canvasHeight;
      const width = aspectRatio >= 1 ? 1 : aspectRatio;
      const height = aspectRatio >= 1
        ? (this.canvasHeight / this.canvasWidth) * width
        : 1;

      if (this.camera) {
        this.camera.left = -width;
        this.camera.right = width;
        this.camera.top = height;
        this.camera.bottom = -height;
        this.camera.updateProjectionMatrix();
      }

      if (this.renderer) {
        this.renderer.setSize(this.canvasWidth, this.canvasHeight);
      }

      this.onWindowResize();
    },

    animate() {},
    onWindowResize() {},
  },
}
