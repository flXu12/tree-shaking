// 打包入口
import { reading } from './learn.js';
import Color from './color.js';

const coding = () => {
  reading();
  const flag = 1;
  console.log(flag);
  function noUsing() {
    return 2;
  }
  return flag;
}

coding();
