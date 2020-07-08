import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import KEY from '../config/keys';


class App extends React.Component {

    onTermSubmit = term => {
        youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            key: KEY.key
          }
        })

    render(){
        return (
            <div className="ui container">
                <SearchBar />
            </div>
        );
    }
}

export default App;