import React, { Component } from 'react';
import API from "../../utils/API";

class Saved extends Component {

	deleteHandler = (articleId, event) => {
		this.props.deleteArticle(articleId);
	}

	render() {

		return(
		    <div className="row">
		      <div className="col-sm-12">
		        <br/>
		        <div className="panel panel-primary">
		          <div className="panel-heading">
		            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
		          </div>
		          <div className="panel-body" id="well-section">
		          	{
		          		this.props.savedArticles.map((article, index) => {
							return (
								<div className="well" id={"articleWell-" + index} key={index}>
									<h3>
										<span className="label label-primary">{index + 1}</span>
										<strong>  {article.title}</strong>
									</h3>
									<h5>PubDate: {article.date}</h5>
									<a href={article.url}>{article.url}</a>
									<br />
									<button type="button" onClick = {this.deleteHandler.bind(this, article._id)} className="btn btn-default" id={"delete_btn_" + index} ><i className="fa fa-trash"></i> Delete</button>
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

export default Saved;