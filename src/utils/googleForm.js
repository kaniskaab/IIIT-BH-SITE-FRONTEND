import React from 'react';

const MyForm = (props) => {
  const { formUrl, ht, wd } = props;

  return (
    <div>
      <iframe
        src={formUrl}
        width={wd}
        height={ht}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading...
      </iframe>
    </div>
  );
};

export default MyForm;
