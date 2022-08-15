import { chart } from './chart.js';
import { getChartData } from './data.js';

const tgChart = chart(document.querySelector('.tg-chart'), getChartData());
tgChart.init();