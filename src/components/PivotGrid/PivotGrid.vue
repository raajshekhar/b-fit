<template>
    <div>
        <dx-chart
            id="sales-chart"
            title="Daily Temperature in May"
            ref="chart"
            :commonSeriesSettings="commonSeriesSettings"
            :size="size"
            :adaptiveLayout="adaptiveLayout"
            :tooltip="tooltip"
            :theme="theme"
        >
        </dx-chart>
        <dx-pivot-grid
                id="pivotgrid"
                ref="pivotgrid"
                :allowSortingBySummary="allowSortingBySummary"
                :allowFiltering="allowFiltering"
                :showBorders="showBorders"
                :showColumnGrandTotals="showColumnGrandTotals"
                :showRowGrandTotals="showRowGrandTotals"
                :showRowTotals="showRowTotals"
                :showColumnTotals="showColumnTotals"
                :dataSource="dataSource"
        >
        </dx-pivot-grid>
    </div>
</template>

<script>
import 'devextreme/dist/css/dx.spa.css'
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.darkviolet.css'
import { DxPivotGrid, DxChart } from 'devextreme-vue'
import { sales } from './dataPivotGrid'
export default {
  name: 'PivotGrid',
  components: {
    DxPivotGrid,
    DxChart
  },
  mounted: function () {
    console.info(this.$refs.chart.instance)
    this.$refs.pivotgrid.instance.bindChart(this.$refs.chart.instance, {
      dataFieldsDisplayMode: 'splitPanes',
      alternateDataFields: false
    })
  },
  data () {
    return {
      allowFiltering: true,
      showBorders: true,
      allowSortingBySummary: true,
      showColumnGrandTotals: false,
      showRowGrandTotals: false,
      showRowTotals: false,
      showColumnTotals: false,
      dataSource: {
        fields: [{
          caption: 'Region',
          width: 120,
          dataField: 'region',
          area: 'row',
          sortBySummaryField: 'Total'
        }, {
          caption: 'City',
          dataField: 'city',
          width: 150,
          area: 'row'
        }, {
          dataField: 'date',
          dataType: 'date',
          area: 'column'
        }, {
          groupName: 'date',
          groupInterval: 'month',
          visible: false
        }, {
          caption: 'Total',
          dataField: 'amount',
          dataType: 'number',
          summaryType: 'sum',
          format: 'currency',
          area: 'data'
        }],
        store: sales
      },
      dataFieldsDisplayMode: 'splitPanes',
      alternateDataFields: false,
      fieldChooser: {
        enabled: true,
        height: 400
      },
      scrolling: {
        mode: 'virtual'
      },
      // CHART
      commonSeriesSettings: {
        type: 'bar'
      },
      size: {
        height: 200
      },
      adaptiveLayout: {
        width: 450
      },
      tooltip: {
        enabled: true,
        customizeTooltip: this.customizeTooltip.bind(this)
      },
      theme: 'generic.darkviolet'
    }
  },
  methods: {
    customizeTooltip: function (args) {
      return {
        html: args.seriesName + " | Total<div class='currency'>" + args.originalValue + '</div>'
      }
    }
  }
}
</script>

<style scoped>
    /deep/ #pivotgrid {
        margin-top: 20px;
    }
    /deep/ .currency {
        text-align: center;
    }
</style>
