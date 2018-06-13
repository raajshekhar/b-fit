<template>
  <div class="dx-viewport demo-container">
    <div class="scheduler"></div>
  </div>
</template>

<script>
import '../../fitness/js/jquery.min.js'
export default {
  name: 'scheduleObjective',
  created () {
    /* // jQuery
    let jquery = document.createElement('script')
    jquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js')
    document.head.appendChild(jquery) */
    // css spa
    let linkSpa = document.createElement('link')
    linkSpa.setAttribute('rel', 'stylesheet')
    linkSpa.setAttribute('type', 'text/css')
    linkSpa.setAttribute('href', 'https://cdn3.devexpress.com/jslib/17.2.7/css/dx.spa.css')
    document.head.appendChild(linkSpa)
    // css common
    let linkCommon = document.createElement('link')
    linkCommon.setAttribute('rel', 'stylesheet')
    linkCommon.setAttribute('type', 'text/css')
    linkCommon.setAttribute('href', 'https://cdn3.devexpress.com/jslib/17.2.7/css/dx.common.css')
    document.head.appendChild(linkCommon)
    // css dark
    let linkDark = document.createElement('link')
    linkDark.setAttribute('rel', 'stylesheet')
    linkDark.setAttribute('type', 'text/css')
    linkDark.setAttribute('href', 'https://cdn3.devexpress.com/jslib/17.2.7/css/dx.dark.compact.css')
    document.head.appendChild(linkDark)
    // dxall
    let dxall = document.createElement('script')
    dxall.setAttribute('src', 'https://cdn3.devexpress.com/jslib/17.2.7/js/dx.all.js')
    document.head.appendChild(dxall)
    // data
    let data = document.createElement('script')
    data.setAttribute('src', 'devExt/data.js')
    document.head.appendChild(data)
    // css style
    let linkStyle = document.createElement('link')
    linkStyle.setAttribute('rel', 'stylesheet')
    linkStyle.setAttribute('type', 'text/css')
    linkStyle.setAttribute('href', 'devExt/styles.css')
    document.head.appendChild(linkStyle)
    // index
    let index = document.createElement('script')
    index.setAttribute('src', 'devExt/index.js')
    document.head.appendChild(index)
  }
}
</script>

<style scoped>
  /* @import '~devextreme/dist/css/dx.spa.css';
  @import '~devextreme/dist/css/dx.common.css';
  @import '~devextreme/dist/css/dx.dark.compact.css'; */
</style>
