import React from 'react';

interface IProps {
  /**
   * 用户名
   */
  name: string
  /**
   * 年龄
   */
  age?: number
  /**
   * 工作
   * @default doctor
   */
  work?: string
  /**
   * 修改名字
   * @param name
   */
  changeName?: (name: string) => void
}

/**
 * Person 组件
 * @version package.json
 * @visibleName Person 组件名称的显示
 */
function Person(props: IProps) {
  return <div>Person</div>
}

export default Person;
