// import { getSinglePost, getPosts } from "../../common/posts";
// import React from "react";
// import DarkTheme from "../../layouts/Dark";
// import Navbar from "../../components/Navbar/navbar";
// import BlogDetails from "../../components/Blog-details/blog-details";
// import PageHeader from "../../components/Page-header/page-header";
// import Footer from "../../components/Footer/footer";

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   const paths = posts.map((post) => ({
//     params: { slug: post.slug },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps(context) {
//     const post = await getSinglePost(context.params.slug);
  
//     if (!post) {
//       return {
//         notFound: true,
//       };
//     }
  
//     return {
//       revalidate:600,
//       props: { post },
//     };
//   }


//   const Post = (props) => {
//     const navbarRef = React.useRef(null);
//     const logoRef = React.useRef(null);
  
//     React.useEffect(() => {
//       var navbar = navbarRef.current,
//         logo = logoRef.current;
//       if (window.pageYOffset > 300) {
//         navbar.classList.add("nav-scroll");
//       } else {
//         navbar.classList.remove("nav-scroll");
//       }
//       window.addEventListener("scroll", () => {
//         if (window.pageYOffset > 300) {
//           navbar.classList.add("nav-scroll");
//         } else {
//           navbar.classList.remove("nav-scroll");
//         }
//       });
//     }, [navbarRef]);
//     return (
//       <DarkTheme>
//         <div className="circle-bg">
//           <div className="circle-color fixed">
//             <div className="gradient-circle"></div>
//             <div className="gradient-circle two"></div>
//           </div>
//         </div>
//         <Navbar nr={navbarRef} lr={logoRef} />
//         <PageHeader
//           title={props.post.title}
//           paragraph="All the most current news and events of our creative team."
//         />
//             <BlogDetails blog={props.post}/>
//             <Footer />
//       </DarkTheme>
//     );
//   };
  
//   export default Post;