import React, { Component } from 'react';
import API from "../../utils/API";

class Results extends Component {

	saveHandler = (idx, event) => {
		event.preventDefault();
		//console.log(event.target);
		//console.log('idx : ', idx);
		const articleItem = this.props.articles[idx];
		let article = {
			title: articleItem.headline.print_headline,
			date: articleItem.pub_date,
			url: articleItem.web_url
		};
		console.log('a: ', article);
		this.props.saveArticle(article);
	}

	
	render() {
		return(
			
		    <div className="row">
		      <div className="col-sm-12">
		        <br/>
		        <div className="panel panel-primary">
		          <div className="panel-heading">
		            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
		          </div>
		          <div className="panel-body" id="well-section">
		          	{
		          		this.props.articles.map((article, index) => {
							return (
								<div className="well" id={"articleWell-" + index} key={index}>
									<h3>
										<span className="label label-primary">{index + 1}</span>
										<strong>  {article.headline.print_headline}</strong>
									</h3>
									<h5>Section: {article.section_name}</h5>
									<h5>PubDate: {article.pub_date}</h5>
									<a href={article.web_url}>{article.web_url}</a>
									<br />
									<button type="button" onClick = {this.saveHandler.bind(this, index)} className="btn btn-default" id={"save_btn_" + index} ><i className="fa fa-save"></i> Save</button>
								</div>

							);
						}).slice(0, this.props.numArticles)
		          	}
		          </div>
		        </div>
		      </div>
		    </div>
		)
	}
}

export default Results;