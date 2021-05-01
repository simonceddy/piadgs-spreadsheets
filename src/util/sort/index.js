export const sortPropAZ = (dataObjects = [], prop) => [...dataObjects].sort(
  (a, b) => (a[prop] || '').localeCompare(b[prop] || '')
);

export const sortPropNumeric = (dataObjects = [], prop) => [...dataObjects].sort(
  (a, b) => Number(a[prop] || 0) - Number(b[prop] || 0)
);

export const sortPropLength = (dataObjects = [], prop) => [...dataObjects].sort(
  (a, b) => (a[prop] || []).length - (b[prop] || []).length
);

export const flipDirection = (direction) => (
  direction === 'ASC' ? 'DESC' : 'ASC'
);
