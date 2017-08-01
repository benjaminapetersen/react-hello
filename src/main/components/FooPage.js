import React from 'react';

import Foo from './Foo';

export default class FooPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <p>Page: <strong>Foo</strong></p>
        <Foo />
      </div>
    )
  }
}
