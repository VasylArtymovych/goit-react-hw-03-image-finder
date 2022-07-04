import React, {Component} from "react";
import { Box } from "components/Box/Box";
import { Searchbar } from "components/Searchbar/";
import { ImageGallery } from "components/ImageGallery";
import { Loader } from "components/Loader";
import { Button } from "components/Button";
// import { ToastContainer, toast } from 'react-toastify';


const BASE_URL = 'https://pixabay.com/api/?';
const params = new URLSearchParams({
  key: '27181165-b46802ad165a0f6cfa045aac7',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

class App extends Component {
  state = {
    name: '',
    page: 1,
    totalImages: 0,
    images: [],
    status: 'idle',
  }

  async componentDidUpdate(_, prevState){
    const {name, page} = this.state;

    if(name !== prevState.name || page !== prevState.page){
      try {
        this.setState({status: 'pending'});

        const response = await fetch(BASE_URL + `q=${name}&page=${page}&` + params);
        const data = await response.json();
        const images = data.hits;
        const totalImages = data.totalHits;
        
        if(images.length === 0){
          this.setState({ status: 'rejected'});
        }else {
          this.setState((state) => ({images: [...state.images, ...images],  totalImages, status: 'resolve'}));
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  handleSubmit = async (name) => {
    this.setState({name, page: 1, images: []});
  }
  incrementPage = ()=>{
    this.setState((state) => ({
      page: state.page + 1
    }));
  }
  scrollPage = () => {
  
  }

  render() {
    const {images, status, name, totalImages, page} = this.state;
    const countPages = Math.ceil(totalImages/12);
  
    return (
      <Box> 
        <Searchbar onSubmit={this.handleSubmit}/>
        {status === 'idle' && <h2>enter name img</h2>}
        {status === 'pending' && <Loader />}
        {status === 'resolve' && <ImageGallery images={images}/>}
        {status === 'rejected' && <h2>Didn't find images with name: {name}</h2>}
        {status === 'resolve' && page < countPages && <Button onScroll={this.scrollPage} onClick={this.incrementPage}/>}
      </Box>
    )
  }
};

export default App;

