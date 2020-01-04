import axios from '../axiosRequest'

export function login() {
  return axios
    .request({
      url: '/api/index.php',
      method: 'post',
      data:
                'FormID=5f7bfbf83c6cef1b02fe381ad7133a32897bcc9f&CompanyNameField=0&UserNameEntryField=admin&Password=cnc&SubmitUser=Login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
}

export function seat() {
  return axios
    .request({
      url: '/api/pos.php',
      method: 'post',
      data: 'FormID=&identifier=1577369548&action=allleases',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
}
