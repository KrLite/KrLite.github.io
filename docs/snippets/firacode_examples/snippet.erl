if L =/= [] ->
	sum(L) / count(L);
true ->
	error
end.

qsort1([]) ->
	[];
qsort1([H | T]) ->
	qsort1([X || X <- T, X < H]) ++ [H] ++ qsort1([X || X <- T, X >= H])