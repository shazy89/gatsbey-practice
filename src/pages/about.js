import React from 'react';
import LayOut from '../components/layout';
import { graphql } from 'gatsby';
const About = (props) => {
  return (
    <div>
      <LayOut pageTitle={'About Page'}>This is the about page</LayOut>
    </div>
  );
};

export const query2 = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default About;
