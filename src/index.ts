import * as classNames from 'classnames';

import {
	StatelessComponent,
	Children,
	ReactElement,
	cloneElement,
} from 'react';

/* Types from https://github.com/DefinitelyTyped/DefinitelyTyped */

type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;

interface ClassDictionary {
	[id: string]: boolean | undefined | null;
}

interface ClassArray extends Array<ClassValue> {}

export type ClassNameHOCProps = {
	children: ReactElement<{
		className?: string;
	}>;
};

export interface ClassNameHOCFunction {
	(...classes: ClassValue[]): StatelessComponent<ClassNameHOCProps>;
}

export const classNameHOC: ClassNameHOCFunction = (...classes) => ({ children }) => {
	if (!children) {
		return null;
	}
	const child = Children.only(children);
	const clone = cloneElement(child, {
		className: classNames(child.props.className, classes),
	});
	return clone;
};
