func main() {
	ch := make(chan int)
	ch <- 1.0e10 // Magic number
	x, ok := <-ch
	ok = true
	defer fmt.Println(`Exiting now`)
	go Println(len("Hello world!"))
	return
}