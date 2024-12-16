---
title: 注解
author: KrLite
createTime: 2024/06/07 17:06:54
permalink: /notes/coding/java/annotation/8a7hjjvl/
tags:
  - JDK 5.0
---

注解[^annotation]是 Java 中的一种特殊接口。类、方法、变量、参数和包等都可以被注解，并可以通过反射获取注解内容。

[^annotation]: Annotation，又称标注。

## 一、定义

如下是对注解类的简单解释：

```java
import java.lang.annotation.*;

@Documented                         // 使接口在 Javadoc 中显示；若无，则不显示
@Inherited                          // 允许子类继承父类的注解；若无，则不允许
@Target(ElementType.TYPE)           // 类型属性；若无，则可以用于任何地方
@Retention(RetentionPolicy.RUNTIME) // 策略属性；若无，则默认为 RetentionPolicy.CLASS

public @interface // 这个类被 @interface 定义，即实现了 java.lang.annotation.Annotation 接口
AnnotationClass {
		// 很多注解类并不需要具体的内容，只需要作为一个标记即可
}
```

### `@Documented`

`@Documented` 注解用于指定注解类是否被 Javadoc 显示。若注解类没有被 `@Documented` 注解，则在 Javadoc 中不会显示该注解类。

### `@Inherited`

`@Inherited` 注解用于指定注解类是否允许子类继承父类的注解。若注解类没有被 `@Inherited` 注解，则子类不会继承父类的注解。

### `@Target`

`@Target` 注解用于指定注解类的类型属性。若注解类没有被 `@Target` 注解，则可以用于任何地方。

括号中的内容可以为 [`ElementType.class`](annotation/ElementType.class.md) 中的枚举常量。

### `@Retention`

`@Retention` 注解用于指定注解类的策略属性。若注解类没有被 `@Retention` 注解，则默认为 `RetentionPolicy.CLASS` 。

括号中的内容可以为 [`RetentionPolicy.class`](annotation/RetentionPolicy.class.md) 中的枚举常量。

## 二、注解的使用

### 2.1&emsp;编译检查

注解可以用于编译检查，如下是一个简单的例子：

```java
public class MyClass {
	@Deprecated                    // 标注这个方法被弃用了，即集成开发环境应在调用此方法时给出警告，但不影响实际运行
	@SuppressWarnings("unchecked") // 隐藏"unchecked"错误
	public static void method() {  // 假设这个方法会报"unchecked"错误，那么这个错误会被隐藏
		foo.bar1();
		foo.bar2();
    }
}
```

### 2.2&emsp;在反射中使用注解

注解可以用于反射，如下是[此示例](annotation/test/README.md)的简单解释：

#### 定义注解

在 `annotation` 包中定义了三个注解类： [`FieldInfo.java`](annotation/test/annotation/FieldInfo.java.md) 、 [`MethodInfo.java`](annotation/test/annotation/MethodInfo.java.md) 和 [`Silent.java`](annotation/test/annotation/Silent.java.md) 。

其中 [`FieldInfo.java`](annotation/test/annotation/FieldInfo.java.md) 用于标注字段，解释如下：

```java:no-line-numbers
<!-- @use: annotation/test/annotation/FieldInfo.java#code -->
```

其中 [`MethodInfo.java`](annotation/test/annotation/MethodInfo.java.md) 用于标注方法，其构造方式和 [`FieldInfo.java`](annotation/test/annotation/FieldInfo.java.md) 一样，不作解释。

其中 [`Silent.java`](annotation/test/annotation/Silent.java.md) 较为特殊，既可以标注方法，也可以标注字段。解释如下：

```java:no-line-numbers
<!-- @use: annotation/test/annotation/Silent.java#code -->
```

要在字段和方法前使用注解，只需要在字段或方法前引用注解即可，如下：

```java
@Silent
public void method() {
	@Silent private String str;
}
```

只要是可以用于方法或字段的注解，也都可以写在它们的类型之前：

```java
public @Silent String str;
private final @Silent int someValue = 1;
public @Silent void method() {
}
// ...
```

#### 使用注解

接下来，让我们来分析 [`Test.java`](annotation/test/Test.java.md) 中的代码：

首先，创建一个 `TestObj` 类，并在其中写入一些方法和注解。

```java
<!-- @use: annotation/test/Test.java#TestObj -->
```

接下来，我们可以在 `main` 方法中获取 `TestObj` 中的方法和字段，然后进行反射。

```java
<!-- @use: annotation/test/Test.java#main -->
```

[`流式处理 ↗`](../syntax/stream.md) [`Lambda 表达式 ↗`](../syntax/lambda.md)

在 `iteratorAnnotations` 方法中，我们对方法或字段进行遍历，然后获取其注解，最后进行解析。

对方法进行遍历的代码如下：

```java
<!-- @use: annotation/test/Test.java#iteratorAnnotations-Method -->
```

可见，使用反射获取注解中的字段值还是比较简单的。下面是对字段进行遍历的代码：

```java
<!-- @use: annotation/test/Test.java#iteratorAnnotations-Field -->
```

你可以动手运行一下，看看效果。正确的输出如下：

@[code](annotation/test/output.txt)
