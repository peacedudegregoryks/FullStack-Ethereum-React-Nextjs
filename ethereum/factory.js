import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xFF90935E7889ba030a72d26616c87543656639c5'
);

export default instance;
