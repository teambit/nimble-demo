import { ReactNode } from 'react';

/**
 * Action items are displayed in the header.
 * They are typically icons that link to a page,
 * but do not have to be a link. For instance, they may
 * open a modal, or trigger a dropdown.
 *
 */
export type PageHeaderMenuItemObject = {
  /** Used to avoid accidental conflicts when composing items */
  id: string;

  /** Will be displayed in the header as text */
  title: ReactNode;

  /** If href is present, item will be a link */
  href?: string;

  menuContent?: React.ReactNode;

  /** If provided, renders above the title */
  icon?: React.ReactNode;
};