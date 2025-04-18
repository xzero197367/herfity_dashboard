import { ColumnDef } from '@tanstack/react-table'
import { MainTable } from './main_table/main_table'
import { createSortableMainTableColumn } from './main_table/main_table_column'
import { createSelectColumn } from './main_table/main_table_select_column'

type Order = {
  id: string
  name: string
  order_date: string
  order_type: string
  tracking_id: string
  action: string
  status: string
}

const data: Order[] = [
  {
    id: '1',
    name: 'John Doe',
    order_date: '1/1/2023 12:00 AM',
    order_type: 'Home Delivery',
    tracking_id: '123456',
    action: 'Completed',
    status: 'Completed',
  },
  {
    id: '2',
    name: 'Jane Smith',
    order_date: '1/1/2023 12:00 AM',
    order_type: 'Home Delivery',
    tracking_id: '123456',
    action: 'Completed',
    status: 'Completed',
  },
  // Add more data as needed
]

const columns: ColumnDef<Order>[] = [
  createSelectColumn<Order>(),
  createSortableMainTableColumn<Order>('Customer Name', 'name'),
  createSortableMainTableColumn<Order>('Order Date', 'order_date'),
  createSortableMainTableColumn<Order>('Order Type', 'order_type'),
  createSortableMainTableColumn<Order>('Tracking ID', 'tracking_id'),
  createSortableMainTableColumn<Order>('Action', 'action', (cell) => {
    return (
      <span className='bg-green-500/80 text-white p-2 font-bold rounded-lg'>
        {cell.getValue()}
      </span>
    )
  }),
  createSortableMainTableColumn<Order>('Status', 'status', (cell) => {
    return (
      <span className='bg-green-500/60 text-white p-2 font-bold rounded-lg'>
        {cell.getValue()}
      </span>
    )
  }),
]

export function OrdersTable() {
  return <MainTable title='Orders' data={data} columns={columns} />
}
