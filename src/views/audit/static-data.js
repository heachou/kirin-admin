export const sshTableColumns = [
  {
    label: '来源地址',
    prop: 'cli_addr',
    width: '180'
  }, {
    label: '设备地址',
    prop: 'addr',
    width: '140'
  }, {
    label: '类型',
    prop: 'type',
    width: '60'
  }, {
    label: '运维',
    prop: 'luser',
    width: '120'
  }, {
    label: '真实姓名',
    prop: 'realname',
    width: '140'
  }, {
    label: '本地',
    prop: 'user',
    width: '110'
  }, {
    label: '开始时间',
    prop: 'start',
    width: '170'
  }, {
    label: '结束时间',
    prop: 'end',
    width: '170'
  }, {
    label: '文件(K)',
    prop: 's_bytes',
    width: '100',
    formatter: (row, column, cellValue, index) => {
      return Number(cellValue).toFixed(1)
    }
  }
]
