const grouppedStations = [];

let stations = [];
for (let i = 900; i < 1000; i = i + 10) {
  stations.push({
    name: `AF ${i}`,
    id: `af${i}`
  });
}
grouppedStations.push({
  title: 'AF 900',
  stations
});

stations = [];
for (let i = 1000; i <= 1100; i = i + 100) {
  stations.push({
    name: `AF ${i}`,
    id: `af${i}`
  });
}
grouppedStations.push({
  title: 'AF 1000',
  stations
});

export default grouppedStations;
