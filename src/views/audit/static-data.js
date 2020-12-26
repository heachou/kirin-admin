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
    width: '100'
  }, {
    label: '真实姓名',
    prop: 'realname',
    width: '120'
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
    width: '90',
    formatter: (row, column, cellValue, index) => {
      return Number(cellValue).toFixed(1)
    }
  }
]

export const sftbTableColumns = [
  {
    label: '来源地址',
    prop: 'cli_addr',
    width: '180'
  }, {
    label: '目的地址',
    prop: 'addr',
    width: '140'
  }, {
    label: '运维',
    prop: 'luser',
    width: '100'
  }, {
    label: '真实姓名',
    prop: 'realname',
    width: '120'
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
  }
]

// scp table column
export const scpTableColumns = [
  {
    label: '来源地址',
    prop: 'cli_addr',
    width: '180'
  }, {
    label: '目的地址',
    prop: 'addr',
    width: '140'
  }, {
    label: '运维',
    prop: 'luser',
    width: '100'
  }, {
    label: '真实姓名',
    prop: 'realname',
    width: '120'
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
  }
]
// rdp
export const rdpTableColumns = [
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
    width: '100'
  }, {
    label: '真实姓名',
    prop: 'realname',
    width: '120'
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
    prop: 'filesize',
    width: '90',
    formatter: (row, column, cellValue, index) => {
      return Number(cellValue / 1000).toFixed(1)
    }
  }
]

// process
export const processTableColumns = [
  {
    label: '选',
    prop: 'cli_addr',
    width: '180'
  }, {
    label: '申请人',
    prop: 'addr',
    width: '140'
  }, {
    label: '申请时间',
    prop: 'type',
    width: '60'
  }, {
    label: '设备ip',
    prop: 'luser',
    width: '100'
  }, {
    label: '用户名',
    prop: 'realname',
    width: '120'
  }, {
    label: '登录方式',
    prop: 'user',
    width: '110'
  }, {
    label: '操作内容',
    prop: 'start',
    width: '170'
  }, {
    label: '描述',
    prop: 'end',
    width: '170'
  }, {
    label: '流程状态',
    prop: 'filesize',
    width: '90'
  }
]

// 应用审计
export const appListTableColumns = [
  {
    label: '服务器ip',
    prop: 'ip',
    width: '180'
  }, {
    label: '来源地址',
    prop: 'cli_addr',
    width: '140'
  }, {
    label: '应用名称',
    prop: 'type',
    width: '120'
  }, {
    label: '登录用户',
    prop: 'luser',
    width: '100'
  }, {
    label: '真实姓名',
    prop: 'realname',
    width: '120'
  }, {
    label: '开始时间',
    prop: 'user',
    width: '110'
  }, {
    label: '结束时间',
    prop: 'start',
    width: '170'
  }
]
