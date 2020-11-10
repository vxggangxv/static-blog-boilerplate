import React, { Fragment, Component, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import source from 'posts/20201109-title.md';
import AppMeta from 'components/base/meta/AppMeta';

// function importAll (r) {
//   r.keys().forEach(r);
// }

function Post({ match }) {
  console.log(match, 'match');
  // const importAll = r => r.keys().map(r);
  // const markdownFiles = importAll(require.context('posts', false, /\.md$/)).sort().reverse();
  // const mdFileName = `${match.url.slice(1, match.url.lastIndexOf('/'))}/${match.params.slug}.md`;
  // console.log(`${match.url.slice(1, match.url.lastIndexOf('/'))}/${match.params.slug}.md`);
  const mdFile = require(`posts/${match.params.slug}.md`);

  const [post, setPost] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postDate, setPostDate] = useState('');
  const [postCategory, setPostCategory] = useState('');
  const [postContent, setPostContent] = useState('');
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

  useEffect(() => {
    // console.log(post, 'post');
    if (post) {
      let postMeta = post.slice(5);
      postMeta = postMeta.slice(0, postMeta.indexOf('---') - 2);
      // const postTitle = postMeta.slice(postMeta.indexOf('title') + 7, postMeta.indexOf('date') - 1);
      const postTitle = postMeta.slice(postMeta.indexOf('title') + 8, postMeta.indexOf('date') - 3);
      const postDate = postMeta.slice(
        postMeta.indexOf('date') + 6,
        postMeta.indexOf('category') - 1,
      );
      const postCategory = postMeta.slice(postMeta.indexOf('category:') + 11, -1);
      const postContent = post.slice(post.indexOf('##'));
      // console.log(post, 'post');
      // console.log(postMeta, 'postMeta');
      console.log(postTitle, 'postTitle');
      // console.log(postDate, 'postDate');
      // console.log(postCategory, 'postCategory');
      // console.log(postContent, 'postContent');
      setPostTitle(postTitle);
      setPostDate(postDate);
      setPostCategory(postCategory);
      setPostContent(postContent);
    }
  }, [post]);

  if (!post) return null;
  return (
    <div>
      <AppMeta title={postTitle} />
      <h1>Title: {postTitle}</h1>
      <h1>Date: {postDate}</h1>
      <h1>Category: {postCategory}</h1>
      <ReactMarkdown
        plugins={[gfm]}
        source={postContent}
        // transformImageUri={uri => {
        //   console.log(uri, 'uri');
        //   return 'string';
        // }}
        renderers={{
          image: ({ alt, src, title }) => {
            let imgSrc = require(`posts/${src}`);
            if (imgSrc.default) {
              imgSrc = imgSrc.default;
            }
            return <img alt={alt} src={imgSrc} title={title} />;
          },
        }}
      />
      {/* <ReactMarkdown plugins={[gfm]} source={postContent} /> */}
      {/* <ReactMarkdown plugins={[gfm]} source={post} /> */}
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
