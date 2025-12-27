import WindowControls from '#components/WindowControls';
import { techStack } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper'
import { Check, Flag } from 'lucide-react';
import React from 'react'
import useWindowStore from '#store/window';

const Terminal = () => {
  const { windows } = useWindowStore();
  const isMaximized = windows.terminal?.isMaximized;

  return (
    <>
      <div
        id="window-header"
        className={`
          bg-[#36363B] transition-all duration-200
          ${isMaximized ? "border-0 rounded-none" : "border rounded-t-xl"}
        `}
      >
        <WindowControls target="terminal"/>
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className='font-bold'>@Nemis % </span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className='flex'>
              <Check className='check' size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}{i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>9 of 9 stacks loaded successfully</p>
          <div className="text-white">
            <p>
              <Flag size={15} fill='black' />
              Render time: 6ms
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');
export default TerminalWindow;
