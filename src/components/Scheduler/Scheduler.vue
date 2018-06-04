<template>
  <dx-scheduler
    :dataSource="dataSource"
    :views="views"
    :currentView="currentView"
    :currentDate="currentDate"
    :firstDayOfWeek="firstDayOfWeek"
    :startDayHour="startDayHour"
    :endDayHour="endDayHour"
    :showAllDayPanel="showAllDayPanel"
    :height="height"
    :groups="groups"
    :resources="resources"
    resourceCellTemplate="resourceCellTemplate"
    :dataCellTemplate="dataCellTemplate"
    timeZone="Europe/Berlin"
  >
    <div slot="resourceCellTemplate" slot-scope="employee">
      <div class='name' :style="{'background': employee.color}">
        <h2>{{employee.text}}</h2>
      </div>
      <div class='avatar'>
        <img :src="employee.data.avatar" />
      </div>
      <div class='info' :style="{'color': employee.color}">
        Age: {{employee.data.age}}
        <br/>
        <b>{{employee.data.discipline}}</b>
      </div>
    </div>
  </dx-scheduler>
</template>

<script>
import 'devextreme/dist/css/dx.spa.css'
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.darkviolet.css'
import { DxScheduler } from 'devextreme-vue'
import { employees, data } from './dataScheduler'

export default {
  name: 'scheduler',
  components: {
    DxScheduler
  },
  data () {
    return {
      dataSource: data,
      views: ['month', 'week', 'day'],
      currentView: 'month',
      currentDate: Date.now(),
      firstDayOfWeek: 1,
      startDayHour: 0,
      endDayHour: 24,
      showAllDayPanel: true,
      height: 600,
      groups: ['employeeID'],
      resources: [
        {
          fieldExpr: 'employeeID',
          allowMultiple: false,
          dataSource: employees,
          label: 'Employee'
        }
      ]
    }
  },
  methods: {
    getCurrentTraining: function (index, employeeID) {
      var currentTraining,
        result = (index + employeeID) % 3

      switch (result) {
        case 0:
          currentTraining = 'abs-background'
          break
        case 1:
          currentTraining = 'step-background'
          break
        case 2:
          currentTraining = 'fitball-background'
          break
        default:
          currentTraining = ''
      }

      return currentTraining
    },
    isWeekEnd: function (date) {
      var day = date.getDay()
      return day === 0 || day === 6
    },
    dataCellTemplate: function (cellData, index, container) {
      var employeeID = cellData.groups.employeeID,
        dataCellElement = container,
        currentTraining = this.getCurrentTraining(index, employeeID)

      if (this.isWeekEnd(cellData.startDate)) {
        dataCellElement.classList.add('employee-weekend-' + employeeID)
      }

      var element = document.createElement('div')

      element.classList.add('day-cell', currentTraining, 'employee-' + employeeID)
      element.textContent = cellData.text

      return element
    }
  }
}
</script>

<style scoped>
  /**
  @import '/node_modules/devextreme/dist/css/dx.spa.css';
  @import '/node_modules/devextreme/dist/css/dx.common.css';
  @import '/node_modules/devextreme/dist/css/dx.darkviolet.css';
  /**/
  /deep/ .dx-scheduler-date-table-other-month.dx-scheduler-date-table-cell {
    opacity: 1;
    color: rgba(0, 0, 0, 0.3);
  }
  /deep/ .dx-scheduler-group-header-content {
    position: relative;
  }
  /deep/ .avatar{
    width: 155px;
    float: left;
    overflow: hidden;
    position: relative;
    height: 125px;
  }
  /deep/ .name {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  /deep/ .name h2{
    color: #fff;
    text-align: left;
    padding: 0 0 5px 175px;
  }
  /deep/ .info{
    width: auto;
    text-align: left;
    height: 100%;
    font-size: 11pt;
    font-weight: normal;
    padding: 25px 20px;
    color: #707070;
  }
  /deep/ .dx-color-scheme-contrast .info{
    color: #FFF;
  }
  /deep/ .userInfo div{
    margin: 20px;
  }
  /deep/ .day-cell{
    width: 100%;
    height: 60px;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
  /deep/ .day-cell.employee-1{
    background-color: rgba(86, 202, 133, 0.1);
  }
  /deep/ .day-cell.employee-2{
    background-color: rgba(255, 151, 71, 0.1);
  }
  /deep/ .employee-weekend-1{
    background-color: rgba(86, 202, 133, 0.1);
  }
  /deep/ .employee-weekend-2{
    background-color: rgba(255, 151, 71, 0.1);
  }
  /deep/ .abs-background{
    background-image: url("https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gym/icon-abs.png");
  }
  /deep/ .step-background{
    background-image: url("https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gym/icon-step.png");
  }
  /deep/ .fitball-background{
    background-image: url("https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/gym/icon-fitball.png");
  }
</style>
