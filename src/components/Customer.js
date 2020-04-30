import React from 'react';

class Customer extends React.Component {
    render(){
        return(
            <div>
                <CustomerProfile id={this.props.id} img={this.props.img} name={this.props.name} />
                <CustomerInfo gender={this.props.gender} job={this.props.job} />
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render(){
        return(
            <div>

                <img src={this.props.img} alt="profile"/>
                <p>{this.props.id}</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>

                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;
