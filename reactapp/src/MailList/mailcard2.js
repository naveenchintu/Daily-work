import React, {Component} from 'react';

class MailCard extends Component {
	constructor(props){
		super(props);
		
	}

	render(){
		// //



		//console.log(d, this.props.createdTime);
	return <div className="mail-card">
				<span>{this.props.subject}</span>
			   <span> {this.props.timestamp}</span> 
				<span>{this.props.text}</span>
		</div>	
	}
	
}

export default MailCard;
