import React, { Component } from "react";
import Search from "./common/Search";
import Results from "./common/Results";
import API from "../utils/API";

//<div className="jumbotron" style={{backgroundColor: '#20315A', color: 'white'}}>

class Home extends Component {
	state = {
		articles: []
	};
	// Getting all quotes when the component mounts

	getArticles = (term, startDate, endDate) => {
		API.getArticles(term, startDate, endDate).then(function(results){
			console.log("results", results);
		})
	}
	
	render() {
		return(
			<div className="container">
			    
			    <div className="jumbotron">
			      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
    			</div>
    			<Search getArticles={this.getArticles} />
    			<Results />
    		</div>

		)
	}
}

export default Home;