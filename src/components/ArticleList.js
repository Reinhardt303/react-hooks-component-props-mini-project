import React from 'react'
import Article from "./Article"

const ArticleList = ({posts}) => {
    
    const articleObj = posts.map((post) => {
        return <Article 
            key={post.id}
            title={post.title}
            date={post.date}
            preiew={post.preview}
        />
    })

  return (
    <div>
      <main>
        {articleObj}
      </main>
    </div>
  )
}

export default ArticleList
