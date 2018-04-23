<template>
  <f7-page>
    <f7-navbar back-link="Takt">
      <f7-nav-title>{{ pageTitle }}</f7-nav-title>
      <f7-nav-right><span class="login">{{ username }}</span></f7-nav-right>
    </f7-navbar>
    <f7-row no-gap class="average-results">
      <f7-col>
        <f7-card>
          <f7-card-header class="display-flex justify-content-center">Ø 10 motorów</f7-card-header>
          <f7-card-content class="text-align-center">
            <span class="average-result average-result-bad">28.1s</span>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col>
        <f7-card>
          <f7-card-header class="display-flex justify-content-center">Ø 20 motorów</f7-card-header>
          <f7-card-content class="text-align-center">
            <span class="average-result average-result-medium">27.7s</span>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col>
        <f7-card>
          <f7-card-header class="display-flex justify-content-center">Ø 50 motorów</f7-card-header>
          <f7-card-content class="text-align-center">
            <span class="average-result average-result-ok">24.7s</span>
          </f7-card-content>
        </f7-card>
      </f7-col>
    </f7-row>
    <f7-card>
      <f7-card-header class="display-flex justify-content-center"><span>ZP4 Montage Taktzeiten <small>(Aktueller Stand)</small></span></f7-card-header>
      <f7-card-content>
        <canvas id="tactDetailsChart" width="1000" height="1000"></canvas>
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      pageTitle: ""
    };
  },
  mounted() {
    this.username = this.$f7.data.user;
    this.pageTitle = transformIdToPageTitle(this.$f7route.params["id"]);

    const ctx = document.getElementById('tactDetailsChart').getContext('2d');
    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['S.01.1 MDB', 'S.01 MDB', 'AF 09 MDB', 'S.02 MDB', 'AF S7 MDB', 'S.07 MDB', 'S.04.1 MDB', 'S.05 MDB', 'S.06 MDB 2.0'],
        datasets: [
          {
            data: [21.00, 27.10, 23.32, 24.90, 15.60, 23.77, 23.94, 23.10, 20.52],
            backgroundColor: [
              'rgba(76, 217, 100, 0.6)',
              'rgba(255, 59, 48, 0.6)',
              'rgba(76, 217, 100, 0.6)',
              'rgba(76, 217, 100, 0.6)',
              'rgba(76, 217, 100, 0.6)',
              'rgba(76, 217, 100, 0.6)',
              'rgba(76, 217, 100, 0.6)',
              'rgba(76, 217, 100, 0.6)',
              'rgba(76, 217, 100, 0.6)'
            ],
            borderColor: [
              'rgba(76, 217, 100, 1)',
              'rgba(255, 59, 48, 1)',
              'rgba(76, 217, 100, 1)',
              'rgba(76, 217, 100, 1)',
              'rgba(76, 217, 100, 1)',
              'rgba(76, 217, 100, 1)',
              'rgba(76, 217, 100, 1)',
              'rgba(76, 217, 100, 1)',
              'rgba(76, 217, 100, 1)'
            ],
            borderWidth: 1
          },
          {
            type: 'line',
            data: [26, 26, 26, 26, 26, 26, 26, 26, 26],
            borderColor: 'rgb(0, 122, 255, 0.6)',
            pointBackgroundColor: 'rgb(0, 122, 255, 0.6)',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: false
              }
            }
          ]
        },
        tooltips: {
          mode: 'index',
          intersect: true,
          callbacks: {
            title: function(tooltipItem, data) {
              return `${tooltipItem[0].xLabel}: ${(tooltipItem[0].yLabel - tooltipItem[1].yLabel).toFixed(2)}`;
            },
            label: function(tooltipItem, data) {
              if (tooltipItem.datasetIndex === 1) {
                return ''
              }
              return `Średnia: ${tooltipItem.yLabel}`;
            },
            afterLabel: function(tooltipItem, data) {
              return '';
            }
          }
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
<style>
.average-results .card-header {
  font-size: 12px !important;
  padding: 5px;
}

.average-result {
  font-size: 22px !important;
}

.average-result.average-result-bad {
  color: red;
}

.average-result.average-result-medium {
  color: orange;
}

.average-result.average-result-ok {
  color: green;
}
</style>
