import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const [time, setTime] = useState(dayjs().format("ddd MMM D h:mm A"));

  const { openWindow } = useWindowStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format("ddd MMM D h:mm:s A"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    
    <nav>
      <div>
        <img src="/images/apple.png" alt="logo" className="h-6 "/>
        <p className="font-bold">Nemis's Portfolio</p>

      <ul>
  {navLinks.map(({ id, name, type }) => (
    <li
      key={id}
      onClick={() => openWindow(type)}
      className="cursor-pointer hover:underline transition-all text-sm"
    >
      {name}
    </li>
  ))}
</ul>

      </div>

      <div>
        <ul>
  {navIcons.map(({ id, img }) => (
    <li key={id}>
      <div
        className="icon-hover"
        style={{ WebkitMaskImage: `url(${img})`, maskImage: `url(${img})` }}
      ></div>
    </li>
  ))}
</ul>


        <p>{time}</p>
      </div>
    </nav>
  );
};

export default Navbar;
