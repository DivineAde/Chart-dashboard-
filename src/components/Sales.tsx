import React from 'react'
import { Overview } from './Chart'
import { ComboboxDemo } from './SalesComboBox'

type Props = {}

const Sales = (props: Props) => {
  return (
    <div className='flex flex-col bg-white dark:bg-[var(--background)] dark:border dark:border-gray-800  p-4 rounded-3xl'>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold'>Sales Trend</h1>
        <span className='font-semibold'>Short By: <ComboboxDemo /></span>
      </div>
      <div>
        <Overview />
      </div>
    </div>
  )
}

export default Sales