export function reading() {
  console.log('reading');
}

reading.prototype.before = () => {
  console.log('before reading');
}

export function writing() {
  console.log('writing');
}