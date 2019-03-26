import React, {Component} from 'react';
import Moment from 'react-moment';

class MailCard extends Component {
	constructor(props){
		super(props);
		
	}
	render(){
		let displayTimeStamp = this.props.createdTime;
		
		let splitTimeStamp = displayTimeStamp.split('T');
		
		let splitDate = splitTimeStamp[0].split('-');
		
		displayTimeStamp = splitDate[1]+'/'+splitDate[2]+'/'+splitDate[0].substr(2);

		let currentDate = new Date();
		let currentMonth = currentDate.getMonth()+1;
		currentMonth = ('0'+currentMonth).slice(-2);
		
		if(splitDate[1]+'/'+splitDate[2]+'/'+splitDate[0] == currentMonth+'/'+currentDate.getDate()+'/'+currentDate.getFullYear()){
			let splitTime = splitTimeStamp[1].split(':');
			console.log(splitTime);	

			displayTimeStamp = 'Today ' + "";
		}
	return <div className="mail-card">
				<Moment	format="MM/DD/YY HH:mm">{this.props.createdTime}</Moment>
		</div>	
	}
	
}

export default MailCard;
