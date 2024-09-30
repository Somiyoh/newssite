import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async updateNews() {
    const { country, category, pageSize } = this.props
    const { page } = this.state // Get the current page from state
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f190770db4fd40da83a85fc488481af9&page=${page}&pageSize=${pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
  }

  async componentDidMount() {
    this.updateNews()
  }

  handlePrevClick = async () => {
    this.setState((prevState) => ({ page: prevState.page - 1 }), this.updateNew)
  }

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.updateNews
    )
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: '40px 0px' }}>
          QuickNews - Top Headlines{' '}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ''}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ''
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
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
