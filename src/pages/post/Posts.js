import React, { Fragment, Component, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import source from 'posts/20201109-title.md';
import { Link, useHistory } from 'react-router-dom';

// function importAll (r) {
//   r.keys().forEach(r);
// }

function Post(props) {
  const { match } = props;
  // const markdownContext = require.context('posts', false, /\.md$/);
  // const markdownFiles = markdownContext.keys().map(filename => markdownContext(filename));
  const importAll = r => r.keys().map(r);
  const markdownFiles = importAll(require.context('posts', false, /\.md$/)).sort().reverse();

  const history = useHistory();
  const [posts, setPosts] = useState('');
  const [post, setPost] = useState('');
  const fetchPosts = async () => {
    const urlArray = [];
    let posts = await Promise.all(
      markdownFiles.map(file =>
        fetch(file).then(res => {
          urlArray.push(res.url);
          console.log(res, 'res');
          return res.text();
          // const item = {
          //   url: res.url,
          //   content: res.text(),
          // };
          // console.log(res.text(), 'res');
          // return item;
        }),
      ),
    ).catch(err => console.error(err));
    posts = posts.reduce((arr, curr, currIndex) => {
      let obj = {};
      urlArray.forEach((url, urlIndex) => {
        let urlFormat = url.slice(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
        urlFormat = urlFormat.slice(0, urlFormat.lastIndexOf('.'));
        // console.log(currIndex, 'currIndex');
        // console.log(urlIndex, 'urlIndex');
        // console.log(urlFormat, 'urlFormat');
        if (currIndex === urlIndex) {
          obj.slug = urlFormat;
          obj.content = curr;
        }
      });
      return arr.concat(obj);
    }, []);
    setPosts(posts);
    console.log(posts, 'posts');
  };
  // const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
  //     .catch((err) => console.error(err));

  const fetchPost = async () => {
    await fetch(source)
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
    fetchPosts();
    // fetchPost();
  }, []);

  return (
    <div>
      {/* <ReactMarkdown plugins={[gfm]} source={post} /> */}
      {posts.length > 1 &&
        posts.map((item, index) => {
          console.log(item.slug, 'item.slug');
          console.log(`${match.url}/@${item.slug}`, '`${match.url}/@${item.slug}`');
          console.log(`${match.url}@${item.slug}`, '`${match.url}@${item.slug}`');
          return (
            <div key={index} onClick={() => history.push(`${match.url}/@${item.slug}`)}>
              <hr />
              <ReactMarkdown plugins={[gfm]} source={item.content} />
              {/* <ReactMarkdown plugins={[gfm]} source={item} /> */}
            </div>
          );
        })}
    </div>
  );
}

export default Post;
// to={`${match.url}/@${item}`}
