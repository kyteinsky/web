import numeral from 'numeral'
import React, { Component } from 'react'
import CountUp from 'react-countup'
import { InView } from 'react-intersection-observer'

interface PropTypes {
  countTo: number
}

class AnimatedCounter extends Component<PropTypes> {
  render() {
    return (
      <InView>
        {({ inView, ref }) => (
          <div ref={ref}>
            {inView ? (
              <CountUp
                delay={0}
                start={0}
                end={this.props.countTo}
                useEasing
                duration={3}
                formattingFn={(v) => numeral(v).format('0.0a')}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            ) : (
              <span>0</span>
            )}
          </div>
        )}
      </InView>
    );
  }
}

export default AnimatedCounter
