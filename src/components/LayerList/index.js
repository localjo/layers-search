import React, {Component} from 'react';

export default class LayerList extends Component {
  render() {
    var { layers, filter } = this.props;
    if (!layers || layers.length < 1) return <span>No layers</span>;
    return (
      <ul>
        {layers.filter((layer)=>{
          if (!layer.title) return false;
          console.log(layer.title);
          return layer.title.toLowerCase().includes(filter.toLowerCase());
        }).map((layer)=>{
          return (<li key={layer.id}>{layer.title}</li>);
        })}
      </ul>
    );
  }
}
