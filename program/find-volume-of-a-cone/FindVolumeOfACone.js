function getVolumeOfACone(radius, height) {
    // Find volume using this formula:
    // V = 1/3 × π × Radius^2 × Height
    return (1/3) * Math.PI * (radius ** 2) * height;
}

findConeVolume(2, 3);