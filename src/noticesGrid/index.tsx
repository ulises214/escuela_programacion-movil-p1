import { FC } from 'react';
import { NoticeCard } from '../shared/components/noticeCard';
import { TagVariantColor } from '../shared/components/noticeTag';
const noticies: NoticeItemProps[] = [
  {
    src: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333471354077.jpg',
    children: `Neville, Solskjaer y el enfado de CR7: "Hablará con él y le dirá: 'Mira, si vas a hacer eso, hazlo en el vestuario'"`,
    tagColor: 'blue',
    tagTitle: 'PREMIER LEAGUE',
  },
  {
    src: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333472941377.jpg',
    children:
      'Los nombres propios de la jornada en Europa para Maldini: Uno llama a la puerta de su selección',
    tagColor: 'blue',
    tagTitle: 'FÚTBOL',
  },
  {
    src: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333383598296.jpg',
    children:
      'Resumen en vídeo: el despropósito del Real Madrid ante el Espanyol',
    tagColor: 'blue',
    tagTitle: 'MÉXICO',
  },
  {
    src: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333480106668.jpg',
    children: '¿Por qué Benítez condena a James y salva a Yerry Mina?',
    tagColor: 'blue',
    tagTitle: 'COLOMBIA',
  },
  {
    src: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333453871713.jpg',
    children:
      "¿Carrascal se cobrará la apuesta sexual que le hizo una 'tiktoker'?",
    tagColor: 'blue',
    tagTitle: 'ARGENTINA',
  },
  {
    src: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333409083789.jpg',
    children:
      '¿Qué tiene el equipo que está desafiando al Big Six de la Premier?',
    tagColor: 'green',
    tagTitle: 'PREMIER LEAGUE',
  },
  {
    src: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333392979335.jpg',
    children:
      'Évole pregunta a Iván Redondo cuánto cobra, éste pide que corten su respuesta y lo emiten',
    tagColor: 'purple',
    tagTitle: 'TIRAMILLAS',
  },
  {
    src: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/brandedcontent/1633088465.jpg',
    children: 'Pádel y medicina, las dos pasiones de Marta Ortega',
    tagColor: 'red',
    tagTitle: 'SALUD ES VIDA',
  },
  {
    src: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/10/04/16333401722671.jpg',
    children:
      'Así es el Pickleball, el nuevo deporte de raqueta que pretende desbancar al pádel',
    tagColor: 'black',
    tagTitle: 'BAZAR',
  },
];
export const NoticesGrid: FC = () => {
  return (
    <div className='container'>
      <div className='row'>
        {noticies.map((n) => (
          <NoticesGridItem {...n} key={n.children} />
        ))}
      </div>
    </div>
  );
};
interface NoticeItemProps {
  src: string;
  tagTitle: string;
  tagColor: TagVariantColor;
  children: string;
}
const NoticesGridItem: FC<NoticeItemProps> = ({
  src,
  tagTitle,
  tagColor,
  children,
}) => {
  return (
    <div className='col-12 col-md-6 col-xl-4'>
      <NoticeCard
        commentCount={106}
        size='middle'
        imgSrc={src}
        tagTitle={tagTitle}
        type={tagColor}
      >
        {children}
      </NoticeCard>
    </div>
  );
};
