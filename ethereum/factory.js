import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json';

const instance is new web3.eth.Contract (
  JSON.parse(CampaignFactory.interface),
  //deployed address goes below '0x5555555...'/

);
export default instance;
