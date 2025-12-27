import WindowControls from '#components/WindowControls'
import WindowWrapper from '#hoc/WindowWrapper'
import { Search } from 'lucide-react'
import { locations } from "#constants/index"

import React from 'react'
import useLocationStore from '#store/location'
import clsx from 'clsx'
import useWindowStore from '#store/window'

const Finder = () => {

const {openWindow} = useWindowStore();
  const SIDEBAR_LOCATIONS = [
    locations.work,
    locations.about,
    locations.resume,
    locations.trash,
  ]

  const { activeLocation, setActiveLocation } = useLocationStore()
  const openItem = (item) => {
    if (item.fileType === "pdf") {
      return openWindow("resume");
    }
    if (item.kind === "folder") {
      return setActiveLocation(item);
    }
    if(['fig','url'].includes(item.fileType) && item.href){
      return window.open(item.href, "_blank")
    }
    openWindow(`${item.fileType}${item.kind}`,item)
  }


  const renderList = (title, items) => (
    <div className="sidebar-block">
      <h3 className="sidebar-title">{title}</h3>

      <ul className="sidebar-list">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              "sidebar-item",
              activeLocation?.id === item.id && "active"
            )}
          >
            <img src={item.icon} className="w-5" alt={item.name} />
            <p className="text-sm font-medium truncate text-white">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <>
      
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      
      <div className="bg-white flex h-full">

      
        <div className="sidebar">

          {renderList("Favorites", SIDEBAR_LOCATIONS)}

          
          {renderList("My Work", locations.work.children)}

        </div>

      
        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>

      </div>
    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder")
export default FinderWindow
