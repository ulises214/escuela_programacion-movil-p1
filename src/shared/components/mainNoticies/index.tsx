import { FC } from 'react';
import VideoPlay from '../../../img/ICONO-PLAY-VIDEO-HOVER.png';
import VideoCover from '../../../img/main_video.jpg';
import { MarcaStories } from '../marcaStories';
import { NoticeCard } from '../noticeCard';
import { NoticeTag } from '../noticeTag';
import { NumComments } from '../numComments';

export const MainNoticies: FC = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-8'>
          <MainVideo />
          <MarcaStories />
        </div>
        <div className='col-12 col-lg-4'>
          <div className='row'>
            {[
              <NoticeCard
                size='short'
                type='blue'
                tagTitle='Serie A'
                imgSrc='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333412211896.jpg'
                commentCount={62}
              >
                ¿Qué me has llamado? ¿Mono? Ven aquí y dímelo a la cara
              </NoticeCard>,
              <NoticeCard
                size='short'
                tagTitle='MOTOS'
                type='gold'
                imgSrc='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333296339782.jpg'
                commentCount={62}
              >
                No más muertes: una de las sanciones más duras de la
                historia
              </NoticeCard>,
              <NoticeCard
                size='short'
                tagTitle='RealMadrid'
                type='blue'
                imgSrc='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333357585114.jpg'
                commentCount={62}
              >
                El mal de siempre
              </NoticeCard>,
              <NoticeCard
                size='short'
                tagTitle='Opinión'
                type='blue'
                imgSrc='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333362170979.jpg'
                commentCount={62}
              >
                "Nervios en... ¿octubre?"
              </NoticeCard>,
              <NoticeCard
                size='short'
                tagTitle='RealMadrid'
                type='blue'
                imgSrc='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333357585114.jpg'
                commentCount={62}
              >
                El mal de siempre
              </NoticeCard>,
            ].map((e, i) => (
              <div key={i} className='col-6 col-lg-12'>
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const MainVideo: FC = () => {
  return (
    <div className='position-relative d-flex flex-column align-items-end border-bottom border-dark pb-2 mb-2'>
      <div className='w-100'>
        <NoticeTag color='blue'>Francia</NoticeTag>
        <img className='w-100' src={VideoCover} />
        <img
          width='120'
          className='position-absolute m-auto'
          style={{
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            margin: 'auto',
          }}
          src={VideoPlay}
        />
      </div>
      <NumComments>96</NumComments>
    </div>
  );
};
