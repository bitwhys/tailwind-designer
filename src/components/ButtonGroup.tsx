import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Desktop, DeviceMobile, DeviceTablet } from '@phosphor-icons/react'

export type ButtonGroupProps = {}

const ButtonGroup = ({}: ButtonGroupProps) => {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-primary-8 ring-1 ring-inset ring-neutral-6 hover:bg-neutral-3 focus:z-10"
      >
        <span className="sr-only">Desktop</span>
        <Desktop size={28} weight="duotone" />
      </button>
      <button
        type="button"
        className="relative inline-flex items-center  bg-white px-2 py-2 text-neutral-7 ring-1 ring-inset ring-neutral-6 hover:bg-neutral-3 focus:z-10"
      >
        <span className="sr-only">Tablet</span>
        <DeviceTablet size={28} weight="duotone" />
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-neutral-7 ring-1 ring-inset ring-neutral-6 hover:bg-neutral-3 focus:z-10"
      >
        <span className="sr-only">Mobile</span>
        <DeviceMobile size={28} weight="duotone" />
      </button>
    </span>
  )
}

export default ButtonGroup
