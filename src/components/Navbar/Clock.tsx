import  { useEffect, useState } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    });

    return () => clearInterval(interval);
  }, []);

  return <p className="clock text-xl text-white "> {currentTime.toLocaleTimeString()} MSC</p>
};

export default Clock;