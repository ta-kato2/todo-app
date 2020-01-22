// Root.d.ts

import * as ios from './Root.ios';
import * as android from './Root.android';
import * as web from './Root.web';

declare var _tmp: typeof ios;
declare var _tmp: typeof android;
declare var _tmp: typeof web;

export * from './Root.ios';
