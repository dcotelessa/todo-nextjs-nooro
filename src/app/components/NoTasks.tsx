import Image from "next/image";
import { FC } from "react";

const NoTasks: FC = () => (
  <div className="flex flex-col items-center justify-center mt-8 border-t border-spacer">
    <div className="mb-6 mt-12">
      <Image
        src="/clipboard.svg"
        alt="Empty clipboard"
        width={56}
        height={56}
        priority
      />
    </div>
    <p className="text-base mb-6 font-700">You don&apos;t have any tasks registered yet.</p>
    <p className="text-base">Create tasks and organize your to-do items.</p>
  </div>
);

export default NoTasks;
