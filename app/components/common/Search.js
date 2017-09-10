import React, { Component } from "react";
import API from "../../utils/api";

class Search extends Component {

	state = {
		term:"",
		numArticles:5,
		startDate:"",
		endDate:""
	}

	handleChange = (event) => {
		console.log("text changed", event.target.value);

		var newState = {};
		newState[event.target.id] = event.target.value;
		console.log(this.state.numArticles);
		this.setState(newState);

	}

	searchHandler =(event) => {
		event.preventDefault();
		console.log(this.state.numArticles);
		this.props.getArticles(this.state.term, this.state.startDate, this.state.endDate, this.state.numArticles);
	}

	render() {
		return( 
			
		    <div className="row">
				<div className="col-sm-12">
		        	<br/>
		        	<div className="panel panel-primary">
		          		<div className="panel-heading">
		            		<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
		        		</div>
		        		<div className="panel-body">
				            <form role="form" onSubmit = {this.searchHandler}>
				              <div className="form-group">
				                <label htmlFor="search">Search Term:</label>
				                <input type="text" value= {this.state.term} onChange ={this.handleChange} className="form-control" id="term"/>
				              </div>

				              <div className="form-group">
				                <label htmlFor="pwd">Number of Records to Retrieve:</label>
				                <select className="form-control" value={this.state.numArticles} onChange ={this.handleChange} id="numArticles">
									<option value="1">1</option>
									<option value="5">5</option>
									<option value="10">10</option>
								</select>
				              </div>

				              
				              <div className="form-group">
				                <label htmlFor="start-year">Start Year (Optional):</label>
				                <input type="text" value={this.state.startDate} onChange = {this.handleChange} className="form-control" id="startDate"/>
				              </div>

				              
				              <div className="form-group">
				                <label htmlFor="end-year">End Year (Optional):</label>
				                <input type="text" value ={this.state.endDate} onChange= {this.handleChange} className="form-control" id="endDate"/>
				              </div>

				              
				              <button type="submit" className="btn btn-default" id="run-search" ><i className="fa fa-search"></i> Search</button>
				              <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>

				            </form>
		        		</div>
		        	</div>
		      	</div>
		    </div>
		)
		
	}

}

export default Search;