package main

import (
        "io"
        "encoding/json"
	"log"
	"net/http"
        "time"
        "math/rand"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

type SourceString struct {
    Source string
}
func MainHandler(w http.ResponseWriter, r *http.Request) {
    log.Println("hello")
    w.Header().Set("Content-Type", "application/json")

    var s SourceString
    err := json.NewDecoder(r.Body).Decode(&s)
    if err != nil || len(s.Source) == 0 {
        w.WriteHeader(http.StatusBadRequest)
        io.WriteString(w, `{"err": "Missing source body parameter"}`)
        return
    }
    log.Println("Treating", s.Source)
    var sleepTime = time.Duration(rand.Float32() * 5) * time.Second
    log.Println("Taking", sleepTime, "to solve...")
    time.Sleep(sleepTime)
    w.WriteHeader(http.StatusOK)
    io.WriteString(w, `{"result": ""}`)
}
func main() {
    r := mux.NewRouter()
    r.HandleFunc("/", MainHandler).Methods("POST")
    handler := cors.Default().Handler(r)
    log.Fatal(http.ListenAndServe(":8000", handler))
}
