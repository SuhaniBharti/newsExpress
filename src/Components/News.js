import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
     
      static defaultProps={
            country:'us',
            pageSize:8,
            category:'general'
          }
          static propTypes={
            country:PropTypes.string,
            pageSize:PropTypes.number,
            category:PropTypes.string,
          }
  
    constructor(){
        super();
        console.log("hello");
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
      async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d9a085d673948fa80a0b6f7718f5350&page=1&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
      }
       handleprevclick=async()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d9a085d673948fa80a0b6f7718f5350&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
     

              this.setState({
                page:this.state.page-1,
                articles:parsedData.articles
              })
      }
    handlenextclick=async()=>{
             
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){}
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d9a085d673948fa80a0b6f7718f5350&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
     

              this.setState({
                page:this.state.page+1,
                articles:parsedData.articles
              })
            }
      }

  render() {
    return (
      <div className='container my-3'>
        <h2 className="text-center">NewsExpress-Top Headlines</h2>
      
       
        <div className="row justify-content-center">
        {this.state.articles.map((element)=>{
               return  <div className="col-md-4 d-flex justify-content-center" key={element.url}>
                  <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://cdn.wionews.com/sites/default/files/2024/06/23/439529-warp-drives.png"}newsUrl={element.url}/>
              </div>
        })}
           
           
        </div>

      <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1}type="button" className="btn btn-dark"onClick={this.handleprevclick}>&larr;previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>next &rarr;</button>
      </div>
      </div>
    )
  }
}

export default News
