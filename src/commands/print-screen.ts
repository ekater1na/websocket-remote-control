import robot from 'robotjs';
import Jimp from 'jimp';
import internal from 'stream';
import { errorHandler } from '../utils/errorHandler';

export const printScreen = async (socket: internal.Duplex) => {
  try {
    const { x, y } = robot.getMousePos();
    const size = 100;

    const bitMap = robot.screen.capture(x - size, y - size, size * 2, size * 2);
    const img = new Jimp(size * 2, size * 2);

    img.bitmap.data = bitMap.image;

    const base64 = await img.getBufferAsync(Jimp.MIME_PNG);

    socket.write(`prnt_scrn ${base64.toString('base64')} \0`);
  } catch (err) {
    errorHandler(err);
  }
};
