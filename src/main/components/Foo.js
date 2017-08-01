import React from 'react';
// the simplest react component (is a function)
const Foo = () => <p>Foo stuff stuff</p>;
export default Foo;

// NOTE: trying to make the above a one-liner causes issues.
// export default Foo = () => <p>Foo!</p>
// export default const Foo = () => <p>Foo Stuffy mcStuff</p>
