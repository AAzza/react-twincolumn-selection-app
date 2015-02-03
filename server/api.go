package main

import (
	"github.com/ant0ine/go-json-rest/rest"
	"log"
    "strconv"
	"net/http"
    "gopkg.in/mgo.v2"
    "gopkg.in/mgo.v2/bson"
)

func main() {
    api := Api{}
    api.InitDB()

	handler := rest.ResourceHandler{
	// EnableRelaxedContentType: true,
	}
	err := handler.SetRoutes(
        &rest.Route{"GET", "/api/:session", api.GetSession},
        &rest.Route{"GET", "/api/topic/:topic", api.GetTopic},
        &rest.Route{"POST", "/api/:session/topic/:topic", api.SetSummary},
	)
	if err != nil {
		log.Fatal(err)
	}
	log.Fatal(http.ListenAndServe(":8080", &handler))
}

type Tweet struct {
    Id   string `json:"id"`
    Text string `json:"text"`
}

type TweetList struct {
    TopicId     int `json:"topic_id" bson:"t_id"`
    Topic   string `json:"topic" bson:"t_name"`
    Tweets []*Tweet `json:"tweets"`
}

type Summary struct {
    TopicId     int `json:"topic_id" bson:"t_id"`
    SessionId string `json:"session_id" bson:"s_id"`
    Topic   string `json:"topic" bson:"t_name"`
    Tweets []*Tweet `json:"tweets"`
}

type Session struct {
    SessionId string `json:"session_id" bson:"s_id"`
    Topics []int `json:"topics"`
}

type Api struct {
    DB *mgo.Database
}

func (api *Api) InitDB() {
    session, err := mgo.Dial("localhost")
    if err != nil {
        panic(err)
    }
    api.DB = session.DB("tweets")
}

func (api *Api) GetSession(writer rest.ResponseWriter, req *rest.Request) {
    session := req.PathParam("session")
    var result Session
    api.DB.C("sessions").Find(bson.M{"s_id": session}).One(&result)
    writer.WriteJson(result)
}

func (api *Api) GetTopic(writer rest.ResponseWriter, req *rest.Request) {
	id, err := strconv.Atoi(req.PathParam("topic"))
    if err != nil {
        rest.NotFound(writer, req)
        return
    }
    var result TweetList
    err = api.DB.C("topics").Find(bson.M{"t_id": id}).One(&result)
    if err != nil {
        rest.Error(writer, err.Error(), http.StatusInternalServerError)
        return
    }
    writer.WriteJson(result)
}

func (api *Api) SetSummary(writer rest.ResponseWriter, req *rest.Request) {
    session_id := req.PathParam("session")
    topic_id, err := strconv.Atoi(req.PathParam("topic"))
    if err != nil {
        rest.NotFound(writer, req)
        return
    }
    var summary Summary
    if err := req.DecodeJsonPayload(&summary); err != nil {
        rest.NotFound(writer, req)
        return
    }
    // TODO: check if the topic belongs to the session
    summary.SessionId = session_id
    summary.TopicId = topic_id
    err = api.DB.C("summaries").Insert(summary)
    if err != nil {
        log.Fatal(err)
    }
    writer.WriteHeader(http.StatusOK)
}
