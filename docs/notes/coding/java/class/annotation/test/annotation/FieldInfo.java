package test.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

// #region code
@Target(ElementType.FIELD)             // 标注这个注解类只能用于字段。
@Retention(RetentionPolicy.RUNTIME)    // 标注这个注解类在运行时可以被反射。
public @interface FieldInfo {
	String id();                 // 必填字段。
	String name() default "";    // 非必填字段，默认值为空字符串。
}
// #endregion code
