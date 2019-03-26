import React, {Component} from 'react';
import {mailListData} from '../fakeData.js';
import MailCard from './MailCard';
import './MailList.css';

class MailList extends Component {

	constructor (props) {

		super(props);
		

		this.contactId = '1001hxAuyOGTxek8';

		 this.state = {
		 	mailListState : this.getRelaventInformation(mailListData['ContactInteractions']),
		 }
	}

	getRelaventInformation=(contactInteractions)=>{
		//console.log('getRelaventInformation',contactInteractions);
		let relaventInformation = {};
		for(let key in contactInteractions){
				//console.log('contactInteractions[key]', contactInteractions[key]);
			if(contactInteractions[key]['Attributes']['ContactId'] == this.contactId){
				relaventInformation[key] = contactInteractions[key];
			}
		}

		return relaventInformation;

	}



	render() {
		console.log(this.state.mailListState);
		return <div className="mail-list">
				{Object.keys(this.state.mailListState).map((key) => {
					return <MailCard
						subject = {this.state.mailListState[key].Attributes.Subject}
						text = {this.state.mailListState[key].Attributes.Text}
						timestamp = {this.state.mailListState[key].Attributes.StartDate} />
				})}

		</div>

	

	}
}


export default MailList;