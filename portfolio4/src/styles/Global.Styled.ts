import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts"
export const GlobalStyle=createGlobalStyle`
   *,
   *::after,
   *::before {
       box-sizing: border-box;
       padding: 0;
       margin: 0;
   }
   html, body {
       overflow-x: clip;
       width: 100%;
   }
    
    body{
       margin: 0;
       font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
        color:${theme.colors.font};
        line-height:1.2;
   }
    
    a{
        text-decoration: none;
        color:${theme.colors.font};
    }
    
    button{
        border: none;
        background-color: unset;
        
    }
    
    ul{
        list-style: none;
    }
    
    section{
        padding: 0 150px;
        
        @media ${theme.media.tablet}{

            padding: 0 75px;
        }
        
        @media ${theme.media.mobile}{
            
            padding: 0 15px;
        }
       
    }
    
    section:nth-of-type(odd){
        background-color: ${theme.colors.primaryBg};
    } 
   
   section:nth-of-type(even){
        background-color: ${theme.colors.secondaryBg};
    }
    
   header{
       padding: 0 150px;

       @media ${theme.media.tablet}{

           padding: 0 75px;
       }
       @media ${theme.media.mobile}{

           padding: 0 15px;
       }

   }
   
`