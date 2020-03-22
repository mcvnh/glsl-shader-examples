import FirstShader from '@/shaders/first-shader';
import Shapes from '@/shaders/shapes';
import BoxToSphere from '@/shaders/box-to-sphere';
import RippleTheImages from '@/shaders/ripple-images';

window.__uuid = 0;
const uuid = () => ++window.__uuid;

export default [
  {
    id: uuid(),
    label: 'Basic shader',
    shader: FirstShader,
  },
  {
    id: uuid(),
    label: 'Shapes',
    shader: Shapes,
  },
  {
    id: uuid(),
    label: 'Box to Sphere',
    shader: BoxToSphere,
  },
  {
    id: uuid(),
    label: 'Ripple the images',
    shader: RippleTheImages,
  }
];
