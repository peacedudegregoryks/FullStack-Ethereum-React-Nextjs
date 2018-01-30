import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xDDB0c951F9E961bD6C1D8be0DBD31f711c0084Dc'
);

export default instance;
