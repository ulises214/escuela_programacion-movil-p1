import { FC } from 'react';
import { MarcaStoriesStyles } from './styles';
export const MarcaStories: FC = () => {
  return (
    <MarcaStoriesStyles className='d-flex flex-column p-3'>
      <div className='title'>
        <span className='marca'>MARCA</span> STORIES
      </div>
      <div className='d-flex flex-row justify-content-evenly overflow-hidden'>
        <StoryItem img='https://static-ue.pendular.io/uploads/plugin_slot/avatar/42563/6d3c9369-f5fb-41f0-ae0b-1ae87fe7e045.jpg'>
          😡 Racismo
        </StoryItem>
        <StoryItem img='https://static-ue.pendular.io/uploads/plugin_slot/avatar/42562/mini_magick20211004-6833-1vxwhc7.jpg'>
          😖 PSG
        </StoryItem>
        <StoryItem img='https://static-ue.pendular.io/uploads/plugin_slot/avatar/42548/28e83dc8-661a-4733-b87e-fce2d4611ef7.jpg'>
          😱 Casi
        </StoryItem>
        <StoryItem img='https://static-ue.pendular.io/uploads/plugin_slot/avatar/42502/mini_magick20211004-6833-1d21six.jpg'>
          😒 Solo
        </StoryItem>
        <StoryItem img='https://static-ue.pendular.io/uploads/plugin_slot/avatar/41972/fcd0aaf9-1f2e-4359-b9a4-b0fe942d8acb.jpg'>
          🔁 Lista
        </StoryItem>
        <StoryItem img='https://static-ue.pendular.io/uploads/plugin_slot/avatar/41358/d45f6561-cf1e-40a3-b541-29a9815cdf87.jpg'>
          Llamada 📞
        </StoryItem>
      </div>
    </MarcaStoriesStyles>
  );
};
const StoryItem: FC<{ img: string }> = ({ img, children }) => {
  return (
    <div className='d-flex flex-column align-items-center mx-2'>
      <img src={img} className='rounded-circle my-2' width='80' />
      {children}
    </div>
  );
};
