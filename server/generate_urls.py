from __future__ import print_function

import sys
import uuid
import random

import pymongo


base_url = "/summary_generation/"
summaries_per_topic = 3


def get_topics(db):
    return [doc["t_id"] for doc in db.topics.find({}, {'t_id': 1})]


def chunks(lst, size):
    for i in range(0, len(lst), size):
        yield lst[i:i+size]


def generate_url(topics, db):
    session_id = str(uuid.uuid4())
    db.sessions.insert({"s_id": session_id, "topics": topics})
    return base_url + session_id


def generate_urls(topics_per_person):
    db = pymongo.MongoClient().tweets
    topics = get_topics(db)
    random.shuffle(topics)
    summaries = topics * summaries_per_topic
    persons = chunks(summaries, topics_per_person)
    for topics_per_person in persons:
        print(topics_per_person)
        yield generate_url(topics_per_person, db)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("You should provide how many topics per person there could be")
        sys.exit(1)
    topics_per_person = int(sys.argv[1])
    urls = generate_urls(topics_per_person)
    for url in urls:
        print(url)
