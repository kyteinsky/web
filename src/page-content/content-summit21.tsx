import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../components/freestanding/button/button'
import { PropTypes as FeatureContentProps } from '../components/layouts/feature-content/feature-content'
import { PropTypes as SummitlistProps } from '../components/layouts/featurelist/feature-list'
import { PropTypes as AgendalistProps } from '../components/layouts/featurelist/feature-list'
import { PropTypes as FeatureProps } from '../components/layouts/features/features'
import { PropTypes as HeroProps } from '../components/layouts/hero/hero'
import { PropTypes as SeoProps } from '../components/layouts/seo/seo'

const RocketLaunch = <i className="ph-rocket-launch-fill size24" />
const ArrowRight = <i className="ph-arrow-right-bold size16" />
const Code = <i className={'ph-code-fill themed-primary size32'} />
const LockOpen = <i className={'ph-lock-open-fill themed-primary size32'} />
const UserPlus = <i className={'ph-user-plus-fill themed-primary size32'} />
const CirclesThreePlus = (
  <i className={'ph-circles-three-plus-fill themed-primary size32'} />
)
const CheckCircle = (
  <i className={'ph-check-circle-fill themed-primary size16'} />
)
const CircleThreePlus = (
  <i className={'ph-circles-three-plus-fill base-white size24'} />
)
const CaretUp = <i className={'ph-caret-up-fill base-white size24'} />
const CaretDoubleUp = (
  <i className={'ph-caret-double-up-fill base-white size24'} />
)
const ChalkboardTeacher = (
  <i className={'ph-chalkboard-teacher-fill themed-primary size24'} />
)
export const seo: SeoProps = {
  description:
    'Ory is a certified and battle-tested identity solution backed by a large open source community and trusted by Fortune500 orgs.',
  title: 'Ory - Open Source Identity Solutions For Everyone',
  keywords:
    'authentication, open source, login, authorization, security, devops, developer conference, developer talks, AuthN, AuthZ'
}

export const hero: HeroProps = {
  id: 'index.hero',
  title: 'Ory Summit 2021 ',
  description:
    'Ory Summit is a free developer conference bringing together security experts and open source developers from all around the world. Join us on October 28 & 29.',
}

export const featureContentCloud: FeatureContentProps = {
  id: 'index.featurecontent.cloud',
  overline: 'Audience',
  title: <>Join a global community</>,
  description: (
    <>
      Ory Summit is a meetup place for Security Specialists, Product Owners &
      Tech Leads and everyone interested in open source security software.
    </>
  ),
  content: (
    <StaticImage
      loading="lazy"
      className="responsive"
      alt="Ory Project Dashboard"
      src="../images/illustrations/dashboard.png"
    />
  )
}

export const audience: FeatureProps = {
  id: 'summit.audience',
  overline: 'Ory Developer Conference',
  title: <>Join a global community</>,

  feature: [
    {
      icon: Code,
      title: <>Developers & Architects</>,
      description: (
        <>
          Learn how to build secure and scalable authorization and
          authentication. Attend sessions and presentations to hear how others
          are using Ory Open Source in production environments.
        </>
      )
    },
    {
      icon: LockOpen,
      title: <>Security Specialists</>,
      description: (
        <>
          Empower your developers to keep your users data secure and drive
          adoption of developer security practices. Learn from your peers, Ory
          customers, and industry leaders about how to build and run secure Auth
          systems.
        </>
      )
    },
    {
      icon: CirclesThreePlus,
      title: <>Product Owners & Tech Leads</>,
      description: (
        <>
          Gather with developers, security, and operations teams to learn more
          about modern cloud infrastructure. Hear first-hand examples of how
          teams are leveraging Ory Open Source.
        </>
      )
    },
    {
      icon: UserPlus,
      title: <>Everyone else</>,
      description: (
        <>
          Everyone who is interested in or passionate about open source
          development, cloud security, identity software, development best
          practices and much more.
        </>
      )
    }
  ]
}

export const summitlist: SummitlistProps = {
  id: 'summit.list',
  features: [
    {
      title: 'Why attend Ory Summit?',
      description: (
        <>
          Learn about cloud security best practices at Ory Summit 2021, a free
          developer conference.
        </>
      ),
      features: [
        {
          title: 'Code',
          description: (
            <>
              Code, code, code and more code. Get examples and answers from the
              experts.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Learn',
          description: (
            <>
              Level up your skills by engaging in tech talks and workshops
              delivered by proven experts.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Connect',
          description: (
            <>
              Connect & meet with like-minded peers from around the world and
              share your experiences.
            </>
          ),
          icon: CheckCircle
        },
        {
          title: 'Expand',
          description: (
            <>
              Expand your network via virtual events: find new partners,
              clients, employers, products and solutions.
            </>
          ),
          icon: CheckCircle
        }
      ]
    }
  ]
}

export const agendalist: AgendalistProps = {
  id: 'summit.agenda',
  features: [
    {
      title: 'Agenda Day One',
      description: (
        <>
          Day one of the Ory Summit, October 28th 2021, from 08:00 GMT until
          14:00 GMT.
          <Button
            style={'link-inline'}
            to={'https://form.typeform.com/to/J63VwXqX'}
          >
            Sign up to tune in!
          </Button>
        </>
      ),
      features: [
        {
          title: '$Talk by $Person from $Company',
          description: (
            <>
              A short description of the talk outlining why it is interesting to
              hear and some other information.
            </>
          ),
          icon: ChalkboardTeacher
        },
        {
          title: '$Talk by $Person from $Company',
          description: (
            <>
              A short description of the talk outlining why it is interesting to
              hear and some other information.
            </>
          ),
          icon: ChalkboardTeacher
        },
        {
          title: '$Talk by $Person from $Company',
          description: (
            <>
              A short description of the talk outlining why it is interesting to
              hear and some other information.
            </>
          ),
          icon: ChalkboardTeacher
        },
        {
          title: '$Talk by $Person from $Company',
          description: (
            <>
              A short description of the talk outlining why it is interesting to
              hear and some other information.
            </>
          ),
          icon: ChalkboardTeacher
        }
      ]
    },
    {
      title: 'Agenda Day Two',
      description: (
        <>
          Day two of the Ory Summit, October 29th 2021, from 14:00 GMT until
          20:00 GMT.
          <Button
            style={'link-inline'}
            to={'https://form.typeform.com/to/J63VwXqX'}
          >
            Sign up to tune in!
          </Button>
        </>
      ),
      features: [
        {
          title: '$Talk by $Person from $Company',
          description: (
            <>
              A short description of the talk outlining why it is interesting to
              hear and some other information.
            </>
          ),
          icon: ChalkboardTeacher
        },
        {
          title: '$Talk by $Person from $Company',
          description: (
            <>
              A short description of the talk outlining why it is interesting to
              hear and some other information.
            </>
          ),
          icon: ChalkboardTeacher
        },
        {
          title: '$Talk by $Person from $Company',
          description: (
            <>
              A short description of the talk outlining why it is interesting to
              hear and some other information.
            </>
          ),
          icon: ChalkboardTeacher
        },
        {
          title: '$Talk by $Person from $Company',
          description: (
            <>
              A short description of the talk outlining why it is interesting to
              hear and some other information.
            </>
          ),
          icon: ChalkboardTeacher
        }
      ]
    }
  ]
}
