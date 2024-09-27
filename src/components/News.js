import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=d1bcc0bb53ce4d0b8f666bc592d79ee7&page=1'
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d1bcc0bb53ce4d0b8f666bc592d79ee7&page=${
      this.state.page - 1
    }&pageSize=20`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    })
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d1bcc0bb53ce4d0b8f666bc592d79ee7&page=${
        this.state.page + 1
      }&pageSize=20`
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      })
    }
  }

  render() {
    return (
      <div>
        <div className="container my-3"></div>
        <h1 style={{ marginLeft: '5rem' }}>QuickNews - Top Headlines</h1>
        <div className="row">
          {/* shift + alt + up/down to copy code */}

          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ''}
                  description={element.description ? element.description : ''}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            )
          })}
        </div>
        <div
          className="container d-flex justify-content-between "
          style={{ marginBottom: '1rem' }}
        >
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    )
  }
}

export default News
