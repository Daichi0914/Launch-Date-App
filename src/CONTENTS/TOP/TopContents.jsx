import React from 'react';
import TrendList from './TOP_LIST/TrendList';
import ReleaseList from './TOP_LIST/ReleaseList';
import WorksList from './TOP_LIST/WorksList';

const TopContents = ({ contents }) => {
  if (contents === 'trend') {
    return <TrendList />;
  }
  if (contents === 'release') {
    return <ReleaseList />;
  }
  if (contents === 'works') {
    return <WorksList />;
  }
};

export default TopContents;
