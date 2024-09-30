import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

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

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    }
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - QuickNews`
  }

  async updateNews() {
    const { country, category, pageSize } = this.props
    const { page } = this.state // Get the current page from state
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e2710c89018c46d8958573229fa2f012&page=${page}&pageSize=${pageSize}`
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

  fetchMoreData = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      async () => {
        const { country, category, pageSize } = this.props
        const { page } = this.state // Get the updated page from state
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e2710c89018c46d8958573229fa2f012&page=${page}&pageSize=${pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
        })
      }
    )
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: '40px 0px' }}>
          QuickNews - Top {this.capitalizeFirstLetter(this.props.category)}{' '}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
          </div>
        </InfiniteScroll>

        {/* <div
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
        </div> */}
      </>
    )
  }
}

export default News
