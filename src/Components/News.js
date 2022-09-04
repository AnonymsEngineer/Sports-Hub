import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

const News= (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?category=sports&country=${props.country}&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
    }

  useEffect(() => {
    updateNews(); 
    })

const handlePrevClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?category=sports&country=${props.country}&apiKey=${props.apikey}&page=${page - 1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json()
    setPage(page - 1);
    setArticles(parsedData.articles);
    setLoading(false);
}

const handleNextClick = async ()=>{
    if (!(page + 1 > Math.ceil(totalResults/12))){
        let url = `https://newsapi.org/v2/top-headlines?category=sports&country=${props.country}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setPage(page + 1);
        setArticles(parsedData.articles);
        setLoading(false);
    }
  }

//   const updateNews = async ()=> {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?category=sports&country=${props.country}&apiKey=${props.apikey}&page={page}&pageSize=${props.pageSize}`; 
//     setLoading(true)
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json()
//     props.setProgress(70);
//     setArticles(parsedData.articles)
//     setTotalResults(parsedData.totalResults)
//     setLoading(false)
//     props.setProgress(100);

// }

// useEffect(() => {
//     updateNews(); 
// }, [])


// const handlePrevClick = async () => {
//     setPage(page-1)
//     updateNews();
// }

// const handleNextClick = async () => { 
//     setPage(page+1)
//     updateNews()
// }

    return (
      <div className="container my-3">
        <h1 className='text-center my-2'>Sports Hub - Top Headlines</h1>
        {loading && <Spinner />}
        <div className="row">
        {!loading && articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                </div>  
              })}
            </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults/12)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
}

News.defaultProps = {
  country: 'in',
  pageSize: 9
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number
}

export default News