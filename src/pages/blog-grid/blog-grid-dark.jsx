import React from "react";
// import blog3Data from "../../data/blog3.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogGrid from "../../components/Blog-grid/blog-grid.jsx";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import { getPosts } from "../../common/posts";
// import GhostContentAPI from '@tryghost/content-api'

// const api = new GhostContentAPI({
//   url: 'http://localhost:2368',
//   key: 'b7bd9f75aa4db6fb6309f4bbde',
//   version: "v5.0"
// });

export const getStaticProps=async ()=> {
  const posts = await getPosts();
// console.log("hlo")
//   console.log(posts)
// const publish_date=posts.map((item)=>(item.slug));
// console.log(publish_date);
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    
    props: { posts },
    revalidate:600,
  };
}



const BlogGridDark = (props) => {
  // const posts=props.posts;
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);


  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title="Our News."
        paragraph="All the most current news and events of our creative team."
      />
      
      <BlogGrid blogData={props.posts} />
      <Footer />
    </DarkTheme>
  );
};



export default BlogGridDark;
