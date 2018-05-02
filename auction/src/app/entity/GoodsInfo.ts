export class GoodsInfo {
  goodsid:number;
  guserid:number;
  gname:string;
  gstartaccount:number;
  ghighaccount:number;
  gcontent:string;
  gstartdate:string;
  genddate:string;
  goodstate:string;
  gtypeid:number;
  gstate:number;

  constructor(){}

  toString():string{
    return "goodsid:" + this.goodsid +
      ",guserid:" + this.guserid +
      ",gname:" + this.gname +
      ",gstartaccount:" + this.gstartaccount +
      ",ghighaccount:" + this.ghighaccount +
      ",gcontent:" + this.gcontent +
      ",gstartdate:" + this.gstartdate +
      ",genddate:" + this.genddate +
      ",goodstate:" + this.goodstate+
      ",gstate:"+this.gstate;
  }
}
