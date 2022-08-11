import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';

const Error = () => {
  const router = useRouter();
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle('404 - Page Not Found');
  }, [])
  return (
    <div className="p-4 flex justify-center items-center flex-col">
      <h4 className="text-3xl mb-4">
        <span className="text-red-500">404 not found</span> -{' '}
        <span className="text-blue-500"> are your lose you way?</span>
      </h4>
      <button
        className="bg-green-900 text-white roundex py-4 px-4"
        onClick={() => router.push('/')}
      >
        Return Home.
      </button>
    </div>
  );
};

Error.layoutProps = { title: '404', description: 'Not found page' };

export default Error;
