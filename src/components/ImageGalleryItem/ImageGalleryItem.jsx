import {Item, Img} from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({tag, imageUrl, largeImageUrl, onImgClick }) => {

    return (
        <Item >
            <Img onClick={()=>{onImgClick(largeImageUrl, tag)}} src={imageUrl} alt={tag} />
        </Item>
    );
};