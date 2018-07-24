import axios  from 'axios';

class DialogFlow {
  constructor(token) {
    if (!token) {
      console.warn('A token is needed');
      this.token = false;
    } else {
      this.token = token;
    }

    this.dflowUrl = 'https://api.dialogflow.com/v1/query?v=20150910';
    this.talk = this.talk.bind(this);
  }

  talk(sessionId, query) {
    if (!this.token || !sessionId || sessionId.trim() !== '') {
      return axios.post(this.dflowUrl,
        {
          query,
          sessionId,
          lang: "en",
        },
        {
          headers: {
            "Authorization": "Bearer " + this.token
          }
        })
    } else {
      return false;
    }
  }
}

export default DialogFlow;