import { DateTime } from '../node_modules/luxon/src/luxon.js';

const currentTime = DateTime.now().setZone('America/Argentina/Buenos_Aires');

export default currentTime;
