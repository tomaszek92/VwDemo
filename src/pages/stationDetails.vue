<template>
  <f7-page>
    <f7-navbar back-link="PCB">
      <f7-nav-title>{{ pageTitle }}</f7-nav-title>
      <f7-nav-right><span class="login">{{ username }}</span></f7-nav-right>
    </f7-navbar>
    <f7-card>
      <f7-card-header class="display-flex justify-content-center">Zawieszanie się wkrętarki (statystyka)</f7-card-header>
      <f7-card-content class="text-align-center">
        <canvas id="stationDetailsChart" width="1000" height="1000"></canvas>
      </f7-card-content>
    </f7-card>
    <f7-label></f7-label>
    <f7-block>
    </f7-block>
  </f7-page>
</template>
<script>
import Chart from 'chart.js';

export default {
  data() {
    return {
      username: '',
      pageTitle: ''
    };
  },
  mounted() {
    this.username = this.$f7.data.user;
    this.pageTitle = transformIdToPageTitle(this.$f7route.params['id']);

    const ctx = document.getElementById('stationDetailsChart').getContext('2d');
    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
         labels: ['Seria 1', 'Seria 2', 'Seria 3', 'Seria 4', 'Seria 5'],
         datasets: [{
            data: [16, 10, 59, 8, 65],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
            yAxes: [
              {
                ticks: {
                    beginAtZero:true
                }
            }
            ]
        }
      }
    });
  }
};

function transformIdToPageTitle(id) {
  const pageTitle = `${id.substring(0, 2)} ${id.substring(2)}`;
  return pageTitle.toUpperCase();
}
</script>
