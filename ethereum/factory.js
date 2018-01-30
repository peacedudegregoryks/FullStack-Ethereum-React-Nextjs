import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6f45a57a772cDC9Debf41fC17547758FFc0E8E97'
);

export default instance;
