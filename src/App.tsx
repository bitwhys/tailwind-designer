import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import clsx from 'clsx'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { CodeBlock, HouseLine, Palette, PenNib } from '@phosphor-icons/react'
import SelectMenu from './components/SelectMenu'
import MobileMenuDialog from './components/MobileMenuDialog'
import SideNav from './components/SideNav'
import SidePanel from './components/SidePanel'
import TailwindOfficialTypographyTemplate from './templates/TailwindOfficialTypographyTemplate'
import ButtonGroup from './components/ButtonGroup'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <MobileMenuDialog />
      <div className="flex h-full">
        {/* Static sidebar for desktop */}
        <SideNav />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          {/* Mobile top navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-teal-600 py-2 px-4 sm:px-6 lg:px-8">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  alt="Your Company"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <main className="flex flex-1 overflow-hidden">
            {/* Primary column */}
            <section
              aria-labelledby="primary-heading"
              className="flex h-full min-w-0 flex-1 flex-col overflow-y-hidden lg:order-last"
            >
              <h1 id="primary-heading" className="sr-only">
                Account
              </h1>
              {/* Your content */}
              <div className="grid grid-rows-[64px_1fr_72px] h-full">
                <header className="bg-white border-b border-neutral-6 py-2 px-3">
                  <div className="flex w-full h-full items-center justify-center">
                    <ButtonGroup />
                  </div>
                </header>
                <div className="relative grow overflow-y-auto py-8">
                  <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                  <div className="shadow-md isolate  bg-white p-6 max-w-[960px] mx-auto">
                    <TailwindOfficialTypographyTemplate />
                  </div>
                </div>
                <div className="bg-white border-t border-neutral-6"></div>
              </div>
            </section>

            {/* Secondary column (hidden on smaller screens) */}
            <SidePanel />
          </main>
        </div>
      </div>
    </>
  )
}
