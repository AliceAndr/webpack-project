import * as $ from 'jquery';
import Post from "./Post";
import json from './assets/json.json';
import xml from './assets/data.xml';
import RandomPicture from './assets/photo-1493612276216-ee3925520721.jpeg';
import './styles/styles.css';

const post = new Post('Webpack title', RandomPicture);

$('pre').html(post.toString());

console.log('JSON', json);
console.log('XML', xml);
