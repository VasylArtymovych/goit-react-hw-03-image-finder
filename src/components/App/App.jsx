import React, {Component} from "react";
import { Box } from "components/Box/Box";
import { Searchbar } from "components/Searchbar/";
import { ImageGallery } from "components/ImageGallery";
import { Loader } from "components/Loader";
import { Button } from "components/Button";
import { Modal } from "components/Modal";
import { Title } from "components/Title";

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
    isModalShown: false,
    largeImageUrl: '',
    tag: '',
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

  loadMore = ()=>{
    this.setState((state) => ({
      page: state.page + 1
    }));
  }

  toggleModal = () => {
    this.setState(s => ({isModalShown: !s.isModalShown,}));
  }

  handleImgClick = (largeImageUrl, tag) => {
    this.setState({largeImageUrl, tag});
    this.toggleModal();
  }

  scrollPage = () => {}

  render() {
    const {images, status, name, totalImages, page, isModalShown, largeImageUrl, tag} = this.state;
    const countPages = Math.ceil(totalImages/12);
  
    return (
      <Box> 
        <Searchbar onSubmit={this.handleSubmit}/>
        {status === 'idle' && <Title>Enter a name to search: </Title>}
        {status === 'pending' && <Loader />}
        {status === 'resolve' && <ImageGallery 
        images={images} 
        onImgClick={this.handleImgClick}
        />}
        {status === 'rejected' && <Title>Didn't find images with name: {name}</Title>}
        {status === 'resolve' && page < countPages && <Button 
        onScroll={this.scrollPage} 
        onClick={this.loadMore}
        />}
        {isModalShown && largeImageUrl && <Modal 
        close={this.toggleModal}
        >
          <img src={largeImageUrl} alt={tag}/>
        </Modal>}
      </Box>
    )
  }
};

export default App;

