/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";


// async function getPosts()
// {
//   // const res=await api.posts.browse({limit: 2, include: 'tags,authors'})
//   const res=await fetch(`http://localhost:2368/ghost/api/v3/content/posts/?key=b7bd9f75aa4db6fb6309f4bbde`,
//   {
//     method:"GET"
//   })
//   .then((res)=>(res.json()))
//   const posts=res.posts;
//   const titles=res.posts.map((post)=>post.title)

//   console.log(titles);
//   return posts;
// }

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const BlogGrid = ({blogData}) => {

  return (
    <section className="blog-pg blog section-padding pt-0">
      {/* {console.log(blogData)} */}
      <div className="container">
        <div className="posts">
          <div className="row">
            { blogData.map((blogItem) => (
              <div className="col-lg-4" key={blogItem.id}>
                <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img">
                    <img src={blogItem.feature_image} alt="" />
                  </div>
                  <div className="cont">
                    <div>
                      <div className="info">
                        <Link href="#" >
                          <a className="date">
                            <span>
                              <i>{new Date(blogItem.published_at).getDate()}</i><span>/</span>
                              {months[new Date(blogItem.published_at).getMonth()]}<span>/</span>
                              {new Date(blogItem.published_at).getFullYear()}
                            </span>
                          </a>
                        </Link>
                        <span>/</span>
                        {blogItem.tags.map((tag) => (
                          <Link key={tag.id} href="#" >
                            <a className="tag">
                              <span>{tag.slug}</span>
                            </a>
                          </Link>
                        ))}
                        
                      </div>
                      <h5>
                        <Link href="#" >
                          {blogItem.title?.substr(0, 55) + "..."}
                        </Link>
                      </h5>
                      <div className="btn-more">
                        <Link href={`/post/${blogItem.slug}`}>
                          <a className="simple-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="pagination">
              <span className="active">
                <Link href={`/blog/blog-dark`}>1</Link>
              </span>
              <span>
                <Link href={`/blog/blog-dark`}>2</Link>
              </span>
              <span>
                <Link href={`/blog/blog-blogwindow.theme}`}>
                  <a>
                    <i className="fas fa-angle-right"></i>
                  </a>
                </Link>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
