import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Hey User">
      <p>Hello, I'm Daryl, I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://vignette.wikia.nocookie.net/vsbattles/images/3/34/Clifford_render.png/revision/latest?cb=20190427015648"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage