import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addContents, fetchContents } from '../data/info';
import ContentCard from './ContentCard';
import { useState } from 'react';

export default function DemoQuery() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState('');
  const [contentTitle, setTitle] = useState('');
  const { data: contents, isLoading } = useQuery({
    queryFn: () => fetchContents(search),
    queryKey: ['contents', { search }],
    staleTime: Infinity,
  });

  const { mutateAsync: addContentsMutation } = useMutation({
    mutationFn: addContents,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contents'] });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 data-test-id='cypress_title'>Cypress Tutorial</h1>
      <div>
        <input type='text' onChange={(e) => setTitle(e.target.value)} value={contentTitle} />
        <button
          onClick={async () => {
            try {
              await addContentsMutation({ contentTitle });
              setTitle('');
            } catch (e) {
              console.error(e);
            }
          }}>
          Add Content
        </button>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {contents?.map((content) => {
          return <ContentCard key={content._id} content={content} />;
        })}
      </div>
    </div>
  );
}
