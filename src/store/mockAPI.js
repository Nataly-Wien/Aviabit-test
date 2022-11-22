import {mocks} from '../mock';

export const getAsyncMockData = async () => {
  const myData = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(JSON.stringify(mocks)), 500)
  });

  return myData;
};
