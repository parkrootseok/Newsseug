import { Content } from '../types/content';
import { Trash2 } from 'lucide-react';

// 이 Component는 어떤 Argument를 받아내는가?
interface ContentItemProps {
  content: Content;
  // CallBack Function Type => void ( 반환형이 없는 Function )
  // Parent에서 어떤 값을 받아내야, 특정 Row를 변형할 수 있을까?
  // 특정 Row의 상태를 변화시키기 위한 _id와 isMade 상태값만 보내주면 된다.
  onMadeChange: (_id: number, isMade: boolean) => void;
  onDeleteClick: (_id: number) => void;
}

export default function ContentItem({
  content,
  onMadeChange,
  onDeleteClick,
}: Readonly<ContentItemProps>) {
  return (
    <div className='flex items-center gap-1'>
      <label className='flex items-center gap-2 border rounded p-2 border-gray-400 bg-white hover:bg-slate-50 grow'>
        <input
          type='checkbox'
          checked={content.isMade}
          onChange={(event) => onMadeChange(content._id, event.target.checked)}
          className='scale-125'
        />
        <span className={content.isMade ? 'line-through text-gray-400' : ''}>
          {content.contentTitle}
        </span>
      </label>
      <button className='p-2'>
        <Trash2 size={20} className='text-gray-400' onClick={() => onDeleteClick(content._id)} />
      </button>
    </div>
  );
}
