(defmacro defkey [key & body]
  `(def ~(.-name key) ~@body))

(defkey ::args
  (->> (range)
       #_(filterv even?) ;; FIXME
	   (take-while #(<= % 0xff))
	   (remove #{1 2 3 4 5})
	   (into [])))