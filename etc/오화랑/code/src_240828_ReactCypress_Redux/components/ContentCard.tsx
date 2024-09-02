import { Content } from '../types/content';

interface ContentCardProps {
  content: Content;
}

export default function ContentCard({ content }: Readonly<ContentCardProps>) {
  return (
    <div className='group relative'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <img
          src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
          alt='Front of men&#039;s Basic Tee in black.'
          className='h-full w-full object-center lg:h-full lg:w-full'
        />
      </div>

      <div className='border rounded border-gray-400 bg-white hover:bg-red-300'>
        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-sm text-gray-700'>
              <a href='#'>
                <span
                  data-test-id={`content-${content._id}`}
                  aria-hidden='true'
                  className='absolute inset-0'></span>
                {content.contentTitle}
              </a>
            </h3>
            <p className='mt-1 text-sm text-gray-500'>{content.description}</p>
          </div>
          <p className='text-sm font-medium text-gray-900'>{content.duration}분</p>
        </div>
      </div>
    </div>
  );
}
