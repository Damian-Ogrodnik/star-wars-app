export const parseRequestURL = () => {
  const url = location.hash.slice(1).toLowerCase() || '/';
  const r = url.split('/').slice(1);

  const [resource, id, verb] = r;

  return { resource, id, verb };
};
