import FirstShader from '@/shaders/first-shader';
import Shapes from '@/shaders/shapes';

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
  }
];
