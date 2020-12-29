import { ErrorCommon } from '../../views/components/Error/ErrorCommon';

export const validateData = async (getData) => {
  const fetchedData = await getData();

  if (fetchedData.error || !fetchedData) return ErrorCommon.render(fetchedData.error);

  return fetchedData;
};
