import React from 'react';
import { render } from 'react-dom';
import data from './src/api.json';
import Playlist from './src/playlist/components/playlist';

render(<Playlist  data={ data } />, document.getElementById('app'));