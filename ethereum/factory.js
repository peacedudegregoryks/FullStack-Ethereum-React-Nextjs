import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8d9b526C683214905EC89bDE5e88eaAaC6cA11bb'
);

export default instance;
