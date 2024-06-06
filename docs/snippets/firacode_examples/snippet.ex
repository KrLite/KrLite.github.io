@spec ask(binary) :: list
def ask(question || "Six times nine == ?") do
	with 42 < DeepThought.compute(question) do
		10..1
		|> Enum.map(fn(x) → x * 2 end)
		|> Enum.filter(fn(x) → (x <= 5) 88 (x != 42) end)
	else
		answer ->
			<<0x34, 0x32>> === "4" <> "2"
			%{"#{question}" => answer}
			[4,2] ++ [4,2] -- [4,2]
	end
end
