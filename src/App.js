import React, { Component } from 'react';
import './App.css';
import LayerSearch from './components/LayerSearch';
import request from 'request';
import { parseString } from 'xml2js';
const gcEndpoint = 'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/wmts.cgi?request=GetCapabilities';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      layers: []
    };
  }
  getLayers() {
    request(gcEndpoint, (err, res, body)=>{
      if (body) {
        parseString(body, (err, result)=>{
          var rawLayers = result.Capabilities.Contents[0].Layer;
          var layers = rawLayers.map((layer)=>{
            return {
              title: layer['ows:Title'][0]._,
              id: layer['ows:Identifier']
            }
          });
          console.log(layers);
          this.setState({layers: layers});
        });
      }
    });
  }
  componentDidMount() {
    console.log('Getting layers');
    this.getLayers();
  }
  render() {
    var { layers } = this.state;
    return (
      <div className="App">
        <LayerSearch layers={layers} />
      </div>
    );
  }
}

export default App;
