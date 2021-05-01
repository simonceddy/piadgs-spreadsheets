export const titleColumns = [
  { key: 'title', name: 'Title' },
  { key: 'authors', name: 'Authors' },
  { key: 'subjects', name: 'Subjects' },
  { key: 'isbn', name: 'ISBN' },
  { key: 'callNumber', name: 'Call Number' },
  { key: 'cost', name: 'Cost' },
  { key: 'imprint', name: 'Imprint' },
  { key: 'accessionNumber', name: 'Accession Number' },
];

export const valueHandlers = {
  authors: (data) => (
    <span className="flex flex-col justify-start items-start">
      {data.map(({ id, surname, givenNames }) => (
        <span key={`author-${id}`}>
          {surname}{givenNames ? `, ${givenNames}` : null}
        </span>
      ))}
    </span>
  ),
  subjects: (data) => (
    <span className="flex flex-col justify-start items-start">
      {data.map(({ id, name }) => (
        <span key={`subject-${id}`}>{name}</span>
      ))}
    </span>
  ),
  titles: (data) => (
    <span className="flex flex-col justify-start items-start">
      {data.map(({ id, title }) => (
        <span key={`title-${id}`}>{title}</span>
      ))}
    </span>
  )
};

export const renderValue = (key, value) => (valueHandlers[key]
  ? valueHandlers[key](value)
  : value);
