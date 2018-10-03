import React, { Component } from 'react';
import StreamCard from '../StreamCard/StreamCard';
import './StreamList.css';
import App from '../App/App';


class StreamList extends Component {

	constructor(props) {
		super(props);
	}

	// .filter(stream=>{
	// 				//remove names that don't match the current filter text
	// 				return stream.name.indexOf(this.props.search) >=0;
	// 			}).

	render() {
		{console.log("------------------------------------")}
		{console.log(this.props)}
		{console.log("====================================")}
		{console.log(this.props.streams)}
		const {streams, search} = this.props;
		console.log(search);
		return (
			<div className="StreamList">
			{
		    	this.props.streams.map(stream => {
		    		return <StreamCard stream={stream} key={stream.stream.channel._id} />
		    	})
		    }
		    </div>
		)
	}
}

export default StreamList;