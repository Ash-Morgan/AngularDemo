export class UserInfo {
  userid: string;
  username: string;
  userpwd: string;
  uname: string;
  usex: string;
  ucardid: string;
  ubirthdate: string;
  uphone: string;
  ustate: number;

  constructor(){
  }

  toString(): string {
    return "userid:" + this.userid +
      ",username:" + this.username +
      ",userpwd:" + this.userpwd +
      ",uname:" + this.uname +
      ",usex:" + this.usex +
      ",ucardid:" + this.ucardid +
      ",ubirthdate:" + this.ubirthdate +
      ",uphone:" + this.uphone +
      ",ustate:" + this.ustate;
  }
}
