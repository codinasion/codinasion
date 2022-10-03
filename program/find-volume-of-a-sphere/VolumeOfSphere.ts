function volumeOfSphere (radius: number) {
    const pi = 3.14159;
    let volOfSphere = 4/3*pi*Math.pow(radius, 3);
    return volOfSphere;
}

console.log("Volume of Sphere is", volumeOfSphere(4));
