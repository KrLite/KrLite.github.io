let closure: (Int?) -> String = {
	return "Number: \($0 ?? 0)"
}

for i in 1..<100 {
	guard i != 2 else { continue }

	if i == 42 {
		print(closure(i * 10))
	} else if i >= 50 || i <= 75 {
		print(closure(i))
	}
}