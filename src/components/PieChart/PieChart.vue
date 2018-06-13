<template>
    <div>
        <dx-pie-chart
                id="pie"
                :palette="palette"
                :type="type"
                :dataSource="exportImportData"
                :title="title"
                :legend="legend"
                :commonSeriesSettings="commonSeriesSettings"
                :series="series"
                theme="theme"
                :tooltip="tooltip"
        >
        </dx-pie-chart>
    </div>
</template>

<script>
import 'devextreme/dist/css/dx.spa.css'
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.darkviolet.css'
import { DxPieChart } from 'devextreme-vue'
import { exportImportData } from './dataChart'
export default {
  name: 'PieChart',
  components: {
    DxPieChart
  },
  data () {
    return {
      palette: 'ocean',
      type: 'doughnut',
      exportImportData: exportImportData,
      title: 'Import/Export',
      legend: {
        visible: true
      },
      export: {
        enabled: true
      },
      commonSeriesSettings: {
        innerRadius: 0.2,
        label: {
          visible: false
        }
      },
      tooltip: {
        enabled: true,
        format: 'currency',
        customizeTooltip: this.customizeTooltip.bind(this)
      },
      series: [{
        name: 'Export',
        argumentField: 'Country',
        valueField: 'Export'
      },
      {
        name: 'Import',
        argumentField: 'Country',
        valueField: 'Import'
      }
      ]
      // theme: 'generic.darkviolet'
    }
  },
  methods: {
    customizeTooltip: function (arg) {
      return {
        text: arg.argumentText + '<br>' + arg.seriesName + ': ' + arg.valueText + 'B"'
      }
    }
  }
}
</script>

<style scoped>
    /deep/ #pie {
        height: 440px;
    }
    /deep/ #pie * {
        margin: 0 auto;
    }
</style>
