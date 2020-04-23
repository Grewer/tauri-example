import * as React from 'react'
import { Button } from 'antd'

// interface IFoo {
//   name: string
//   age: string
//   gender: string
//
//   getSkill(): void
//
//   setSkill: (skill: string[]) => void
// }
//
//
// type IBar<K extends string,T = string> = (Record<K, T> & Omit<IFoo, K>)
//
// type a = IBar<'age' | 'gender'>

// {age: number, gender: number, name: string, getSkill(): void, setSkill: (skill: string[]) => void}


type IFoo = (name: string, age: number) => { name: string, age: number, gender: string }

type IBar = ReturnType<IFoo>

// IBar = {name: string, age: number, gender: string}

const Test: React.FC<{ handle: () => void }> = React.memo(function (
  props
) {
  console.log('render Test')
  return <Button onClick={props.handle}>click</Button>
})


class App extends React.PureComponent<any, { count: number }> {
  state = {
    count: 1
  }

  alert = () => {
    alert(1)
  }

  test = () => {
    return () => {
      alert(2)
    }
  }

  public render() {
    console.log('render App')
    return (<div>App
      <Test handle={this.test()}/>
      <div>{this.state.count}</div>
      <Button onClick={() => this.setState(state => ({
        count: state.count + 1
      }))}>add count</Button>
    </div>)
  }
}

export default App
