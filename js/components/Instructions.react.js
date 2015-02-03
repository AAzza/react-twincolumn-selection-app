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

            <h4>What you should do:</h4>

            <ul>
              <li>After you are comfortable with the Instructions press the
green button on the top right corner. You will be redirected to the page with
the first topic.</li>

              <li>On the top of the page you will see the topic name. The presented tweets
and the produced summary will be about this topic. The topics could be very
specific -- about event like Oscar nominations or more broader --- like human
reactions about particular product in some period of time. </li>

             <li>You will see the list of tweets on the left --- it is a list of all
available tweets about particular event. Empty list on the right --- it is
where you should produce your summary.</li>

            <li>You can move tweets between lists pressing "select"/"unselect"
buttons on the desired tweets.</li>

  <li>Some of the tweets are very similar to each other, some are not very
    relevant, your task is to select 5 of them which you believe represent the
    topic the best.</li>

  <li>Please organize the tweets in the summary in order of increasing
    importantness --- the first tweet represent the essence of the topic best,
    next tweets add more information and details.
    You can use "up"/"down" buttons for this.</li>

  <li>The same "up"/"down" button can be used on the left list to help you
    organize your thoughts. For instance you can move the tweets that clearly
    should not be in the summary to the bottom or alternatively group tweets by
    similarity. It is really up to you.</li>

  <li>You can press "Read instructions" button at any time, don't worry, your
  progress will be saved.</li>

  <li>When you are satisfied with the summary, press the "Submit and next"
  button, your summary will be saved on the server and new topic will be
  loaded.</li>

  <li>Repeat the same procedure for new topic. There will be around three
    topics per person.</li>
</ul>

<p>Thank you for participating!</p>

<p>If you are interested in any results of the research, please contact me at nataliia.uvarova@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Instructions;
