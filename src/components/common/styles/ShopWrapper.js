
import styled from 'styled-components';
import nyYorkColors from '../../constants/colors';
import { dropShadow } from '../mixins';

export const ShopWrapper = styled.div`

    width: 100%;
    position: relative;
    
    div.shopping_wrapper {
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 1200px){
        flex-direction: column;
        align-items: center;
        width: 100%;  
        height: 100%;
        margin-bottom: 100px;
    }
}
    }

    div.heading {
        width: 100%;
        text-align: center;
        padding-top: 20px;
    

        span {
            font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
            font-weight: 800;
            font-size: 3.5rem;
            color:  ${nyYorkColors.beige};

        }

        div.subtitle {
            color: ${nyYorkColors.beige};
            font-size: 1.2rem;
            font-style: italic;
        }
        img {
            margin-top: -30px;
            margin-right: 10px;
            max-width: 40px;
            color: ${nyYorkColors.beige}
        }
    }


        @media screen and (max-width: 415px) {
            flex-direction: column;
        }

        div.shoplink {
            margin: 50px;
            width: 50%;
            border: 15px solid ${nyYorkColors.yellow};
            border-radius: 10px;
            ${dropShadow('4px', '4px', '5px')}

            position: relative;

            @media screen and (max-width: 415px) {
                width: 100%;
                margin: 10px 0;
            }

            img {
                max-width: 100%;
            }

            div.title {
                position: absolute;
                bottom: 50px;
                background-color:  rgba(43,18,16,0.5);
                width: 100%;
                text-align: center;
                padding: 10px;
                font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
                font-weight: 700;
                font-size: 3rem;
                color: ${nyYorkColors.yellow};
                @media screen and (max-width: 415px) {
                    font-size: 2rem;
                }
            }

            transition: transform .4s;
            &:hover {
                transform: scale(1.05); 
            }
            cursor: pointer;
    
        }


`;
