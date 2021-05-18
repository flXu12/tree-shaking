'use strict';

function reading() {
  console.log('reading');
}

reading.prototype.before = () => {
  console.log('before reading');
};

// 打包入口

const coding = () => {
  reading();
  const flag = 1;
  console.log(flag);
  return flag;
};

coding();
