import React from 'react';

import * as style from './PageLayout.style';

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => (
  <style.Wrapper>
    <div className="content">{children}</div>
  </style.Wrapper>
);

export default PageLayout;
