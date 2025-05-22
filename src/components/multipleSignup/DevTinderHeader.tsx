import React from 'react';
import { Code, CodeXml } from 'lucide-react';

export const DevTinderHeader: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mb-3">
        <div className="flex items-center gap-2">
          <Code className="text-blue-500" size={28} />
          <h1 className="text-3xl font-bold text-blue-400">DevTinder</h1>
          <CodeXml className="text-blue-500" size={28} />
        </div>
      </div>

      <h2 className="text-pink-400 text-sm italic mt-2 mb-4 text-center">
        {"</>"} Where your heart finds a merge request 💖
      </h2>
    </>
  );
};