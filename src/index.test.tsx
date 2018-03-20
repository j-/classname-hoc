import * as React from 'react';
import { mount } from 'enzyme';
import { classNameHOC } from './index';

it('adds class name to children without a class name', () => {
	const Foobar = classNameHOC('foobar');
	const container = mount(
		<Foobar>
			<div />
		</Foobar>
	);
	expect(container.find('div').hasClass('foobar')).toBeTruthy();
});

it('adds class name to children with a class name', () => {
	const Foobar = classNameHOC('foobar');
	const container = mount(
		<Foobar>
			<div className="baz" />
		</Foobar>
	);
	expect(container.find('div').hasClass('foobar')).toBeTruthy();
	expect(container.find('div').hasClass('baz')).toBeTruthy();
});

it('can have falsy children', () => {
	const Foobar = classNameHOC('foobar');
	expect(() => {
		mount(
			<Foobar>
				{null}
			</Foobar>
		)
	}).not.toThrowError();
});
