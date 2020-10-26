import React, {PropsWithChildren, ReactNode} from 'react';

/**
 * File: TabPane.tsx
 * @created 2020-10-22 01:18:30
 * @author trantien <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<TabPaneProps>>}
 */
function TabPane(props: PropsWithChildren<TabPaneProps>) {
  return <>{props.children}</>;
}

export interface TabPaneProps {
  title?: ReactNode;
}

TabPane.defaultProps = {
  //
};

TabPane.propTypes = {
  //
};

export default React.memo(TabPane);
