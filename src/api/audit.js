import request from '@/utils/request'

// 1.1、	获取SSH/Telnet审计接口
export function getSSHList(data) {
  return request({
    url: `/admin.php?controller=admin_interface&action=sessionList`,
    method: 'post',
    data: data
  })
}
