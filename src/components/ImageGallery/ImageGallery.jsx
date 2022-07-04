import { ImageGalleryItem } from "components/ImageGalleryItem";
import {List} from './ImageGallery.styled';

export const ImageGallery = ({images})=>{
    return (
        <List id='galery'>
            {images.map(({id, webformatURL, largeImageURL}) => <ImageGalleryItem 
            key={id}
            id={id} 
            imageUrl={webformatURL} 
            largeImageUrl={largeImageURL}
            />)}
        </List>
    )
};

