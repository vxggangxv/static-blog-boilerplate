import React, { Fragment, Component, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import source from 'posts/20201109-title.md';

// function importAll (r) {
//   r.keys().forEach(r);
// }

function Post({ match }) {
  console.log(match, 'match');
  const importAll = r => r.keys().map(r);
  const markdownFiles = importAll(require.context('posts', false, /\.md$/)).sort().reverse();
  const mdFileName = `${match.url.slice(1, match.url.lastIndexOf('/'))}/${match.params.slug}.md`;
  console.log(`${match.url.slice(1, match.url.lastIndexOf('/'))}/${match.params.slug}.md`);
  const mdFile = require(`posts/${match.params.slug}.md`);

  const [posts, setPosts] = useState('');
  const [post, setPost] = useState('');
  const fetchPosts = async () => {
    const posts = await Promise.all(
      markdownFiles.map(file => fetch(file).then(res => res.text())),
    ).catch(err => console.error(err));
    setPosts(posts);
  };
  // const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
  //     .catch((err) => console.error(err));

  const fetchPost = async () => {
    await fetch(mdFile)
      // .then(res => {
      //   console.log(res, 'res');
      //   console.log(res.text(), 'res.text()');
      //   // return setPost(res.text());
      //   return res.text();
      // })
      .then(res => res.text())
      .then(item => setPost(item))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    // console.log(markdownContext.keys(), 'markdownContext.keys()');
    // console.log(markdownFiles, 'markdownFiles');
    // fetchPosts();
    fetchPost();
  }, []);

  return (
    <div>
      <ReactMarkdown plugins={[gfm]} source={post} />
      {/* {posts.length > 1 &&
        posts.map((item, index) => {
          console.log(item, 'item');
          return (
            <div key={index}>
              <hr />
              <ReactMarkdown plugins={[gfm]} source={item} />
            </div>
          );
        })} */}
    </div>
  );
}

export default Post;
