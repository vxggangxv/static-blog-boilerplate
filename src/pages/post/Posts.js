import React, { Fragment, Component, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import styled from 'styled-components';

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
          // console.log(res, 'res');
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
        let postMeta = curr.slice(5);
        postMeta = postMeta.slice(0, postMeta.indexOf('---') - 2);
        // const postTitle = postMeta.slice(postMeta.indexOf('title') + 7, postMeta.indexOf('date') - 1);
        const postTitle = postMeta.slice(
          postMeta.indexOf('title') + 8,
          postMeta.indexOf('date') - 3,
        );
        const postDate = postMeta.slice(
          postMeta.indexOf('date') + 6,
          postMeta.indexOf('category') - 1,
        );
        const postCategory = postMeta.slice(postMeta.indexOf('category:') + 11, -1);
        const postContent = curr.slice(curr.indexOf('##'));
        // console.log(currIndex, 'currIndex');
        // console.log(urlIndex, 'urlIndex');
        // console.log(urlFormat, 'urlFormat');
        // console.log(postContent, 'postContent');
        if (currIndex === urlIndex) {
          obj.slug = urlFormat;
          obj.title = postTitle;
          obj.date = postDate;
          obj.category = postCategory;
          obj.content = postContent;
        }
      });
      return arr.concat(obj);
    }, []);
    setPosts(posts);
    // console.log(posts, 'posts');
  };
  // const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
  //     .catch((err) => console.error(err));

  useEffect(() => {
    // console.log(markdownContext.keys(), 'markdownContext.keys()');
    // console.log(markdownFiles, 'markdownFiles');
    fetchPosts();
  }, []);

  return (
    <Styled.Posts>
      {/* <ReactMarkdown plugins={[gfm]} source={post} /> */}
      {posts.length > 1 &&
        posts.map((item, index) => {
          // console.log(item.slug, 'item.slug');
          // console.log(`${match.path}/@${item.slug}`, '`${match.path}/@${item.slug}`');
          // console.log(`${match.path}@${item.slug}`, '`${match.path}@${item.slug}`');
          return (
            // <div key={index} onClick={() => history.push(`${match.path}/@${item.slug}`)}>
            <div key={index}>
              <hr />
              <Link to={`${match.path}/@${item.slug}`}>{item.title}</Link>
              {/* <div>{item.content}</div> */}
              <ReactMarkdown
                className="post-content"
                plugins={[gfm]}
                source={item.content}
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
                    return null;
                  },
                }}
              />
              {/* <ReactMarkdown plugins={[gfm]} source={item} /> */}
            </div>
          );
        })}
    </Styled.Posts>
  );
}

const Styled = {
  Posts: styled.div`
    .post-content {
      width: 300px;
      /* height: 100px; */
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height: 1.2em;
      height: 3.6em;
      * {
        display: inline;
      }
    }
  `,
};

export default Post;
// to={`${match.path}/@${item}`}
