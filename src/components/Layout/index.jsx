 import React from 'react';
 import PropTypes from 'prop-types';
 import { useStaticQuery, graphql } from 'gatsby';
 
 import Header from '@components/Header';
 import Footer from '@components/Footer';
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
           githubLink
           author
         }
       }
     }
   `);
 
   return (
     <div className="flex flex-col min-h-screen">
       <Header siteTitle={data.site.siteMetadata.title} />
       <main>
         <section className="text-gray-700 body-font">
           <div className="container flex flex-col px-5 py-12 md:py-24 mx-auto max-w-screen-sm">
             {children}
           </div>
         </section>
       </main>
       <Footer
         author={data.site.siteMetadata.author}
         githubLink={data.site.siteMetadata.githubLink}
       />
     </div>
   );
 };
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 };
 
 export default Layout;
 