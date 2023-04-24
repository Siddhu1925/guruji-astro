import React from 'react';
import Skeleton from 'react-loading-skeleton';

function SkeltonLoading(props) {
  const { count, height, width } = props;

  return (
    <div>
      <Skeleton count={count} height={height} width={width} />
    </div>
  );
}

export default SkeltonLoading;