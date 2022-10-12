import withinjector from 'HOC/withIjector'
import React, { Component, createRef, PureComponent, Ref } from 'react'
import Children1 from './Children1'

interface ownProps {}

interface ownState {
  startDate: string
  newNumber: number
}

interface withInjectorProps {
  num: number
  noti: number
}

type Props = ownProps & ownState & withInjectorProps

class Parents extends Component<Props, ownState> {
  // private numberRef: Ref<number> = createRef<number>()
  private numberRef = createRef()
  private test = {
    p1: 0,
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      startDate: 'new Date()',
      newNumber: 0,
    }
  }
  componentDidMount(): void {
    // @ts-ignore
    this.numberRef.current = 0
  }
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<ownState>,
    snapshot?: any,
  ): void {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('this.state: ', this.state)
    console.log('this.props: ', this.props)
    console.log('this.props: ', this.test)

    console.log('this.numberRef.current: ', this.numberRef)
    return (
      <div>
        <h1>title: Parents</h1>
        {/* <div>number inside Parents: {this.props.num}</div> */}
        <div>
          <h2>title: Children1</h2>
        </div>
        <div style={{ border: '1px solid black' }}>
          <Children1 test={this.test} ref={this.numberRef} />
        </div>

        <button
          onClick={() => {
            this.setState({
              newNumber: this.state.newNumber + 1,
            })
          }}
        >
          button for rerender
        </button>
        <div>test.p1: {this.test.p1}</div>
      </div>
    )
  }
}

// export default withinjector(Parents)
export default Parents
