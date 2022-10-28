import React from "react";
import images_api from "./api/images_api";
import ImageList from "./components/ImageList";
import PostBar from "./components/PostBar";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (term) => {
    const response = await images_api.get("/v1/search", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.photos });
    console.log(response.data);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <PostBar />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
