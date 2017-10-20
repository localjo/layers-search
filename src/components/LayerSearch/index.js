import React, {Component} from 'react';
import LayerList from '../LayerList';

export default class LayerSearch extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {filter: ''};
  }
  updateFilter(e) {
    this.setState({filter: e.target.value});
  }
  render() {
    var { filter } = this.state;
    var { layers } = this.props;
    return (
      <div>
        <input type="text" placeholder="Search" value={filter} onChange={(e)=>this.updateFilter(e)} />
        <LayerList layers={layers} filter={filter} />
      </div>
    );
  }
}
