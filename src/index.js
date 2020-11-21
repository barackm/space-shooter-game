import Phaser from 'phaser';

import './assets/css/style.css';

import BootScene from './scenes/bootScene';
import PreLoad from './scenes/PreLoadScene';
import SceneMainMenu from './scenes/SceneMainMenu';
import SceneInput from './scenes/SceneInput';
import SceneMain from './scenes/SceneMain';
import SceneGameOver from './scenes/SceneGameOver';

const config = {
  type: Phaser.AUTO,
  backgroundColor: 'black',
  scale: {
    // mode: Phaser.Scale.FIT,
    width: 480,
    height: 630,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    BootScene,
    PreLoad,
    SceneMainMenu,
    SceneInput,
    SceneMain,
    SceneGameOver,
  ],
  pixelArt: true,
  roundPixels: true,
};

const game = new Phaser.Game(config);
