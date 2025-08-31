<script>
	import { Line } from 'svelte-chartjs';

	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

	const chart_data = {
		labels: [
			'2004',
			'2005',
			'2006',
			'2007',
			'2008',
			'2009',
			'2010',
			'2011',
			'2012',
			'2013',
			'2014',
			'2015',
			'2016',
			'2017',
			'2018',
			'2019',
			'2020',
			'2021',
			'2022',
			'2023'
		],
		datasets: [
			{
				label: "Your's Motivation",
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(225, 204,230, .3)',
				borderColor: 'rgb(255, 102, 102)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(255, 51, 51)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 6,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(153, 0, 0)',
				pointHoverBorderColor: 'rgba(153, 0, 0)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [
					465.3, 467.5, 448.5, 457.3, 466.8, 463.6, 460.6, 459.7, 451.3, 437.9, 422.3, 415.3, 410.2,
					409.4, 408.2, 406.5, 403.7, 404.1, 404.3, 392.6
				]
			},
			{
				label: "Real Wages in Your Country",
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(184, 185, 210, .3)',
				borderColor: 'rgb(102, 255, 102)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(51, 255, 51)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 6,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(0, 153, 0)',
				pointHoverBorderColor: 'rgba(0, 153, 0)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [
					453.2, 457.9, 455.5, 450.3, 442.0, 430.6, 436.3, 436.7, 432.8, 428.9, 416.7, 412.8, 415.8,
					415.4, 416.2, 412.5, 407.7, 410.1, 406.0, 395.8
				]
			},
			{
				label: "Stagnation in Your Country",
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(225, 204,230, .3)',
				borderColor: 'rgb(160, 160, 160)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(128, 128, 128)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 6,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(96, 96, 96)',
				pointHoverBorderColor: 'rgba(96, 96, 96)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [
					400.3, 401.5, 402.5, 403.3, 408.8, 411.6, 414.6, 415.7, 422.3, 424.9, 430.3, 436.3, 437.2,
					439.4, 442.2, 445.5, 447.7, 458.1, 464.3, 465.6
				]
			},
			{
				label: "GDP Range in Your Country",
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(225, 204,230, .3)',
				borderColor: 'rgb(178, 102, 255)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(153, 51, 255)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 6,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(102, 0, 204)',
				pointHoverBorderColor: 'rgba(102, 0, 204)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [
					425.3, 425.1, 424.8, 424.5, 424.1, 423.9, 424.3, 424.5, 424.7, 424.8, 425.1, 425.5, 425.7,
					425.8, 425.8, 426.2, 426.5, 425.7, 425.0, 424.6
				]
			}
		]
	};
</script>

<div class="chart-container">
	<Line data={chart_data} options={{ responsive: true }} />
</div>
