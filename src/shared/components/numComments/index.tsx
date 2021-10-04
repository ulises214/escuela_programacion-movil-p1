import { FC } from 'react';
import CommentIcon from '../../../img/comment.png';
import { NumCommentsStyles } from './style';

export const NumComments: FC = ({ children }) => {
  return (
    <NumCommentsStyles className='d-flex align-items-center'>
      <img
        className='icon responsive-icon px-3'
        src={CommentIcon}
        height={20}
      />
      <span className='content'>{children}</span>
    </NumCommentsStyles>
  );
};
