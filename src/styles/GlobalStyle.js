import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

:root{

   
    --primary-color: #333333;
    --primary-color2: #555555;
    --primary-color3: #757575;
    --color-green: #4CAF50;
    --color-grey: #aaa;
    --color-accent: #F56692;
    --color-delete: #FF0000;
    --color-indicator: #F44336;
}
body{
    font-family: 'Nunito Sans', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    overflow: hidden; 
    color: rgba(34,34,96,.6);
}
h1, h2, h3, h4, h5, h6{
    color: var(--primary-color);
}
    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;