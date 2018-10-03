import React, { Component } from 'react';
import './StreamCard.css';

class StreamCard extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={this.props.stream.stream.channel.url}>
			<div className="StreamCard">
				<img className="StreamLogo" src={this.props.stream.stream.channel.logo}></img> <br />
				<img className="StreamPreview" src={this.props.stream.stream.preview.small}></img>

				<div className="StreamInfo">
					<div className="StreamStatus">{this.props.stream.stream.channel.status}</div>

					<span className="StreamerNameGame">
						<span className="StreamerName">{this.props.stream.stream.channel.name}</span> playing <span className="StreamerGame">{this.props.stream.stream.channel.game}</span></span>
						<span className="ViewersLine"><span className="StreamViewers">Viewers: {this.props.stream.viewers}</span>
					</span>

				</div>
			</div>
			</a>
		)
	}
}

export default StreamCard;