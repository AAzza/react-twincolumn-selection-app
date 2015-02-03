import json
import pymongo
import csv

input_folder = '/home/nata/Study/hig/master/data/raw/sentiment/'


def save_to_mongo(t_id, t_name, tweets):
    db = pymongo.MongoClient().tweets
    to_save = {'t_id': t_id, 't_name': t_name, 'tweets': tweets}
    db.topics.insert(to_save)


def load_names():
    names = {}
    with open('/home/nata/Study/hig/master/data/input/topics.txt') as f:
        reader = csv.reader(f, delimiter=' ')
        for row in reader:
            names[int(row[0])] = row[1]
    return names


def format_tweet(tweet):
    sentiment = {0: '-', 2: '=', 4: '+'}
    return {'id': tweet['id_str'],
            'text': tweet['text'],
            'sent': sentiment[tweet["polarity"]]}


def load_tweets(t_id):
    with open(input_folder + '{}.json'.format(t_id)) as f:
        tweets = json.load(f)
        return [format_tweet(t) for t in tweets['data']]


def load_everything(topic_ids):
    t_names = load_names()
    print(t_names)
    for t_id in topic_ids:
        tweets = load_tweets(t_id)
        save_to_mongo(t_id, t_names[t_id], tweets)

if __name__ == '__main__':
    load_everything([14,29,79,36,24,17,88,99,101,78])
