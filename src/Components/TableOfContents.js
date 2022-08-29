import React from 'react';
import { useHeadingsData, useIntersectionObserver, Headings } from './../App';

export const TableOfContents = () => {
  const [activeId, setActiveId] = React.useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav aria-label="Table of contents">
        <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};
export default TableOfContents;