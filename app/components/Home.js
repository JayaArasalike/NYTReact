import React, { Component } from "react";
import Search from "./common/Search";
import Results from "./common/Results";
import API from "../utils/API";

//<div className="jumbotron" style={{backgroundColor: '#20315A', color: 'white'}}>

class Home extends Component {
	render() {
		return(
			<div className="container">
			    
			    <div className="jumbotron">
			      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
    			</div>
    			<Search />
    			<Results />
    		</div>

		)
	}
}

export default Home;