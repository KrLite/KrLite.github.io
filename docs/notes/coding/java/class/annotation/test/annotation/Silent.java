package test.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

// #region code
@Target({    // 可以用数组标注多个类型属性。
	ElementType.FIELD,     // 标注这个注解类可以用于字段。
	ElementType.METHOD,    // 标注这个注解类可以用于方法。
})
@Retention(RetentionPolicy.RUNTIME)    // 标注这个注解类在运行时可以被反射。
public @interface Silent {
	// 这个注解类没有实际内容，只是用于标注。
}
// #endregion code
