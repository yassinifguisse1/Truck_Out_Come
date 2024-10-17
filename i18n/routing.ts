// import {defineRouting} from 'next-intl/routing';
// import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
// export const routing = defineRouting({
//   // A list of all locales that are supported
//   locales: ['en', 'pl'],
 
//   // Used when no locale matches
//   defaultLocale: 'en'
// });
 
// // Lightweight wrappers around Next.js' navigation APIs
// // that will consider the routing configuration
// export const {Link, redirect, usePathname, useRouter} =
//   createSharedPathnamesNavigation(routing);

import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'pl'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/pathnames': {
      en: '/pathnames',
      pl: '/pfadnamen'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation(routing);