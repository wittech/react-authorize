import * as React from 'react';
import Authorized from '../components/Authorized';
import {IOptions} from '../interface';

/**
 * Annotation
 *
 * @export
 * @template P
 * @param {IOptions} options
 * @returns
 */
export function secured<P = {}>(options: IOptions) {
  return (Component: React.SFC<P> | React.ComponentClass<P>) => (props: P) => (
    <Authorized
      {...options}
    >
      <Component {...props} />
    </Authorized>
  );
}
