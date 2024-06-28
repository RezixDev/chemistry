import { PeriodicTable } from '../components/periodic-table';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold my-4'>Chemistry Learning App</h1>
      <PeriodicTable />
    </div>
  );
}
