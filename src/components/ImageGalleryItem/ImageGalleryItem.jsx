import {Item, Img} from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({id, imageUrl, largeImageUrl }) => {

    return (
        <Item >
            <Img onClick={()=>{console.log('Img cLick');}} src={imageUrl} alt="images" />
        </Item>
    );
};