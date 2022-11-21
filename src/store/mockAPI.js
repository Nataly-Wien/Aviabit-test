import {getMocks} from '../mock';

export const getAsyncMockData = async () => {
  const myData = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(JSON.stringify(getMocks())), 1000)
  });

  return myData;
};
