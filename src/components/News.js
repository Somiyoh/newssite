import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d1bcc0bb53ce4d0b8f666bc592d79ee7";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div>
        <div className="container my-3"></div>
        <h1 style={{marginLeft: '5rem'}}>QuickNews - Top Headlines</h1>
        <div className="row">
          {/* shift + alt + up/down to copy code */}

          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title: ""}
                  description={element.description?element.description: ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News
