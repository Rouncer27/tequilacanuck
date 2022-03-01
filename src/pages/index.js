import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = props => {
  const instagram = props.data.instagram
  console.log("instagram", instagram)
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
      <div>
        {instagram.edges.map((image, index) => {
          console.log(image)
          return (
            <div key={index}>
              <img
                src={image.node.thumbnails[0].src}
                alt={image.node.caption}
              />
              <p>{image.node.caption}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const homeTempQuery = graphql`
  query homeTempPage {
    instagram: allInstaNode {
      edges {
        node {
          timestamp
          caption
          thumbnails {
            src
          }
          localFile {
            absolutePath
          }
        }
      }
    }
  }
`

export default IndexPage
