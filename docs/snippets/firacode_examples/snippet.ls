take = (n, [x, ...xs]:list) -->
  | n <= 0     => []
  | empty list => []
  | otherwise  => [x] ++ take n - 1, xs

last-three = reverse >> take 3 >> reverse