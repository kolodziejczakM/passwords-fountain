import { h } from 'preact';
import { setPragma, glob } from 'goober';

setPragma(h);

if (!document.getElementById('_goober')) {
    glob`
        html,
        body {
        background: #fff;
        }
        
        * {
            box-sizing: border-box;
        }
  `;
}
