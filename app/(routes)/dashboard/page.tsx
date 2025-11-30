import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex gap-2">
      <Link href="/dashboard/customers">Customers</Link>
      <Link href="/dashboard/invoices">Invoices</Link>
    </div>
  ) 
}
