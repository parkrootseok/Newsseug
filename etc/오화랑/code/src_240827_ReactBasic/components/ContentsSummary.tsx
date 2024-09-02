import { Content } from '../types/content';

interface ContentsSummaryProps {
  contents: Content[];
  deleteAllMade: () => void;
}

export default function ContentsSummary({
  contents,
  deleteAllMade,
}: Readonly<ContentsSummaryProps>) {
  const madeContents = contents.filter((content) => content.isMade);

  return (
    <div className='text-center space-y-2'>
      <p className='text-sm font-medium'>
        {madeContents.length} / {contents.length} Contents Completed
      </p>
      {madeContents.length > 0 && (
        <button
          onClick={deleteAllMade}
          className='text-red-500 text-sm font-medium hover:underline'>
          Delete All Made
        </button>
      )}
    </div>
  );
}
