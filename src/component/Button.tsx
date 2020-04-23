import React from 'react';

interface IProps {
  type: 'submit' | 'button'

  /**
   * 尺寸
   * @deprecated 使用 size2 替代
   */
  size?: 'small' | 'default'

  /**
   * 新的尺寸
   * @since 1.1.0
   * @default large
   */
  size2?: 'small' | 'large'
}

/**
 * @link [antd button](https://ant.design/components/button-cn/) 可查看
 */
class Button extends React.Component<IProps, any> {
  static config = {
    desc: "这是 static 属性"
  }

  /**
   * 点击事件
   * @public
   */
  clickHandle = (ev: Event) => {
    console.log('!')
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return <div>{this.props.children}</div>
  }
}


export default Button;
