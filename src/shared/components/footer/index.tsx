import { FC } from 'react';
import styled from 'styled-components';
import { AppColors } from '../../tokens/colors';

export const Footer: FC = () => {
  return (
    <FooterStyles className='mt-4'>
      <div className='container p-5'>
        <div className='border-bottom border-white d-flex justify-content-center'>
          <h5>Otras webs de Unidad Editorial</h5>
        </div>
        <div className='row'>
          {[
            {
              title: 'Marca',
              links: [
                'App Marca',
                'Clasificación LaLiga',
                'Calendario LaLiga',
                'Hemeroteca Marca',
                'Marca eSports',
                'Marca en Orbyt',
              ],
            },

            {
              title: 'Ocio y Moda',
              links: [
                'Tiramillas',
                'Moda - Telva',
                'BUHO Magazine',
                'Traductor',
                'Programación TV',
                'Marca Entradas',
                'Mi bebé y yo',
              ],
            },
            {
              title: 'Unidad Editorial',
              links: [
                'El Mundo',
                'Expansión',
                'CuídatePlus',
                'Diario Médico',
                'Correo Farmacéutico',
                'Suscripción Marca',
              ],
            },
            {
              title: 'Formación y Empleo',
              links: [
                'Escuela Unidad Editorial',
                'Unidad Editorial',
                'Expansión y Empleo',
              ],
            },
          ].map((e, i) => (
            <div
              key={i}
              className='col-12 col-md-6 col-xl-3 p-3 d-flex flex-column'
            >
              <h6 className='pb-2'>{e.title}</h6>
              {e.links.map((l, i) => (
                <a key={i} href='#'>
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </FooterStyles>
  );
};
const FooterStyles = styled.footer`
  background-color: ${AppColors.black};

  * {
    color: ${AppColors.white} !important;
  }

  a {
    text-decoration: none;
    font-size: 0.8rem;

    :hover {
      text-decoration: underline;
    }
  }
`;
