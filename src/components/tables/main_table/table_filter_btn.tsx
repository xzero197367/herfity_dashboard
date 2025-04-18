import { Button } from '@/components/ui/button'
import { Filter } from 'lucide-react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import { Checkbox } from '@/components/ui/checkbox'

export function TableFilterButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={'outline'}>
          <Filter className='text-gray-400' />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-72 p-4 space-y-3'>
        <h1 className='text-l font-bold'>Filter</h1>

        <div className='text-gray-600'>
          <h1 className='text-xs'>Order Type</h1>
          <div className='flex flex-row justify-between'>
            <div className='space-x-2 align-top'>
              <Checkbox
                value={'Paid'}
                className='accent-green-600 dark:accent-green-600 bg-blue-500'
              />
              <label htmlFor='paid'>Home Delivery</label>
            </div>

            <div className='space-x-2 align-top'>
              <Checkbox value={'Paid'} />
              <label htmlFor='paid'>Pick Up</label>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
