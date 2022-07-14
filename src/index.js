import Post from "./Post";
import json from './assets/json.json';
import RandomPicture from './assets/photo-1493612276216-ee3925520721.jpeg';
import './styles/styles.css';

const post = new Post('Webpack title', RandomPicture);

console.log('Post to String', post.toString());

console.log('JSON', json);
