import React from 'react'
import DocumentTitle from "react-document-title";
import MainLayout from "./components/layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <DocumentTitle title="About" />
      <h1>About</h1>
      <hr />
    </MainLayout>
  )
}

export default About