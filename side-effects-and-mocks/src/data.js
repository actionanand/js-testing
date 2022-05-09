import writeData from './util/io.js';

export function generateReportData(logFn) {
  const todaySdate = "Today's date is " + new Date().toUTCString().slice(5, 16) + '.';
  const todayStime = 'And local time is ' + new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) + '.';
  const data = `Hello world! ${todaySdate} ${todayStime}`;
  
  if (logFn) {
    logFn(data);
  }

  return data;
}

export async function storeData(data) {
  if (!data) {
    throw new Error('No data received!');
  }
  await writeData(data, 'data.txt');
}
