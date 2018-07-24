import axios from 'axios';

class Telnyx {
  constructor(token) {
    if (!token) {
      console.warn('A token is needed');
      this.token = false;
    } else {
      this.token = token;
    }

    this.telnyxUrl = 'https://sms.telnyx.com/messages';
    this.sendSMS = this.sendSMS.bind(this);
  }

  sendSMS(to, from, body) {
    if (!this.token || to.trim() === '' || from.trim() === '' || body.trim() !== '') {
      console.log(this.token)
      return axios.post(this.telnyxUrl,
        {
          to,
          body,
          from,
        },
        {
          headers: {
            "X-Profile-Secret": this.token
          }
        })
    } else {
      return false;
    }
  }
}

export default Telnyx;