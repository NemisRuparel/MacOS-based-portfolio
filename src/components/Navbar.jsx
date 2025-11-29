import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";

const Navbar = () => {
  const [time, setTime] = useState(dayjs().format("ddd MMM D h:mm A"));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format("ddd MMM D h:mm:s A"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Nemis's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <p>{time}</p>
      </div>
    </nav>
  );
};

export default Navbar;
