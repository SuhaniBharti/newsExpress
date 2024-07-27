import React,{useEffect,useState} from 'react'


import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
   
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)

  // constructor(props){
  //   super(props);
  // }
const update=async()=> {
  props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e24561315f354a448013484482713254&page=${page}&pageSize=${props.pageSize}`;
  // this.setState({ loading: true });
  setLoading(true)
  let data = await fetch(url);
  props.setProgress(30);
  let parsedData = await data.json();
  props.setProgress(50);
  console.log(parsedData);
  setArticles(parsedData.articles)
  setTotalResults(parsedData.totalResults)
  setLoading(false)
  
  props.setProgress(100);
}
useEffect(() => {
  document.title=`${props.category}-newsExpress`;
  update();
}, [])


  //async componentDidMount(){
    // console.log("cdm");
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e24561315f354a448013484482713254&page=1&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
    // let data=await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({articles:parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // })
   // this.update();
  //}
const handleNextClick= async()=>{
   
  // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))){
  
  
  // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e24561315f354a448013484482713254&page=${this.state.page+1}&pageSize=${props.pageSize}`;
  // this.setState({loading: true});
  // let data=await fetch(url);
  // let parsedData = await data.json()
  
 // this.setState({articles:parsedData.articles})

      
 
        setPage(page+1)
        update();
      }
      
      
  
 const handlepreviousClick=async()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e24561315f354a448013484482713254&page=${this.state.page-1}&pageSize=${props.pageSize}`;
  //   this.setState({loading: true});
  //   let data=await fetch(url);
  //   let parsedData = await data.json()
  //   console.log(parsedData);
  //  // this.setState({articles:parsedData.articles})
  //        this.setState({
  //         page:this.state.page-1,
  //         articles:parsedData.articles,
  //         loading:false
  //         })
   setPage(page-1)
    update();
  }
   
  const fetchMoreData = async () => {
    
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e24561315f354a448013484482713254&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
  
  let data = await fetch(url);
  let parsedData = await data.json();
  
  setArticles( articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)
  // this.setState({
  //   articles: articles.concat(parsedData.articles) ,
  //   totalResults: parsedData.totalResults,
   
  // })
 
  };

  
    return (
      <>
        <h2 className='text-center' style={{marginTop:'90px'}}>NewsExpress:Top {props.category} Headlines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

          <div className="container">

         
        <div className="row">
        {articles.map((element)=>{
             return <div className="col-md-3" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/>
              </div>
        })}
          
          </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlepreviousClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
  
}

News.defaultProps={
  country: 'in',
  pageSize: 8,
  category: 'general'
 }
 News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
 }

export default News
