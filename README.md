classname-hoc
=============


Installing
----------

```sh
$ npm install --save classname-hoc
```


Using
-----

`classNameHOC` is a function which takes one or more class names as an input and
returns a component class as an output. This component class will add the given
class names to any children it renders.

```tsx
import classNameHOC from 'classname-hoc';

const Rounded = classNameHOC('border-radius-10');

const element = (
	<Rounded>
		<div className="panel" />
	</Rounded>
);

// When rendered, the div will have a className prop of "panel border-radius-10"
```

Uses [`classNames`][classnames] under the hood so it can take the same
arguments.


[classnames]: https://github.com/JedWatson/classnames
