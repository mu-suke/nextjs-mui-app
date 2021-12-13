export interface MenuItem {
  name: string
  href?: string
  onClick?: () => void
}

export const menuItem = [
  {
    name: 'マイページ',
    href: '/myPage',
  },
  {
    name: 'ログアウト',
    onClick: () => {
      console.log('logout clicked')
    },
  },
]
