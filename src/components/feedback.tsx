import React from 'react';

interface Props {
  // Define your component's props here
}

const FeedbackBtn: React.FC<Props> = () => {
  return (
    <div>
      <button className='fixed right-0 top-1/2' style={{ zIndex: '9000' }}>
        <img
          src='https://resources.digital-cloud-west.medallia.com/wdcwest/469337/resource-library/image/1689234064018_20230131_fi_samsung_alwayson_feedback_tag.png'
          alt='Feedback btn'
        />
      </button>
    </div>
  );
};

export default FeedbackBtn;
