import React from 'react'

const NewsItem=(props)=> {
   
 
    let{title,description,imageUrl,newsUrl,author,time,source}=props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <div>
          <span class=" badge rounded-pill text-bg-danger " >{source}</span>

        </div>

<img src={!imageUrl?"https://cdn.wionews.com/sites/default/files/2024/06/23/439529-warp-drives.png":imageUrl}
 className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">{title}</h5>
<p className="card-text">{description}</p>
<p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(time).toGMTString()}</small></p>
<a href={newsUrl} target="blank" className="btn btn-sn btn-dark">read more</a>
</div>
</div>
</div>
    )
  
}

export default NewsItem
