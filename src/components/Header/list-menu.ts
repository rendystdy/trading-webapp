export interface IListMenu {
  title: string,
  href: string,
  subMenu?: { title: string; href: string; }[] | null
}

const LIST_SUB_MENU: { title: string; href: string; }[] = [
  {
    title: "Announcement",
    href: "announcement",
  },
  {
    title: "Calendar",
    href: "/",
  },
  {
    title: "Currency",
    href: "/",
  },
]

export const LIST_MENU: IListMenu[] = [
  {
    title: 'Home',
    href: '/',
    subMenu: null
  },
  {
    title: 'Product',
    href: '/',
    subMenu: LIST_SUB_MENU
  },
  {
    title: 'Education',
    href: '/',
    subMenu: LIST_SUB_MENU
  },
  {
    title: 'News',
    href: '/',
    subMenu: LIST_SUB_MENU
  },
  {
    title: 'About',
    href: '/',
    subMenu: LIST_SUB_MENU
  }
]