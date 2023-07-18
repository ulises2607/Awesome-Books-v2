// Import necessary elements
// import { DateTime } from "../../../node_modules/luxon/src/luxon.js";
import { DateTime } from '../../../node_modules/luxon/src/luxon.js';

const currentTime = DateTime.now().setZone('America/Argentina/Buenos_Aires');

export default currentTime;
// Function to display the current date and time
// export const dateTime = () => {
// Get the current time in Buenos Aires timezone
//   const currentTime = DateTime.now().setZone('America/Argentina/Buenos_Aires');

// Format the time
//   const formatedTime = currentTime.toFormat("MMMM d yyyy',' hh:mm:ss a");

// Display the time in the 'set-time' element
//   const elementTime = document.getElementById('current-date');
//   elementTime.innerText = formatedTime;
// };