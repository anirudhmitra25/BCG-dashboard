const generateStackId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const stackIdLength = 10;
  let stackId = "#";
  for (let i = 1; i < stackIdLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    stackId += characters[randomIndex];
  }
  return stackId;
};

function generateRandomData() {
  const data = [];
  for (let i = 0; i < 18; i++) {
    const randomNumber = Math.floor(Math.random() * 801) + 100;
    data.push(randomNumber);
  }
  return data;
}

function generateRForecast() {
    return Math.floor(Math.random() * 21) + 75;
  }
  

const mockData = [
  {
    id: 1,
    name: "Sample Stack 1",
    stackId: generateStackId(),
    forecast_1: generateRForecast(),
    forecast_2: generateRForecast(),       
    series: [
      { name: "Series 1", data: generateRandomData() },
      { name: "Series 2", data: generateRandomData() },
      { name: "Series 3", data: generateRandomData() },
    ],
  },
  {
    id: 2,
    name: "Sample Stack 2",
    stackId: generateStackId(),
    forecast_1: generateRForecast(),
    forecast_2: generateRForecast(),
    series: [
      { name: "Series 1", data: generateRandomData() },
      { name: "Series 2", data: generateRandomData() },
      { name: "Series 3", data: generateRandomData() },
    ],
  },
  {
    id: 3,
    name: "Sample Stack 3",
    stackId: generateStackId(),
    forecast_1: generateRForecast(),
    forecast_2: generateRForecast(),
    series: [
      { name: "Series 1", data: generateRandomData() },
      { name: "Series 2", data: generateRandomData() },
      { name: "Series 3", data: generateRandomData() },
    ],
  },
  {
    id: 4,
    name: "Sample Stack 4",
    stackId: generateStackId(),
    forecast_1: generateRForecast(),
    forecast_2: generateRForecast(),
    series: [
      { name: "Series 1", data: generateRandomData() },
      { name: "Series 2", data: generateRandomData() },
      { name: "Series 3", data: generateRandomData() },
    ],
  },
  {
    id: 5,
    name: "Sample Stack 5",
    stackId: generateStackId(),
    forecast_1: generateRForecast(),
    forecast_2: generateRForecast(),
    series: [
      { name: "Series 1", data: generateRandomData() },
      { name: "Series 2", data: generateRandomData() },
      { name: "Series 3", data: generateRandomData() },
    ],
  },
  {
    id: 6,
    name: "Sample Stack 6",
    stackId: generateStackId(),
    forecast_1: generateRForecast(),
    forecast_2: generateRForecast(),
    series: [
      { name: "Series 1", data: generateRandomData() },
      { name: "Series 2", data: generateRandomData() },
      { name: "Series 3", data: generateRandomData() },
    ],
  },
  {
    id: 7,
    name: "Sample Stack 7",
    stackId: generateStackId(),
    forecast_1: generateRForecast(),
    forecast_2: generateRForecast(),
    series: [
      { name: "Series 1", data: generateRandomData() },
      { name: "Series 2", data: generateRandomData() },
      { name: "Series 3", data: generateRandomData() },
    ],
  },
  {
    id: 8,
    name: "Sample Stack 8",
    stackId: generateStackId(),
    forecast_1: generateRForecast(),
    forecast_2: generateRForecast(),
    series: [
      { name: "Series 1", data: generateRandomData() },
      { name: "Series 2", data: generateRandomData() },
      { name: "Series 3", data: generateRandomData() },
    ],
  },
  {
    id: 9,
    name: "Sample Stack 9",
    stackId: generateStackId(),
    forecast_1: generateRForecast(),
    forecast_2: generateRForecast(),
    series: [
      { name: "Series 1", data: generateRandomData() },
      { name: "Series 2", data: generateRandomData() },
      { name: "Series 3", data: generateRandomData() },
    ],
  },
  {
    id: 10,
    name: "Sample Stack 10",
    stackId: generateStackId(),
    forecast_1: generateRForecast(),
    forecast_2: generateRForecast(),
    series: [
      { name: "Series 1", data: generateRandomData() },
      { name: "Series 2", data: generateRandomData() },
      { name: "Series 3", data: generateRandomData() },
    ],
  },
];

export default mockData;
