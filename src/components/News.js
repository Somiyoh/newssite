import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-3"></div>
        <h2>QuickNews - Top Headlines</h2>
        <div className="row">
          {/* shift + alt + up/down to copy code */}
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
        </div>
      </div>
    )
  }
}

export default News
