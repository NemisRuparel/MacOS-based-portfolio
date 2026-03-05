import React from 'react'
import WindowControls from '#components/WindowControls'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'

const Image = () => {
  const { windows } = useWindowStore();
  const win = windows.imgfile;

  const data = win?.data;
  if (!data) return null;

  const isMaximized = win?.isMaximized;

  return (
    <>
      <div
        id="window-header"
        className={`transition-all duration-200 ${
          isMaximized ? 'border-0 rounded-none' : 'border rounded-t-xl  '
        }`}
      >
        <WindowControls target="imgfile" />
        <h2 className="truncate">{data.name}</h2>
      </div>

      <div className="p-6 bg-[#1e1d22] h-full overflow-auto flex items-start justify-center">
        {(data.image || data.imageUrl) && (
          <img
            src={data.image || data.imageUrl}
            alt={data.name}
            className="max-w-full max-h-[80vh] object-contain rounded"
          />
        )}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(Image, 'imgfile')
export default ImageWindow
