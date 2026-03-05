import React from 'react'
import WindowControls from '#components/WindowControls'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'

const Text = () => {
  const { windows } = useWindowStore();
  const win = windows.txtfile;

  // If there's no data for the text file, render nothing
  const data = win?.data;
  if (!data) return null;

  const isMaximized = win?.isMaximized;

  return (
    <>
      <div
        id="window-header"
        className={`transition-all duration-200 ${
          isMaximized ? 'border-0 rounded-none' : 'border rounded-t-xl'
        }`}
      >
        <WindowControls target="txtfile" />
        <h2 className="truncate">{data.name}</h2>
      </div>

      <div className="p-6 bg-[#1e1d22] h-full overflow-auto ">
        { (data.image || data.imageUrl) && (
          <div className="mb-4">
            <img
              src={data.image || data.imageUrl}
              alt={data.name}
              className="max-w-full h-auto rounded"
            />
          </div>
        ) }

        { data.subtitle && (
          <p className="text-sm text-gray-400 font-bold mb-4">{data.subtitle}</p>
        ) }

        { Array.isArray(data.description) && (
          <div className="space-y-3 text-sm text-white">
            {data.description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) }
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile')
export default TextWindow
