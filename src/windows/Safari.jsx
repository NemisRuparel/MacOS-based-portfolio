import WindowControls from '#components/WindowControls'
import { blogPosts } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { ChevronLeft, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react'
import React from 'react'
import useWindowStore from '#store/window'

const Safari = () => {
  const { windows } = useWindowStore();
  const isMaximized = windows.safari?.isMaximized;

  return (
    <>
      <div
        id="window-header"
        className={`
          transition-all duration-200
          ${isMaximized ? "border-0 rounded-none" : "border rounded-t-xl"}
        `}
      >
        <WindowControls target="safari" />

        <PanelLeft className='ml-10 icon'/>

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className='icon'/>
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className='icon'/>

          <div className="search">
            <Search className='icon'/>
            <input 
              type="text"
              placeholder='Search or enter website name '
              className='flex-1'
            />
          </div>
        </div>

        <div className="flex item-center gap-5">
          <Share className='icon'/>
          <Plus className='icon'/>
          <Copy className='icon'/>
        </div>
      </div>

      <div className="blog">
        <h2>My Blogs</h2>

        <div className="space-y-8">
          {blogPosts.map(({ id, image, title, date, link, comingSoon }) => (
            <div key={id} className='blog-post'>
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>

              <div className="content">
                <p>{date}</p>
                <h1>{title}</h1>

                <a
                  href={comingSoon ? "#" : link}
                  onClick={(e) => {
                    if (comingSoon) {
                      e.preventDefault()
                      alert("Coming soon!")
                    }
                  }}
                  target={comingSoon ? "" : "_blank"}
                  rel="noopener noreferrer"
                >
                  Check out the full post 
                  <MoveRight className='icon-hover-right bg-transparent' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
