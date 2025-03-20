function minPlanesRequired(fuel) {
  let n = fuel.length;

  // If there's only one airport, we're already there
  if (n === 1) return 0;

  let planes = 0;
  let position = 0; // The airport where we last took a plane
  let maxReach = 0; // The farthest airport we can reach

  for (let i = 0; i < n; i++) {
    // If we reach an airport we can't fly past, game over
    if (i > maxReach) return -1;

    // Update how far we can go with the plane at this airport
    maxReach = Math.max(maxReach, i + fuel[i]);

    // If we've reached the limit of the last plane we hired
    if (i === position) {
      planes++;
      position = maxReach; // Pick the best airport we can reach from here

      // If we’ve reached or passed the last airport, we’re done
      if (position >= n - 1) return planes;
    }
  }

  // If we exit the loop without reaching the last airport, it's impossible
  return -1;
}
