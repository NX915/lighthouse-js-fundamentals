function carPassing (cars, speed) {
  let obj = {
    time: Date.now(),
    speed: speed
  }
  cars.push(obj);
  return cars;
}
