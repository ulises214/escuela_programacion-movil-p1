import { FC } from 'react';
import { NoticeTag, TagVariantColor } from '../noticeTag';
import { NumComments } from '../numComments';

export const NoticeCard: FC<{
  type: TagVariantColor;
  size: 'short' | 'middle';
  tagTitle: string;
  imgSrc: string;
  commentCount: number;
}> = ({ type, tagTitle, imgSrc, children, commentCount, size }) => {
  return (
    <div
      className={`d-flex flex-column align-items-end border-bottom border-dark pb-2 mb-2`}
    >
      <div
        className={`w-100 position-relative d-flex flex-${
          size == 'short' ? 'row' : 'column'
        } align-items-start justify-content-start`}
      >
        <NoticeTag color={type}>{tagTitle}</NoticeTag>
        <img
          width={size == 'short' ? `150` : '400'}
          className={`w-${size == 'short' ? '50' : '100'}`}
          src={imgSrc}
        />
        <strong
          className={`p-2 d-flex flex-wrap w-${
            size == 'short' ? '50' : '100'
          }`}
        >
          {children}
        </strong>
      </div>
      <NumComments>{commentCount}</NumComments>
    </div>
  );
};
