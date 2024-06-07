package test;

import test.annotation.FieldInfo;
import test.annotation.MethodInfo;
import test.annotation.Silent;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.Objects;

// #region TestObj
class TestObj {
	// 为 method1 添加了 @MethodInfo 注解，其中id为"method1"，以此类推。
	@MethodInfo(id = "method1", author = "KrLite", date = "2018-01-01", comment = "Yet another method")
	public void method1() {
		System.out.println("Invoked!");
	}

	// 为 method2 添加了 @MethodInfo 注解，其中id为"method2"，以此类推，但这个注解中没有填写非必要的 comment 字段，故 comment 为空。
	@MethodInfo(id = "method2", name = "Foo", date = "2077-07-07")
	private void method2() {
		System.out.println("Invoked!");
	}

	// 为 method3 添加了 @Silent 注解，它不应该被调用。
	public @Silent String method3() {
		return "Silent!";
	}

	// 为 method4 添加了 @MethodInfo 注解，但同时也添加了 @Silent 注解，所以这个方法不应该在反射时被调用。
	@Silent
	@MethodInfo(id = "method4", date = "null")
	public void method4() {
		System.out.println("Should not be invoked.");
	}

	// 为 field1 添加了 @FieldInfo 注解，其中仅填写了必要的 id 字段，其值为"field1"。
	@FieldInfo(id = "field1")
	public String field1;

	// 为 field2 添加了 @FieldInfo 注解。
	@FieldInfo(id = "field2", name = "A Private Final Field")
	private final String field2 = "This is a string.";

	// 为 field3 添加了 @FieldInfo 注解，但同时也添加了 @Silent 注解，所以这个字段不应该在反射时被访问。
	public final @Silent String field3 = "A special field that should not be printed.";
}
// #endregion TestObj

public class Test {
	// #region main
	public static void main(String[] args) {
		TestObj testObj = new TestObj();
		Class<?> testObjClass = testObj.getClass();

		// 获取所有（包括私有）方法。
		Method[] methods = testObjClass.getDeclaredMethods();
		// 遍历方法，并对其调用 iteratorAnnotations(Method method) 方法。
		// 如果你对这一行代码感到困惑，可以去看看我的流式处理和 Lambda 表达式学习笔记。
		Arrays.stream(methods).forEach(Test::iteratorAnnotations);

		// 获取所有（包括私有）字段。
		Field[] fields = testObjClass.getDeclaredFields();
		// 遍历字段，并对其调用 iteratorAnnotations(Field field) 方法。
		Arrays.stream(fields).forEach(Test::iteratorAnnotations);
	}
	// #endregion main

	// #region iteratorAnnotations-Method
	public static void iteratorAnnotations(Method method) {
		if (method.isAnnotationPresent(Silent.class) /* 判断方法是否被 @Silent 注解，如果是则为真。 */ ) {
			// 如果方法前或方法的返回类型被 @Silent 注解，则不进行解析。
			System.out.println("::silent method::\n");
			return;
		}

		if (method.isAnnotationPresent(MethodInfo.class) /* 判断方法前是否被 @MethodInfo 注解，如果是则为真。 */ ) {
			// 获取 @MethodInfo 注解。
			MethodInfo methodInfo = method.getAnnotation(MethodInfo.class);
			// 打印注解中的 id 和 name 属性值。
			printTitle(methodInfo.id(), methodInfo.name());

			try {
				// 尝试访问私有方法。
				method.setAccessible(true);
				// 调用方法。
				method.invoke(method.getDeclaringClass().getDeclaredConstructor().newInstance());
			} catch (Exception e) {
				throw new RuntimeException(e);
			}

			// 打印注解中的 author 、 date 和 comment 属性值。
			System.out.println("<author>: " + methodInfo.author());
			System.out.println("<date>: " + methodInfo.date());
			System.out.println("<revision>: " + methodInfo.revision());

			if (!Objects.equals(methodInfo.comment(), "")) {
				System.out.println("<comment>: " + methodInfo.comment());
			}

			System.out.println();
		}
	}
	// #endregion iteratorAnnotations-Method

	// #region iteratorAnnotations-Field
	public static void iteratorAnnotations(Field field) {
		if (field.isAnnotationPresent(Silent.class) /* 判断字段是否被 @Silent 注解，如果是则为真。 */ ) {
			// 如果字段前或字段类型被 @Silent 注解，则不进行解析。
			System.out.println("::silent field::\n");
			return;
		}

		if (field.isAnnotationPresent(FieldInfo.class) /* 判断字段前是否被 @FieldInfo 注解，如果是则为真。 */ ) {
			// 获取FieldInfo注解。
			FieldInfo fieldInfo = field.getAnnotation(FieldInfo.class);
			// 打印。
			printTitle(fieldInfo.id(), fieldInfo.name());

			try {
				// 同样地，先尝试访问私有字段。
				field.setAccessible(true);
				// 然后打印字段的值（空即为"null"）。
				System.out.println(field.get(field.getDeclaringClass().getDeclaredConstructor().newInstance()));
			} catch (Exception e) {
				throw new RuntimeException(e);
			}

			System.out.println();
		}
	}
	// #endregion iteratorAnnotations-Field

	private static void printTitle(String id, String name) {
		System.out.println("<" + id + ">" + (Objects.equals(name, "") ? "" : ": " + name));
	}
}
