import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div>
        <div className="card my-3">
            <img src={imageUrl?imageUrl:"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem