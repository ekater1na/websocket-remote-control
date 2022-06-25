import robot from 'robotjs';
import internal from 'stream';

export const circle = (radius: number, socket: internal.Duplex) => {
  const mousePos = robot.getMousePos();

  socket.write(`draw_circle`);
  robot.mouseToggle('down');

  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const x = mousePos.x + radius * Math.cos(i) - radius;
    const y = mousePos.y + radius * Math.sin(i);
    robot.dragMouse(x, y);
  }
  robot.mouseToggle('up');
};

export const rectangle = (
  width: number,
  length: number,
  socket: internal.Duplex
) => {
  const mousePos = robot.getMousePos();

  socket.write(`draw_rectangle`);

  robot.mouseToggle('down');

  for (let i = 0; i < width; i++) {
    const x = mousePos.x + i;
    const y = mousePos.y;
    robot.dragMouse(x, y);
  }

  for (let i = 0; i < length; i++) {
    const x = mousePos.x + width;
    const y = mousePos.y + i;
    robot.dragMouse(x, y);
  }

  for (let i = 0; i < width; i++) {
    const x = mousePos.x + width - i;
    const y = mousePos.y + length;
    robot.dragMouse(x, y);
  }

  for (let i = 0; i < length; i++) {
    const x = mousePos.x;
    const y = mousePos.y + length - i;
    robot.dragMouse(x, y);
  }

  robot.mouseToggle('up');
};

export const square = (width: number, socket: internal.Duplex) => {
  const mousePos = robot.getMousePos();

  socket.write(`draw_square`);

  robot.mouseToggle('down');
  
  for (let i = 0; i < width; i++) {
    const x = mousePos.x + i;
    const y = mousePos.y;
    robot.dragMouse(x, y);
  }

  for (let i = 0; i < width; i++) {
    const x = mousePos.x + width;
    const y = mousePos.y + i;
    robot.dragMouse(x, y);
  }

  for (let i = 0; i < width; i++) {
    const x = mousePos.x + width - i;
    const y = mousePos.y + width;
    robot.dragMouse(x, y);
  }

  for (let i = 0; i < width; i++) {
    const x = mousePos.x;
    const y = mousePos.y + width - i;
    robot.dragMouse(x, y);
  }

  robot.mouseToggle('up');
};
