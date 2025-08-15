"use client";

import { Select } from 'radix-ui';
import { Desk, HotDesk, Suitcase } from '@/components/icons';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type SearchSelectOption = {
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const options: SearchSelectOption[] = [
  { value: "hot-desk", label: "Hot Desk", icon: HotDesk, description: "Flexible seating. Drop in and work anywhere." },
  { value: "dedicated-desk", label: "Dedicated Desk", icon: Desk, description: "Your own desk in a shared space -- stay set up." },
  { value: "private-office", label: "Private Office", icon: HotDesk, description: "Enclosed office for teams or individuals." },
  { value: "meeting-rooms", label: "Meeting Rooms", icon: HotDesk, description: "Bookable by hour. Fully equipped." },
  { value: "virtual-office", label: "Virtual Office", icon: HotDesk, description: "Professional address, mail handling & more." },
]

export const SearchSelect = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="text-lg w-full bg-gray-2 rounded-full"
    >
      <Select.Root
        open={open}
        onOpenChange={setOpen}
      >
        <Select.Trigger
          className={`data-[placeholder]:text-gray-6 ${open ? "outline-primary-200 outline-2" : ""} gap-3 items-center text-lg cursor-pointer w-full px-5 p-4 bg-gray-2 flex justify-start rounded-full focus:outline-primary-200 focus:outline-2`}
        >
          <Suitcase className='text-gray-6' />

          <div className='flex flex-grow'>
            <Select.Value
              className="flex flex-grow w-full"
              placeholder="Select workspace type" />
          </div>

          <ChevronDown className={`text-gray-6 transition-transform duration-150 ease-in-out items-center ${open ? "rotate-180" : "rotate-0"}`} size={34} strokeWidth={1.5} />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="flex mt-2 border border-gray-3 shadow-sm flex-col w-[var(--radix-select-trigger-width)] bg-gray-2 p-2 rounded-4xl"
            position="popper"
          >
            {options.map((option, index) => (
              <SearchSelectItem
                isFirst={index === 0}
                isLast={index === options.length - 1}
                key={option.value} option={option} />
            ))}
          </Select.Content>
        </Select.Portal>
      </Select.Root >
    </div>
  )
}

const SearchSelectItem = ({ option, isFirst, isLast }: { option: SearchSelectOption, isFirst: boolean, isLast: boolean }) => {
  const borderRadius = isFirst ? "rounded-t-4xl" : (isLast && "rounded-b-4xl");

  return (
    <Select.Item key={option.value} value={option.value} className={`p-2 transition-colors duration-50 ease-in rounded flex items-center gap-3 w-full data-[highlighted]:outline-none hover:bg-gray-3 px-4 cursor-pointer outline-none ${borderRadius}`}>
      <option.icon className="text-primary-300" width={16} height={16} />
      <div className="flex flex-col">
        <Select.ItemText className="font-bold">{option.label}</Select.ItemText>
        <span className="text-sm text-gray-7">{option.description}</span>
      </div>
    </Select.Item>
  )
}
