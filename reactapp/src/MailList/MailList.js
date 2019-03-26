import React, {Component} from 'react';
import {mailListData} from '../fakeData.js';
import MailCard from './MailCard';
import './MailList.css';

class MailList extends Component {

	constructor (props) {

		super(props);
		 this.state = {
		 	mailList : null,
		 }
	}

	componentDidMount(){
		mailListState = mailListState.ContactInteractions
		this.setState({
			mailList : mailListState
		}) ;
	};

	render() {
		 console.log(this.state.mailListState);
		return (
			
			<div className="mail-list" >
            {Object.keys(this.state.mailListState).map((key, index)=>{
							return	<MailCard key={index}
							id={this.state.mailListState[key].id}
							createdTime={this.state.mailListState[key].Attributes.StartDate}
							message={this.state.mailListState[key].latestMessage} />
						})}
				</div> 
				);
	}
}


export default MailList;