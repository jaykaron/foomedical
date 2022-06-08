import { XIcon } from '@heroicons/react/solid';
import { Button } from '@medplum/react';

interface InfoSectionProps {
  title: string | JSX.Element;
  children: JSX.Element;
  onButtonClick?: (id: string) => void;
  resourceType?: string;
  id?: string;
}

const InfoSection = ({ title, children, onButtonClick, id = '' }: InfoSectionProps): JSX.Element => {
  return (
    <div className="mb-10 overflow-hidden border bg-white sm:rounded-md">
      <div
        className={`border-b border-gray-100 bg-gray-100 px-4 py-5 sm:px-6 ${
          onButtonClick ? 'flex justify-between' : ''
        }`}
      >
        <h3 className="text-lg leading-6 text-gray-500">{title}</h3>
        {onButtonClick && (
          <Button onClick={() => onButtonClick(id)}>
            <XIcon className="h-6 w-6 self-center text-gray-400 hover:text-red-700" />
          </Button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InfoSection;
