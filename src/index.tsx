
import Button from './components/Button'
import type {
  ComponentProps as PearButtonProps,
} from './components/Button'

import VLayout from './components/Layout/V'
import type {
  ComponentProps as PearVLayoutProps,
} from './components/Layout/V'

import HLayout from './components/Layout/H'
import type {
  ComponentProps as PearHLayoutProps,
} from './components/Layout/H'

const Layout = {
  V: VLayout,
  H: HLayout,
}

const Pear = {
  Button,
  Layout,
}

export const PearButton = Button
export const PearLayut = Layout

export default Pear
export type {
  PearButtonProps,
  PearHLayoutProps,
  PearVLayoutProps,
}
