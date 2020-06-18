import React from 'react'
import TrendList from './TOP_CONTENTS/TrendList';
import ReleaseList from './TOP_CONTENTS/ReleaseList';
import WorksList from './TOP_CONTENTS/WorksList';

const TopContents = ({ contents }) => {
  if (contents === 'trend') {
    return <TrendList />
  }
  if (contents === 'release') {
    return <ReleaseList />
  }
  if (contents === 'works') {
    return <WorksList />
  }
}

export default TopContents;