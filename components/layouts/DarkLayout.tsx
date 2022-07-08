import { FC } from 'react';

interface Props {
    children:JSX.Element | JSX.Element[];
}


export const DarkLayout:FC<Props> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0, 0.3)',
            borderRadius: '5px',
            padding: '10px',
            color: 'white'
        }}>
            <h2>Dark Layout</h2>
            <main>
                { children }
            </main>
        </div>
    );
}
