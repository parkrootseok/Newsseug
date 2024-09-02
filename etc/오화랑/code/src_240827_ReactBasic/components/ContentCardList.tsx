import { Content } from '../types/content';

interface ContentsCardProps {
  contents: Content[];
}

export default function ContentCardList({ contents }: Readonly<ContentsCardProps>) {
  return (
    <div className='space-y-2 bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='mt-6 grid gird-cols'>
          {contents.map((content) => (
            <ContentCard key={content._id} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}
