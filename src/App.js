import React, { useEffect } from 'react'
import { useRoutes } from 'hookrouter'

import './_styles/stylesheet.css'

// pages
import HomePage from './pages/Home'
import BlogPage from './pages/Blog'
import BlogpostPage from './pages/Blogpost'
import SponsorsPage from './pages/Sponsors'
import AboutPage from './pages/About'
import ThesisPage from './pages/Thesis'
import ThesisPostPage from './pages/ThesisPost'

import PageNotFound from './pages/PageNotFound'


export default function App() {
  
  const routes = {
    '/' : () => <HomePage />,
    '/blog' : () => <BlogPage />,
    '/blog/:id' : (props) => <BlogpostPage id={props.id} />,
    '/sponsors' : () => <SponsorsPage />,
    '/about' : () => <AboutPage />,
    // '/team' : () => <TeamPage />,
    // '/team/:year' : (props) => <TeamPage year={props.year} />,
    // '/history' : () => <HistoryPage />,
    '/thesis' : () => <ThesisPage />,
    '/thesis/:id' : (props) => <ThesisPostPage id={props.id} />,
    // '/join' : () => <JoinPage />,
  }
  
  const routeResult = useRoutes(routes);

  useEffect(() => window.scrollTo(0, 0));

  return routeResult || <PageNotFound />
}
