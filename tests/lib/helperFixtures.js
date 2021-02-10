const mockedEarthQuakesFeaturesJson = [
  {
    properties: {
      title: 'M 2.2 - 24km NNE of Trona, CA',
    },
    geometry: {
      type: 'Point',
      coordinates: [-117.3201667, 35.9781667, 1.9],
    },
    id: 'ci39533143',
  },
  {
    properties: {
      title: 'M 1.6 - 22 km ESE of Denali National Park, Alaska',
    },
    geometry: {
      type: 'Point',
      coordinates: [-151.2818, 63.4855, 6.8],
    },
  },
];

const mockedEarthQuakesFeaturesJsonWithDuplicate = [
  {
    properties: {
      title: 'M 2.2 - 24km NNE of Trona, CA',
    },
    geometry: {
      type: 'Point',
      coordinates: [-117.3201667, 35.9781667, 1.9],
    },
    id: 'ci39533143',
  },
  {
    properties: {
      title: 'M 2.2 - 24km NNE of Trona, CA',
    },
    geometry: {
      type: 'Point',
      coordinates: [-117.3201667, 35.9781667, 1.9],
    },
    id: 'ci39533143',
  },
  {
    properties: {
      title: 'M 1.6 - 22 km ESE of Denali National Park, Alaska',
    },
    geometry: {
      type: 'Point',
      coordinates: [-151.2818, 63.4855, 6.8],
    },
  },
];

module.exports = {
  mockedEarthQuakesFeaturesJson,
  mockedEarthQuakesFeaturesJsonWithDuplicate,
};
