import React from 'react'

import FeatureList from '../components/layouts/featurelist/feature-list'
import Features from '../components/layouts/features/features'
import Cta from '../components/layouts/cta/cta'
import Hero from '../components/layouts/hero/hero'
import LayoutFull from '../components/layouts/layout-full/layout'
import SEO from '../components/layouts/seo/seo'
import * as content from '../page-content/content-summit21'

const SummitPage = () => (
  <LayoutFull>
    <SEO {...content.seo} />
    <Hero {...content.hero} />
    <Cta preselect="keto" />
    <FeatureList {...content.summitlist} />
    <Features {...content.features} />
    <Features {...content.agenda} />
  </LayoutFull>
)

export default SummitPage
