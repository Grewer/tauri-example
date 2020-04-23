## 接口的创建


可以使用 type  和 interface 来创建类型

### type 特有的优点:

1. 声明基本类型别名，联合类型，元组等类型
```
    type S = string;
    
    type IFoo = IBar | string;
```
2. 可使用 typeof 获取实例的类型赋值
```
    const a:number = 1;
    const IA = typeof a;
    // IA 被 ts 识别为 number
```
### interface 特有的优点

interface 能够声明合并
```
interface IFoo {  
  name:string  
}  
interface IFoo {  
  age:number  
}
// 等于
type IFoo = {
    name:string 
    age:number
}
```
## 关于对象

### 获取对象
以IFoo作为例子

```
interface IFoo {  
  name:string  
  age:number  
  gender:string  
}  
```

#### 获取接口的单个属性的类型
```
type IBar = IFoo["name"]
// IBar = string
```

#### 获取接口中一或多个属性,并将其合并为一个接口

```
type IBar = Pick<IFoo, "name">
// IBar = {name: string}
```

```
type IBar = Pick<IFoo, "name" | "age">
// IBar = {name: string, age: number}
```

#### 忽略接口中的某些属性,将剩余属性作为一个接口

```
type IBar = Omit<IFoo, "name">
// IBar = {age: number, gender: string}
```

#### 获取接口中所有键

```
type IBar = keyof IFoo
// IBar = "name" | "age" | "gender"
```

#### 获取接口中所有键对应的值

```
type IBar = IFoo[keyof IFoo]
// IBar = string | number
```


### 创建对象

#### 创建多个重复值的对象

```
type IBar = Record<"name" | "age", string>
// IBar = {name: string, age: string}
```


### 使用例子

```
interface IFoo {  
  name: string  
  age: string  
  gender: string  
  
  getSkill(): void  
  
  setSkill: (skill: string[]) => void  
}
// 生成一个新类型,将 age 和 gender 的类型修改为 number,其他的类型不变
// 使用上述知识 声明一个新的高级类型IBar:
type IBar<K extends string,T = number> = (Record<K, T> & Omit<IFoo, K>)

type IBaz = IBar<"age" | "gender">
// 生成新的类型 IBaz ,符合上述描述
// 并且使用 Ibar 可将 age 和 gender (或其他)更改为任意其他类型 如:
type IBax = IBar<"age" | "gender" | "name', string[]>
```


## 关于函数

### 函数类型创建

#### 创建函数类型的两种方式

```
interface IFoo {  
  name: string  
  age: number  
  gender: string  
  
  getSkill(): void  // type 不支持此种声明
  
  setSkill: (skill: string[]) => void  
}
```

### 函数类型中参数的获取

以此为例子:
```
type IFoo = (name: string, age: number) => { name: string, age: number, gender: string }
```

#### 获取函数的参数类型:
```
type IBar = Parameters<IFoo>  
  
// IBar = [string, number]
```

#### 获取函数的返回类型:

```
type IBar = ReturnType<IFoo>  
  
// IBar = {name: string, age: number, gender: string}
```
