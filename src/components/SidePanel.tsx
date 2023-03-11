import { RadioGroup } from '@headlessui/react'
import React, { useState } from 'react'
import SelectMenu from './SelectMenu'
import clsx from 'clsx'

export type SidePanelProps = {}
const colors = [
  { name: 'Gray', class: 'bg-gray-500', selectedClass: 'ring-neutral-11' },
  { name: 'Slate', class: 'bg-slate-500', selectedClass: 'ring-neutral-11' },
  { name: 'Zinc', class: 'bg-zinc-500', selectedClass: 'ring-neutral-11' },
  {
    name: 'Neutral',
    class: 'bg-neutral-500',
    selectedClass: 'ring-neutral-11',
  },
  { name: 'Stone', class: 'bg-stone-500', selectedClass: 'ring-neutral-11' },
]

const sizes = [
  { name: 'SM', inStock: true },
  { name: 'BASE', inStock: true },
  { name: 'LG', inStock: true },
  { name: 'XL', inStock: true },
  { name: '2XL', inStock: true },
]
const SidePanel = ({}: SidePanelProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedSize, setSelectedSize] = useState(sizes[2])
  return (
    <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
      <div className="relative flex h-full w-72 flex-col overflow-y-auto border-r border-neutral-6 bg-white p-6">
        {/* Your content */}
        <form className="mt-10 flex flex-col gap-y-7 divide-y divide-neutral-6">
          {/* Fonts */}
          <div className="pt-2">
            <h3 className="text-sm font-medium text-primary-12">Fonts</h3>
            <div className="mt-2 flex flex-col gap-y-3">
              <SelectMenu label="Heading" />
              <SelectMenu label="Body" />
            </div>
          </div>
          {/* Gray Scale */}
          <div className="pt-2">
            <h3 className="text-sm font-medium text-primary-12">Gray Scale</h3>

            <RadioGroup
              value={selectedColor}
              onChange={setSelectedColor}
              className="mt-4"
            >
              <RadioGroup.Label className="sr-only">
                {' '}
                Choose a color{' '}
              </RadioGroup.Label>
              <div className="flex items-center space-x-3">
                {colors.map(color => (
                  <RadioGroup.Option
                    key={color.name}
                    value={color}
                    className={({ active, checked }) =>
                      clsx(
                        color.selectedClass,
                        active && checked ? 'ring ring-offset-1' : '',
                        !active && checked ? 'ring-2' : '',
                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                      )
                    }
                  >
                    <RadioGroup.Label as="span" className="sr-only">
                      {' '}
                      {color.name}{' '}
                    </RadioGroup.Label>
                    <span
                      aria-hidden="true"
                      className={clsx(
                        color.class,
                        'h-8 w-8 rounded-full border border-black border-opacity-10'
                      )}
                    />
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Type Scale */}
          <div className="pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-primary-12">
                Type Scale
              </h3>
              <a
                href="#"
                className="text-xs font-medium text-primary-10 hover:text-primary-8"
              >
                Size guide
              </a>
            </div>

            <RadioGroup
              value={selectedSize}
              onChange={setSelectedSize}
              className="mt-4"
            >
              <RadioGroup.Label className="sr-only">
                {' '}
                Choose a size{' '}
              </RadioGroup.Label>
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                {sizes.map(size => (
                  <RadioGroup.Option
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className={({ active }) =>
                      clsx(
                        size.inStock
                          ? 'cursor-pointer bg-white text-primary-11 shadow-sm'
                          : 'cursor-not-allowed bg-zinc-50 text-neutral-9',
                        active ? 'ring-2 ring-primary-8' : '',
                        'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-zinc-50 focus:outline-none sm:flex-1 '
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <RadioGroup.Label as="span">
                          {size.name}
                        </RadioGroup.Label>
                        {size.inStock ? (
                          <span
                            className={clsx(
                              active ? 'border' : 'border-2',
                              checked
                                ? 'border-primary-8'
                                : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-md'
                            )}
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-neutral-6"
                          >
                            <svg
                              className="absolute inset-0 h-full w-full stroke-2 text-neutral-11"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              stroke="currentColor"
                            >
                              <line
                                x1={0}
                                y1={100}
                                x2={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </aside>
  )
}

export default SidePanel
