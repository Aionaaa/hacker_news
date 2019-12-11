import React, {Component} from 'react';
import StoryList from '../components/StoryList';
import Story from '../components/Story';

class StoryBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      storiesUrls: [],
      stories: []
    }

    }

    handleStorySelected(index){
      const selectedStory = this.state.titles[index];
      this.setState({currentStory: selectedStory})
    }

    componentDidMount(){
      this.getStoriesIds()
      // this.loadStories() //not sure if correct
  }

  getStoriesIds(){
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then(res => res.json())
    .then(storiesIds => {
      return storiesIds.map((id) => {
        return `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      })
    })
    .then(storiesUrls => this.setState({storiesUrls: storiesUrls}))
  }

  // loadStories(url){
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(storiesList => this.setState({stories: storiesList.feed.entry}))
  //   .catch(err => console.error);
  // }

  render(){
    return(
      null
      // <div>
        // <StoryList
        // titles={this.props.titles}/>
        // <Story
        // stories={this.props.stories}/>
      // </div>
    )
  }
}

export default StoryBox;
