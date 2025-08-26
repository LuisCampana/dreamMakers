import React from 'react';

interface BodyProps {
  children: React.ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <main className="bg-black">
      <div className="w-full">
        {children}
      </div>
    </main>
  );
};

export default Body; 