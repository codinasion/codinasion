const findVolumeOfACone = (radius: number, height: number) =>
  (Math.PI * radius ** 2 * height) / 3.0;

console.log(findVolumeOfACone(2, 3));
