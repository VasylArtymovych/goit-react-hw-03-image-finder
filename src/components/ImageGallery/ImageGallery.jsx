import { ImageGalleryItem } from "components/ImageGalleryItem";
import {List} from './ImageGallery.styled';

export const ImageGallery = ({images, onImgClick})=>{
    return (
        <List id='galery'>
            {images.map(({id, tags, webformatURL, largeImageURL}) => (
                <ImageGalleryItem 
                key={id}
                tag={tags} 
                imageUrl={webformatURL} 
                largeImageUrl={largeImageURL}
                onImgClick={onImgClick}
                />
                )
            )}
        </List>
    )
};

