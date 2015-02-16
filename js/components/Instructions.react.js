var React = require('react');
var Header = require('./Header.react');

var Instructions = React.createClass({
  render: function() {
    return (
      <div className="ink-grid">
        <Header page='instructions'/>
        <hr />
        <div className="column-group gutters">
          <div className="all-100 center">
            <p>
              I am Nataliia Uvarova, Master student at Gjovik University
              College, writing Master thesis in the field of Information
              Retrieval.
            </p>

            <p>
              The topic of the reseach is Summarization of Microblog data. You
              are herebly asked to help the research by producing a golden
              human-generated summaries for the given topics.  It should take
              from 30 minutes to 1 hour of work, depending on your speed and
              what topics you will get. Each person produces summaries for
              three topic from nine available. The topics are assigned
              randomly.
            </p>

            <p>
              The summary of the topic --- is a subset of all tweets posted on
              the topic. In an ideal situation, the summary covers every aspect
              of the topic, as presented in the complete set of tweets.  Each
              tweet included in the summary should therefore add some piece of
              information about the topic that is not already covered in the
              summary. The final summary may consist of a few core tweets, that
              cover the generics of the topic, and some that adds some relevant
              detail to this core summary.
            </p>

            <h4>What you should do:</h4>

            <ul>
              <li>
                After you have read these Instructions and know what is expected
                from you, press the green button on the top right corner. You will
                then be redirected to the page with the first topic.
              </li>

              <li>On the top of the page you will see the topic name. The
              presented tweets and the produced summary will be about this
              topic.There are different types of topics. The topic can be quite
              specific -- for instance about event like Oscar nominations or be a
              broad one --- like opinions about fast-food chains in February 2011.
              </li>

             <li>You will see the list of tweets on the left --- it is a list of all
available tweets about particular event. The empty list on the right --- it is
where you should produce your summary.</li>

            <li>You can move tweets between lists pressing "select"/"unselect"
buttons on the desired tweets.</li>

  <li>There are quite a few tweets available, and your task is to select a
    group of them which <em>together</em> form a representative summary of all the
    tweets posted on this topic. There are no right or wrong answers --- select
    tweets that you believe represent the topic in the best way.</li>

  <li>The length of the summary should be around 5 to 10 tweets. Please try not
  to make it too short or to long, except if you really fill that you cannot
  add/delete tweets.</li>

  <li>Please organize the tweets in the summary in order of increasing
    importantness --- the first tweet represent the essence of the topic best,
    next tweets add more information and details.
    You can use "up"/"down" buttons for this.</li>

  <li>To simplify work with long list of tweets there is a "hide" button on each unseleted tweet.
    You can hide tweets that you sure, should not be present in the summary.
    If you accidentaly hide tweet, use "Show hidden items" button to show all hidden
    tweets. Then you can restore any of them.
  </li>

  <li>You can press "Read instructions" button at any time, dont worry, your
  progress will be saved.</li>

  <li>When you are satisfied with the summary, press the "Submit and next"
  button, your summary will be saved on the server and new topic will be
  presented.</li>

  <li>Repeat the same procedure for a new topic. There will be approximately three
    topics.</li>
</ul>

<p>Thank you for participating!</p>

<p>If you are interested in knowing more about the results from this research project, please contact me at nataliia.uvarova@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Instructions;
