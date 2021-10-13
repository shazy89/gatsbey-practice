import React from 'react';
import Practice from './practice';
import { StaticImage } from 'gatsby-plugin-image';
import LayOut from '../../components/layout';

const PracticePage = () => {
  return (
    <LayOut pageTitle={'Practice Page'}>
      <Practice />
      <StaticImage
        alt="beautiful yellow flowers"
        src="https://res.cloudinary.com/dytheecsk/image/upload/v1622573155/gXQCELcnI2U_ye8u4u.jpg"
      />
    </LayOut>
  );
};

export default PracticePage;
