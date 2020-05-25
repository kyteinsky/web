import React from 'react'
import cn from 'classnames'
import styles from './team.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Profile from './profile'

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      aeneas: file(relativePath: { eq: "aeneas.png" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      thomas: file(relativePath: { eq: "thomas.png" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className={cn(styles.team)}>
      <div className="container-fluid">
        <div className={cn('row middle-lg')}>
          <div className="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
            <h3>About Us</h3>
            <div className={cn('hidden-lg')}>
              <>
                <Profile
                  name="Aeneas Rekkas"
                  description={
                    <>
                      <a href="https://github.com/aeneasr">
                        github.com/aeneasr
                      </a>
                    </>
                  }
                  img={data.aeneas.childImageSharp.fixed}
                />
                <Profile
                  name="Thomas Aidan Curran"
                  description={
                    <>
                      <a
                        href={'https://www.linkedin.com/in/thomasaidancurran/'}
                      >
                        linkedin.com/in/thomasaidancurran/
                      </a>
                    </>
                  }
                  img={data.thomas.childImageSharp.fixed}
                />
              </>
            </div>
            <p>
              Our mission is to provide a common identity infrastructure to help
              shape the way data is managed and exchanged in the cloud. We
              provide access to infrastructure and services to help solve the
              hardest problems in emerging cloud standards. It is our goal to
              help developers push the boundaries of modern cloud technology and
              engineering.
            </p>
          </div>
          <div className={cn('hidden-sm hidden-md col-lg-offset-2 col-lg-4')}>
            <>
              <Profile
                name="Aeneas Rekkas"
                description={
                  <>
                    <a href="https://github.com/aeneasr">github.com/aeneasr</a>
                  </>
                }
                img={data.aeneas.childImageSharp.fixed}
              />
              <Profile
                name="Thomas Aidan Curran"
                description={
                  <>
                    <a href={'https://www.linkedin.com/in/thomasaidancurran/'}>
                      linkedin.com/in/thomasaidancurran/
                    </a>
                  </>
                }
                img={data.thomas.childImageSharp.fixed}
              />
            </>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team