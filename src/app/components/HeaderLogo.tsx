import Image from 'next/image';
import { FC } from 'react';

const HeaderLogo: FC = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <h1 className="text-3xl font-900 flex items-center gap-2">
        <div className="flex">
          <Image
            src="/rocket.svg"
            alt="Rocket icon"
            width={22}
            height={36}
            className="translate-y-[5px]" // keep vertical
            priority
          />
        </div>
        <div className="flex">
          <span className="text-header1">Todo</span>
          <span className="text-header2">App</span>
        </div>
      </h1>
    </div>
  );
};

export default HeaderLogo;