import { useEffect, useState } from "react";
import "./Lava.scss"

const Lava = () => {
  const initialData = {
    circle1: { x: 400, y: 200, xSpeed: 0.2, ySpeed: 0.34 },
    circle2: { x: 600, y: 400, xSpeed: -0.5, ySpeed: 0.5 },
    circle3: { x: 800, y: 600, xSpeed: 0.3, ySpeed: 0.6 },
    circle4: { x: 1000, y: 500, xSpeed: -0.1, ySpeed: 0.6 },
    circle5: { x: 900, y: 300, xSpeed: -0.2, ySpeed: 0.3 },
    bounds: {
      minX: -150,
      minY: -150,
      maxX: window.innerWidth + 100,
      maxY: window.innerHeight + 100,
    },
  };
  
  const [data, setData] = useState(initialData);

  const updateCirclePosition = (circle) => {
    circle.x += circle.xSpeed;
    circle.y += circle.ySpeed;
    if (circle.x < data.bounds.minX) {
      circle.x = data.bounds.minX + Math.random() * 10;
      circle.xSpeed = Math.abs(circle.xSpeed);
    } else if (circle.x > data.bounds.maxX) {
      circle.x = data.bounds.maxX - Math.random() * 10;
      circle.xSpeed = -Math.abs(circle.xSpeed);
    }
    if (circle.y < data.bounds.minY) {
      circle.y = data.bounds.minY + Math.random() * 10;
      circle.ySpeed = Math.abs(circle.ySpeed);
    } else if (circle.y > data.bounds.maxY) {
      circle.y = data.bounds.maxY - Math.random() * 10;
      circle.ySpeed = -Math.abs(circle.ySpeed);
    }
    setData({ ...data, [circle]: circle });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      Object.keys(data).forEach(key => {
        if (key !== 'bounds') {
          updateCirclePosition(data[key]);
        }
      });
    }, 10);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="metaballs">
      <svg className="metasvg">
        <defs>
          <filter id="gooify" width="400%" x="-10%" height="400%" y="-150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
            />
          </filter>

          <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff1900" />
            <stop offset="100%" stopColor="#eec80c" />
          </linearGradient>
        </defs>

        <g filter="url(#gooify)">
          <circle
            className="blobb glow"
            fill="url(#lavaGradient)"
            cx={data.circle1.x}
            cy={data.circle1.y}
            r="170"
          />
          <circle
            className="blobb glow"
            fill="url(#lavaGradient)"
            cx={data.circle2.x}
            cy={data.circle2.y}
            r="90"
          />
          <circle
            className="blobb glow"
            fill="url(#lavaGradient)"
            cx={data.circle3.x}
            cy={data.circle3.y}
            r="120"
          />
          <circle
            className="blobb glow"
            fill="url(#lavaGradient)"
            cx={data.circle4.x}
            cy={data.circle4.y}
            r="140"
          />
          <circle
            className="blobb glow"
            fill="url(#lavaGradient)"
            cx={data.circle5.x}
            cy={data.circle5.y}
            r="70"
          />
        </g>
      </svg>
    </div>
  );
};

export default Lava;
