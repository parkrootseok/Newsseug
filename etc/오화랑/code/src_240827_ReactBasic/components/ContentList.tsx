import { Content } from '../types/content';
import ContentItem from './ContentItem';

interface ContentItemProps {
  contents: Content[];
  onMadeChange: (_id: number, isMade: boolean) => void;
  onDeleteClick: (_id: number) => void;
}

export default function ContentList({
  contents,
  onMadeChange,
  onDeleteClick,
}: Readonly<ContentItemProps>) {
  const sortMethod = (c1: Content, c2: Content) => {
    if (c1.isMade === c2.isMade) return c2._id - c1._id;
    return c1.isMade ? 1 : -1;
  };
  contents.sort(sortMethod);
  return (
    <>
      <div className='space-y-2'>
        {contents.map((content) => (
          <ContentItem
            content={content}
            key={content._id}
            onMadeChange={onMadeChange}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
      {contents.length === 0 && (
        <p className='text-center text-sm text-gray-500'> No Contents yet. Add a new One Above!</p>
      )}
    </>
  );
}
