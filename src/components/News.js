import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'BBC News',
      title: 'Trump and Zelensky to meet in New York amid Republican anger',
      description:
        'It comes amid growing anger from senior Republicans over a visit by Zelensky to swing state Pennsylvania.',
      url: 'https://www.bbc.co.uk/news/articles/c7810y11dyjo',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/b076/live/36a337f0-7c7c-11ef-8059-fd51cb7ae823.jpg',
      publishedAt: '2024-09-27T04:22:12.3789097Z',
      content:
        '"President Zelensky has asked to meet with me, and I will be meeting with him tomorrow morning," Trump told reporters in New York.\r\n"And it\'s a shame what\'s happening in Ukraine. So many deaths, so m… [+2298 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'BBC News',
      title: 'Sudan civil war: Women accuse RSF fighters of raping them',
      description:
        'The BBC hears horrific accounts of rape from women trapped in the conflict between the army and the RSF.',
      url: 'https://www.bbc.co.uk/news/articles/ce3zq40qq25o',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/32f0/live/a100fb10-7c62-11ef-a030-bd06024d7cce.jpg',
      publishedAt: '2024-09-27T03:07:14.8476007Z',
      content:
        'Sudan is at breaking point.\r\nAfter 17 months of a brutal civil war which has devastated the country, the army has launched a major offensive in the capital Khartoum, targeting areas in the hands of i… [+1767 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'BBC News',
      title: 'Alabama carries out second nitrogen gas execution in US',
      description:
        'The execution of Alan Eugene Miller marks the fifth this week in the US - its greatest use of capital punishment since 2003.',
      url: 'https://www.bbc.co.uk/news/articles/cm246p3npdqo',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/779b/live/c972c210-7c6f-11ef-bb8f-0143eb6b922b.jpg',
      publishedAt: '2024-09-27T02:07:16.3935927Z',
      content:
        'Littlejohn, 52, was sentenced to death for his role in a 1992 robbery gone wrong that ended in the murder of convenience store owner Kenneth Meers.\r\nBoth Littlejohn and his accomplice, Glenn Bethany,… [+1090 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'BBC News',
      title: 'Naomi Campbell banned from being charity trustee',
      description:
        'The model cannot be involved at charities for five years after an inquiry discovered mismanagement.',
      url: 'https://www.bbc.co.uk/news/articles/c70zn97q1n8o',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/9d0a/live/ce6c8710-7c33-11ef-b282-4535eb84fe4b.jpg',
      publishedAt: '2024-09-27T02:07:15.2844959Z',
      content:
        'A sum of nearly £345,000 was recovered from the charity by investigators and protection for a further £98,000 of charity money has been established.\r\nThe funds have been used to make payments to two … [+1048 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'BBC News',
      title: "Why Harris won't mention China",
      description:
        'There is a stark difference in how - and how often - each candidate addresses the US-China relationship.',
      url: 'https://www.bbc.co.uk/news/articles/ckgvr9kgkqyo',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/2e9b/live/ab586c00-7c63-11ef-b02d-c5f3b724a1ea.jpg',
      publishedAt: '2024-09-27T00:37:15.5819101Z',
      content:
        'The US and China are the two largest economies in the world. They have the two most powerful militaries in the world. The US-China rivalry, in the view of many international analysts, will be the def… [+4834 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'BBC News',
      title:
        'Israel fighting Hezbollah with ‘full force’ despite ceasefire calls',
      description:
        'More than 600 people have been killed by Israeli airstrikes in Lebanon since Monday, health officials say.',
      url: 'https://www.bbc.co.uk/news/articles/c20jx85vxwdo',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/a1ba/live/9a20a290-7c2c-11ef-8464-611eedd3c7d3.jpg',
      publishedAt: '2024-09-26T22:07:15.59778Z',
      content:
        'The proposal was initially met with hope after Israeli ambassador to the UN, Danny Danon, said his country was open to ideas.\r\nBut by Thursday it had been roundly rejected by Israeli politicians.\r\nLa… [+2418 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'BBC News',
      title: 'Putin proposes new rules for Russia using nuclear weapons',
      description:
        "Russia's leader says strikes by a non-nuclear state aided by a nuclear power can be considered a joint attack",
      url: 'https://www.bbc.co.uk/news/articles/c5yjej0rvw0o',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/e94f/live/5334c470-7b72-11ef-b487-93d163dc71aa.png',
      publishedAt: '2024-09-26T21:07:22.2386138Z',
      content:
        "Ukraine's President Volodymyr Zelensky has travelled to the US this week and is due to meet US President Joe Biden in Washington on Thursday, where Kyiv's request is expected to be top of the agenda.… [+3038 chars]",
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'BBC News',
      title: "Chatham mum said children are 'eaten alive' by bedbugs",
      description:
        'A single mum says she is in despair after being moved into social housing infested with bedbugs.',
      url: 'https://www.bbc.co.uk/news/articles/c8el6xl11eyo',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/acbf/live/cf8d9b30-7bf6-11ef-b035-9f82596651f2.jpg',
      publishedAt: '2024-09-26T20:07:16.1608238Z',
      content:
        'A single mum in Kent has said she is in despair after being moved to social housing infested with bedbugs. \r\nCodie-Louise Barham said her six children - some of whom have special educational needs an… [+367 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'BBC News',
      title: 'US election polls tracker 2024: Who is ahead - Harris or Trump?',
      description:
        'An in-depth look at the polls and what they can and can’t tell us about who will win the White House.',
      url: 'https://www.bbc.co.uk/news/articles/cj4x71znwxdo',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/e457/live/d48d2d60-6f55-11ef-8c1a-df523ba43a9a.png',
      publishedAt: '2024-09-26T11:37:15.4583995Z',
      content:
        'The figures we have used in the graphics above are averages created by polling analysis website 538, external, which is part of American news network ABC News. To create them, 538 collects the data f… [+430 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'BBC News',
      title: "Escalating Trump row looms over Zelensky's US visit",
      description:
        'Republicans accused Zelensky of election interference, after he visited an arms factory with top Democrats.',
      url: 'https://www.bbc.co.uk/news/articles/c80rkv0k4j8o',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/bb05/live/6a9a8220-7be6-11ef-a067-535ff32592e2.jpg',
      publishedAt: '2024-09-26T10:22:14.4883253Z',
      content:
        'Since his arrival to the US on Sunday, Zelensky has ramped up efforts to persuade the US and other allies to lend more support to Ukraine as it fends off Russian advances. \r\nOn Thursday, Biden announ… [+2940 chars]',
    },
  ]
  constructor() {
    super()
    this.state = {
      articles: this.articles,
      loading: false,
    }
  }

  render() {
    return (
      <div>
        <div className="container my-3"></div>
        <h2 style={{marginLeft: '5rem'}}>QuickNews - Top Headlines</h2>
        <div className="row">
          {/* shift + alt + up/down to copy code */}

          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
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
