import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props) => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#bfbfbf"
      foregroundColor="#cfcfcf"
      {...props}>
      <rect x="0" y="265" rx="10" ry="10" width="280" height="27" />
      <circle cx="140" cy="130" r="125" />
      <rect x="0" y="312" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="429" rx="10" ry="10" width="91" height="27" />
      <rect x="128" y="420" rx="20" ry="20" width="152" height="45" />
    </ContentLoader>
  </div>
);

export default Skeleton;
