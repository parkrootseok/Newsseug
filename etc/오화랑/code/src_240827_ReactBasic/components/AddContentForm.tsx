import { useState } from 'react';

interface AddContentFormProps {
  onSubmit: (contentTitle: string) => void;
}

export default function AddContentForm({ onSubmit }: AddContentFormProps) {
  // Type이 string으로 추론되고 있다.
  const [input, setInput] = useState('');
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // HTML Submit의 Default Behavior를 제한
    if (!input.trim()) return;
    onSubmit(input);
    setInput('');
  }
  return (
    <form className='flex' onSubmit={submitHandler}>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder='어떤 Contents를 추가하실래요?'
        className='rounded-s-md grow border border-gray-400 p-2'
      />
      <button
        type='submit'
        className='w-16 rounded-e-md bg-slate-900 text-white
        hover:bg-slate-800'>
        Add
      </button>
    </form>
  );
}
